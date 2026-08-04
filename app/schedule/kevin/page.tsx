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
  bio: 'Kevin B. Woods is a Board-Certified civil trial attorney and Florida Supreme Court Certified Mediator with 29+ years of experience on both Plaintiff and Defense sides. His hands-on trial background across Personal Injury, Products Liability, Trucking, Brain Injury, Medical Malpractice, and Business Litigation gives him unique insight as a neutral.',
  calendarNote:
    'Use the form below or call Kevin\'s Tampa office directly to schedule. Live calendar availability will be integrated here via our PHP scheduling system.',
  firmPhone: '(941) 792-1695',
  firmEmail: 'schedule-kw@westcoastmediators.com',
}

export default function KevinSchedulePage() {
  return <SchedulingPage attorney={kevin} />
}
