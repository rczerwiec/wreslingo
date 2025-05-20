import { Wrestler } from '../types/wrestler'

// Typ poziomu przybliżenia dla minigry "4 próby"
export type ZoomConfig = {
  scale: number;
  blur: number;
  brightness: number;
  offsetX?: string; // Pozycja X punktu przybliżenia (wartość CSS, np. "50%", "25%", itd.)
  offsetY?: string; // Pozycja Y punktu przybliżenia (wartość CSS, np. "50%", "25%", itd.)
}

// Uproszczony typ wrestlera dla minigry "4 próby"
export type FourTriesWrestler = {
  id: string;
  name: string;
  alternateNames?: string[];
  image: string;
  // Niestandardowa konfiguracja poziomu przybliżenia
  zoomLevels?: ZoomConfig[];
}

// Domyślne poziomy przybliżenia
export const defaultZoomLevels: ZoomConfig[] = [
  { scale: 4, blur: 4, brightness: 0.8, offsetX: "50%", offsetY: "50%" },   // Poziom 1: Bardzo przybliżony
  { scale: 3, blur: 2, brightness: 0.9, offsetX: "50%", offsetY: "50%" },   // Poziom 2: Przybliżony
  { scale: 2, blur: 1, brightness: 0.95, offsetX: "50%", offsetY: "50%" },  // Poziom 3: Mniej przybliżony
  { scale: 1, blur: 0, brightness: 1, offsetX: "50%", offsetY: "50%" }      // Poziom 4: Bez przybliżenia
]

// Lista wrestlerów do minigry "4 próby"
// Zawiera tylko wrestlerów z dostępnymi zdjęciami
export const fourTriesWrestlers: FourTriesWrestler[] = [
  {
  id: 'roman-reigns1',
  name: 'Roman Reigns',
  alternateNames: ['Leakee', 'Roman Leakee', "The Big Dog", "The Tribal Chief"],
  image: '/images/wrestlers/roman-reigns.jpg',
  zoomLevels: [
    { scale: 12, blur: 0, brightness: 0.7, offsetX: "55%", offsetY: "95%" },
    { scale: 11, blur: 0, brightness: 0.7, offsetX: "35%", offsetY: "95%" },    // Bardziej intensywny poziom 1, lekkie przesunięcie do góry
    { scale: 10, blur: 0, brightness: 0.7, offsetX: "55%", offsetY: "70%" }, 
    { scale: 7, blur: 3, brightness: 0.7, offsetX: "55%", offsetY: "35%" },
    { scale: 0, blur: 0, brightness: 0.7, offsetX: "55%", offsetY: "35%" },
  ]
},
  {
    id: 'the-miz1',
    name: 'The Miz',
    alternateNames: ['Mike Mizanin', 'Michael Mizanin', "Miz", "Mike The Miz"],
    image: '/images/wrestlers/the-miz.jpg',
    zoomLevels: [
      { scale: 9, blur: 0, brightness: 0.7, offsetX: "15%", offsetY: "80%" },
      { scale: 8, blur: 0, brightness: 0.7, offsetX: "7%", offsetY: "88%" },    // Bardziej intensywny poziom 1, lekkie przesunięcie do góry
      { scale: 6, blur: 0, brightness: 0.7, offsetX: "25%", offsetY: "84%" }, 
      { scale: 4, blur: 5, brightness: 0.7, offsetX: "35%", offsetY: "20%" },
      { scale: 0, blur: 0, brightness: 0.7, offsetX: "55%", offsetY: "55%" },
    ]
  },
]

// Funkcja do pobierania konfiguracji przybliżenia dla danego wrestlera i poziomu
export const getZoomConfig = (wrestler: FourTriesWrestler, level: number): ZoomConfig => {
  // Jeśli wrestler ma własną konfigurację, użyj jej
  if (wrestler.zoomLevels && wrestler.zoomLevels[level]) {
    const config = wrestler.zoomLevels[level];
    
    // Ustaw domyślne wartości offsetX i offsetY, jeśli nie zostały określone
    return {
      ...config,
      offsetX: config.offsetX || "50%",
      offsetY: config.offsetY || "50%"
    };
  }
  
  // W przeciwnym razie użyj domyślnych wartości
  return defaultZoomLevels[level];
}

// Funkcja do losowego wybierania wrestlera z listy 4 prób
export const getRandomFourTriesWrestler = (): FourTriesWrestler => {
  const randomIndex = Math.floor(Math.random() * fourTriesWrestlers.length)
  return fourTriesWrestlers[randomIndex]
}

// Funkcja do sprawdzania odpowiedzi (uwzględnia alternatywne nazwy)
export const checkWrestlerGuess = (wrestler: FourTriesWrestler, guess: string): boolean => {
  const normalizedGuess = guess.toLowerCase().trim()
  const possibleNames = [
    wrestler.name.toLowerCase(),
    ...(wrestler.alternateNames?.map(name => name.toLowerCase()) || [])
  ]
  
  return possibleNames.some(name => name === normalizedGuess)
} 