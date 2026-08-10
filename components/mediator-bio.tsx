'use client'

import { useState } from 'react'
import { Award, CalendarDays, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type BioSection = {
  id: string
  label: string
  items: string[]
}

export type Attorney = {
  id: string
  name: string
  title: string
  subtitle: string
  location: string
  photo: string
  bio: string[]
  sections: BioSection[]
}

export const attorneys: Attorney[] = [
  {
    id: 'stephen',
    name: 'Stephen G. Brannan',
    title: 'Esq.',
    subtitle: 'Certified Circuit & Federal Court Mediator',
    location: 'Sarasota, Florida',
    photo: 'https://cdn.builder.io/api/v1/image/assets%2F57fd5e85f28146269960c5b0fe53c10e%2Fe21b3bbb61244e2c8377afe9dbf6d5d4?format=webp&width=800&height=1200',
    bio: [
      'Stephen G. Brannan has dedicated his legal career to helping parties resolve disputes without the burden and expense of protracted litigation. As a certified Federal and State Circuit Court mediator, he brings a thorough understanding of civil law, sharp analytical skills, and a patient, principled approach to every session.',
      'His experience spans every major category of civil litigation — from personal injury and medical malpractice to complex commercial and real property disputes. Attorneys and insurance professionals across Southwest Florida trust his process to deliver results.',
    ],
    sections: [
      {
        id: 'family',
        label: 'Family',
        items: [
          'Sixth-generation Floridian, born in Tampa, Florida on September 27, 1955',
          'Wife: Kamila Brannan',
          'Children: Amanda, Annelie, Derek, Rachel, and Seth',
        ],
      },
      {
        id: 'education',
        label: 'Education',
        items: [
          'Florida State University — Undergraduate B.S.; 1977 B.A. in Political Science',
          'Memphis State School of Law — 1985',
        ],
      },
      {
        id: 'professional-organizations',
        label: 'Professional Organizations & Memberships',
        items: [
          'American Bar Association',
          'Florida Bar Association',
          'U.S. District Court for the Middle District of Florida',
          'Defense Research Institute',
          'U.S. Court of Appeals for the Eleventh District',
          'Sarasota County Bar Association',
          'Sarasota-Bradenton Claims Association',
          'Association of Trial Lawyers of America',
          'American Inns of Court',
          'Former Vice Chairman of the 12th Judicial Grievance Committee',
          'ABOTA Trial Lawyer Section, Florida Bar Association',
          'Past President, ABOTA of Sarasota',
          'Director, American College of Civil Trial Mediators, 2010–2013',
          'Board Certification: Civil Trial, 1992',
          'A.V. Rated by Martindale-Hubbell',
          'Certified Mediator by the Florida Supreme Court, 1996',
          'Certified Federal Court Mediator',
          'Manasota Trial Lawyers Board',
        ],
      },
      {
        id: 'employment',
        label: 'Employment',
        items: [
          '1985–1990 — Associate, Dickinson, O’Riorden, Gibbons, Quale, Shields & Carlton, P.A.',
          '1990–2005 — Shareholder, Dickinson & Gibbons, P.A.',
          '2005–2006 — Stephen G. Brannan, Esq. P.A.',
          '2006–Present — West Coast Mediators',
        ],
      },
    ],
  },
  {
    id: 'kevin',
    name: 'Kevin B. Woods',
    title: 'Esq.',
    subtitle: 'Board-Certified Civil Trial Attorney & Mediator',
    location: 'Tampa, Florida',
    photo: 'https://cdn.builder.io/api/v1/image/assets%2F57fd5e85f28146269960c5b0fe53c10e%2Fc36816fce80648e9b50804949a57bdf5?format=webp&width=800&height=1200',
    bio: [
      'Kevin Britt Woods is a third-generation Tampa native and a Board-Certified Civil Trial Lawyer whose practice has focused exclusively on civil trial matters since 1997. He represents both Plaintiffs and Defendants and brings more than 29 years of litigation experience to every mediation.',
      'Kevin has handled matters involving traumatic and mild traumatic brain injury, wrongful death, spinal cord injury, automotive accidents, products liability, premises liability, trucking accidents, medical malpractice, and complex commercial litigation — giving him the firsthand perspective to guide parties toward resolution.',
    ],
    sections: [
      {
        id: 'family',
        label: 'Family',
        items: [
          'Born and raised in Tampa, Florida; third-generation Tampa native',
          'Married with two children',
          'Member of Palma Ceia Presbyterian Church with his family',
        ],
      },
      {
        id: 'education',
        label: 'Education',
        items: [
          'Tampa Jesuit High School — 1985–1989',
          'University of Florida — B.S. in Business Administration, 1989–1993',
          'University of Florida College of Law — J.D. with Honors, 1993–1996',
        ],
      },
      {
        id: 'professional-organizations',
        label: 'Professional Organizations & Memberships',
        items: [
          'Board-Certified Civil Trial Lawyer by The Florida Bar',
          'Florida Supreme Court Certified Circuit Court Mediator',
          'Florida Supreme Court Approved Arbitrator',
          'The Florida Bar Association',
          'Hillsborough County Bar Association',
          'Former Hillsborough County Bar Association Young Lawyers Division, Board of Directors',
          'Former Terrell Inn of Court',
          'Former Co-Chairman of the Florida Inns of Court Coordinating Counsel',
          'Million Dollar Advocates Forum',
          'Super Lawyers Member',
          'Admitted to the United States Supreme Court',
          'Admitted to the Florida Supreme Court',
          'Admitted to the United States District Courts for the Northern and Middle Districts of Florida',
          'Peer Review Rated by Martindale-Hubbell',
        ],
      },
      {
        id: 'employment',
        label: 'Employment',
        items: [
          '1997–Present — Dedicated civil trial practice after leaving the Trial Department of Tampa’s oldest law firm',
          'Represents both Plaintiffs and Defendants in civil trial matters',
          'Practice areas include traumatic brain injury, wrongful death, spinal cord injury, automotive accidents, products liability, premises liability, trucking accidents, medical malpractice, and complex commercial litigation',
          'Has obtained numerous verdicts and settlements in excess of $1 million, including reported jury verdicts of $40 million in Alachua County, $6.5 million in Manatee County, and $3.2 million in Hardee County',
        ],
      },
    ],
  },
]

export function AttorneyAccordion({ attorney }: { attorney: Attorney }) {
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <div className="mt-6 flex flex-col gap-2">
      {attorney.sections.map((section, index) => {
        const isOpen = openSection === section.id
        const panelId = `${attorney.id}-${section.id}-panel`
        const buttonId = `${attorney.id}-${section.id}-button`

        return (
          <div key={section.id}>
            <button
              id={buttonId}
              type="button"
              onClick={() => setOpenSection(isOpen ? null : section.id)}
              className="group flex w-full items-center justify-between border border-[#d5d3d0] bg-[#F2F2F0] px-5 py-3 text-left transition-colors duration-200 hover:bg-[#23423D]"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="flex items-center gap-2">
                {index === 0 ? (
                  <Award size={16} className="text-[#B99B5A]" strokeWidth={1.5} aria-hidden="true" />
                ) : (
                  <CheckCircle size={16} className="text-[#B99B5A]" strokeWidth={1.5} aria-hidden="true" />
                )}
                <span className="font-[family-name:var(--font-sub)] text-sm font-semibold uppercase tracking-wider text-[#0A1B2E] transition-colors group-hover:text-white">
                  {section.label}
                </span>
              </span>
              {isOpen ? (
                <ChevronUp size={16} className="text-[#5A6B66] transition-colors group-hover:text-[#B99B5A]" aria-hidden="true" />
              ) : (
                <ChevronDown size={16} className="text-[#5A6B66] transition-colors group-hover:text-[#B99B5A]" aria-hidden="true" />
              )}
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="border border-t-0 border-[#d5d3d0] bg-white px-5 py-5"
              >
                <ul className="flex flex-col gap-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={15} className="mt-0.5 flex-shrink-0 text-[#23423D]" strokeWidth={2} aria-hidden="true" />
                      <span className="font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[#5A6B66]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function AttorneyCard({ attorney }: { attorney: Attorney }) {
  return (
    <div className="overflow-hidden border border-[#d5d3d0] bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#23423D]">
        <Image
          src={attorney.photo}
          alt={`${attorney.name} — ${attorney.subtitle}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B99B5A]" />
      </div>

      <div className="p-8">
        <p className="mb-2 font-[family-name:var(--font-sub)] text-xs uppercase tracking-[0.3em] text-[#B99B5A]">{attorney.subtitle}</p>
        <h3 className="mb-1 font-[family-name:var(--font-display)] text-2xl font-bold text-[#0A1B2E] md:text-3xl">{attorney.name}</h3>
        <p className="mb-5 font-[family-name:var(--font-sub)] text-sm uppercase tracking-widest text-[#5A6B66]">{attorney.title}</p>
        <div className="mb-6 h-px bg-[#B99B5A]/30" />

        {attorney.bio.map((para) => (
          <p key={para} className="mb-4 font-[family-name:var(--font-sans)] text-base leading-relaxed text-[#5A6B66]">{para}</p>
        ))}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={attorney.id === 'stephen' ? '/steve-brannan.html' : '/kevin-woods.html'}
            className="flex flex-1 items-center justify-center border border-[#23423D] px-5 py-4 font-[family-name:var(--font-sub)] text-xs font-semibold uppercase tracking-[0.14em] text-[#23423D] transition-colors duration-200 hover:bg-[#23423D] hover:text-[#F2F2F0]"
          >
            Full CV &amp; Bio
          </Link>
          <Link
            href={`/schedule/${attorney.id}`}
            className="group flex flex-1 items-center justify-center gap-2 bg-[#23423D] px-5 py-4 font-[family-name:var(--font-sub)] text-xs font-semibold uppercase tracking-[0.12em] text-[#F2F2F0] transition-colors duration-200 hover:bg-[#0A1B2E]"
          >
            <CalendarDays size={16} className="text-[#B99B5A]" strokeWidth={1.5} aria-hidden="true" />
            Schedule with {attorney.name.split(' ')[0]}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function MediatorBio() {
  return (
    <section id="mediators" className="bg-[#F2F2F0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 font-[family-name:var(--font-sub)] text-xs uppercase tracking-[0.3em] text-[#B99B5A]">Our Team</p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold text-[#0A1B2E] md:text-4xl lg:text-5xl">Meet the Mediators</h2>
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#B99B5A]/40" />
            <div className="h-1 w-10 bg-[#B99B5A]" />
            <div className="h-px w-16 bg-[#B99B5A]/40" />
          </div>
          <p className="mx-auto max-w-2xl font-[family-name:var(--font-sans)] text-base leading-relaxed text-[#5A6B66] md:text-lg">
            Certified Federal and State Circuit Court mediators with decades of combined civil litigation experience serving Sarasota, Tampa, and all of Southwest Florida.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {attorneys.map((attorney) => <AttorneyCard key={attorney.id} attorney={attorney} />)}
        </div>
      </div>
    </section>
  )
}
