import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'
import EmployerForm from '@/components/forms/EmployerForm'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import { CheckCircle, Clock, Shield, TrendingUp, Users, FileCheck, Headphones } from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'For Employers',
  description: 'Request skilled workers for your next project. Fast deployment, qualified talent, full compliance — workforce solutions built for industrial operations.',
  path: '/employers',
})

const CHALLENGES = [
  { icon: Clock, title: 'Urgent Labor Needs', description: 'Production deadlines, turnaround schedules, and project timelines that can\'t wait for traditional hiring.' },
  { icon: Users, title: 'Scaling Workforce', description: 'Ramping up for a major project or scaling down after completion — without the overhead of permanent hires.' },
  { icon: Shield, title: 'Compliance Burden', description: 'Background checks, drug testing, safety certifications, and workers\' comp — handled completely by us.' },
  { icon: FileCheck, title: 'Quality Consistency', description: 'Tired of staffing firms that send warm bodies instead of qualified workers. We send the right people.' },
  { icon: TrendingUp, title: 'Project Staffing', description: 'Turnarounds, shutdowns, and capital projects that need large crews mobilized on a precise timeline.' },
  { icon: Headphones, title: 'Ongoing Support', description: 'Need a dedicated partner who manages the workforce — not just a transactional vendor.' },
]

export default function EmployersPage() {
  return (
    <>
      <Hero
        eyebrow="For Employers"
        title="Your Workforce, Our Responsibility"
        subtitle="From a single skilled tradesperson to an entire project crew — we source, screen, and deploy qualified workers so you can focus on execution."
        primaryCta={{ label: 'Submit Inquiry', href: '#inquiry' }}
        secondaryCta={{ label: 'Call Us Now', href: 'tel:+18337825527' }}
      />

      {/* Challenges */}
      <SectionContainer className="bg-warm-white">
        <SectionHeading
          eyebrow="Challenges Solved"
          title="We Handle the Workforce. You Handle the Work."
          subtitle="These are the problems our clients were dealing with before they found us."
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHALLENGES.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex gap-5">
                <div className="w-11 h-11 rounded-xl bg-emerald/8 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <h3 className="text-base font-sans font-semibold text-ink mb-1">{item.title}</h3>
                  <p className="text-sm text-ink-subtle leading-relaxed">{item.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>

      {/* Why Clients Choose Stellar */}
      <SectionContainer className="bg-ink" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald mb-4 block">
                The Stellar Advantage
              </span>
              <h2 className="text-3xl lg:text-4xl text-cream mb-6">
                Why Operations Leaders Choose Us
              </h2>
              <div className="space-y-4">
                {[
                  '24–48 hour deployment for most trades and labor categories',
                  'Multi-step screening: background, drug, skills, credentials',
                  'Full employer-of-record services: payroll, workers\' comp, benefits',
                  'Dedicated account management and on-site supervision',
                  'Industry-leading safety training and compliance protocols',
                  'Scalable from 5 workers to 500+ on a single engagement',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span className="text-stone-dark text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              {/* Replace with real imagery */}
              <Users className="w-24 h-24 text-white/10" />
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      <ProcessTimeline />

      <TestimonialsSection />

      {/* Inquiry Form */}
      <SectionContainer id="inquiry" className="bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Request Workforce Support"
            subtitle="Tell us about your needs. Our team will review your requirements and respond within 24 hours."
            align="center"
          />
          <EmployerForm />
        </div>
      </SectionContainer>

      <CTABanner
        title="Need Workers Now?"
        subtitle="For urgent staffing needs, call us directly."
        primaryCta={{ label: 'Call +1 (833) 782-5527', href: 'tel:+18337825527' }}
        secondaryCta={{ label: 'Email Us', href: 'mailto:info@stellarlabor.com' }}
      />
    </>
  )
}
