'use client'

import FadeIn from '@/components/motion/FadeIn'
import Button from '@/components/ui/Button'
import StarMotif from '@/components/brand/StarMotif'

interface CTABannerProps {
  title: string
  subtitle?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'light' | 'dark'
}

export default function CTABanner({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = 'dark',
}: CTABannerProps) {
  const isDark = variant === 'dark'

  return (
    <section className={`py-20 lg:py-32 relative overflow-hidden ${isDark ? 'bg-ink' : 'bg-emerald/5 border-y border-emerald/10'}`}>
      {/* Decorative */}
      {isDark && (
        <div className="absolute top-8 right-12 opacity-10" aria-hidden="true">
          <StarMotif size={120} className="text-emerald star-spin-slow" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <FadeIn>
          <div className={`max-w-2xl ${isDark ? '' : 'mx-auto text-center'}`}>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl leading-[1.1] ${isDark ? 'text-cream' : 'text-ink'}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-5 text-lg leading-relaxed ${isDark ? 'text-stone-dark' : 'text-ink-subtle'}`}>
                {subtitle}
              </p>
            )}
            <div className={`mt-10 flex flex-col sm:flex-row gap-4 ${isDark ? '' : 'justify-center'}`}>
              <Button
                href={primaryCta.href}
                variant={isDark ? 'dark' : 'primary'}
                size="lg"
                withArrow
              >
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant={isDark ? 'ghost' : 'outline'}
                  size="lg"
                  className={isDark ? 'text-stone-dark hover:text-cream' : ''}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
