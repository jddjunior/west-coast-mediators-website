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
  photo: 'https://cdn.builder.io/api/v1/image/assets%2F57fd5e85f28146269960c5b0fe53c10e%2Fc36816fce80648e9b50804949a57bdf5?format=webp&width=800&height=1200',
  bio: 'Kevin B. Woods is a Board-Certified civil trial attorney and Florida Supreme Court Certified Mediator with 29+ years of experience on both Plaintiff and Defense sides. His hands-on trial background across Personal Injury, Products Liability, Trucking, Brain Injury, Medical Malpractice, and Business Litigation gives him unique insight as a neutral.',
  calendarNote:
    'Review Kevin\'s live calendar below, then send a scheduling request or call his Tampa office directly to confirm availability.',
  firmPhone: '(941) 792-1695',
  firmEmail: 'schedule-kw@westcoastmediators.com',
  // Kevin doesn't have his own dedicated calendar file on the legacy server
  // (webcalendar_kevin/month.php 404s), so fall back to the working one.
  calendarSrc: 'https://www.westcoastmediators.com/webcalendar_joe/month.php',
}

export default function KevinSchedulePage() {
  return <SchedulingPage attorney={kevin} />
}
