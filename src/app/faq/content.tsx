'use client'

import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import CTABanner from '@/components/sections/CTABanner'
import AccordionItem from '@/components/ui/AccordionItem'
import FadeIn from '@/components/motion/FadeIn'
import StarMotif from '@/components/brand/StarMotif'
import { useLanguage } from '@/lib/i18n'
import { FAQ_PAGE, FAQ_DATA_I18N } from '@/lib/translations'

export default function FAQContent() {
  const { locale } = useLanguage()
  const t = FAQ_PAGE[locale]
  const faqData = FAQ_DATA_I18N[locale]

  return (
    <>
      <Hero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <SectionContainer className="bg-cream">
        <div className="max-w-3xl mx-auto space-y-14">
          {faqData.map((category) => (
            <FadeIn key={category.category}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <StarMotif size={14} className="text-emerald" />
                  <h2 className="text-xl font-sans font-semibold text-ink">
                    {category.category}
                  </h2>
                </div>
                <div>
                  {category.items.map((faq) => (
                    <AccordionItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      <CTABanner
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primaryCta={{ label: t.ctaPrimary, href: '/contact' }}
        secondaryCta={{ label: t.ctaSecondary, href: 'tel:+18337825527' }}
        variant="light"
      />
    </>
  )
}
