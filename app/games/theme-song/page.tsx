'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaMusic, 
  FaArrowLeft, 
  FaTrophy, 
  FaPlay, 
  FaPause, 
  FaVolumeUp,
  FaRedoAlt,
  FaCheckCircle,
  FaSadTear,
  FaUndo,
  FaHome,
  FaArrowRight,
  FaUser
} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ThemeSongWrestler, 
  getRandomThemeSongWrestler, 
  checkThemeSongGuess 
} from '@/app/data/theme-songs'

// Maksymalna liczba prób
const MAX_ATTEMPTS = 3;

// Funkcja do generowania URL zdjęcia na podstawie nazwy wrestlera
const getWrestlerImageUrl = (name: string) => {
  // Różne API do pobierania obrazów
  const imageApis = [
    // Robohash generuje unikalne awatary na podstawie tekstu
    `https://robohash.org/${encodeURIComponent(name)}?set=set4&size=240x240`,
    
    // Placekitten daje zdjęcia kotów o określonych wymiarach
    `https://placekitten.com/240/240?image=${Math.floor(Math.random() * 16)}`,
    
    // DiceBear generuje awatary na podstawie tekstu
    `https://api.dicebear.com/7.x/bottts/png?seed=${encodeURIComponent(name)}&size=240`,
    
    // Placeholder.com tworzy proste kolorowe obrazy
    `https://via.placeholder.com/240x240/${Math.floor(Math.random()*16777215).toString(16)}?text=${encodeURIComponent(name)}`
  ];
  
  // Użyj pierwszego API jako najbardziej niezawodnego
  return imageApis[0];
}

