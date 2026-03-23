'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import { useLanguage } from '@/lib/i18n'
import { NAV_LABELS } from '@/lib/translations'
import Logo from '@/components/brand/Logo'

const NAV_LABEL_MAP: Record<string, keyof typeof NAV_LABELS.en> = {
  '/about': 'about',
  '/industries': 'industries',
  '/services': 'services',
  '/employers': 'employers',
  '/talent': 'talent',
  '/safety': 'safety',
  '/contact': 'contact',
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { locale } = useLanguage()
  const labels = NAV_LABELS[locale]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-cream z-50 lg:hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 h-20">
            <Logo variant="dark" className="h-9 w-auto" />
            <button
              onClick={onClose}
              className="p-2 text-ink-muted hover:text-ink transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav */}
          <nav className="px-5 pt-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-4 text-2xl font-serif text-ink border-b border-stone hover:text-emerald transition-colors"
                >
                  {labels[NAV_LABEL_MAP[link.href]] || link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-10 flex flex-col gap-3"
            >
              <Link
                href="/employers"
                onClick={onClose}
                className="flex items-center justify-center px-7 py-4 bg-ink text-cream font-medium text-base rounded-full"
              >
                {labels.requestTalent}
              </Link>
              <Link
                href="/talent"
                onClick={onClose}
                className="flex items-center justify-center px-7 py-4 border border-ink/20 text-ink font-medium text-base rounded-full"
              >
                {labels.findWork}
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
