import { Scale, Handshake, Users, Building2 } from 'lucide-react'

const pillars = [
  {
    icon: Scale,
    title: 'Fairness',
    description:
      'Every party is heard equally. We ensure a balanced, neutral process that respects all perspectives.',
  },
  {
    icon: Handshake,
    title: 'Resolution',
    description:
      'We guide parties toward durable, mutually beneficial agreements — avoiding the cost of litigation.',
  },
  {
    icon: Users,
    title: 'Trust',
    description:
      'Our mediators are trusted by attorneys and parties throughout Southwest Florida for decades of service.',
  },
  {
    icon: Building2,
    title: 'Experience',
    description:
      'Thousands of cases mediated across federal and state courts. Deep expertise in complex civil matters.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-[#F2F2F0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.3em] uppercase mb-4">
            About West Coast Mediators
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Trusted Mediation Services in Southwest Florida
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#B99B5A]" />
            <div className="w-1.5 h-1.5 bg-[#B99B5A] rotate-45" />
            <div className="h-px w-12 bg-[#B99B5A]" />
          </div>
          <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-base md:text-lg leading-relaxed">
            West Coast Mediators are certified Federal and State Circuit Court mediators. We have
            mediated thousands of cases to a successful conclusion involving many areas of civil law.
            Our commitment is to provide an impartial, professional forum for dispute resolution —
            saving you time, expense, and the uncertainty of trial.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-white border border-[#d5d3d0] p-8 text-center hover:border-[#B99B5A] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 border border-[#23423D]/20 group-hover:border-[#B99B5A] group-hover:bg-[#B99B5A]/5 transition-colors duration-300">
                <pillar.icon
                  size={24}
                  className="text-[#23423D] group-hover:text-[#B99B5A] transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-xl font-bold mb-3">
                {pillar.title}
              </h3>
              <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
