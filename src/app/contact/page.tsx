import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import ContactForm from '@/components/forms/ContactForm'
import FadeIn from '@/components/motion/FadeIn'
import StarMotif from '@/components/brand/StarMotif'
import { COMPANY } from '@/lib/constants'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Stellar Labor Professional Services. Employer inquiries, talent applications, and general questions — we respond within 24 hours.',
  path: '/contact',
})

const CONTACT_INFO = [
  { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
  { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: 'Headquarters', value: COMPANY.address },
  { icon: Clock, label: 'Hours', value: 'Monday – Friday, 7:00 AM – 6:00 PM CST' },
]

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's Talk"
        subtitle="Whether you need workers, want to work with us, or have a question — we're here and we respond fast."
      />

      <SectionContainer className="bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn direction="left">
              <div>
                <h2 className="text-2xl text-ink mb-2">Send a Message</h2>
                <p className="text-ink-subtle mb-8">Fill out the form below and our team will get back to you within one business day.</p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <FadeIn direction="right">
              <div>
                <h2 className="text-2xl text-ink mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {CONTACT_INFO.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald/8 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ink-subtle mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-ink hover:text-emerald transition-colors text-sm">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-ink text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick links */}
                <div className="mt-10 p-6 bg-warm-white rounded-2xl border border-stone">
                  <div className="flex items-center gap-2 mb-4">
                    <StarMotif size={12} className="text-emerald" />
                    <h3 className="text-sm font-semibold text-ink">Looking for something specific?</h3>
                  </div>
                  <div className="space-y-2">
                    <a href="/employers" className="block text-sm text-emerald hover:text-emerald-dark transition-colors">
                      Employer Staffing Inquiry
                    </a>
                    <a href="/talent#apply" className="block text-sm text-emerald hover:text-emerald-dark transition-colors">
                      Apply for Work
                    </a>
                    <a href="/faq" className="block text-sm text-emerald hover:text-emerald-dark transition-colors">
                      Frequently Asked Questions
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionContainer>

      {/* Map placeholder */}
      <section className="h-64 lg:h-80 bg-warm-white border-y border-stone flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-8 h-8 text-stone-dark/40 mx-auto mb-2" />
          <p className="text-sm text-ink-subtle">Map integration placeholder — Houston, TX</p>
        </div>
      </section>
    </>
  )
}
