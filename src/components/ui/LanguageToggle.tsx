'use client'

import { useLanguage } from '@/lib/i18n'

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLanguage()

  return (
    <div className={`flex items-center bg-stone/50 rounded-full p-0.5 ${className}`}>
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
          locale === 'en'
            ? 'bg-ink text-cream shadow-sm'
            : 'text-ink-muted hover:text-ink'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLocale('es')}
        className={`px-3 py-1 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
          locale === 'es'
            ? 'bg-ink text-cream shadow-sm'
            : 'text-ink-muted hover:text-ink'
        }`}
        aria-label="Cambiar a Español"
      >
        ESP
      </button>
    </div>
  )
}
