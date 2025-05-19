'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { pl } from '../translations/pl'
import { en } from '../translations/en'
import { de } from '../translations/de'
import { es } from '../translations/es'

// Typy językowe
export type LanguageCode = 'pl' | 'en' | 'de' | 'es'

// Typ dla struktury tłumaczeń
export type TranslationType = typeof pl

// Definicja kontekstu językowego
type LanguageContextType = {
  currentLanguage: LanguageCode
  t: TranslationType
  changeLanguage: (lang: LanguageCode) => void
}

// Utworzenie kontekstu
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Mapowanie kodów języków na odpowiednie tłumaczenia
const translationsMap: Record<LanguageCode, TranslationType> = {
  pl,
  en,
  de,
  es
}

// Funkcja do pobierania zapisanego języka
const getSavedLanguage = (): LanguageCode => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('lang')
      if (saved && (saved === 'pl' || saved === 'en' || saved === 'de' || saved === 'es')) {
        return saved as LanguageCode
      }
    } catch (e) {
      console.error('Error reading from localStorage:', e)
    }
  }
  return 'pl' // Domyślny język
}

// Provider kontekstu
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Używamy ręcznie utworzonych objektów dla SSR, a nie bibliotecznego useSSR
  const [isClient, setIsClient] = useState(false)
  
  // Na serwerze zawsze używaj domyślnego języka (pl)
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('pl')
  const [currentTranslations, setCurrentTranslations] = useState<TranslationType>(pl)
  
  // Efekt inicjalizacji po stronie klienta
  useEffect(() => {
    const savedLang = getSavedLanguage()
    setCurrentLanguage(savedLang)
    setCurrentTranslations(translationsMap[savedLang])
    
    if (typeof document !== 'undefined') {
      document.documentElement.lang = savedLang
    }
    
    setIsClient(true)
  }, [])
  
  // Funkcja do zmiany języka
  const changeLanguage = (lang: LanguageCode) => {
    if (lang === currentLanguage) return
    
    setCurrentLanguage(lang)
    setCurrentTranslations(translationsMap[lang])
    
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', lang)
      }
      
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang
      }
      
      // Przeładowanie strony aby uniknąć problemów z hydracją
      if (isClient) {
        window.location.reload()
      }
    } catch (e) {
      console.error('Error saving language to localStorage:', e)
    }
  }
  
  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        t: currentTranslations,
        changeLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

// Hook do używania kontekstu językowego
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage musi być używany wewnątrz LanguageProvider')
  }
  return context
} 