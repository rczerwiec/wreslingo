import { pl } from './pl'
import { en } from './en'
import { de } from './de'
import { es } from './es'
import { LanguageCode } from '../types/language'

// Typ dla struktur tłumaczeń
export type TranslationsType = typeof pl

// Mapa tłumaczeń według kodu języka
export const translations: Record<LanguageCode, TranslationsType> = {
  pl,
  en,
  de,
  es
}

// Helper funkcja do pobierania tłumaczeń
export const getTranslation = (langCode: LanguageCode): TranslationsType => {
  return translations[langCode] || translations.pl
} 