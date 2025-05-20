import { getRandomWrestler, checkWrestlerGuess } from './wrestlers'
import { Wrestler } from '../types/wrestler'

export interface ThemeSongWrestler {
  id: string;
  name: string;
  alternateNames?: string[];
  themeSong: string;
  themeSongTitle?: string;
  themeSongArtist?: string;
  image?: string;
}

// Lista wrestlerów z utworami wejściowymi
// Uwaga: Ścieżki do plików audio muszą być względne do katalogu public
export const themeSongWrestlers: ThemeSongWrestler[] = [
  {
    id: "seth-rollins",
    name: "Seth Rollins",
    alternateNames: ['Tyler Black', 'The Architect', 'The Visionary', 'The Revolutionary'],
    themeSong: "/audio/themes/seth-rollins.mp3",
    themeSongTitle: "Visionary",
    themeSongArtist: "def rebel ft. Seth Rollins",
    image: "https://i.imgur.com/aoT5c2n.jpeg"
  },
]

// Funkcja do losowego wybierania wrestlera z utworem wejściowym
export const getRandomThemeSongWrestler = (): ThemeSongWrestler => {
  const randomIndex = Math.floor(Math.random() * themeSongWrestlers.length)
  return themeSongWrestlers[randomIndex]
}

// Funkcja sprawdzająca, czy zgadnięcie jest poprawne
export const checkThemeSongGuess = (wrestler: ThemeSongWrestler, guess: string): boolean => {
  const normalizedGuess = guess.trim().toLowerCase()
  
  // Sprawdź główną nazwę
  if (wrestler.name.toLowerCase().includes(normalizedGuess)) {
    return true
  }
  
  // Sprawdź alternatywne nazwy
  if (wrestler.alternateNames && wrestler.alternateNames.some(name => 
    name.toLowerCase().includes(normalizedGuess)
  )) {
    return true
  }
  
  return false
} 