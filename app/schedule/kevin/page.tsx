import SchedulingPage from '@/components/scheduling-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule with Kevin B. Woods | West Coast Mediators',
  description:
    'Schedule a mediation session with Kevin B. Woods, Esq. — Board-Certified Civil Trial Attorney and Florida Supreme Court Certified Mediator serving Tampa and Southwest Florida.',
}

const kevin = {
  id: 'kevin',
  name: 'Kevin B. Woods',
  title: 'Esq.',
  subtitle: 'Board-Certified Civil Trial Attorney & Mediator',
  location: 'Tampa, Florida',
  address: '110 N 11th St, Suite 201, Tampa, FL 33602',
  phone: '(813) 222-3620',
  email: 'schedule-kw@westcoastmediators.com',
  receptionistLabel: 'Gulf Coast Mediation Scheduling',
  photo: '/kevin-woods.jpg',
  bio: [
    'Kevin Britt Woods is a third-generation Tampa native and a Board-Certified civil trial attorney with a career spanning over 29 years working exclusively on civil trial matters on behalf of both Defendants and Plaintiffs. He graduated from the University of Florida where he earned both his undergraduate degree and his Juris Doctorate in 1996.',
    'Throughout his career, Kevin has tried cases to final verdict and judgment in the areas of personal injury, products liability, premises liability, trucking accidents, brain injury, medical malpractice, and business litigation — giving him the firsthand perspective to guide parties toward resolution.',
    'Kevin is a Florida Supreme Court Certified Circuit Court Mediator, a Florida Supreme Court Approved Arbitrator, and a Board-Certified Civil Trial Attorney. He is a member of the Florida Bar and practices through Gulf Coast Mediation in Tampa, Florida.',
  ],
  credentials: [
    'Florida Supreme Court Certified Circuit Court Mediator',
    'Florida Supreme Court Approved Arbitrator',
    'Board-Certified Civil Trial Attorney',
    'Member of the Florida Bar',
    '29+ years of civil trial experience — Plaintiff & Defense',
    'University of Florida, J.D. 1996',
  ],
  calendarNote:
    'Use the form below or call Kevin\'s Tampa office directly to schedule. Live calendar availability will be integrated here via our PHP scheduling system.',
  firmPhone: '(941) 792-1695',
  firmEmail: 'schedule-kw@westcoastmediators.com',
}

export default function KevinSchedulePage() {
  return <SchedulingPage attorney={kevin} />
}
