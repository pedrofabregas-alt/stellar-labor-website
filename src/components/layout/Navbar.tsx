'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { useLanguage } from '@/lib/i18n'
import { NAV_LABELS } from '@/lib/translations'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'
import Logo from '@/components/brand/Logo'
import LanguageToggle from '@/components/ui/LanguageToggle'

const NAV_LABEL_MAP: Record<string, keyof typeof NAV_LABELS.en> = {
  '/about': 'about',
  '/industries': 'industries',
  '/services': 'services',
  '/employers': 'employers',
  '/talent': 'talent',
  '/safety': 'safety',
  '/contact': 'contact',
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { locale } = useLanguage()
  const labels = NAV_LABELS[locale]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="group" aria-label="Stellar Labor - Home">
              <Logo variant="dark" className="h-9 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={labels[NAV_LABEL_MAP[link.href]] || link.label}
                />
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <LanguageToggle />
              <Link
                href="/talent"
                className="text-sm font-medium text-ink-subtle hover:text-ink transition-colors"
              >
                {labels.findWork}
              </Link>
              <Link
                href="/employers"
                className="px-6 py-2.5 bg-ink text-cream font-medium text-sm rounded-full hover:bg-ink-muted transition-colors"
              >
                {labels.requestTalent}
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <LanguageToggle />
              <button
                onClick={() => setIsMobileOpen(true)}
                className="p-2 text-ink-muted hover:text-ink transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}
