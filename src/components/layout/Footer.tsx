'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { COMPANY, FOOTER_LINKS } from '@/lib/constants'
import { useLanguage } from '@/lib/i18n'
import { FOOTER_LABELS, NAV_LABELS } from '@/lib/translations'
import Logo from '@/components/brand/Logo'
import StarMotif from '@/components/brand/StarMotif'

export default function Footer() {
  const { locale } = useLanguage()
  const labels = FOOTER_LABELS[locale]
  const nav = NAV_LABELS[locale]

  return (
    <footer className="bg-ink">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6" aria-label="Stellar Labor - Home">
              <Logo variant="light" showSubtitle className="h-10 w-auto" />
            </Link>
            <p className="text-stone-dark text-sm leading-relaxed mb-8 max-w-xs">
              {labels.tagline}
            </p>
            <div className="space-y-3">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-stone-dark hover:text-cream transition-colors">
                <Phone className="w-4 h-4 text-emerald" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-stone-dark hover:text-cream transition-colors">
                <Mail className="w-4 h-4 text-emerald" />
                {COMPANY.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-stone-dark">
                <MapPin className="w-4 h-4 text-emerald" />
                {COMPANY.address}
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-semibold text-cream uppercase tracking-[0.15em] mb-5">{labels.company}</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => {
                const labelMap: Record<string, string> = {
                  '/about': nav.about,
                  '/safety': nav.safety,
                  '/faq': locale === 'es' ? 'Preguntas Frecuentes' : 'FAQ',
                  '/contact': nav.contact,
                }
                return (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-stone-dark hover:text-cream transition-colors">
                      {labelMap[link.href] || link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-cream uppercase tracking-[0.15em] mb-5">{labels.solutions}</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.solutions.map((link) => {
                const labelMap: Record<string, string> = {
                  '/services': nav.services,
                  '/industries': nav.industries,
                  '/employers': nav.employers,
                }
                return (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-stone-dark hover:text-cream transition-colors">
                      {labelMap[link.href] || link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Talent */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-cream uppercase tracking-[0.15em] mb-5">{labels.talent}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/talent" className="text-sm text-stone-dark hover:text-cream transition-colors">
                  {labels.careers}
                </Link>
              </li>
              <li>
                <Link href="/talent#apply" className="text-sm text-stone-dark hover:text-cream transition-colors">
                  {labels.applyNow}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-dark">
            &copy; {new Date().getFullYear()} {COMPANY.name}. {labels.allRights}
          </p>
          <div className="flex items-center gap-2">
            <StarMotif size={12} className="text-emerald/40" />
            <span className="text-xs text-stone-dark">Houston, TX</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
