'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(to right, #0C0C0E 1px, transparent 1px), linear-gradient(to bottom, #0C0C0E 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-32 pb-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6">
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

          {/* Right: Hero image with stats overlay */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="relative"
            >
              {/* Hero image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/hero.jpg"
                  alt="Industrial workforce walking through a petrochemical facility at golden hour"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle dark gradient overlay at bottom for stats readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

                {/* Stats row overlaid on image bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <div className="text-2xl sm:text-3xl font-serif text-white">
                        <CountUp target={30} suffix="+" />
                      </div>
                      <p className="text-[10px] sm:text-xs font-medium tracking-[0.1em] uppercase text-white/60 mt-1">
                        Years
                      </p>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-serif text-white">
                        <CountUp target={10} suffix="k+" />
                      </div>
                      <p className="text-[10px] sm:text-xs font-medium tracking-[0.1em] uppercase text-white/60 mt-1">
                        Workers
                      </p>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-serif text-white">
                        <CountUp target={98} suffix="%" />
                      </div>
                      <p className="text-[10px] sm:text-xs font-medium tracking-[0.1em] uppercase text-white/60 mt-1">
                        Retention
                      </p>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-serif text-white">
                        <CountUp target={38} />
                      </div>
                      <p className="text-[10px] sm:text-xs font-medium tracking-[0.1em] uppercase text-white/60 mt-1">
                        States
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative star */}
                <div className="absolute top-4 right-4">
                  <StarMotif size={24} className="text-white/30" />
                </div>
              </div>

              {/* Floating accent badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease }}
                className="absolute -bottom-4 -left-4 bg-emerald text-white px-5 py-3 rounded-xl shadow-lg"
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
