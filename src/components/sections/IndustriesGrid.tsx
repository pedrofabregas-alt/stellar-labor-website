'use client'

import { INDUSTRIES } from '@/lib/constants'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import StarMotif from '@/components/brand/StarMotif'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

function getIcon(iconName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[iconName]
  return IconComponent || Icons.Building2
}

interface IndustriesGridProps {
  showLink?: boolean
  limit?: number
}

export default function IndustriesGrid({ showLink = true, limit }: IndustriesGridProps) {
  const industries = limit ? INDUSTRIES.slice(0, limit) : INDUSTRIES

  return (
    <SectionContainer className="bg-cream">
      <SectionHeading
        eyebrow="Industries"
        title="Deep Expertise Where It Matters Most"
        subtitle="Specialized workforce solutions across North America's most demanding industrial and operational sectors."
      />
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone rounded-2xl overflow-hidden border border-stone">
        {industries.map((industry) => {
          const Icon = getIcon(industry.icon)
          return (
            <StaggerItem key={industry.slug}>
              <div className="group bg-cream hover:bg-warm-white transition-colors duration-300 p-7 h-full relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald/8 flex items-center justify-center group-hover:bg-emerald/15 transition-colors">
                    <Icon className="w-5 h-5 text-emerald" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-dark opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-base font-sans font-semibold text-ink mb-2">{industry.title}</h3>
                <p className="text-sm text-ink-subtle leading-relaxed line-clamp-3">
                  {industry.description}
                </p>
              </div>
            </StaggerItem>
          )
        })}
      </StaggerChildren>
      {showLink && (
        <div className="mt-10 flex items-center gap-3">
          <StarMotif size={10} className="text-emerald" />
          <Link
            href="/industries"
            className="text-sm font-medium text-ink hover:text-emerald transition-colors"
          >
            Explore all industries we serve
          </Link>
        </div>
      )}
    </SectionContainer>
  )
}
