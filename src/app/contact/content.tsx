'use client'

import Hero from '@/components/sections/Hero'
import SectionContainer from '@/components/ui/SectionContainer'
import ContactForm from '@/components/forms/ContactForm'
import FadeIn from '@/components/motion/FadeIn'
import StarMotif from '@/components/brand/StarMotif'
import { COMPANY } from '@/lib/constants'
import { useLanguage } from '@/lib/i18n'
import { CONTACT } from '@/lib/translations'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactContent() {
  const { locale } = useLanguage()
  const t = CONTACT[locale]

  const CONTACT_INFO = [
    { icon: Phone, label: t.phone, value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { icon: Mail, label: t.email, value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: t.headquarters, value: COMPANY.address },
    { icon: Clock, label: t.hours, value: t.hoursValue },
  ]

  return (
    <>
      <Hero
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <SectionContainer className="bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn direction="left">
              <div>
                <h2 className="text-2xl text-ink mb-2">{t.formTitle}</h2>
                <p className="text-ink-subtle mb-8">{t.formSubtitle}</p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <FadeIn direction="right">
              <div>
                <h2 className="text-2xl text-ink mb-6">{t.infoTitle}</h2>
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
                    <h3 className="text-sm font-semibold text-ink">{t.quickLinks}</h3>
                  </div>
                  <div className="space-y-2">
                    <a href="/employers" className="block text-sm text-emerald hover:text-emerald-dark transition-colors">
                      {t.employerLink}
                    </a>
                    <a href="/talent#apply" className="block text-sm text-emerald hover:text-emerald-dark transition-colors">
                      {t.applyLink}
                    </a>
                    <a href="/faq" className="block text-sm text-emerald hover:text-emerald-dark transition-colors">
                      {t.faqLink}
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
          <p className="text-sm text-ink-subtle">{t.mapPlaceholder}</p>
        </div>
      </section>
    </>
  )
}
