import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Practice Areas', href: '/#practice-areas' },
  { label: 'Our Mediators', href: '/#mediators' },
  { label: 'Contact', href: '/#contact' },
]

const scheduleLinks = [
  { label: 'Schedule a Mediation', href: '/schedule' },
  { label: 'Stephen G. Brannan, Esq.', href: '/schedule/stephen' },
  { label: 'Kevin B. Woods, Esq.', href: '/schedule/kevin' },
]

const contactItems = [
  { icon: MapPin, text: 'Sarasota, Florida', href: null },
  { icon: Phone, text: '(941) 792-1695', href: 'tel:9417921695' },
  { icon: Mail, text: 'scheduling@westcoastmediators.com', href: 'mailto:scheduling@westcoastmediators.com' },
  { icon: Globe, text: 'westcoastmediators.com', href: 'https://westcoastmediators.com' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A1B2E]">
      {/* Contact strip */}
      <div className="bg-[#23423D] border-b border-[#B99B5A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 flex-wrap">
            {contactItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <item.icon size={14} className="text-[#B99B5A] flex-shrink-0" />
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/75 text-xs tracking-wide hover:text-[#B99B5A] transition-colors"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/75 text-xs tracking-wide">
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="/" aria-label="West Coast Mediators — Home" className="inline-block mb-5">
              <Image
                src="/wcm-logo.png"
                alt="West Coast Mediators"
                width={280}
                height={80}
                className="w-52 h-auto"
              />
            </a>
            <p className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/45 text-xs tracking-widest uppercase mb-4">
              &amp; Kevin B. Woods, Esq.
            </p>
            <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/55 text-sm leading-relaxed">
              Certified Federal &amp; State Circuit Court Mediators serving Sarasota and Southwest
              Florida. Resolving conflict. Restoring solutions.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.2em] uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/60 text-sm hover:text-[#B99B5A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scheduling column */}
          <div>
            <h3 className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.2em] uppercase mb-5">
              Scheduling
            </h3>
            <ul className="space-y-3">
              {scheduleLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/60 text-sm hover:text-[#B99B5A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas column */}
          <div>
            <h3 className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.2em] uppercase mb-5">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {[
                'Personal Injury',
                'Medical / Legal Malpractice',
                'Insurance Disputes',
                'Business Disputes',
                'Real Property',
                'Construction',
                'Contract Disputes',
              ].map((area) => (
                <li key={area}>
                  <a
                    href="#practice-areas"
                    className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/60 text-sm hover:text-[#B99B5A] transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F2F2F0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/35 text-xs text-center">
            &copy; {new Date().getFullYear()} West Coast Mediators. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/35 text-xs text-center">
            Certified Federal &amp; State Circuit Court Mediators &mdash; Sarasota, Florida
          </p>
        </div>
      </div>
    </footer>
  )
}
