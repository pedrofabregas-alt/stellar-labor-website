import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import IndustriesContent from './content'

export const metadata: Metadata = createMetadata({
  title: 'Industries We Serve',
  description: 'Stellar Labor provides elite workforce solutions across oil & gas, petrochemical, construction, electrical, offshore, chemical, telecom, and hospitality sectors.',
  path: '/industries',
})

export default function IndustriesPage() {
  return <IndustriesContent />
}
