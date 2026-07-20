'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowLeft, Clock, CalendarDays, Info } from 'lucide-react'


interface SchedulingPageProps {
  attorney: {
    id: string
    name: string
    title: string
    subtitle: string
    location: string
    phone: string
    email: string
    photo: string
    bio: string
    calendarNote: string
  }
}

export default function SchedulingPage({ attorney }: SchedulingPageProps) {
  return (
    <div className="min-h-screen bg-[#F2F2F0]">
      {/* Top nav bar */}
      <header className="bg-[#0A1B2E] sticky top-0 z-50 shadow-lg shadow-black/20">
        <div className="bg-[#23423D] py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-end gap-8">
            <a
              href={`tel:${attorney.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 text-[#B99B5A] text-sm font-[family-name:var(--font-sub)] tracking-wide hover:text-[#F2F2F0] transition-colors"
            >
              <Phone size={13} />
              {attorney.phone}
            </a>
            <a
              href={`mailto:${attorney.email}`}
              className="text-[#F2F2F0]/80 text-sm font-[family-name:var(--font-sub)] tracking-wide hover:text-[#B99B5A] transition-colors"
            >
              {attorney.email}
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="West Coast Mediators — Home" className="shrink-0">
            <Image
              src="/wcm-logo-white.jpg"
              alt="West Coast Mediators"
              width={320}
              height={91}
              className="h-16 w-auto hidden md:block"
              priority
            />
            <Image
              src="/wcm-logo-white.jpg"
              alt="West Coast Mediators"
              width={210}
              height={60}
              className="h-11 w-auto md:hidden"
              priority
            />
          </a>
          <Link
            href="/schedule"
            className="flex items-center gap-2 text-[#F2F2F0]/70 hover:text-[#B99B5A] font-[family-name:var(--font-sub)] text-sm tracking-wide transition-colors"
          >
            <ArrowLeft size={15} />
            All Mediators
          </Link>
        </div>
      </header>

      {/* Page hero strip */}
      <div className="bg-[#0A1B2E] border-b-4 border-[#B99B5A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
            {/* Headshot */}
            <div className="relative w-24 h-28 md:w-32 md:h-36 flex-shrink-0 border-2 border-[#B99B5A] overflow-hidden">
              <Image
                src={attorney.photo}
                alt={attorney.name}
                fill
                className="object-cover object-top"
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
              <div className="flex items-center gap-2 mt-2">
                <MapPin size={13} className="text-[#B99B5A]" />
                <span className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/50 text-xs tracking-wide">
                  {attorney.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* LEFT: Calendar area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendar heading */}
            <div className="flex items-center gap-3 mb-2">
              <CalendarDays size={22} className="text-[#23423D]" strokeWidth={1.5} />
              <h2 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-xl md:text-2xl font-bold">
                Select a Date &amp; Time
              </h2>
            </div>

            {/* PHP calendar placeholder */}
            <div className="relative border-2 border-dashed border-[#B99B5A]/40 bg-white overflow-hidden group">
              {/* Placeholder image */}
              <Image
                src="/calendar-placeholder.png"
                alt="Calendar — scheduling integration coming soon"
                width={900}
                height={506}
                className="w-full h-auto opacity-70"
                priority
              />

              {/* Overlay with integration message */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A1B2E]/60 backdrop-blur-[2px]">
                <div className="text-center px-6 max-w-sm">
                  <div className="w-14 h-14 border-2 border-[#B99B5A] flex items-center justify-center mx-auto mb-4">
                    <CalendarDays size={24} className="text-[#B99B5A]" strokeWidth={1.5} />
                  </div>
                  <p className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-xl font-bold mb-2">
                    Online Scheduling
                  </p>
                  <p className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/70 text-sm leading-relaxed mb-5">
                    Our interactive calendar will be available here shortly. In the meantime, please
                    contact us directly to schedule your mediation session.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`tel:${attorney.phone.replace(/\D/g, '')}`}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B99B5A] text-[#0A1B2E] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-wider uppercase hover:bg-[#c9ab6a] transition-colors"
                    >
                      <Phone size={14} />
                      Call Now
                    </a>
                    <a
                      href={`mailto:${attorney.email}`}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 border border-[#B99B5A] text-[#B99B5A] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-wider uppercase hover:bg-[#B99B5A]/10 transition-colors"
                    >
                      <Mail size={14} />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PHP integration note */}
            <div className="flex items-start gap-3 bg-[#23423D]/8 border border-[#23423D]/20 px-5 py-4">
              <Info size={16} className="text-[#23423D] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed">
                <span className="font-semibold text-[#23423D]">PHP Calendar Integration:</span>{' '}
                {attorney.calendarNote}
              </p>
            </div>

            {/* Session info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-[#d5d3d0] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-[#B99B5A]" strokeWidth={1.5} />
                  <h3 className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-sm font-semibold tracking-wide uppercase">
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
                  <h3 className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-sm font-semibold tracking-wide uppercase">
                    Location
                  </h3>
                </div>
                <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed">
                  Sessions held at counsel&apos;s office or a neutral conference facility.
                  Virtual mediation via Zoom is also available upon request.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* About this mediator */}
            <div className="bg-[#23423D] text-[#F2F2F0] p-7">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-1">
                About {attorney.name.split(' ')[0]}
              </h3>
              <div className="h-px bg-[#B99B5A]/40 mb-4" />
              <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/75 text-sm leading-relaxed">
                {attorney.bio}
              </p>
            </div>

            {/* Direct contact */}
            <div className="bg-white border border-[#d5d3d0] p-7">
              <h3 className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
                Schedule by Phone or Email
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${attorney.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 bg-[#B99B5A]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B99B5A] transition-colors">
                    <Phone size={15} className="text-[#B99B5A] group-hover:text-[#0A1B2E] transition-colors" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-sm font-semibold group-hover:text-[#23423D] transition-colors">
                      {attorney.phone}
                    </p>
                    <p className="font-[family-name:var(--font-sans)] text-[#A7A9AC] text-xs">
                      Mon – Fri, 9am – 5pm ET
                    </p>
                  </div>
                </a>
                <div className="h-px bg-[#d5d3d0]" />
                <a
                  href={`mailto:${attorney.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 bg-[#B99B5A]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B99B5A] transition-colors">
                    <Mail size={15} className="text-[#B99B5A] group-hover:text-[#0A1B2E] transition-colors" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-sm font-semibold group-hover:text-[#23423D] transition-colors break-all">
                      {attorney.email}
                    </p>
                    <p className="font-[family-name:var(--font-sans)] text-[#A7A9AC] text-xs">
                      Typically responds within 24 hrs
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Other mediator CTA */}
            <div className="bg-[#F2F2F0] border border-[#d5d3d0] p-7">
              <h3 className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                Also Available
              </h3>
              <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed mb-4">
                Both of our certified mediators maintain flexible availability across Southwest Florida.
              </p>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 text-[#23423D] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-wide hover:text-[#B99B5A] transition-colors border-b border-[#23423D]/30 hover:border-[#B99B5A] pb-0.5"
              >
                View All Mediators
                <ArrowLeft size={13} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
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
