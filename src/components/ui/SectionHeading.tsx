'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/animations'
import { StarCluster } from '@/components/brand/StarMotif'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`max-w-3xl mb-14 lg:mb-20 ${alignment} ${className}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
          <StarCluster />
          <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${dark ? 'text-emerald-light' : 'text-emerald'}`}>
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl leading-[1.15] ${dark ? 'text-cream' : 'text-ink'}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-stone-dark' : 'text-ink-subtle'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
