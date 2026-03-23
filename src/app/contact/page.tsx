import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import ContactContent from './content'

export const metadata: Metadata = createMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Stellar Labor Professional Services. Employer inquiries, talent applications, and general questions — we respond within 24 hours.',
  path: '/contact',
})

export default function ContactPage() {
  return <ContactContent />
}
