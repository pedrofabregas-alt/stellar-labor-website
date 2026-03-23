'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type Locale = 'en' | 'es'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (en: string, es: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (en) => en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('stellar-locale') as Locale | null
    if (saved === 'en' || saved === 'es') {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('stellar-locale', newLocale)
    document.documentElement.lang = newLocale
  }, [])

  const t = useCallback(
    (en: string, es: string) => (locale === 'es' ? es : en),
    [locale]
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
