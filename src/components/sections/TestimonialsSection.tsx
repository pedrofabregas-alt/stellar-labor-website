'use client'

import { TESTIMONIALS } from '@/lib/constants'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeIn from '@/components/motion/FadeIn'
import StarMotif from '@/components/brand/StarMotif'

export default function TestimonialsSection() {
  return (
    <SectionContainer className="bg-warm-white" padding="xl">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by Industry Leaders"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={i} delay={i * 0.15}>
            <div className="bg-cream rounded-2xl p-8 lg:p-10 border border-stone h-full flex flex-col">
              {/* Quote mark */}
              <span className="text-5xl font-serif text-emerald/20 leading-none mb-4">&ldquo;</span>
              <p className="text-ink leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="mt-8 pt-6 border-t border-stone flex items-center gap-3">
                <StarMotif size={12} className="text-emerald/40" />
                <div>
                  <p className="font-semibold text-ink text-sm">{t.name}</p>
                  <p className="text-ink-subtle text-xs mt-0.5">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  )
}
