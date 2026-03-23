import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import StatsStrip from '@/components/sections/StatsStrip'
import CTABanner from '@/components/sections/CTABanner'
import FadeIn from '@/components/motion/FadeIn'
import { INDUSTRIES, STATS } from '@/lib/constants'
import * as Icons from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'Industries We Serve',
  description: 'Stellar Labor provides elite workforce solutions across oil & gas, petrochemical, construction, electrical, offshore, chemical, telecom, and hospitality sectors.',
  path: '/industries',
})

function getIcon(iconName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[iconName]
  return IconComponent || Icons.Building2
}

export default function IndustriesPage() {
  return (
    <>
      <Hero
        eyebrow="Industries"
        title="Deep Expertise Where It Matters Most"
        subtitle="We don't staff generically. Each industry has unique demands — regulatory requirements, safety protocols, specialized skills. We know yours."
      />

      <StatsStrip stats={STATS} />

      <SectionContainer className="bg-cream">
        <div className="space-y-20 lg:space-y-28">
          {INDUSTRIES.map((industry, i) => {
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
                      <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald mb-3">Key Roles We Fill</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.roles.map((role) => (
                          <span key={role} className="px-3 py-1.5 bg-warm-white border border-stone rounded-lg text-sm text-ink-muted">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Visual placeholder — replace with real photography */}
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
        title="Need Workers for Your Industry?"
        subtitle="Tell us about your project and we'll match you with qualified talent from our pre-vetted network."
        primaryCta={{ label: 'Request Talent', href: '/employers' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
