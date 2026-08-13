'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowLeft, Clock, CalendarDays, Info, User, ChevronDown, Send, CheckCircle } from 'lucide-react'
import Navbar from '@/components/navbar'

interface SchedulingPageProps {
  attorney: {
    id: string
    name: string
    title: string
    subtitle: string
    location: string
    address: string
    phone: string
    email: string
    receptionistLabel: string   // e.g. "Scheduling Office" or "Gulf Coast Mediation"
    photo: string
    bio: string
    calendarNote: string
    firmPhone: string           // West Coast Mediators main line
    firmEmail: string           // scheduling@westcoastmediators.com
    // Live calendar embed URL (old WebCalendar PHP page). Stephen has his own;
    // Kevin falls back to Stephen's since /webcalendar_kevin/week.php 404s.
    calendarSrc: string
  }
}

/** Mirrors the calendar-frame embed used in html-export/schedule/*. */
function LiveCalendarFrame({
  attorneyId,
  phone,
  calendarSrc,
}: {
  attorneyId: string
  phone: string
  calendarSrc: string
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const cal = iframeRef.current
    if (!cal) return
    const onLoad = () => {
      try {
        const doc = cal.contentDocument || cal.contentWindow?.document
        if (!doc) return
        const s = doc.createElement('style')
        s.textContent = [
          '.row.minimonths, .minimonths, table.minical { display:none !important }',
          '.navbar, nav.navbar { display:none !important }',
          'body { margin:0 !important; padding:0 !important }',
          'html, body { overflow:hidden !important }',
        ].join(' ')
        doc.head.appendChild(s)
      } catch {
        // cross-origin — expected unless the calendar server sets frame-ancestors
      }
    }
    cal.addEventListener('load', onLoad)
    return () => cal.removeEventListener('load', onLoad)
  }, [])

  if (blocked) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 px-6 text-center bg-white border border-[#d5d3d0]">
        <CalendarDays size={32} className="text-[#5A6B66]" strokeWidth={1.5} />
        <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed max-w-sm">
          Calendar temporarily unavailable. Please call{' '}
          <strong className="text-[#0A1B2E]">{phone}</strong> to check availability.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-[#d5d3d0] overflow-hidden">
      <iframe
        ref={iframeRef}
        id={`cal-${attorneyId}`}
        src={calendarSrc}
        title={`${attorneyId} availability calendar`}
        loading="lazy"
        scrolling="no"
        style={{ width: '100%', height: 680, border: 0, overflow: 'hidden', display: 'block' }}
        onError={() => setBlocked(true)}
      />
    </div>
  )
}

const matterTypes = [
  'Personal Injury',
  'Medical / Legal Malpractice',
  'Insurance Dispute',
  'Business / Commercial',
  'Real Property',
  'Construction',
  'Contract Dispute',
  'Other',
]

