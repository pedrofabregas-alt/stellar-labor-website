import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { COMPANY, FOOTER_LINKS } from '@/lib/constants'
import Logo from '@/components/brand/Logo'
import StarMotif from '@/components/brand/StarMotif'

export default function Footer() {
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
              Precision workforce solutions for industrial, energy, and construction sectors across North America.
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
            <h3 className="text-xs font-semibold text-cream uppercase tracking-[0.15em] mb-5">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-dark hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-cream uppercase tracking-[0.15em] mb-5">Solutions</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-dark hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Talent */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-cream uppercase tracking-[0.15em] mb-5">Talent</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.talent.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-dark hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-dark">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
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
