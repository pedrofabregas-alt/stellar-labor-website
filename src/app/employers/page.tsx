import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import EmployersContent from './content'

export const metadata: Metadata = createMetadata({
  title: 'For Employers',
  description: 'Request skilled workers for your next project. Fast deployment, qualified talent, full compliance — workforce solutions built for industrial operations.',
  path: '/employers',
})

export default function EmployersPage() {
  return <EmployersContent />
}
