import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import CTABanner from '@/components/sections/CTABanner'
import AccordionItem from '@/components/ui/AccordionItem'
import FadeIn from '@/components/motion/FadeIn'
import StarMotif from '@/components/brand/StarMotif'
import { FAQ_DATA } from '@/lib/constants'

export const metadata: Metadata = createMetadata({
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about Stellar Labor\'s staffing services, worker qualifications, safety protocols, and hiring process.',
  path: '/faq',
})

export default function FAQPage() {
  return (
    <>
      <Hero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Answers to the most common questions from employers and workers. Can't find what you're looking for? Contact us directly."
      />

      <SectionContainer className="bg-cream">
        <div className="max-w-3xl mx-auto space-y-14">
          {FAQ_DATA.map((category) => (
            <FadeIn key={category.category}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <StarMotif size={14} className="text-emerald" />
                  <h2 className="text-xl font-sans font-semibold text-ink">
                    {category.category}
                  </h2>
                </div>
                <div>
                  {category.items.map((faq) => (
                    <AccordionItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      <CTABanner
        title="Still Have Questions?"
        subtitle="Our team is happy to help. Reach out and we'll get back to you within one business day."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Call Us', href: 'tel:+18337825527' }}
        variant="light"
      />
    </>
  )
}
