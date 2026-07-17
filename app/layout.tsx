import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat, Lato } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sub',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'West Coast Mediators | Stephen G. Brannan, Esq.',
  description:
    'West Coast Mediators are certified Federal and State Circuit Court mediators in Sarasota, Florida. We mediate thousands of cases in Personal Injury, Medical Malpractice, Business, Real Property, and more.',
  keywords: [
    'mediator',
    'mediation',
    'Sarasota',
    'Florida',
    'circuit court mediator',
    'federal mediator',
    'Stephen Brannan',
    'civil litigation',
  ],
  generator: 'v0.app',
  metadataBase: new URL('https://westcoastmediators.com'),
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0A1B2E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${montserrat.variable} ${lato.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
