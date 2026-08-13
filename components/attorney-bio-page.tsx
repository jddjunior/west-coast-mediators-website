'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { AttorneyAccordion, attorneys } from '@/components/mediator-bio'

export default function AttorneyBioPage({ attorneyId }: { attorneyId: 'stephen' | 'kevin' }) {
  const attorney = attorneys.find((profile) => profile.id === attorneyId)

  if (!attorney) return null

  return (
    <main className="min-h-screen bg-[#F2F2F0]">
      <Navbar />
      <section className="bg-[#23423D] px-4 pb-16 pt-32 text-[#F2F2F0] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#mediators"
            className="mb-10 inline-flex items-center gap-2 font-[family-name:var(--font-sub)] text-xs font-semibold uppercase tracking-[0.18em] text-[#B99B5A] transition-colors hover:text-white"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to mediators
          </Link>
          <div className="grid items-end gap-10 md:grid-cols-[220px_1fr]">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#B99B5A]/50 bg-[#0A1B2E]">
              <Image src={attorney.photo} alt={`${attorney.name} portrait`} fill className="object-cover object-top" sizes="220px" priority />
            </div>
            <div>
              <p className="mb-4 font-[family-name:var(--font-sub)] text-xs uppercase tracking-[0.3em] text-[#B99B5A]">Full CV &amp; Bio</p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-6xl">{attorney.name}</h1>
              <p className="mt-4 font-[family-name:var(--font-sub)] text-sm uppercase tracking-[0.18em] text-[#D5D3D0]">{attorney.subtitle}</p>
              <p className="mt-3 font-[family-name:var(--font-sub)] text-xs uppercase tracking-[0.2em] text-[#B99B5A]">{attorney.location}</p>
              <a href={`mailto:${attorney.email}`} className="mt-3 inline-block break-all font-[family-name:var(--font-sub)] text-xs tracking-wide text-[#D5D3D0] transition-colors hover:text-[#B99B5A]">{attorney.email}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_320px]">
          <article>
            <p className="mb-4 font-[family-name:var(--font-sub)] text-xs uppercase tracking-[0.3em] text-[#B99B5A]">Professional Overview</p>
            <div className="flex flex-col gap-4">
              {attorney.bio.map((paragraph) => (
                <p key={paragraph} className="font-[family-name:var(--font-sans)] text-base leading-relaxed text-[#5A6B66] md:text-lg">{paragraph}</p>
              ))}
            </div>
            <AttorneyAccordion attorney={attorney} />
          </article>

          <aside className="h-fit border border-[#d5d3d0] bg-white p-6">
            <p className="mb-4 font-[family-name:var(--font-sub)] text-xs uppercase tracking-[0.25em] text-[#B99B5A]">Schedule a mediation</p>
            <p className="mb-6 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[#5A6B66]">Review live availability and send a scheduling request for {attorney.name}.</p>
            <Link href={`/schedule/${attorney.id}`} className="flex items-center justify-center gap-2 bg-[#23423D] px-5 py-4 font-[family-name:var(--font-sub)] text-xs font-semibold uppercase tracking-[0.13em] text-[#F2F2F0] transition-colors hover:bg-[#0A1B2E]">
              <CalendarDays size={16} className="text-[#B99B5A]" aria-hidden="true" />
              Schedule with {attorney.name.split(' ')[0]}
            </Link>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  )
}
