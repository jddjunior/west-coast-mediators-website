import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import StatsBanner from '@/components/stats-banner'
import PracticeAreas from '@/components/practice-areas'
import MediatorBio from '@/components/mediator-bio'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBanner />
      <About />
      <PracticeAreas />
      <MediatorBio />
      <Contact />
      <Footer />
    </main>
  )
}
