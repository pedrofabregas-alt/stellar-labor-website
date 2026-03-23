import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import FAQContent from './content'

export const metadata: Metadata = createMetadata({
  title: 'Frequently Asked Questions',
  description: "Answers to common questions about Stellar Labor's staffing services, worker qualifications, safety protocols, and hiring process.",
  path: '/faq',
})

export default function FAQPage() {
  return <FAQContent />
}
