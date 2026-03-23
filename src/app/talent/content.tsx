'use client'

import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/sections/CTABanner'
import TalentForm from '@/components/forms/TalentForm'
import AccordionItem from '@/components/ui/AccordionItem'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import { useLanguage } from '@/lib/i18n'
import { TALENT, INDUSTRIES_DATA, FAQ_DATA_I18N } from '@/lib/translations'
import { DollarSign, Shield, Briefcase, GraduationCap, MapPin, Clock } from 'lucide-react'

const BENEFIT_ICONS = [DollarSign, Shield, Briefcase, GraduationCap, MapPin, Clock]

export default function TalentContent() {
  const { locale } = useLanguage()
  const t = TALENT[locale]
  const industries = INDUSTRIES_DATA[locale]
  const faqData = FAQ_DATA_I18N[locale]
  const workerFAQ = faqData.find((cat) =>
    locale === 'es' ? cat.category === 'Para Trabajadores' : cat.category === 'For Workers'
  )

  return (
    <>
      <Hero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        primaryCta={{ label: t.primaryCta, href: '#apply' }}
        secondaryCta={{ label: t.secondaryCta, href: '/industries' }}
      />

      {/* Benefits */}
      <SectionContainer className="bg-warm-white">
        <SectionHeading
          eyebrow={t.benefitsEyebrow}
          title={t.benefitsTitle}
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.benefits.map((benefit, i) => {
            const Icon = BENEFIT_ICONS[i]
            return (
              <StaggerItem key={benefit.title}>
                <div className="flex gap-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <h3 className="text-base font-sans font-semibold text-ink mb-1">{benefit.title}</h3>
                    <p className="text-sm text-ink-subtle leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </SectionContainer>

      {/* Industries hiring */}
      <SectionContainer className="bg-cream">
        <SectionHeading
          eyebrow={t.hiringEyebrow}
          title={t.hiringTitle}
          subtitle={t.hiringSubtitle}
        />
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <div className="bg-warm-white rounded-xl p-5 border border-stone text-center hover:border-emerald/30 transition-colors">
                <h3 className="text-sm font-semibold text-ink">{industry.title}</h3>
                <p className="text-xs text-ink-subtle mt-1">{industry.roles.length}+ {t.rolesPlus}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>

      {/* Application Form */}
      <SectionContainer id="apply" className="bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow={t.applyEyebrow}
            title={t.applyTitle}
            subtitle={t.applySubtitle}
            align="center"
          />
          <TalentForm />
        </div>
      </SectionContainer>

      {/* FAQ */}
      {workerFAQ && (
        <SectionContainer className="bg-cream">
          <SectionHeading
            eyebrow={t.faqEyebrow}
            title={t.faqTitle}
          />
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div>
                {workerFAQ.items.map((faq) => (
                  <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </FadeIn>
          </div>
        </SectionContainer>
      )}

      <CTABanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primaryCta={{ label: t.ctaPrimary, href: '#apply' }}
        secondaryCta={{ label: t.ctaSecondary, href: 'mailto:careers@stellarlabor.com' }}
        variant="light"
      />
    </>
  )
}
