import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight, Phone, Mail } from 'lucide-react'

import type { Metadata } from 'next'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Schedule a Mediation | West Coast Mediators',
  description:
    'Schedule a mediation session with Stephen G. Brannan or Kevin B. Woods — certified Federal and State Circuit Court mediators serving Sarasota, Tampa, and Southwest Florida.',
}

const mediators = [
  {
    id: 'stephen',
    name: 'Stephen G. Brannan',
    title: 'Esq.',
    subtitle: 'Certified Circuit & Federal Court Mediator',
    location: 'Sarasota, Florida',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stephen-brannan-uY5f79scbKWbVR4sRbIsZvC8H12QTk.jpg',
    tagline:
      'Thousands of civil cases mediated to successful resolution across Southwest Florida.',
    href: '/schedule/stephen',
  },
  {
    id: 'kevin',
    name: 'Kevin B. Woods',
    title: 'Esq.',
    subtitle: 'Board-Certified Civil Trial Attorney & Mediator',
    location: 'Tampa, Florida',
    photo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kevin-woods-G8s9hXkq91QnX8mGFKD35oAeO2ZZz6.jpg',
    tagline:
      '29+ years of civil trial experience on both Plaintiff and Defense sides of the table.',
    href: '/schedule/kevin',
  },
]

export default function ScheduleHubPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F0]">
      <Navbar />

      {/* Hero strip */}
      <div className="bg-[#0A1B2E] border-b-4 border-[#B99B5A] pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
          <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.35em] uppercase mb-4">
            West Coast Mediators
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Schedule a Mediation
          </h1>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px bg-[#B99B5A]/40 w-12" />
            <div className="h-1 w-8 bg-[#B99B5A]" />
            <div className="h-px bg-[#B99B5A]/40 w-12" />
          </div>
          <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Select a mediator below to view availability and schedule your session. Both
            mediators are available for half-day and full-day sessions throughout Southwest Florida.
          </p>
        </div>
      </div>

      {/* Mediator cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {mediators.map((mediator) => (
            <Link
              key={mediator.id}
              href={mediator.href}
              className="group bg-white border border-[#d5d3d0] overflow-hidden hover:border-[#B99B5A] hover:shadow-xl hover:shadow-[#0A1B2E]/10 transition-all duration-300 block"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#23423D]">
                <Image
                  src={mediator.photo}
                  alt={mediator.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: 'center 20%' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B2E]/70 via-transparent to-transparent" />
                {/* Gold bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B99B5A]" />
                {/* Location */}
                <div className="absolute top-4 right-4 bg-[#0A1B2E]/80 backdrop-blur-sm px-3 py-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={11} className="text-[#B99B5A]" />
                    <span className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-widest uppercase">
                      {mediator.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.3em] uppercase mb-2">
                  {mediator.subtitle}
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-2xl font-bold mb-1">
                  {mediator.name}
                </h2>
                <p className="font-[family-name:var(--font-sub)] text-[#5A6B66] text-sm tracking-widest uppercase mb-4">
                  {mediator.title}
                </p>
                <div className="h-px bg-[#B99B5A]/30 mb-4" />
                <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed mb-6">
                  {mediator.tagline}
                </p>
                <div className="flex items-center gap-2 text-[#23423D] group-hover:text-[#B99B5A] transition-colors font-[family-name:var(--font-sub)] text-sm font-semibold tracking-wider uppercase">
                  <span>View Availability</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Shared contact note */}
        <div className="mt-14 bg-[#23423D] p-8 md:p-10 text-center">
          <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.3em] uppercase mb-3">
            Prefer to Call?
          </p>
          <p className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-xl md:text-2xl font-bold mb-4">
            Our scheduling team is ready to assist you
          </p>
          <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/65 text-sm leading-relaxed max-w-lg mx-auto mb-7">
            Contact our scheduling team directly to coordinate dates, locations, and logistics for
            your mediation session with either of our certified mediators.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9417921695"
              className="flex items-center gap-2 px-7 py-3 bg-[#B99B5A] text-[#0A1B2E] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-wider uppercase hover:bg-[#c9ab6a] transition-colors"
            >
              <Phone size={15} />
              (941) 792-1695
            </a>
            <a
              href="mailto:scheduling@westcoastmediators.com"
              className="flex items-center gap-2 px-7 py-3 border border-[#B99B5A] text-[#B99B5A] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-wider uppercase hover:bg-[#B99B5A]/10 transition-colors"
            >
              <Mail size={15} />
              scheduling@westcoastmediators.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0A1B2E] border-t border-[#B99B5A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/35 text-xs text-center">
            &copy; {new Date().getFullYear()} West Coast Mediators. All rights reserved.
          </p>
          <a
            href="/"
            className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/40 text-xs tracking-wide hover:text-[#B99B5A] transition-colors"
          >
            &larr; Return to Main Site
          </a>
        </div>
      </div>
    </div>
  )
}
