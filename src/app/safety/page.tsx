import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/sections/CTABanner'
import CountUp from '@/components/motion/CountUp'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import { Shield, BookOpen, HardHat, ClipboardCheck, AlertTriangle, BadgeCheck } from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'Safety & Compliance',
  description: 'Stellar Labor maintains an industry-leading safety record with comprehensive training, OSHA compliance, and rigorous safety protocols on every engagement.',
  path: '/safety',
})

const CERTIFICATIONS = [
  'OSHA 10/30 Hour Training',
  'ISNetworld Certified',
  'DISA Compliant',
  'TWIC Card Program',
  'H2S Awareness Training',
  'First Aid / CPR Certified',
  'Confined Space Entry',
  'Fall Protection Certified',
]

const SAFETY_PILLARS = [
  { icon: BookOpen, title: 'Comprehensive Training', description: 'Every worker completes our safety orientation program before deployment. Site-specific training is provided for specialized environments.' },
  { icon: ClipboardCheck, title: 'Pre-Employment Screening', description: 'Background checks, drug testing, skills assessment, and credential verification on every worker — no exceptions.' },
  { icon: AlertTriangle, title: 'Hazard Awareness', description: 'Continuous hazard identification, Job Safety Analysis (JSA), and real-time safety monitoring at all active job sites.' },
  { icon: HardHat, title: 'PPE Standards', description: 'Strict personal protective equipment standards enforced and audited. Workers arrive equipped and compliant.' },
  { icon: BadgeCheck, title: 'Regulatory Compliance', description: 'Full compliance with OSHA, state, and site-specific safety regulations. Updated protocols and documentation maintained continuously.' },
  { icon: Shield, title: 'Incident Response', description: 'Established incident reporting, investigation, and corrective action procedures. Root cause analysis drives continuous improvement.' },
]

const SAFETY_STATS = [
  { value: 99.2, suffix: '%', label: 'Safety Compliance Rate' },
  { value: 500, suffix: '+', label: 'Safety Trainings / Year' },
  { value: 0, suffix: '', label: 'Target Incidents' },
  { value: 100, suffix: '%', label: 'Workers Screened' },
]

export default function SafetyPage() {
  return (
    <>
      <Hero
        eyebrow="Safety & Compliance"
        title="Safety Is Not a Priority. It's a Prerequisite."
        subtitle="In the industries we serve, safety is the foundation everything else is built on. Our protocols, training, and culture reflect that — without compromise."
      />

      {/* Safety Stats */}
      <section className="bg-ink py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {SAFETY_STATS.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl sm:text-5xl font-serif text-cream">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-stone-dark">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Philosophy */}
      <SectionContainer className="bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald mb-4 block">Our Commitment</span>
              <h2 className="text-3xl lg:text-4xl text-ink mb-6">
                Zero Incidents Is the Only Acceptable Target
              </h2>
              <p className="text-ink-subtle leading-relaxed text-lg">
                We believe every workplace incident is preventable. Our safety program is engineered around this belief — from pre-deployment screening and training to on-site monitoring and continuous improvement. When we deploy workers to your facility, they arrive prepared, equipped, and safety-conscious.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Safety Pillars */}
      <SectionContainer className="bg-warm-white">
        <SectionHeading
          eyebrow="Safety Framework"
          title="How We Keep Your Workforce Safe"
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAFETY_PILLARS.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-emerald/8 flex items-center justify-center shrink-0">
                  <pillar.icon className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <h3 className="text-base font-sans font-semibold text-ink mb-1">{pillar.title}</h3>
                  <p className="text-sm text-ink-subtle leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>

      {/* Certifications */}
      <SectionContainer className="bg-cream">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & Compliance Standards"
          subtitle="Our workforce maintains active certifications across all major safety and compliance frameworks."
        />
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <StaggerItem key={cert}>
              <div className="bg-warm-white rounded-xl p-5 border border-stone text-center">
                <BadgeCheck className="w-8 h-8 text-emerald mx-auto mb-2" />
                <p className="text-sm font-medium text-ink">{cert}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>

      <CTABanner
        title="Safety Questions? Let's Talk."
        subtitle="Our safety team is available to discuss protocols, certifications, and compliance requirements for your project."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
