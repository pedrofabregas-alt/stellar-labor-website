'use client'

import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/sections/CTABanner'
import CountUp from '@/components/motion/CountUp'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import { useLanguage } from '@/lib/i18n'
import { SAFETY } from '@/lib/translations'
import { Shield, BookOpen, HardHat, ClipboardCheck, AlertTriangle, BadgeCheck } from 'lucide-react'

const PILLAR_ICONS = [BookOpen, ClipboardCheck, AlertTriangle, HardHat, BadgeCheck, Shield]

export default function SafetyContent() {
  const { locale } = useLanguage()
  const t = SAFETY[locale]

  return (
    <>
      <Hero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      {/* Safety Stats */}
      <section className="bg-ink py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl sm:text-5xl font-serif text-cream">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-stone-dark">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Philosophy */}
      <SectionContainer className="bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald mb-4 block">{t.commitEyebrow}</span>
              <h2 className="text-3xl lg:text-4xl text-ink mb-6">{t.commitTitle}</h2>
              <p className="text-ink-subtle leading-relaxed text-lg">{t.commitText}</p>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Safety Pillars */}
      <SectionContainer className="bg-warm-white">
        <SectionHeading
          eyebrow={t.pillarsEyebrow}
          title={t.pillarsTitle}
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i]
            return (
              <StaggerItem key={pillar.title}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <h3 className="text-base font-sans font-semibold text-ink mb-1">{pillar.title}</h3>
                    <p className="text-sm text-ink-subtle leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </SectionContainer>

      {/* Certifications */}
      <SectionContainer className="bg-cream">
        <SectionHeading
          eyebrow={t.certsEyebrow}
          title={t.certsTitle}
          subtitle={t.certsSubtitle}
        />
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.certifications.map((cert) => (
            <StaggerItem key={cert}>
              <div className="bg-warm-white rounded-xl p-5 border border-stone text-center">
                <BadgeCheck className="w-8 h-8 text-emerald mx-auto mb-2" />
                <p className="text-sm font-medium text-ink">{cert}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>

      <CTABanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primaryCta={{ label: t.ctaPrimary, href: '/contact' }}
      />
    </>
  )
}
