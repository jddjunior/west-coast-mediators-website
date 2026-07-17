'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Stephen Brannan', href: '#mediator' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1B2E] shadow-lg shadow-black/20'
          : 'bg-[#0A1B2E]/80 backdrop-blur-sm'
      }`}
    >
      {/* Top bar */}
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
          <a href="#home" className="flex items-center gap-3 group">
            {/* WC Monogram */}
            <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#B99B5A] flex items-center justify-center shrink-0">
              <span className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-lg md:text-xl font-bold italic leading-none">
                WC
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-base md:text-lg font-bold leading-tight tracking-wide">
                West Coast
              </span>
              <div className="flex items-center gap-1.5">
                <div className="h-px w-3 bg-[#B99B5A]" />
                <span className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.2em] uppercase font-semibold">
                  Mediators
                </span>
                <div className="h-px w-3 bg-[#B99B5A]" />
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
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
            <a
              href="#contact"
              className="ml-2 px-4 lg:px-6 py-2 bg-[#B99B5A] text-[#0A1B2E] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-wider uppercase hover:bg-[#c9ab6a] transition-colors duration-200"
            >
              Schedule
            </a>
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
          <div className="px-4 pt-3">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 bg-[#B99B5A] text-[#0A1B2E] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-widest uppercase"
            >
              Schedule Mediation
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
