'use client'

import Hero from '@/components/sections/Hero'
import IndustriesGrid from '@/components/sections/IndustriesGrid'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import ValueProposition from '@/components/sections/ValueProposition'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'
import { useLanguage } from '@/lib/i18n'
import { HOME } from '@/lib/translations'

export default function HomePage() {
  const { locale } = useLanguage()
  const t = HOME[locale]

  return (
    <>
      <Hero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        primaryCta={{ label: t.primaryCta, href: '/employers' }}
        secondaryCta={{ label: t.secondaryCta, href: '/talent' }}
        variant="home"
      />

      <IndustriesGrid />

      <ValueProposition />

      <ServicesGrid limit={8} />

      <ProcessTimeline />

      <TestimonialsSection />

      <CTABanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primaryCta={{ label: t.ctaPrimary, href: '/employers' }}
        secondaryCta={{ label: t.ctaSecondary, href: '/contact' }}
        variant="dark"
      />
    </>
  )
}
