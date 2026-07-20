'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import WestCoastLogo from '@/components/west-coast-logo'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Practice Areas', href: '/#practice-areas' },
  { label: 'Our Mediators', href: '/#mediators' },
  { label: 'Contact', href: '/#contact' },
]

const scheduleLinks = [
  { label: 'Schedule a Mediation', href: '/schedule', sub: 'Choose a mediator' },
  { label: 'Stephen G. Brannan', href: '/schedule/stephen', sub: 'Sarasota, FL' },
  { label: 'Kevin B. Woods', href: '/schedule/kevin', sub: 'Tampa, FL' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scheduleOpen, setScheduleOpen] = useState(false)
  const [mobileScheduleOpen, setMobileScheduleOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setScheduleOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1B2E] shadow-lg shadow-black/20'
          : 'bg-[#0A1B2E]/80 backdrop-blur-sm'
      }`}
    >
      {/* Top contact bar */}
      <div className="bg-[#23423D] py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-8">
          <a
            href="tel:9417921695"
            className="flex items-center gap-2 text-[#B99B5A] text-sm font-[family-name:var(--font-sub)] tracking-wide hover:text-[#F2F2F0] transition-colors"
          >
            <Phone size={13} />
            (941) 792-1695
          </a>
          <a
            href="mailto:scheduling@westcoastmediators.com"
            className="text-[#F2F2F0]/80 text-sm font-[family-name:var(--font-sub)] tracking-wide hover:text-[#B99B5A] transition-colors"
          >
            scheduling@westcoastmediators.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="/" aria-label="West Coast Mediators — Home" className="shrink-0">
            <WestCoastLogo height={44} variant="light" showByline={false} className="hidden md:block" />
            <WestCoastLogo height={36} variant="light" showByline={false} className="md:hidden" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 lg:px-4 py-2 text-[#F2F2F0]/80 hover:text-[#B99B5A] font-[family-name:var(--font-sub)] text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#B99B5A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Schedule dropdown */}
            <div className="relative ml-2" ref={dropdownRef}>
              <button
                onClick={() => setScheduleOpen(!scheduleOpen)}
                className="flex items-center gap-1.5 px-4 lg:px-6 py-2 bg-[#B99B5A] text-[#0A1B2E] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-wider uppercase hover:bg-[#c9ab6a] transition-colors duration-200"
                aria-expanded={scheduleOpen}
                aria-haspopup="true"
              >
                Schedule
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${scheduleOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {scheduleOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 bg-[#0A1B2E] border border-[#B99B5A]/30 shadow-xl shadow-black/40 z-50">
                  {scheduleLinks.map((link, i) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setScheduleOpen(false)}
                      className={`flex flex-col px-4 py-3 hover:bg-[#23423D] transition-colors group ${
                        i < scheduleLinks.length - 1 ? 'border-b border-[#B99B5A]/15' : ''
                      }`}
                    >
                      <span className="font-[family-name:var(--font-sub)] text-[#F2F2F0] text-sm group-hover:text-[#B99B5A] transition-colors">
                        {link.label}
                      </span>
                      <span className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/40 text-xs mt-0.5">
                        {link.sub}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#F2F2F0] p-2 hover:text-[#B99B5A] transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-[#0A1B2E] border-t border-[#B99B5A]/30 pb-4"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center gap-4 px-4 py-3 bg-[#23423D]/50">
            <a
              href="tel:9417921695"
              className="flex items-center gap-2 text-[#B99B5A] text-sm font-[family-name:var(--font-sub)]"
            >
              <Phone size={13} />
              (941) 792-1695
            </a>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-[#F2F2F0]/80 hover:text-[#B99B5A] hover:bg-[#23423D]/30 font-[family-name:var(--font-sub)] text-sm tracking-wide transition-colors border-b border-white/5"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile schedule accordion */}
          <div className="border-b border-white/5">
            <button
              onClick={() => setMobileScheduleOpen(!mobileScheduleOpen)}
              className="w-full flex items-center justify-between px-6 py-3 text-[#B99B5A] font-[family-name:var(--font-sub)] text-sm tracking-wide font-semibold"
            >
              Schedule
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mobileScheduleOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileScheduleOpen && (
              <div className="bg-[#23423D]/20">
                {scheduleLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-8 py-2.5 text-[#F2F2F0]/70 hover:text-[#B99B5A] font-[family-name:var(--font-sub)] text-sm tracking-wide transition-colors border-b border-white/5"
                  >
                    {link.label}
                    <span className="text-[#F2F2F0]/35 text-xs">{link.sub}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
