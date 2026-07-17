const stats = [
  { value: 'Thousands', label: 'Cases Mediated' },
  { value: 'Federal', label: 'Court Certified' },
  { value: 'State', label: 'Circuit Court Certified' },
  { value: 'SW Florida', label: 'Serving Since Decades' },
]

export default function StatsBanner() {
  return (
    <div className="bg-[#0A1B2E] border-y border-[#B99B5A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#B99B5A]/20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <p className="font-[family-name:var(--font-display)] text-[#B99B5A] text-2xl md:text-3xl font-bold mb-1.5">
                {stat.value}
              </p>
              <p className="font-[family-name:var(--font-sub)] text-[#F2F2F0]/50 text-xs tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
