'use client'

import CountUp from '@/components/motion/CountUp'
import StarMotif from '@/components/brand/StarMotif'
import { useLanguage } from '@/lib/i18n'
import { STATS_DATA } from '@/lib/translations'
import type { Stat } from '@/types'

interface StatsStripProps {
  stats?: Stat[]
  className?: string
  dark?: boolean
}

export default function StatsStrip({ stats, className = '', dark = false }: StatsStripProps) {
  const { locale } = useLanguage()
  const displayStats = stats || STATS_DATA[locale]

  return (
    <section className={`py-14 lg:py-20 ${dark ? 'bg-ink' : 'bg-warm-white'} ${className}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {displayStats.map((stat, i) => (
            <div key={i} className="relative">
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-serif ${dark ? 'text-cream' : 'text-ink'}`}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className={`mt-2 text-sm font-medium ${dark ? 'text-stone-dark' : 'text-ink-subtle'}`}>
                {stat.label}
              </p>
              {i === 0 && (
                <StarMotif size={10} className="absolute -top-2 -right-2 text-emerald/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
