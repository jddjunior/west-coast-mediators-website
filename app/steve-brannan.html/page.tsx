import type { Metadata } from 'next'
import AttorneyBioPage from '@/components/attorney-bio-page'

export const metadata: Metadata = {
  title: 'Stephen G. Brannan, Esq. | Full CV & Bio | West Coast Mediators',
  description: 'Full curriculum vitae and professional biography for Stephen G. Brannan, Esq., certified Federal and State Circuit Court mediator.',
}

export default function StephenBrannanBioPage() {
  return <AttorneyBioPage attorneyId="stephen" />
}
