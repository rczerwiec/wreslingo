export interface Championship {
  name: string
  times: number
  yearFirst: number
  yearLast?: number
}

export interface YearsActive {
  from: number
  to?: number
}

export interface LocalizedContent {
  pl: string
  en: string
  de: string
  es: string
}

export type Alignment = 'Face' | 'Heel' | 'Tweener'

export type Wrestler = {
  id: string
  name: string
  alternateNames?: string[]
  currentEmployer: string
  currentRoster: string
  yearsActive: YearsActive
  championships: Championship[]
  finishers: string[]
  signature_moves: string[]
  height: string
  weight: string
  birthplace: LocalizedContent
  characteristic: LocalizedContent
  funFacts: LocalizedContent[]
  birthDate: string  // Format: YYYY-MM-DD
}

export type WrestlerHint = {
  type: keyof Wrestler
  value: string
  points: number
} 