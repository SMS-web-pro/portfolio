'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const defaultValue: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
}

const LanguageContext = createContext<LanguageContextType>(defaultValue)

interface LanguageProviderProps {
  children: React.ReactNode
  defaultLanguage?: Language
}

export function LanguageProvider({ children, defaultLanguage = 'en' }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLanguageState(saved)
    } else {
      setLanguageState(defaultLanguage)
    }
  }, [defaultLanguage])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const value = { language, setLanguage }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
