'use client'

import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import StatsStrip from '@/components/sections/StatsStrip'
import CTABanner from '@/components/sections/CTABanner'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import { useLanguage } from '@/lib/i18n'
import { ABOUT, STATS_DATA } from '@/lib/translations'
import { Target, Eye, Shield, Handshake, Award, Heart } from 'lucide-react'

const ICONS = [Shield, Award, Handshake, Heart, Target, Eye]

export default function AboutContent() {
  const { locale } = useLanguage()
  const t = ABOUT[locale]
  const stats = STATS_DATA[locale]

  return (
    <>
      <Hero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      {/* Mission & Vision */}
      <SectionContainer className="bg-warm-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn direction="left">
            <div className="border-l-2 border-emerald pl-8">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald mb-4 block">{t.missionEyebrow}</span>
              <h2 className="text-3xl text-ink mb-4">{t.missionTitle}</h2>
              <p className="text-ink-subtle leading-relaxed">{t.missionText}</p>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="border-l-2 border-emerald pl-8">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald mb-4 block">{t.visionEyebrow}</span>
              <h2 className="text-3xl text-ink mb-4">{t.visionTitle}</h2>
              <p className="text-ink-subtle leading-relaxed">{t.visionText}</p>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      <StatsStrip stats={stats} dark />

      {/* Our Story */}
      <SectionContainer className="bg-cream">
        <SectionHeading
          eyebrow={t.storyEyebrow}
          title={t.storyTitle}
        />
        <div className="max-w-3xl">
          <FadeIn>
            <div className="space-y-6 text-ink-subtle leading-relaxed">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p>{t.storyP3}</p>
              <p>{t.storyP4}</p>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Core Values */}
      <SectionContainer className="bg-warm-white">
        <SectionHeading
          eyebrow={t.valuesEyebrow}
          title={t.valuesTitle}
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.values.map((value, i) => {
            const Icon = ICONS[i]
            return (
              <StaggerItem key={value.title}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <h3 className="text-base font-sans font-semibold text-ink mb-1">{value.title}</h3>
                    <p className="text-sm text-ink-subtle leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </SectionContainer>

      <CTABanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primaryCta={{ label: t.ctaPrimary, href: '/contact' }}
        secondaryCta={{ label: t.ctaSecondary, href: '/services' }}
      />
    </>
  )
}
