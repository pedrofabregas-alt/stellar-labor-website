'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface AccordionItemProps {
  question: string
  answer: string
  dark?: boolean
}

export default function AccordionItem({ question, answer, dark = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`border-b ${dark ? 'border-white/10' : 'border-stone'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-base font-medium pr-6 transition-colors ${
          dark
            ? 'text-cream group-hover:text-emerald-light'
            : 'text-ink group-hover:text-emerald'
        }`}>
          {question}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isOpen
            ? 'bg-emerald text-white'
            : dark ? 'bg-white/10 text-stone-dark' : 'bg-stone text-ink-subtle'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className={`pb-6 leading-relaxed ${dark ? 'text-stone-dark' : 'text-ink-subtle'}`}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
