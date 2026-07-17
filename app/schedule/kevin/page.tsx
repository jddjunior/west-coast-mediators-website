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
  phone: '(941) 792-1695',
  email: 'scheduling@westcoastmediators.com',
  photo: '/kevin-woods.jpg',
  bio: 'Kevin B. Woods is a Board-Certified civil trial attorney and Florida Supreme Court Certified Mediator with 29+ years of experience on both Plaintiff and Defense sides. His hands-on trial background across Personal Injury, Products Liability, Trucking, Brain Injury, Medical Malpractice, and Business Litigation gives him unique insight as a neutral.',
  calendarNote:
    'This calendar will connect to our PHP-based scheduling system. When live, attorneys and parties will be able to view Kevin\'s real-time availability, request session dates, and receive automated confirmation emails directly from this page.',
}

export default function KevinSchedulePage() {
  return <SchedulingPage attorney={kevin} />
}
