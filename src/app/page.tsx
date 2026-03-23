import Hero from '@/components/sections/Hero'
import IndustriesGrid from '@/components/sections/IndustriesGrid'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import ValueProposition from '@/components/sections/ValueProposition'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTABanner from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Stellar Labor Professional Services"
        title="The Workforce Behind High-Stakes Operations"
        subtitle="Precision staffing for industrial, energy, and construction sectors. Skilled trades and labor solutions deployed across North America — operationally ready, safety certified, on time."
        primaryCta={{ label: 'Request Talent', href: '/employers' }}
        secondaryCta={{ label: 'Find Work', href: '/talent' }}
        variant="home"
      />

      <IndustriesGrid />

      <ValueProposition />

      <ServicesGrid limit={8} />

      <ProcessTimeline />

      <TestimonialsSection />

      <CTABanner
        title="Ready to Solve Your Workforce Challenge?"
        subtitle="Whether you need 5 workers or 500, our team is ready to deploy qualified talent to your site."
        primaryCta={{ label: 'Request Talent', href: '/employers' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
        variant="dark"
      />
    </>
  )
}
