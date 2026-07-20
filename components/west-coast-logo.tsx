interface WestCoastLogoProps {
  /** overall height in px — width scales proportionally (≈ 3.5:1 ratio) */
  height?: number
  /** 'light' = white/gold on dark bg (navbar/footer), 'dark' = navy/gold on light bg */
  variant?: 'light' | 'dark'
  /** show the "Stephen G. Brannan, Esq." byline */
  showByline?: boolean
  className?: string
}

export default function WestCoastLogo({
  height = 56,
  variant = 'light',
  showByline = true,
  className = '',
}: WestCoastLogoProps) {
  const navy  = variant === 'light' ? '#F2F2F0' : '#0A1B2E'
  const gold  = '#B99B5A'
  const byline = variant === 'light' ? '#F2F2F0' : '#0A1B2E'

  // viewBox is 420 × 120 — scale via height prop
  const w = (height * 420) / 120

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 120"
      width={w}
      height={height}
      aria-label="West Coast Mediators"
      role="img"
      className={className}
    >
      {/* ── MONOGRAM MARK ── */}
      {/* Outer navy square */}
      <rect x="4"  y="4"  width="88" height="112" fill="none" stroke={navy} strokeWidth="2.5" />
      {/* Inner gold square (offset bottom-right) */}
      <rect x="10" y="10" width="88" height="112" fill="none" stroke={gold} strokeWidth="1.5" />

      {/* "W" — navy, large, slightly left-shifted */}
      <text
        x="22"
        y="82"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="72"
        fontWeight="700"
        fill={navy}
        letterSpacing="-2"
      >
        W
      </text>

      {/* "C" — gold, overlapping W, shifted right & down */}
      <text
        x="44"
        y="98"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="56"
        fontWeight="700"
        fill={gold}
      >
        C
      </text>

      {/* ── VERTICAL DIVIDER ── */}
      <line x1="112" y1="12" x2="112" y2="108" stroke={navy} strokeWidth="1.5" opacity="0.7" />

      {/* ── WORDMARK ── */}
      {/* "WEST COAST" */}
      <text
        x="126"
        y="52"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="34"
        fontWeight="700"
        fill={navy}
        letterSpacing="1"
      >
        West Coast
      </text>

      {/* Gold rule left */}
      <line x1="126" y1="65" x2="155" y2="65" stroke={gold} strokeWidth="1.2" />
      {/* "MEDIATORS" */}
      <text
        x="162"
        y="70"
        fontFamily="'Montserrat', 'Arial', sans-serif"
        fontSize="13"
        fontWeight="600"
        fill={gold}
        letterSpacing="4"
      >
        MEDIATORS
      </text>
      {/* Gold rule right */}
      <line x1="276" y1="65" x2="414" y2="65" stroke={gold} strokeWidth="1.2" />

      {/* Byline */}
      {showByline && (
        <text
          x="126"
          y="90"
          fontFamily="'Montserrat', 'Arial', sans-serif"
          fontSize="9.5"
          fontWeight="500"
          fill={byline}
          letterSpacing="3"
          opacity={variant === 'light' ? 0.65 : 0.7}
        >
          STEPHEN G. BRANNAN, ESQ.
        </text>
      )}
    </svg>
  )
}
