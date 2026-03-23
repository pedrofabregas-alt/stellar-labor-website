import { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.stellarlabor.com'

export function createMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const ogTitle = `${title} | Stellar Labor Professional Services`
  const url = `${BASE_URL}${path}`

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: 'Stellar Labor Professional Services',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
    },
    alternates: { canonical: url },
  }
}
