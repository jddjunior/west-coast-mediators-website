import {
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Briefcase,
  Home,
  HardHat,
  FileText,
  ChevronRight,
} from 'lucide-react'

const areas = [
  {
    icon: HeartPulse,
    title: 'Personal Injury',
    description:
      'Auto accidents, slip-and-fall, wrongful death, and other personal injury disputes resolved efficiently.',
  },
  {
    icon: Stethoscope,
    title: 'Medical & Legal Malpractice',
    description:
      'Complex professional liability cases handled with the technical depth they require.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Disputes',
    description:
      'Coverage disputes, bad faith claims, and insurance litigation settled outside the courtroom.',
  },
  {
    icon: Briefcase,
    title: 'Business Disputes',
    description:
      'Partnership conflicts, breach of contract, shareholder disputes, and commercial litigation.',
  },
  {
    icon: Home,
    title: 'Real Property',
    description:
      'Boundary disputes, easements, landlord-tenant issues, and real estate transaction conflicts.',
  },
  {
    icon: HardHat,
    title: 'Construction',
    description:
      'Contractor disputes, defect claims, delay damages, and construction project conflicts.',
  },
  {
    icon: FileText,
    title: 'Contract Disputes',
    description:
      'Breach of contract, commercial agreements, vendor disputes, and service contract claims.',
  },
]

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-[#0A1B2E] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background element */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #B99B5A 0px, #B99B5A 1px, transparent 0px, transparent 50%)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.3em] uppercase mb-4">
            Our Expertise
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Areas of Practice
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#B99B5A]" />
            <div className="w-1.5 h-1.5 bg-[#B99B5A] rotate-45" />
            <div className="h-px w-12 bg-[#B99B5A]" />
          </div>
          <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/65 text-base md:text-lg leading-relaxed">
            Our mediators bring deep experience across the full spectrum of civil litigation, helping
            parties reach resolution in even the most complex disputes.
          </p>
        </div>

        {/* Areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#B99B5A]/10">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className={`bg-[#0A1B2E] border border-[#B99B5A]/10 p-8 group hover:bg-[#23423D]/30 hover:border-[#B99B5A]/30 transition-all duration-300 ${
                index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 border border-[#B99B5A]/30 flex items-center justify-center group-hover:border-[#B99B5A] group-hover:bg-[#B99B5A]/10 transition-colors duration-300">
                  <area.icon
                    size={20}
                    className="text-[#B99B5A]/60 group-hover:text-[#B99B5A] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-lg font-bold mb-2 group-hover:text-[#B99B5A] transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/55 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-sub)] text-[#B99B5A] text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300"
          >
            Discuss Your Case
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
