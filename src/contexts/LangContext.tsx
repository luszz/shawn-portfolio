import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { en } from '../locales/en'
import { zh } from '../locales/zh'
import type { Locale } from '../locales/en'

type Lang = 'en' | 'zh'

interface LangContextValue {
  lang: Lang
  t: Locale
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved) return saved
    return navigator.language.startsWith('zh') ? 'zh' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang(l => (l === 'en' ? 'zh' : 'en'))

  return (
    <LangContext.Provider value={{ lang, t: lang === 'zh' ? zh : en, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
