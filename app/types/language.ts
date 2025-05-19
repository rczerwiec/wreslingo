export type LanguageCode = 'pl' | 'en' | 'de' | 'es'

export interface Language {
  code: LanguageCode
  name: string
  flag: string
  nativeName: string
}

export const languages: Language[] = [
  {
    code: 'pl',
    name: 'Polish',
    nativeName: 'Polski',
    flag: '🇵🇱'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸'
  }
] 