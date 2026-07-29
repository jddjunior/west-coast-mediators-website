import { NextRequest, NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

// Map attorney IDs to their respective PHP WebCalendar URLs
const CALENDAR_URLS: Record<string, string> = {
  stephen: 'https://www.westcoastmediators.com/webcalendar_joe/month.php',
  kevin:   'https://www.westcoastmediators.com/webcalendar_joe/month.php', // Kevin's own instance when ready
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const { searchParams } = request.nextUrl
  const year  = searchParams.get('year')  || new Date().getFullYear().toString()
  const month = searchParams.get('month') || String(new Date().getMonth() + 1).padStart(2, '0')

  const baseUrl = CALENDAR_URLS[id]
  if (!baseUrl) {
    return NextResponse.json({ error: 'Unknown attorney id' }, { status: 404 })
  }

  const url = `${baseUrl}?year=${year}&month=${month}`

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 WCM-Calendar-Proxy/1.0' },
      next: { revalidate: 3600 }, // cache for 1 hour
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Upstream calendar fetch failed' }, { status: 502 })
    }

    const html = await res.text()
    const $ = cheerio.load(html)

    const unavailableDates: string[] = []
    const eventsByDate: Record<string, string[]> = {}

    // Parse the main calendar table — cells with class "hasevents"
    $('td.hasevents').each((_, el) => {
      // The day link inside the cell
      const dayLink = $(el).find('a').first()
      const href = dayLink.attr('href') || ''
      const dateMatch = href.match(/date=(\d{8})/)
      if (!dateMatch) return

      const dateStr = dateMatch[1] // e.g. "20260701"

      // Collect all event links in this cell
      const events: string[] = []
      $(el).find('a[href*="view_entry"]').each((_, evEl) => {
        const text = $(evEl).text().trim()
        if (text) events.push(text)
      })
      eventsByDate[dateStr] = events

      // Mark as unavailable if any event contains "UNAVAILABLE"
      const hasUnavailable = events.some(e => e.toUpperCase().includes('UNAVAILABLE'))
      if (hasUnavailable) unavailableDates.push(dateStr)
    })

    // Also parse weekend cells for context
    const weekendDates: string[] = []
    $('td.weekend').each((_, el) => {
      const dayLink = $(el).find('a').first()
      const href = dayLink.attr('href') || ''
      const dateMatch = href.match(/date=(\d{8})/)
      if (dateMatch) weekendDates.push(dateMatch[1])
    })

    // Parse the displayed month title from h2 or caption
    const title = $('h2').first().text().trim() || `${year}-${month}`

    return NextResponse.json({
      year: parseInt(year),
      month: parseInt(month),
      title,
      unavailableDates,
      eventsByDate,
      weekendDates,
    })
  } catch (err) {
    console.error('[WCM Calendar API]', err)
    return NextResponse.json({ error: 'Internal proxy error' }, { status: 500 })
  }
}
