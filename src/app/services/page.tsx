import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import ServicesContent from './content'

export const metadata: Metadata = createMetadata({
  title: 'Our Services',
  description: 'Comprehensive workforce solutions: skilled trades staffing, general labor, contract staffing, direct hire, project-based workforce support, and on-demand labor.',
  path: '/services',
})

export default function ServicesPage() {
  return <ServicesContent />
}
