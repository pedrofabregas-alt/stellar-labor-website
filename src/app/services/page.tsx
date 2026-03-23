import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import CTABanner from '@/components/sections/CTABanner'
import FadeIn from '@/components/motion/FadeIn'
import { SERVICES } from '@/lib/constants'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'Our Services',
  description: 'Comprehensive workforce solutions: skilled trades staffing, general labor, contract staffing, direct hire, project-based workforce support, and on-demand labor.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Workforce Solutions Engineered for Performance"
        subtitle="Every service we offer is built around one objective: getting the right people to your site, qualified and ready, as fast as possible."
      />

      <SectionContainer className="bg-cream">
        <div className="space-y-0">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start py-10 border-b border-stone last:border-b-0">
                <div className="lg:col-span-1">
                  <span className="text-4xl font-serif text-stone">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="lg:col-span-11">
                  <h2 className="text-xl lg:text-2xl text-ink mb-3">{service.title}</h2>
                  <p className="text-ink-subtle leading-relaxed mb-5 max-w-3xl">{service.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald shrink-0" />
                        <span className="text-sm text-ink-muted">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      <ProcessTimeline />

      <CTABanner
        title="Let's Build Your Workforce Solution"
        subtitle="Every engagement starts with understanding your needs. Let's talk."
        primaryCta={{ label: 'Request Talent', href: '/employers' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
