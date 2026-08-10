import SchedulingPage from '@/components/scheduling-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule with Stephen G. Brannan | West Coast Mediators',
  description:
    'Schedule a mediation session with Stephen G. Brannan, Esq. — Certified Federal and State Circuit Court Mediator serving Sarasota and Southwest Florida.',
}

const stephen = {
  id: 'stephen',
  name: 'Stephen G. Brannan',
  title: 'Esq.',
  subtitle: 'Certified Circuit & Federal Court Mediator',
  location: 'Sarasota, Florida',
  address: 'Sarasota, Florida',
  phone: '(941) 792-1695',
  email: 'schedule-sb@westcoastmediators.com',
  receptionistLabel: 'West Coast Mediators Scheduling Office',
  photo: 'https://cdn.builder.io/api/v1/image/assets%2F57fd5e85f28146269960c5b0fe53c10e%2Fe21b3bbb61244e2c8377afe9dbf6d5d4?format=webp&width=800&height=1200',
  bio: 'Stephen G. Brannan is a certified Federal and State Circuit Court mediator with decades of civil litigation experience. He has mediated thousands of cases across Personal Injury, Medical Malpractice, Business, Real Property, Construction, and Contract disputes throughout Southwest Florida.',
  calendarNote:
    'Review Stephen\'s live calendar below, then send a scheduling request or call directly to confirm your mediation session.',
  firmPhone: '(941) 792-1695',
  firmEmail: 'schedule-sb@westcoastmediators.com',
  calendarSrc: 'https://www.westcoastmediators.com/webcalendar_joe/month.php',
}

export default function StephenSchedulePage() {
  return <SchedulingPage attorney={stephen} />
}
