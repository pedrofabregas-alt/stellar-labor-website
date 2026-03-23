import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import SafetyContent from './content'

export const metadata: Metadata = createMetadata({
  title: 'Safety & Compliance',
  description: 'Stellar Labor maintains an industry-leading safety record with comprehensive training, OSHA compliance, and rigorous safety protocols on every engagement.',
  path: '/safety',
})

export default function SafetyPage() {
  return <SafetyContent />
}
