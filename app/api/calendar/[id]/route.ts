import { NextRequest, NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

// Map attorney IDs to their respective PHP WebCalendar URLs
const CALENDAR_URLS: Record<string, string[]> = {
  stephen: ['https://www.westcoastmediators.com/webcalendar_joe/week.php'],
  // Keep the dedicated Kevin calendar first, with the active public calendar as a safe fallback.
  kevin: [
    'https://www.westcoastmediators.com/webcalendar_kevin/week.php',
    'https://www.westcoastmediators.com/webcalendar_joe/week.php',
  ],
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const { searchParams } = request.nextUrl
  const year  = searchParams.get('year')  || new Date().getFullYear().toString()
  const month = searchParams.get('month') || String(new Date().getMonth() + 1).padStart(2, '0')

  const baseUrls = CALENDAR_URLS[id]
  if (!baseUrls) {
    return NextResponse.json({ error: 'Unknown attorney id' }, { status: 404 })
  }

  try {
    let html: string | null = null
    for (const baseUrl of baseUrls) {
      const res = await fetch(`${baseUrl}?year=${year}&month=${month}`, {
        headers: { 'User-Agent': 'Mozilla/5.0 WCM-Calendar-Proxy/1.0' },
        next: { revalidate: 3600 },
      })
      if (res.ok) {
        html = await res.text()
        break
      }
    }

    if (!html) {
      return NextResponse.json({ error: 'Upstream calendar fetch failed' }, { status: 502 })
    }

    const $ = cheerio.load(html)

    const unavailableDates: string[] = []
    const eventsByDate: Record<string, string[]> = {}

    // Scope parsing to the primary month table so the previous/next mini-calendars
    // do not leak dates into the response.
    $('#month_main td.hasevents').each((_, el) => {
      const dayLink = $(el).find('a.dayofmonth').first()
      const href = dayLink.attr('href') || ''
      const dateMatch = href.match(/date=(\d{8})/)
      if (!dateMatch) return

      const dateStr = dateMatch[1]
      const events: string[] = []
      $(el).find('a.entry').each((_, evEl) => {
        const text = $(evEl).text().replace(/\s+/g, ' ').trim()
        if (text) events.push(text)
      })
      eventsByDate[dateStr] = events

      if (events.some((event) => event.toUpperCase().includes('UNAVAILABLE'))) {
        unavailableDates.push(dateStr)
      }
    })

    const weekendDates: string[] = []
    $('#month_main td.weekend').each((_, el) => {
      const dayLink = $(el).find('a.dayofmonth').first()
      const href = dayLink.attr('href') || ''
      const dateMatch = href.match(/date=(\d{8})/)
      if (dateMatch) weekendDates.push(dateMatch[1])
    })

    const title = $('.topnav .date').first().text().trim() || `${year}-${month}`

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
