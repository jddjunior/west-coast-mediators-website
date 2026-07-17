import { Award, BookOpen, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const credentials = [
  'Certified Florida Supreme Court Circuit Court Mediator',
  'Certified Federal District Court Mediator',
  'Member of the Florida Bar',
  'Mediated thousands of civil cases to successful resolution',
  'Extensive experience in complex, multi-party disputes',
  'Sarasota County and surrounding Southwest Florida courts',
]

export default function MediatorBio() {
  return (
    <section id="mediator" className="bg-[#F2F2F0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#B99B5A]/30" aria-hidden="true" />
            <div className="relative z-10 aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden bg-[#23423D]">
              <Image
                src="/stephen-brannan.png"
                alt="Stephen G. Brannan, Esq. — Certified Mediator"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
            {/* Gold accent bar */}
            <div className="absolute bottom-0 left-0 right-0 max-w-sm mx-auto lg:mx-0 h-1.5 bg-[#B99B5A] z-20" />
          </div>

          {/* Content column */}
          <div>
            <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.3em] uppercase mb-4">
              Meet the Mediator
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-balance">
              Stephen G. Brannan
            </h2>
            <p className="font-[family-name:var(--font-sub)] text-[#5A6B66] text-sm tracking-widest uppercase mb-6">
              Esq. &mdash; Certified Circuit Court Mediator
            </p>
            <div className="h-px bg-[#B99B5A]/30 mb-8" />
            <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-base leading-relaxed mb-6">
              Stephen G. Brannan has dedicated his legal career to helping parties resolve disputes
              without the burden and expense of protracted litigation. As a certified Federal and
              State Circuit Court mediator, he brings a thorough understanding of civil law, sharp
              analytical skills, and a patient, principled approach to every session.
            </p>
            <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-base leading-relaxed mb-8">
              His experience spans every major category of civil litigation — from personal injury
              and medical malpractice to complex commercial and real property disputes. Attorneys and
              insurance professionals across Southwest Florida trust his process to deliver results.
            </p>

            {/* Credentials */}
            <div className="bg-white border border-[#d5d3d0] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-[#B99B5A]" strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-sub)] text-[#0A1B2E] text-sm font-semibold tracking-wider uppercase">
                  Credentials &amp; Qualifications
                </h3>
              </div>
              <ul className="space-y-3">
                {credentials.map((cred) => (
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
          </div>
        </div>
      </div>
    </section>
  )
}
