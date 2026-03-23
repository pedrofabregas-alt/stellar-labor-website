import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import TalentContent from './content'

export const metadata: Metadata = createMetadata({
  title: 'Careers & Opportunities',
  description: 'Join the Stellar Labor workforce. Competitive pay, safety training, diverse project opportunities across oil & gas, construction, electrical, and more.',
  path: '/talent',
})

export default function TalentPage() {
  return <TalentContent />
}
