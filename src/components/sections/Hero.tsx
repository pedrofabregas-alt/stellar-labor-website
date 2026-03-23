'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import StarMotif from '@/components/brand/StarMotif'
import CountUp from '@/components/motion/CountUp'
import { ease } from '@/lib/animations'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
})

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'home' | 'page'
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = 'page',
}: HeroProps) {
  if (variant === 'home') {
    return <HomeHero eyebrow={eyebrow} title={title} subtitle={subtitle} primaryCta={primaryCta} secondaryCta={secondaryCta} />
  }

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-6">
              <StarMotif size={14} className="text-emerald" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald">
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.1]"
          >
            {title}
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="mt-6 text-lg text-ink-subtle max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {(primaryCta || secondaryCta) && (
            <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} size="lg" withArrow>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-stone" />
    </section>
  )
}

function HomeHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: Omit<HeroProps, 'variant'>) {
  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large faded star */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.03]">
          <StarMotif size={800} color="#0C0C0E" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(to right, #0C0C0E 1px, transparent 1px), linear-gradient(to bottom, #0C0C0E 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Emerald accent glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            {eyebrow && (
              <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
                <StarMotif size={14} className="text-emerald" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald">
                  {eyebrow}
                </span>
              </motion.div>
            )}

            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-ink leading-[1.05] tracking-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              {...fadeUp(0.4)}
              className="mt-8 text-lg sm:text-xl text-ink-subtle max-w-xl leading-relaxed"
            >
              {subtitle}
            </motion.p>

            {(primaryCta || secondaryCta) && (
              <motion.div {...fadeUp(0.55)} className="mt-10 flex flex-col sm:flex-row gap-4">
                {primaryCta && (
                  <Button href={primaryCta.href} size="lg" withArrow>
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="outline" size="lg">
                    {secondaryCta.label}
                  </Button>
                )}
              </motion.div>
            )}
          </div>

          {/* Right: Stats + Visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="relative"
            >
              {/* Stats card */}
              <div className="bg-ink rounded-2xl p-10 lg:p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl lg:text-5xl font-serif text-cream">
                      <CountUp target={30} suffix="+" />
                    </div>
                    <p className="mt-2 text-xs font-medium tracking-[0.15em] uppercase text-stone-dark">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-serif text-cream">
                      <CountUp target={10} suffix="k+" />
                    </div>
                    <p className="mt-2 text-xs font-medium tracking-[0.15em] uppercase text-stone-dark">
                      Workers Deployed
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-serif text-cream">
                      <CountUp target={98} suffix="%" />
                    </div>
                    <p className="mt-2 text-xs font-medium tracking-[0.15em] uppercase text-stone-dark">
                      Client Retention
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-serif text-cream">
                      <CountUp target={38} suffix="" />
                    </div>
                    <p className="mt-2 text-xs font-medium tracking-[0.15em] uppercase text-stone-dark">
                      States Served
                    </p>
                  </div>
                </div>

                {/* Decorative star */}
                <div className="absolute -top-4 -right-4">
                  <StarMotif size={32} className="text-emerald" />
                </div>
              </div>

              {/* Floating accent badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease }}
                className="absolute -bottom-5 -left-5 bg-emerald text-white px-5 py-3 rounded-xl shadow-lg"
              >
                <p className="text-xs font-semibold tracking-wide uppercase">North America Coverage</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-stone" />
    </section>
  )
}
