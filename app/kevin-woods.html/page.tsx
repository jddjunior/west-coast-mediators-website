import type { Metadata } from 'next'
import AttorneyBioPage from '@/components/attorney-bio-page'

export const metadata: Metadata = {
  title: 'Kevin B. Woods, Esq. | Full CV & Bio | West Coast Mediators',
  description: 'Full curriculum vitae and professional biography for Kevin B. Woods, board-certified civil trial lawyer and mediator.',
}

export default function KevinWoodsBioPage() {
  return <AttorneyBioPage attorneyId="kevin" />
}
