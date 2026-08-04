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
  photo: '/stephen-brannan-crop.jpg',
  bio: [
    'Stephen G. Brannan has dedicated his legal career to helping parties resolve disputes without the burden and expense of protracted litigation. As a certified Federal and State Circuit Court mediator, he brings a thorough understanding of civil law, sharp analytical skills, and a patient, principled approach to every session.',
    'His experience spans every major category of civil litigation — from personal injury and medical malpractice to complex commercial and real property disputes. Attorneys and insurance professionals across Southwest Florida trust his process to deliver results.',
    'Stephen is certified by the Florida Supreme Court as a Circuit Court Mediator and by the United States District Court as a Federal Mediator. He is a longstanding member of the Florida Bar and has mediated thousands of civil cases to successful resolution throughout Sarasota, Manatee, Charlotte, and surrounding counties.',
  ],
  credentials: [
    'Certified Florida Supreme Court Circuit Court Mediator',
    'Certified Federal District Court Mediator',
    'Member of the Florida Bar',
    'Mediated thousands of civil cases to successful resolution',
    'Extensive experience in complex, multi-party disputes',
    'Serving Sarasota, Manatee, Charlotte and surrounding counties',
  ],
  calendarNote:
    'Use the form below or call directly to schedule with Stephen. Live calendar availability will be integrated here via our PHP scheduling system.',
  firmPhone: '(941) 792-1695',
  firmEmail: 'schedule-sb@westcoastmediators.com',
}

export default function StephenSchedulePage() {
  return <SchedulingPage attorney={stephen} />
}
