import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import AboutContent from './content'

export const metadata: Metadata = createMetadata({
  title: 'About Us',
  description: 'Learn about Stellar Labor Professional Services — over 30 years of workforce excellence serving industrial and operational sectors across North America.',
  path: '/about',
})

export default function AboutPage() {
  return <AboutContent />
}