export default function SchedulingPage({ attorney }: SchedulingPageProps) {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    matter: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Placeholder — will be wired to PHP mailer
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#F2F2F0]">
      <Navbar />

      {/* Page hero */}
      <div className="bg-[#0A1B2E] border-b-4 border-[#B99B5A] pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <Link
            href="/schedule"
            className="mb-6 inline-flex items-center gap-2 font-[family-name:var(--font-sub)] text-xs font-semibold uppercase tracking-[0.18em] text-[#B99B5A] transition-colors hover:text-white"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All mediators
          </Link>
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
            <div className="relative w-24 h-28 md:w-32 md:h-36 flex-shrink-0 border-2 border-[#B99B5A] overflow-hidden">
              <Image
                src={attorney.photo}
                alt={attorney.name}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 27%' }}
                sizes="128px"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.3em] uppercase mb-2">
                Schedule a Mediation
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-2xl md:text-3xl lg:text-4xl font-bold text-balance">
                {attorney.name}, {attorney.title}
              </h1>
              <p className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/60 text-sm tracking-wide mt-1">
                {attorney.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* ── LEFT: Calendar + Inquiry Form ─────────────────────── */}
          <div className="lg:col-span-2 space-y-10">

            {/* Calendar */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <CalendarDays size={22} className="text-[#23423D]" strokeWidth={1.5} />
                <h2 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-xl md:text-2xl font-bold">
                  Select a Date &amp; Time
                </h2>
              </div>

              <LiveCalendarFrame
                attorneyId={attorney.id}
                phone={attorney.phone}
                calendarSrc={attorney.calendarSrc}
              />

              {/* Session info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white border border-[#d5d3d0] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={16} className="text-[#B99B5A]" strokeWidth={1.5} />
                    <h3 className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs font-semibold tracking-[0.2em] uppercase">
                      Session Duration
                    </h3>
                  </div>
                  <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed">
                    Half-day (4 hrs) and full-day (8 hrs) sessions available. Complex multi-party
                    matters may require extended scheduling.
                  </p>
                </div>
                <div className="bg-white border border-[#d5d3d0] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-[#B99B5A]" strokeWidth={1.5} />
                    <h3 className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs font-semibold tracking-[0.2em] uppercase">
                      Location
                    </h3>
                  </div>
                  <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed">
                    Sessions held at counsel&apos;s office or a neutral conference facility.
                    Virtual mediation via Zoom is available upon request.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Inquiry Form ───────────────────────────────────── */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Send size={20} className="text-[#23423D]" strokeWidth={1.5} />
                <h2 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-xl md:text-2xl font-bold">
                  Send a Scheduling Request
                </h2>
              </div>

              {submitted ? (
                <div className="bg-white border border-[#23423D]/30 p-10 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-[#23423D]/10 flex items-center justify-center">
                    <CheckCircle size={32} className="text-[#23423D]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-2xl font-bold">
                    Request Received
                  </h3>
                  <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed max-w-sm">
                    Thank you for reaching out. {attorney.receptionistLabel} will be in touch within
                    one business day to confirm availability and finalize your session.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 font-[family-name:var(--font-sub)] text-[#23423D] text-sm tracking-wide underline underline-offset-4 hover:text-[#B99B5A] transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-[#d5d3d0] p-7 md:p-9 space-y-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                        Full Name <span className="text-[#B99B5A]">*</span>
                      </label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A7A9AC]" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full pl-9 pr-4 py-3 border border-[#d5d3d0] bg-[#F2F2F0] font-[family-name:var(--font-sans)] text-[#0A1B2E] text-sm placeholder:text-[#A7A9AC] focus:outline-none focus:border-[#23423D] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                        Phone Number <span className="text-[#B99B5A]">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A7A9AC]" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="(000) 000-0000"
                          className="w-full pl-9 pr-4 py-3 border border-[#d5d3d0] bg-[#F2F2F0] font-[family-name:var(--font-sans)] text-[#0A1B2E] text-sm placeholder:text-[#A7A9AC] focus:outline-none focus:border-[#23423D] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                      Email Address <span className="text-[#B99B5A]">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A7A9AC]" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full pl-9 pr-4 py-3 border border-[#d5d3d0] bg-[#F2F2F0] font-[family-name:var(--font-sans)] text-[#0A1B2E] text-sm placeholder:text-[#A7A9AC] focus:outline-none focus:border-[#23423D] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Matter type */}
                  <div>
                    <label className="block font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                      Type of Matter <span className="text-[#B99B5A]">*</span>
                    </label>
                    <div className="relative">
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7A9AC] pointer-events-none" />
                      <select
                        name="matter"
                        required
                        value={formState.matter}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#d5d3d0] bg-[#F2F2F0] font-[family-name:var(--font-sans)] text-sm text-[#0A1B2E] appearance-none focus:outline-none focus:border-[#23423D] transition-colors"
                      >
                        <option value="" disabled>Select a matter type</option>
                        {matterTypes.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Briefly describe the matter, preferred dates, number of parties, or any special requirements..."
                      className="w-full px-4 py-3 border border-[#d5d3d0] bg-[#F2F2F0] font-[family-name:var(--font-sans)] text-[#0A1B2E] text-sm placeholder:text-[#A7A9AC] focus:outline-none focus:border-[#23423D] transition-colors resize-none"
                    />
                  </div>

                  {/* Disclaimer */}
                  <p className="font-[family-name:var(--font-sans)] text-[#A7A9AC] text-xs leading-relaxed">
                    This form routes directly to {attorney.email}. Submissions are
                    reviewed within one business day. For urgent matters, please call{' '}
                    <a href={`tel:${attorney.phone.replace(/\D/g, '')}`} className="text-[#23423D] hover:underline">
                      {attorney.phone}
                    </a>{' '}
                    directly.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-[#23423D] text-[#F2F2F0] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#0A1B2E] transition-colors duration-200"
                  >
                    <Send size={15} />
                    Send Request to {attorney.name.split(' ')[0]}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT: Sidebar ─────────────────────────────────────── */}
          <div className="lg:col-span-1 space-y-6">

            {/* Attorney direct line */}
            <div className="bg-[#23423D] text-[#F2F2F0] p-7">
              <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.25em] uppercase mb-1">
                {attorney.receptionistLabel}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-1">
                {attorney.name.split(' ')[0]}&apos;s Scheduling Line
              </h3>
              <div className="h-px bg-[#B99B5A]/30 my-4" />
              <div className="space-y-4">
                <a
                  href={`tel:${attorney.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 border border-[#B99B5A]/40 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B99B5A]/20 transition-colors">
                    <Phone size={15} className="text-[#B99B5A]" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-sub)] text-[#F2F2F0] text-sm font-semibold group-hover:text-[#B99B5A] transition-colors">
                      {attorney.phone}
                    </p>
                    <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/45 text-xs">
                      Direct scheduling line
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${attorney.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 border border-[#B99B5A]/40 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B99B5A]/20 transition-colors">
                    <Mail size={15} className="text-[#B99B5A]" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-sub)] text-[#F2F2F0] text-sm font-semibold group-hover:text-[#B99B5A] transition-colors break-all">
                      {attorney.email}
                    </p>
                    <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/45 text-xs">
                      Scheduling email
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* About */}
            <div className="bg-white border border-[#d5d3d0] p-7">
              <h3 className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-[0.25em] uppercase font-semibold mb-4">
                About {attorney.name.split(' ')[0]}
              </h3>
              <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed">
                {attorney.bio}
              </p>
            </div>

            {/* Firm contact */}
            <div className="bg-[#F2F2F0] border border-[#d5d3d0] p-7">
              <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.25em] uppercase mb-1">
                West Coast Mediators
              </p>
              <h3 className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-sm font-semibold mb-4">
                General Firm Inquiries
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${attorney.firmPhone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-[#23423D] hover:text-[#B99B5A] transition-colors font-[family-name:var(--font-sub)] text-sm"
                >
                  <Phone size={13} />
                  {attorney.firmPhone}
                </a>
                <a
                  href={`mailto:${attorney.firmEmail}`}
                  className="flex items-center gap-2 text-[#23423D] hover:text-[#B99B5A] transition-colors font-[family-name:var(--font-sub)] text-sm break-all"
                >
                  <Mail size={13} />
                  {attorney.firmEmail}
                </a>
              </div>
            </div>


          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0A1B2E] border-t border-[#B99B5A]/20 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/35 text-xs text-center">
            &copy; {new Date().getFullYear()} West Coast Mediators. All rights reserved.
          </p>
          <Link
            href="/"
            className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/40 text-xs tracking-wide hover:text-[#B99B5A] transition-colors"
          >
            &larr; Return to Main Site
          </Link>
        </div>
      </div>

    </div>
  )
}
