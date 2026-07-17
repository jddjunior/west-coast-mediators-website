export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A1B2E]/75" aria-hidden="true" />
      {/* Green tint overlay */}
      <div className="absolute inset-0 bg-[#23423D]/20" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 md:pt-20">
        {/* Eyebrow */}
        <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 md:mb-8">
          Sarasota, Florida
        </p>

        {/* Main heading */}
        <h1 className="font-[family-name:var(--font-display)] text-[#F2F2F0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-balance">
          Resolving Conflict.
          <br />
          <span className="italic">Restoring Solutions.</span>
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 my-6 md:my-8">
          <div className="h-px w-16 md:w-24 bg-[#B99B5A]" />
          <div className="w-1.5 h-1.5 bg-[#B99B5A] rotate-45" />
          <div className="h-px w-16 md:w-24 bg-[#B99B5A]" />
        </div>

        {/* Subheading */}
        <p className="font-[family-name:var(--font-sub)] text-[#B99B5A] text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase font-semibold mb-6">
          Experienced. &nbsp;Impartial. &nbsp;Effective.
        </p>

        {/* Description */}
        <p className="font-[family-name:var(--font-sans)] text-[#F2F2F0]/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12">
          West Coast Mediators are certified Federal and State Circuit Court mediators. We have
          mediated thousands of cases to successful conclusions across many areas of civil law.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#B99B5A] text-[#0A1B2E] font-[family-name:var(--font-sub)] text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#c9ab6a] transition-colors duration-200 min-w-[200px] text-center"
          >
            Schedule Mediation
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 border border-[#F2F2F0]/50 text-[#F2F2F0] font-[family-name:var(--font-sub)] text-sm font-semibold tracking-[0.15em] uppercase hover:border-[#B99B5A] hover:text-[#B99B5A] transition-colors duration-200 min-w-[200px] text-center"
          >
            Learn More
          </a>
        </div>

        {/* Certification badge */}
        <div className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-[#B99B5A]/30 px-5 py-3">
            <div className="w-px h-8 bg-[#B99B5A]" />
            <p className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/70 text-xs tracking-[0.15em] uppercase">
              Certified Federal &amp; State Circuit Court Mediators
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-[#B99B5A]/50" />
        <div className="w-1 h-1 bg-[#B99B5A] rounded-full" />
      </div>
    </section>
  )
}
