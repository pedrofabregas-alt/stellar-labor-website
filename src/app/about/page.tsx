import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import StatsStrip from '@/components/sections/StatsStrip'
import CTABanner from '@/components/sections/CTABanner'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import { STATS } from '@/lib/constants'
import { Target, Eye, Shield, Handshake, Award, Heart } from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'About Us',
  description: 'Learn about Stellar Labor Professional Services — over 30 years of workforce excellence serving industrial and operational sectors across North America.',
  path: '/about',
})

const VALUES = [
  { icon: Shield, title: 'Safety First', description: 'Every decision, every deployment, every day — safety is non-negotiable.' },
  { icon: Award, title: 'Excellence', description: 'We hold ourselves to the highest standard of service, talent quality, and operational execution.' },
  { icon: Handshake, title: 'Integrity', description: 'Transparent communication, honest pricing, and commitments we stand behind.' },
  { icon: Heart, title: 'People-Centered', description: 'Our workforce is our strength. We invest in their training, safety, and success.' },
  { icon: Target, title: 'Precision', description: 'Right people, right skills, right time. Every placement is intentional.' },
  { icon: Eye, title: 'Accountability', description: 'We own the outcome. Continuous oversight and performance management on every engagement.' },
]

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Stellar Labor"
        title="Built for the Industries That Build Everything Else"
        subtitle="For over three decades, we've been the trusted workforce partner behind North America's most critical projects — connecting demanding industries with the skilled professionals who keep operations moving."
      />

      {/* Mission & Vision */}
      <SectionContainer className="bg-warm-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn direction="left">
            <div className="border-l-2 border-emerald pl-8">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald mb-4 block">Our Mission</span>
              <h2 className="text-3xl text-ink mb-4">Delivering Workforce Excellence at Scale</h2>
              <p className="text-ink-subtle leading-relaxed">
                We exist to solve one of industry&apos;s most persistent challenges: access to qualified, dependable, safety-conscious talent — exactly when and where you need it. Our mission is to be the workforce partner that operational leaders trust with their most critical projects.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="border-l-2 border-emerald pl-8">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald mb-4 block">Our Vision</span>
              <h2 className="text-3xl text-ink mb-4">The Standard in Industrial Staffing</h2>
              <p className="text-ink-subtle leading-relaxed">
                We&apos;re building the most reliable workforce solutions company in North America — one where every client engagement is defined by speed, quality, safety, and unwavering accountability. A partner that raises the bar for what staffing can deliver.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      <StatsStrip stats={STATS} dark />

      {/* Our Story */}
      <SectionContainer className="bg-cream">
        <SectionHeading
          eyebrow="Our Story"
          title="Three Decades of Operational Excellence"
        />
        <div className="max-w-3xl">
          <FadeIn>
            <div className="space-y-6 text-ink-subtle leading-relaxed">
              <p>
                Stellar Labor Professional Services was founded on a straightforward premise: the industries that power modern infrastructure deserve a workforce partner that operates at their standard — not below it.
              </p>
              <p>
                Starting in the Gulf Coast energy corridor, we built our reputation by delivering skilled tradespeople to oil and gas facilities during peak demand periods. Our ability to mobilize qualified, safety-certified workers faster than anyone else earned the trust of plant managers and project directors across the region.
              </p>
              <p>
                Over three decades, that trust expanded — across industries, across state lines, and across the full spectrum of workforce solutions. Today, we serve eight major industrial sectors across 38 states, deploying over 10,000 workers annually to projects that range from routine maintenance to large-scale capital construction.
              </p>
              <p>
                What hasn&apos;t changed is our standard: every worker we deploy is screened, trained, and operationally ready. Every client engagement is backed by dedicated support and real accountability.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Core Values */}
      <SectionContainer className="bg-warm-white">
        <SectionHeading
          eyebrow="Core Values"
          title="What Drives Every Decision"
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-emerald/8 flex items-center justify-center shrink-0">
                  <value.icon className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <h3 className="text-base font-sans font-semibold text-ink mb-1">{value.title}</h3>
                  <p className="text-sm text-ink-subtle leading-relaxed">{value.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>

      <CTABanner
        title="Partner with a Team That Delivers"
        subtitle="Join the companies that trust Stellar Labor with their most important workforce needs."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />
    </>
  )
}