export default function ThemeSong() {
  const { t } = useLanguage()
  const [currentWrestler, setCurrentWrestler] = useState<ThemeSongWrestler | null>(null)
  const [guess, setGuess] = useState('')
  const [score, setScore] = useState(100)
  const [gameOver, setGameOver] = useState(false)
  const [success, setSuccess] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const [guessHistory, setGuessHistory] = useState<string[]>([])
  const [showAnswer, setShowAnswer] = useState(false)
  const [pointsEarned, setPointsEarned] = useState(0)
  const [fullSongMode, setFullSongMode] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const resultPanelRef = useRef<HTMLDivElement>(null)

  // Inicjalizacja gry - wybieramy losowego wrestlera
  useEffect(() => {
    pickRandomWrestler()
  }, [])

  // Efekt automatycznego zatrzymania odtwarzania po 3 sekundach
  useEffect(() => {
    if (isPlaying && audioRef.current && !fullSongMode) {
      const timer = setTimeout(() => {
        pauseAudio();
      }, 3000); // Limit 3 sekundy
      
      return () => clearTimeout(timer);
    }
  }, [isPlaying, fullSongMode]);

  // Efekt scrollowania do panelu wyników
  useEffect(() => {
    if (gameOver && resultPanelRef.current) {
      setTimeout(() => {
        resultPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 300)
    }
  }, [gameOver]);

  // Wybierz losowego wrestlera
  const pickRandomWrestler = () => {
    setAudioError(false)
    setFullSongMode(false)
    const wrestler = getRandomThemeSongWrestler()
    setCurrentWrestler(wrestler)
  }

  // Obsługa odtwarzania dźwięku
  const playAudio = () => {
    if (audioRef.current && !gameOver) {
      if (!fullSongMode) {
        audioRef.current.currentTime = 0; // Zawsze zaczynaj od początku w trybie krótkiego fragmentu
      }
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(err => {
          console.error('Błąd odtwarzania:', err)
          setAudioError(true)
        })
    }
  }

  // Zatrzymanie odtwarzania
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  // Przełączanie na tryb pełnego utworu po wyczerpaniu prób
  const enableFullSongMode = () => {
    setFullSongMode(true)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      playAudio() // Automatycznie odtwórz cały utwór
    }
  }

  // Obsługa zgadywania
  const handleGuess = () => {
    if (!currentWrestler || !guess.trim()) return

    if (checkThemeSongGuess(currentWrestler, guess)) {
      // Oblicz punkty zależnie od liczby prób
      const earnedPoints = Math.max(100 - (attempts * 30), 10)
      setPointsEarned(earnedPoints)
      setScore(score + earnedPoints)
      setSuccess(true)
      setGameOver(true)
      setShowAnswer(true)
      
      // Włącz odtwarzanie pełnego utworu po poprawnym zgadnięciu
      setFullSongMode(true)
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error('Błąd odtwarzania po zgadnięciu:', err))
      }
    } else {
      // Dodaj do historii zgadywania
      setGuessHistory(prev => [...prev, guess])
      setAttempts(attempts + 1)
      
      // Jeśli 3 nieudane próby, przegrywasz
      if (attempts >= MAX_ATTEMPTS - 1) {
        setGameOver(true)
        setShowAnswer(true)
        enableFullSongMode() // Włącz tryb pełnego utworu
      }
    }
    
    setGuess('')
  }
  
  // Reset gry
  const resetGame = () => {
    setGuess('')
    setGameOver(false)
    setSuccess(false)
    setAttempts(0)
    setGuessHistory([])
    setShowAnswer(false)
    setPointsEarned(0)
    pauseAudio() // Zatrzymaj odtwarzanie
    pickRandomWrestler()
  }

  // Obsługa błędu audio
  const handleAudioError = () => {
    setAudioError(true)
    setIsPlaying(false)
  }

  return (
    <div className="relative min-h-screen pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-4"
      >
        <FaArrowLeft />
        {t.guessWrestler.backToGames || "Powrót do gier"}
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 p-6 mb-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <FaMusic className="text-purple-400" />
            {t.themeSong?.title || "Jaka to melodia?"}
          </h1>
          <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-lg">
            <FaTrophy className="text-yellow-400" />
            <span className="font-bold">{t.guessWrestler.score || "Wynik"}: {score}</span>
          </div>
        </div>
        
        {/* Informacja o pozostałych próbach */}
        {!gameOver && (
          <div className="mb-4 text-center">
            <div className="inline-block bg-purple-900/40 px-4 py-2 rounded-lg mb-2">
              <span className="font-bold">{t.themeSong?.remainingAttempts || "Pozostałe próby"}: {MAX_ATTEMPTS - attempts}</span>
            </div>
          </div>
        )}
        
        {/* Odtwarzacz audio */}
        <div className="mb-8">
          <div className="relative w-full bg-black/20 rounded-lg overflow-hidden p-6">
            <div className="flex flex-col items-center justify-center">
              {!audioError ? (
                <>
                  <audio
                    ref={audioRef}
                    src={currentWrestler?.themeSong}
                    onError={handleAudioError}
                    onEnded={() => setIsPlaying(false)}
                  />
                  
                  <div className="mb-4 text-center">
                    {fullSongMode ? (
                      <p className="text-white/80 mb-2">
                        {t.themeSong?.fullSongMode || "Posłuchaj pełnego utworu - teraz możesz odsłuchać całą muzykę wejściową:"}
                      </p>
                    ) : (
                      <p className="text-white/80 mb-2">
                        {t.themeSong?.instructions || "Posłuchaj 3-sekundowego fragmentu muzyki wejściowej i odgadnij wrestlera:"}
                      </p>
                    )}
                    
                    {isPlaying ? (
                      <div className="relative">
                        <motion.div 
                          className="absolute inset-0 bg-purple-500/20 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 1,
                            ease: "easeInOut"
                          }}
                        />
                        <FaVolumeUp className="text-5xl text-purple-400 relative z-10" />
                      </div>
                    ) : (
                      <FaMusic className="text-5xl text-purple-400" />
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={playAudio}
                      disabled={isPlaying}
                      className={`bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-6 py-3 flex items-center gap-2 transition-all ${
                        isPlaying ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <FaPlay /> {t.themeSong?.playButton || "Odtwórz"}
                    </button>
                    
                    <button
                      onClick={pauseAudio}
                      disabled={!isPlaying}
                      className={`bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-3 flex items-center gap-2 transition-all ${
                        !isPlaying ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <FaPause /> {t.themeSong?.pauseButton || "Zatrzymaj"}
                    </button>
                  </div>
                  
                  {fullSongMode && (
                    <div className="mt-3 text-sm text-purple-300">
                      {t.themeSong?.fullSongHint || "Wskazówka: Teraz możesz odsłuchać cały utwór bez limitu czasowego"}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center text-red-400">
                  <p>{t.themeSong?.audioError || "Nie można odtworzyć dźwięku."}</p>
                  <button
                    onClick={resetGame}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 flex items-center gap-2 mx-auto"
                  >
                    <FaRedoAlt /> {t.themeSong?.tryAgainButton || "Spróbuj ponownie"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Wynik gry i zdjęcie wrestlera */}
        {showAnswer && currentWrestler && (
          <div className="mb-6">
            <div className="bg-black/20 rounded-lg p-4 flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-lg shrink-0">
                {/* Wariant z lokalnym obrazem lub zewnętrznym API */}
                {currentWrestler.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={currentWrestler.image}
                      alt={currentWrestler.name}
                      fill
                      className="object-cover"
                      unoptimized={true}
                      onError={() => {
                        // W przypadku błędu ładowania użyj obrazu z API
                        const imgElement = document.getElementById(`wrestler-img-${currentWrestler.id}`) as HTMLImageElement;
                        if (imgElement) {
                          imgElement.src = getWrestlerImageUrl(currentWrestler.name);
                        }
                      }}
                      id={`wrestler-img-${currentWrestler.id}`}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
                    <img 
                      src={getWrestlerImageUrl(currentWrestler.name)}
                      alt={currentWrestler.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{currentWrestler.name}</h3>
                {currentWrestler.themeSongTitle && (
                  <p className="text-purple-300">
                    <span className="font-semibold">{t.themeSong?.songTitle || "Utwór"}:</span> {currentWrestler.themeSongTitle}
                  </p>
                )}
                {currentWrestler.themeSongArtist && (
                  <p className="text-blue-300">
                    <span className="font-semibold">{t.themeSong?.songArtist || "Wykonawca"}:</span> {currentWrestler.themeSongArtist}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Pole do wprowadzania zgadywania */}
        {!gameOver ? (
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder={t.themeSong?.inputPlaceholder || "Wpisz nazwę wrestlera..."}
              className="flex-1 bg-black/30 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              onKeyPress={(e) => e.key === 'Enter' && handleGuess()}
            />
            <button
              onClick={handleGuess}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg px-6 py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <FaArrowRight />
              {t.themeSong?.checkButton || "Sprawdź"}
            </button>
          </div>
        ) : (
          <div className="text-center" ref={resultPanelRef}>
            {success ? (
              <>
                <div className="text-2xl text-green-400 font-bold mb-2">
                  {t.themeSong?.congratulations || "Gratulacje!"}
                </div>
                <div className="text-xl text-yellow-400 mb-4">
                  {t.themeSong?.pointsEarned || "Zdobyte punkty"}: +{pointsEarned}
                </div>
              </>
            ) : (
              <div className="text-2xl text-red-400 font-bold mb-4">
                {t.themeSong?.gameOver || "Koniec gry!"} 
              </div>
            )}
            
            <button
              onClick={resetGame}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-8 py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mx-auto"
            >
              <FaUndo />
              {t.themeSong?.playAgain || "Zagraj ponownie"}
            </button>
          </div>
        )}
        
        {/* Historia prób */}
        {guessHistory.length > 0 && !gameOver && (
          <div className="mt-6 bg-black/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">
              {t.themeSong?.guessHistory || "Historia prób:"}
            </h3>
            <ul className="space-y-1">
              {guessHistory.map((guess, index) => (
                <li key={index} className="text-red-300 flex items-center gap-2">
                  <span>{index + 1}.</span>
                  <span>{guess}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  )
} 