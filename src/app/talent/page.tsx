import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import CTABanner from '@/components/sections/CTABanner'
import TalentForm from '@/components/forms/TalentForm'
import AccordionItem from '@/components/ui/AccordionItem'
import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import { FAQ_DATA, INDUSTRIES } from '@/lib/constants'
import { DollarSign, Shield, Briefcase, GraduationCap, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'Careers & Opportunities',
  description: 'Join the Stellar Labor workforce. Competitive pay, safety training, diverse project opportunities across oil & gas, construction, electrical, and more.',
  path: '/talent',
})

const BENEFITS = [
  { icon: DollarSign, title: 'Competitive Pay', description: 'Industry-leading rates with weekly pay. Your skills are valued and compensated accordingly.' },
  { icon: Shield, title: 'Safety Training', description: 'Comprehensive safety orientation and site-specific training. Your wellbeing is our priority.' },
  { icon: Briefcase, title: 'Diverse Projects', description: 'Work across industries — oil & gas, construction, telecom, and more. Build your experience.' },
  { icon: GraduationCap, title: 'Career Growth', description: 'Access to training programs, certifications, and advancement opportunities within our network.' },
  { icon: MapPin, title: 'Nationwide Opportunities', description: 'Projects across 38 states. Work close to home or explore new locations.' },
  { icon: Clock, title: 'Flexible Schedules', description: 'Short-term, long-term, and contract assignments that fit your availability.' },
]

export default function TalentPage() {
  const workerFAQ = FAQ_DATA.find((cat) => cat.category === 'For Workers')

  return (
    <>
      <Hero
        eyebrow="Careers"
        title="Your Skills. Our Opportunities."
        subtitle="Join a workforce network that values safety, pays competitively, and connects you with projects across North America's most dynamic industries."
        primaryCta={{ label: 'Apply Now', href: '#apply' }}
        secondaryCta={{ label: 'View Industries', href: '/industries' }}
      />

      {/* Benefits */}
      <SectionContainer className="bg-warm-white">
        <SectionHeading
          eyebrow="Why Stellar"
          title="Work With a Company That Works for You"
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="flex gap-5">
                <div className="w-11 h-11 rounded-xl bg-emerald/8 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <h3 className="text-base font-sans font-semibold text-ink mb-1">{benefit.title}</h3>
                  <p className="text-sm text-ink-subtle leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>

      {/* Industries hiring */}
      <SectionContainer className="bg-cream">
        <SectionHeading
          eyebrow="Opportunities"
          title="Industries Hiring Now"
          subtitle="We're actively placing skilled workers across these sectors."
        />
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry) => (
            <StaggerItem key={industry.slug}>
              <div className="bg-warm-white rounded-xl p-5 border border-stone text-center hover:border-emerald/30 transition-colors">
                <h3 className="text-sm font-semibold text-ink">{industry.title}</h3>
                <p className="text-xs text-ink-subtle mt-1">{industry.roles.length}+ roles</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionContainer>

      {/* Application Form */}
      <SectionContainer id="apply" className="bg-warm-white">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="Apply"
            title="Start Your Application"
            subtitle="Fill out the form below and a recruiter will be in touch. For a complete application, also email your resume."
            align="center"
          />
          <TalentForm />
        </div>
      </SectionContainer>

      {/* FAQ */}
      {workerFAQ && (
        <SectionContainer className="bg-cream">
          <SectionHeading
            eyebrow="FAQ"
            title="Common Questions from Workers"
          />
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div>
                {workerFAQ.items.map((faq) => (
                  <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </FadeIn>
          </div>
        </SectionContainer>
      )}

      <CTABanner
        title="Ready to Get to Work?"
        subtitle="Apply today and join a network of skilled professionals working on North America's biggest projects."
        primaryCta={{ label: 'Apply Now', href: '#apply' }}
        secondaryCta={{ label: 'Contact Recruiting', href: 'mailto:careers@stellarlabor.com' }}
        variant="light"
      />
    </>
  )
}
