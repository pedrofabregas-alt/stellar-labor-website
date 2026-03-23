'use client'

import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'
import EmployerForm from '@/components/forms/EmployerForm'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import { useLanguage } from '@/lib/i18n'
import { EMPLOYERS } from '@/lib/translations'
import { CheckCircle, Clock, Shield, TrendingUp, Users, FileCheck, Headphones } from 'lucide-react'

const CHALLENGE_ICONS = [Clock, Users, Shield, FileCheck, TrendingUp, Headphones]

export default function EmployersContent() {
  const { locale } = useLanguage()
  const t = EMPLOYERS[locale]

  return (
    <>
      <Hero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        primaryCta={{ label: t.primaryCta, href: '#inquiry' }}
        secondaryCta={{ label: t.secondaryCta, href: 'tel:+18337825527' }}
      />

      {/* Challenges */}
      <SectionContainer className="bg-warm-white">
        <SectionHeading
          eyebrow={t.challengesEyebrow}
          title={t.challengesTitle}
          subtitle={t.challengesSubtitle}
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.challenges.map((item, i) => {
            const Icon = CHALLENGE_ICONS[i]
            return (
              <StaggerItem key={item.title}>
                <div className="flex gap-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <h3 className="text-base font-sans font-semibold text-ink mb-1">{item.title}</h3>
                    <p className="text-sm text-ink-subtle leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </SectionContainer>

      {/* Why Clients Choose Stellar */}
      <SectionContainer className="bg-ink" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald mb-4 block">
                {t.advantageEyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl text-cream mb-6">
                {t.advantageTitle}
              </h2>
              <div className="space-y-4">
                {t.advantageItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span className="text-stone-dark text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Users className="w-24 h-24 text-white/10" />
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      <ProcessTimeline />

      <TestimonialsSection />

      {/* Inquiry Form */}
      <SectionContainer id="inquiry" className="bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow={t.formEyebrow}
            title={t.formTitle}
            subtitle={t.formSubtitle}
            align="center"
          />
          <EmployerForm />
        </div>
      </SectionContainer>

      <CTABanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primaryCta={{ label: t.ctaPrimary, href: 'tel:+18337825527' }}
        secondaryCta={{ label: t.ctaSecondary, href: 'mailto:info@stellarlabor.com' }}
      />
    </>
  )
}
