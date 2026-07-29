'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, CalendarDays, RefreshCw } from 'lucide-react'

interface CalendarData {
  year: number
  month: number
  title: string
  unavailableDates: string[]
  eventsByDate: Record<string, string[]>
  weekendDates: string[]
  error?: string
}

interface MediationCalendarProps {
  attorneyId: string
  attorneyName: string
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function toDateStr(year: number, month: number, day: number): string {
  return `${year}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}`
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month - 1, 1).getDay()
}

export default function MediationCalendar({ attorneyId, attorneyName }: MediationCalendarProps) {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [data, setData] = useState<CalendarData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCalendar = useCallback(async (y: number, m: number) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/calendar/${attorneyId}?year=${y}&month=${String(m).padStart(2, '0')}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json: CalendarData = await res.json()
      if (json.error) throw new Error(json.error)
      setData(json)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load calendar')
    } finally {
      setLoading(false)
    }
  }, [attorneyId])

  useEffect(() => {
    fetchCalendar(year, month)
  }, [year, month, fetchCalendar])

  function prevMonth() {
    if (month === 1) { setYear(y => y - 1); setMonth(12) }
    else setMonth(m => m - 1)
  }

  function nextMonth() {
    if (month === 12) { setYear(y => y + 1); setMonth(1) }
    else setMonth(m => m + 1)
  }

  const today = new Date()
  const todayStr = toDateStr(today.getFullYear(), today.getMonth() + 1, today.getDate())

  const daysInMonth = getDaysInMonth(year, month)
  const firstDow = getFirstDayOfWeek(year, month)
  // Build grid: leading empty cells + days
  const cells: (number | null)[] = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  // Pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null)

  const unavailable = new Set(data?.unavailableDates ?? [])
  const events = data?.eventsByDate ?? {}

  return (
    <div className="bg-white border border-[#d5d3d0] overflow-hidden">

      {/* Calendar header */}
      <div className="bg-[#0A1B2E] px-5 py-4 flex items-center justify-between">
        <button
          onClick={prevMonth}
          aria-label="Previous month"
          className="w-9 h-9 flex items-center justify-center text-[#F2F2F0]/60 hover:text-[#B99B5A] hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="text-center">
          <h3 className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-lg font-bold tracking-wide">
            {MONTH_NAMES[month - 1]} {year}
          </h3>
          <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.2em] uppercase mt-0.5">
            {attorneyName}&apos;s Availability
          </p>
        </div>

        <button
          onClick={nextMonth}
          aria-label="Next month"
          className="w-9 h-9 flex items-center justify-center text-[#F2F2F0]/60 hover:text-[#B99B5A] hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 border-b border-[#d5d3d0]">
        {DAY_NAMES.map((d) => (
          <div
            key={d}
            className={`py-2 text-center font-[family-name:var(--font-sub)] text-xs font-semibold tracking-[0.15em] uppercase
              ${d === 'Sun' || d === 'Sat' ? 'text-[#5A6B66] bg-[#F2F2F0]' : 'text-[#0A1B2E] bg-[#F2F2F0]'}`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center py-20 gap-3">
          <RefreshCw size={18} className="text-[#23423D] animate-spin" strokeWidth={1.5} />
          <span className="font-[family-name:var(--font-sub)] text-[#5A6B66] text-sm tracking-wide">
            Loading availability...
          </span>
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="flex flex-col items-center justify-center py-16 gap-4 px-6 text-center">
          <CalendarDays size={32} className="text-[#5A6B66]" strokeWidth={1} />
          <p className="font-[family-name:var(--font-sub)] text-[#5A6B66] text-sm leading-relaxed">
            Unable to load live calendar data. Please contact our scheduling office directly.
          </p>
          <button
            onClick={() => fetchCalendar(year, month)}
            className="font-[family-name:var(--font-sub)] text-xs tracking-widest uppercase text-[#23423D] border border-[#23423D] px-4 py-2 hover:bg-[#23423D] hover:text-white transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Calendar grid */}
      {!loading && !error && (
        <div className="grid grid-cols-7">
          {cells.map((day, i) => {
            if (day === null) {
              return (
                <div
                  key={`empty-${i}`}
                  className="min-h-[72px] bg-[#F2F2F0]/50 border-b border-r border-[#e8e6e3]"
                />
              )
            }

            const dateStr = toDateStr(year, month, day)
            const isToday = dateStr === todayStr
            const isUnavailable = unavailable.has(dateStr)
            const dayEvents = events[dateStr] ?? []
            const hasEvents = dayEvents.length > 0
            const isPast = new Date(year, month - 1, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate())
            const dow = (firstDow + day - 1) % 7
            const isWeekend = dow === 0 || dow === 6

            let cellBg = 'bg-white'
            if (isUnavailable) cellBg = 'bg-[#23423D]'
            else if (isPast) cellBg = 'bg-[#F2F2F0]/70'
            else if (isWeekend) cellBg = 'bg-[#F2F2F0]'

            return (
              <div
                key={dateStr}
                className={`min-h-[72px] border-b border-r border-[#e8e6e3] p-1.5 relative
                  ${cellBg}
                  ${isUnavailable ? 'border-[#1a3330]' : ''}
                `}
              >
                {/* Day number */}
                <span
                  className={`inline-flex items-center justify-center w-7 h-7 text-sm font-[family-name:var(--font-sub)] font-semibold leading-none
                    ${isToday
                      ? 'bg-[#B99B5A] text-[#0A1B2E] rounded-sm'
                      : isUnavailable
                        ? 'text-[#F2F2F0]/60'
                        : isPast
                          ? 'text-[#A7A9AC]'
                          : 'text-[#0A1B2E]'
                    }`}
                >
                  {day}
                </span>

                {/* Event chips */}
                {hasEvents && (
                  <div className="mt-1 space-y-0.5">
                    {dayEvents.slice(0, 2).map((ev, ei) => (
                      <div
                        key={ei}
                        className={`text-[10px] font-[family-name:var(--font-sub)] px-1 py-0.5 truncate leading-tight
                          ${isUnavailable
                            ? 'text-[#B99B5A] bg-[#1a3330]'
                            : 'text-[#F2F2F0] bg-[#23423D]'
                          }`}
                      >
                        {ev}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <div className="text-[10px] text-[#5A6B66] px-1">
                        +{dayEvents.length - 2} more
                      </div>
                    )}
                  </div>
                )}

                {/* Unavailable label */}
                {isUnavailable && dayEvents.length === 0 && (
                  <div className="mt-1 text-[10px] font-[family-name:var(--font-sub)] text-[#B99B5A]/80 tracking-wide uppercase px-0.5">
                    Unavailable
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Legend */}
      <div className="border-t border-[#d5d3d0] px-5 py-3 flex flex-wrap gap-5 bg-[#F2F2F0]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border border-[#d5d3d0]" />
          <span className="font-[family-name:var(--font-sub)] text-[#5A6B66] text-xs tracking-wide">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#23423D]" />
          <span className="font-[family-name:var(--font-sub)] text-[#5A6B66] text-xs tracking-wide">Unavailable</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#B99B5A]" />
          <span className="font-[family-name:var(--font-sub)] text-[#5A6B66] text-xs tracking-wide">Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#F2F2F0] border border-[#d5d3d0]" />
          <span className="font-[family-name:var(--font-sub)] text-[#5A6B66] text-xs tracking-wide">Weekend / Past</span>
        </div>
        <span className="ml-auto font-[family-name:var(--font-sub)] text-[#A7A9AC] text-xs tracking-wide">
          Live data · westcoastmediators.com
        </span>
      </div>
    </div>
  )
}
