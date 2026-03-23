'use client'

import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import StatsStrip from '@/components/sections/StatsStrip'
import CTABanner from '@/components/sections/CTABanner'
import FadeIn from '@/components/motion/FadeIn'
import { useLanguage } from '@/lib/i18n'
import { INDUSTRIES_PAGE, INDUSTRIES_DATA, STATS_DATA } from '@/lib/translations'
import * as Icons from 'lucide-react'

function getIcon(iconName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[iconName]
  return IconComponent || Icons.Building2
}

export default function IndustriesContent() {
  const { locale } = useLanguage()
  const t = INDUSTRIES_PAGE[locale]
  const industries = INDUSTRIES_DATA[locale]
  const stats = STATS_DATA[locale]

  return (
    <>
      <Hero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <StatsStrip stats={stats} />

      <SectionContainer className="bg-cream">
        <div className="space-y-20 lg:space-y-28">
          {industries.map((industry, i) => {
            const Icon = getIcon(industry.icon)
            const isEven = i % 2 === 0
            return (
              <FadeIn key={industry.slug} direction={isEven ? 'left' : 'right'}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-emerald/8 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl text-ink">{industry.title}</h2>
                    </div>
                    <p className="text-ink-subtle leading-relaxed mb-6">{industry.description}</p>
                    <div>
                      <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald mb-3">{t.keyRoles}</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.roles.map((role) => (
                          <span key={role} className="px-3 py-1.5 bg-warm-white border border-stone rounded-lg text-sm text-ink-muted">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="aspect-[4/3] rounded-2xl bg-warm-white border border-stone flex items-center justify-center">
                      <Icon className="w-20 h-20 text-stone" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </SectionContainer>

      <CTABanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primaryCta={{ label: t.ctaPrimary, href: '/employers' }}
        secondaryCta={{ label: t.ctaSecondary, href: '/contact' }}
      />
    </>
  )
}
