'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(941) 792-1695',
    href: 'tel:9417921695',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'scheduling@westcoastmediators.com',
    href: 'mailto:scheduling@westcoastmediators.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sarasota, Florida',
    href: null,
  },
  {
    icon: Clock,
    label: 'Scheduling',
    value: 'Contact us to schedule',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    matter: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production this would POST to an API route
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#23423D] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #F2F2F0 0px, #F2F2F0 1px, transparent 0px, transparent 50%)',
          backgroundSize: '25px 25px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Schedule a Mediation
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#B99B5A]" />
            <div className="w-1.5 h-1.5 bg-[#B99B5A] rotate-45" />
            <div className="h-px w-12 bg-[#B99B5A]" />
          </div>
          <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/65 text-base leading-relaxed">
            Ready to resolve your dispute? Contact our scheduling coordinator to arrange your
            mediation session. We respond promptly to all inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-[#0A1B2E]/30 border border-[#F2F2F0]/10 p-5"
              >
                <div className="w-10 h-10 border border-[#B99B5A]/40 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-[#B99B5A]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/50 text-xs tracking-wider uppercase mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-[family-name:var(--font-sans)] text-[#F2F2F0] text-sm hover:text-[#B99B5A] transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0] text-sm">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Direct CTA box */}
            <div className="bg-[#B99B5A] p-6 mt-2">
              <p className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-xl font-bold mb-2">
                Ready to schedule?
              </p>
              <p className="font-[family-name:var(--font-sans)] text-[#0A1B2E]/80 text-sm leading-relaxed mb-4">
                Choose your mediator and select a date that works for all parties.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/schedule"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A1B2E] text-[#F2F2F0] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-wider uppercase px-5 py-3 hover:bg-[#23423D] transition-colors"
                >
                  Choose Your Mediator
                </a>
                <a
                  href="tel:9417921695"
                  className="inline-flex items-center justify-center gap-2 border border-[#0A1B2E] text-[#0A1B2E] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-wider uppercase px-5 py-3 hover:bg-[#0A1B2E]/10 transition-colors"
                >
                  <Phone size={14} />
                  (941) 792-1695
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-[#F2F2F0] p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 border-2 border-[#23423D] flex items-center justify-center mb-6">
                  <Send size={24} className="text-[#23423D]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-2xl font-bold mb-3">
                  Message Received
                </h3>
                <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-base leading-relaxed max-w-sm">
                  Thank you for reaching out. We will respond to your inquiry within one business
                  day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-[#0A1B2E] text-xl font-bold mb-1">
                    Send Us a Message
                  </p>
                  <p className="font-[family-name:var(--font-sans)] text-[#5A6B66] text-sm">
                    All fields marked * are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-wider uppercase mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-[#d5d3d0] bg-white px-4 py-3 text-[#0A1B2E] font-[family-name:var(--font-sans)] text-sm focus:outline-none focus:border-[#23423D] transition-colors placeholder:text-[#A7A9AC]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-wider uppercase mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-[#d5d3d0] bg-white px-4 py-3 text-[#0A1B2E] font-[family-name:var(--font-sans)] text-sm focus:outline-none focus:border-[#23423D] transition-colors placeholder:text-[#A7A9AC]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-wider uppercase mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-[#d5d3d0] bg-white px-4 py-3 text-[#0A1B2E] font-[family-name:var(--font-sans)] text-sm focus:outline-none focus:border-[#23423D] transition-colors placeholder:text-[#A7A9AC]"
                      placeholder="(941) 000-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="matter"
                      className="block font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-wider uppercase mb-1.5"
                    >
                      Matter Type *
                    </label>
                    <select
                      id="matter"
                      name="matter"
                      required
                      value={form.matter}
                      onChange={handleChange}
                      className="w-full border border-[#d5d3d0] bg-white px-4 py-3 text-[#0A1B2E] font-[family-name:var(--font-sans)] text-sm focus:outline-none focus:border-[#23423D] transition-colors"
                    >
                      <option value="">Select type...</option>
                      <option>Personal Injury</option>
                      <option>Medical / Legal Malpractice</option>
                      <option>Insurance Dispute</option>
                      <option>Business Dispute</option>
                      <option>Real Property</option>
                      <option>Construction</option>
                      <option>Contract Dispute</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-[family-name:var(--font-sub)] text-[#0A1B2E] text-xs tracking-wider uppercase mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-[#d5d3d0] bg-white px-4 py-3 text-[#0A1B2E] font-[family-name:var(--font-sans)] text-sm focus:outline-none focus:border-[#23423D] transition-colors placeholder:text-[#A7A9AC] resize-none"
                    placeholder="Briefly describe the nature of your dispute and preferred scheduling..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#23423D] text-[#F2F2F0] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#0A1B2E] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
