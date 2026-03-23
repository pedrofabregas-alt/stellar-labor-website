'use client'

import { Shield, Clock, Users, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { VALUE_PROP } from '@/lib/translations'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeIn from '@/components/motion/FadeIn'

const ICONS = [Clock, Shield, Users, TrendingUp]

export default function ValueProposition() {
  const { locale } = useLanguage()
  const labels = VALUE_PROP[locale]

  return (
    <SectionContainer className="bg-warm-white">
      <SectionHeading
        eyebrow={labels.eyebrow}
        title={labels.title}
        subtitle={labels.subtitle}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {labels.values.map((value, i) => {
          const Icon = ICONS[i]
          return (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="group bg-cream rounded-2xl p-8 border border-stone hover:border-emerald/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald/8 flex items-center justify-center group-hover:bg-emerald/15 transition-colors">
                    <Icon className="w-5 h-5 text-emerald" />
                  </div>
                  <span className="text-2xl font-serif text-emerald/70">{value.stat}</span>
                </div>
                <h3 className="text-lg font-sans font-semibold text-ink mb-2">{value.title}</h3>
                <p className="text-sm text-ink-subtle leading-relaxed">{value.description}</p>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </SectionContainer>
  )
}
