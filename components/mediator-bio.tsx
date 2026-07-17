'use client'

import { useState } from 'react'
import { Award, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

const attorneys = [
  {
    id: 'stephen',
    name: 'Stephen G. Brannan',
    title: 'Esq.',
    subtitle: 'Certified Circuit & Federal Court Mediator',
    location: 'Sarasota, Florida',
    photo: '/stephen-brannan-crop.jpg',
    bio: [
      'Stephen G. Brannan has dedicated his legal career to helping parties resolve disputes without the burden and expense of protracted litigation. As a certified Federal and State Circuit Court mediator, he brings a thorough understanding of civil law, sharp analytical skills, and a patient, principled approach to every session.',
      'His experience spans every major category of civil litigation — from personal injury and medical malpractice to complex commercial and real property disputes. Attorneys and insurance professionals across Southwest Florida trust his process to deliver results.',
    ],
    credentials: [
      'Certified Florida Supreme Court Circuit Court Mediator',
      'Certified Federal District Court Mediator',
      'Member of the Florida Bar',
      'Mediated thousands of civil cases to successful resolution',
      'Extensive experience in complex, multi-party disputes',
      'Sarasota County and surrounding Southwest Florida courts',
    ],
  },
  {
    id: 'kevin',
    name: 'Kevin B. Woods',
    title: 'Esq.',
    subtitle: 'Board-Certified Civil Trial Attorney & Mediator',
    location: 'Tampa, Florida',
    photo: '/kevin-woods.jpg',
    bio: [
      'Kevin Britt Woods is a third-generation Tampa native and a Board-Certified civil trial attorney with a career spanning over 29 years working exclusively on civil trial matters on behalf of both Defendants and Plaintiffs. He graduated from the University of Florida where he earned both his undergraduate degree and his Juris Doctorate in 1996.',
      'Throughout his career, Kevin has tried cases to final verdict and judgment in the areas of personal injury, products liability, premises liability, trucking accidents, brain injury, medical malpractice, and business litigation — giving him the firsthand perspective to guide parties toward resolution.',
    ],
    credentials: [
      'Florida Supreme Court Certified Circuit Court Mediator',
      'Florida Supreme Court Approved Arbitrator',
      'Board-Certified Civil Trial Attorney',
      'Member of the Florida Bar',
      '29+ years of civil trial experience as both Plaintiff and Defense counsel',
      'University of Florida, Juris Doctorate 1996',
      'Jesuit High School, Tampa — Class of 1989',
    ],
  },
]

function AttorneyCard({ attorney }: { attorney: typeof attorneys[0] }) {
  const [credOpen, setCredOpen] = useState(false)

  return (
    <div className="bg-white border border-[#d5d3d0] overflow-hidden">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#23423D]">
        <Image
          src={attorney.photo}
          alt={`${attorney.name} — ${attorney.subtitle}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gold bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B99B5A]" />
        {/* Location badge */}
        <div className="absolute top-4 right-4 bg-[#0A1B2E]/80 backdrop-blur-sm px-3 py-1">
          <span className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-widest uppercase">
            {attorney.location}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.3em] uppercase mb-2">
          {attorney.subtitle}
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-2xl md:text-3xl font-bold mb-1">
          {attorney.name}
        </h3>
        <p className="font-[family-name:var(--font-sub)] text-[#5A6B66] text-sm tracking-widest uppercase mb-5">
          {attorney.title}
        </p>
        <div className="h-px bg-[#B99B5A]/30 mb-6" />

        {attorney.bio.map((para, i) => (
          <p
            key={i}
            className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-base leading-relaxed mb-4"
          >
            {para}
          </p>
        ))}

        {/* Credentials accordion */}
        <button
          onClick={() => setCredOpen((v) => !v)}
          className="w-full flex items-center justify-between bg-[#F2F2F0] border border-[#d5d3d0] px-5 py-3 mt-4 group hover:bg-[#23423D] transition-colors duration-200"
          aria-expanded={credOpen}
        >
          <div className="flex items-center gap-2">
            <Award size={16} className="text-[#B99B5A]" strokeWidth={1.5} />
            <span className="font-[family-name:var(--font-sub)] text-[#0A1B2E] group-hover:text-white text-sm font-semibold tracking-wider uppercase transition-colors">
              Credentials &amp; Qualifications
            </span>
          </div>
          {credOpen ? (
            <ChevronUp size={16} className="text-[#5A6B66] group-hover:text-[#B99B5A] transition-colors" />
          ) : (
            <ChevronDown size={16} className="text-[#5A6B66] group-hover:text-[#B99B5A] transition-colors" />
          )}
        </button>

        {credOpen && (
          <div className="border border-t-0 border-[#d5d3d0] bg-white px-5 py-5">
            <ul className="space-y-3">
              {attorney.credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-3">
                  <CheckCircle
                    size={15}
                    className="text-[#23423D] mt-0.5 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed">
                    {cred}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default function MediatorBio() {
  return (
    <section id="mediators" className="bg-[#F2F2F0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.3em] uppercase mb-4">
            Our Team
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Meet the Mediators
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-[#B99B5A]/40 w-16" />
            <div className="h-1 w-10 bg-[#B99B5A]" />
            <div className="h-px bg-[#B99B5A]/40 w-16" />
          </div>
          <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Certified Federal and State Circuit Court mediators with decades of combined civil
            litigation experience serving Sarasota, Tampa, and all of Southwest Florida.
          </p>
        </div>

        {/* Two-column attorney cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {attorneys.map((attorney) => (
            <AttorneyCard key={attorney.id} attorney={attorney} />
          ))}
        </div>
      </div>
    </section>
  )
}
