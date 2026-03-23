'use client'

import { useLanguage } from '@/lib/i18n'
import { SERVICES_DATA, SERVICES_GRID } from '@/lib/translations'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import Link from 'next/link'
import StarMotif from '@/components/brand/StarMotif'

interface ServicesGridProps {
  showLink?: boolean
  limit?: number
}

export default function ServicesGrid({ showLink = true, limit }: ServicesGridProps) {
  const { locale } = useLanguage()
  const labels = SERVICES_GRID[locale]
  const allServices = SERVICES_DATA[locale]
  const services = limit ? allServices.slice(0, limit) : allServices

  return (
    <SectionContainer className="bg-ink" padding="xl">
      <SectionHeading
        eyebrow={labels.eyebrow}
        title={labels.title}
        subtitle={labels.subtitle}
        dark
      />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
        {services.map((service, i) => (
          <StaggerItem key={service.title}>
            <div className="group py-8 border-b border-white/8 flex gap-6">
              <span className="text-sm font-mono text-emerald/50 mt-1 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-sans font-semibold text-cream mb-2 group-hover:text-emerald-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-dark leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
      {showLink && (
        <div className="mt-12 flex items-center gap-3">
          <StarMotif size={10} className="text-emerald" />
          <Link
            href="/services"
            className="text-sm font-medium text-cream hover:text-emerald-light transition-colors"
          >
            {labels.viewLink}
          </Link>
        </div>
      )}
    </SectionContainer>
  )
}
