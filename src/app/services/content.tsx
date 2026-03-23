'use client'

import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import CTABanner from '@/components/sections/CTABanner'
import FadeIn from '@/components/motion/FadeIn'
import { useLanguage } from '@/lib/i18n'
import { SERVICES_PAGE, SERVICES_DATA } from '@/lib/translations'
import { CheckCircle } from 'lucide-react'

export default function ServicesContent() {
  const { locale } = useLanguage()
  const t = SERVICES_PAGE[locale]
  const services = SERVICES_DATA[locale]

  return (
    <>
      <Hero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <SectionContainer className="bg-cream">
        <div className="space-y-0">
          {services.map((service, i) => (
            <FadeIn key={service.title}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start py-10 border-b border-stone last:border-b-0">
                <div className="lg:col-span-1">
                  <span className="text-4xl font-serif text-stone">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="lg:col-span-11">
                  <h2 className="text-xl lg:text-2xl text-ink mb-3">{service.title}</h2>
                  <p className="text-ink-subtle leading-relaxed mb-5 max-w-3xl">{service.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald shrink-0" />
                        <span className="text-sm text-ink-muted">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      <ProcessTimeline />

      <CTABanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primaryCta={{ label: t.ctaPrimary, href: '/employers' }}
        secondaryCta={{ label: t.ctaSecondary, href: '/contact' }}
      />
    </>
  )
}
