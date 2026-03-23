'use client'

import { useLanguage } from '@/lib/i18n'
import { PROCESS_DATA, PROCESS_PAGE } from '@/lib/translations'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'

export default function ProcessTimeline() {
  const { locale } = useLanguage()
  const labels = PROCESS_PAGE[locale]
  const steps = PROCESS_DATA[locale]

  return (
    <SectionContainer className="bg-cream">
      <SectionHeading
        eyebrow={labels.eyebrow}
        title={labels.title}
        subtitle={labels.subtitle}
      />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, i) => (
          <StaggerItem key={step.number}>
            <div className="relative">
              {/* Step number */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-6xl font-serif text-stone leading-none">{step.number}</span>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-stone" />
                )}
              </div>
              <h3 className="text-base font-sans font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-ink-subtle leading-relaxed">{step.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionContainer>
  )
}
