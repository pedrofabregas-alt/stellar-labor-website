'use client'

import { Shield, Clock, Users, TrendingUp } from 'lucide-react'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeIn from '@/components/motion/FadeIn'

const VALUES = [
  {
    icon: Clock,
    title: 'Rapid Deployment',
    stat: '24–48h',
    description: 'Workers on-site within hours. Pre-vetted talent pools in major markets ensure zero downtime when you need people most.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    stat: '0.5 EMR',
    description: 'Industry-leading safety protocols, comprehensive training, and continuous compliance monitoring on every project we staff.',
  },
  {
    icon: Users,
    title: 'Qualified Talent',
    stat: '5-step',
    description: 'Multi-step screening: background checks, drug testing, skills assessment, credential verification, and reference validation.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    stat: '5–500',
    description: 'From a handful of specialists to hundreds of workers. Ramp up or scale down with precision to match your operational rhythm.',
  },
]

export default function ValueProposition() {
  return (
    <SectionContainer className="bg-warm-white">
      <SectionHeading
        eyebrow="Why Stellar"
        title="Built for Operational Excellence"
        subtitle="Every workforce solution we deliver is engineered for reliability, compliance, and performance."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {VALUES.map((value, i) => (
          <FadeIn key={value.title} delay={i * 0.1}>
            <div className="group bg-cream rounded-2xl p-8 border border-stone hover:border-emerald/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald/8 flex items-center justify-center group-hover:bg-emerald/15 transition-colors">
                  <value.icon className="w-5 h-5 text-emerald" />
                </div>
                <span className="text-2xl font-serif text-emerald/70">{value.stat}</span>
              </div>
              <h3 className="text-lg font-sans font-semibold text-ink mb-2">{value.title}</h3>
              <p className="text-sm text-ink-subtle leading-relaxed">{value.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  )
}
