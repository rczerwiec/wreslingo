'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { 
  fourTriesWrestlers, 
  getRandomFourTriesWrestler, 
  checkWrestlerGuess, 
  FourTriesWrestler,
  getZoomConfig
} from '../../data/four-tries-wrestlers'
import { motion } from 'framer-motion'
import { FaCamera, FaArrowLeft, FaTrophy, FaSpinner } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

type ZoomLevel = {
  scale: number;
  style: React.CSSProperties;
}

// Nie potrzebujemy już stałej tablicy zoomLevels, ponieważ poziomy będą generowane dynamicznie

export default function FourTries() {
  const { t } = useLanguage()
  const [currentWrestler, setCurrentWrestler] = useState<FourTriesWrestler>(fourTriesWrestlers[0])
  const [guess, setGuess] = useState('')
  const [score, setScore] = useState(100)
  const [triesLeft, setTriesLeft] = useState(4)
  const [gameOver, setGameOver] = useState(false)
  const [success, setSuccess] = useState(false)
  const [currentZoomLevel, setCurrentZoomLevel] = useState(0)
  const [pointsEarned, setPointsEarned] = useState(0)
  const [imageError, setImageError] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  
  // Funkcja pobierająca aktualny styl CSS dla danego poziomu przybliżenia
  const getCurrentZoomStyle = (): React.CSSProperties => {
    const zoomConfig = getZoomConfig(currentWrestler, currentZoomLevel);
    
    // Obsługa specjalnego przypadku - skala 0 oznacza pełny widok zdjęcia bez przybliżenia
    if (zoomConfig.scale === 0) {
      return {
        transform: 'none',
        filter: 'none',
        transition: 'all 0.8s ease-in-out',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
        objectFit: 'contain',
        display: 'block',
        margin: '0 auto'
      };
    }
    
    // Animacja tylko dla ostatniego etapu (poziom 4)
    if (isTransitioning && currentZoomLevel === 4) {
      return {
        transform: `scale(${zoomConfig.scale})`,
        filter: `blur(${zoomConfig.blur + 6}px) brightness(${zoomConfig.brightness - 0.1})`, 
        transition: 'all 0.5s ease-in-out',
        transformOrigin: `${zoomConfig.offsetX} ${zoomConfig.offsetY}`
      };
    }
    
    return {
      transform: `scale(${zoomConfig.scale})`,
      filter: `blur(${zoomConfig.blur}px) brightness(${zoomConfig.brightness})`,
      transition: 'all 0.5s ease-in-out',
      transformOrigin: `${zoomConfig.offsetX} ${zoomConfig.offsetY}`
    };
  }

  // Styl dla kontenera obrazu, który zapewni poprawną pozycję względną
  const getImageContainerStyle = (): React.CSSProperties => {
    const zoomConfig = getZoomConfig(currentWrestler, currentZoomLevel);
    // Dla pełnego widoku, ustawiamy inny styl kontenera
    if (zoomConfig.scale === 0) {
      return {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        padding: '10px'
      };
    }
    
    return {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    };
  }

  // Styl dla kontenera zewnętrznego
  const getOuterContainerStyle = (): React.CSSProperties => {
    return gameOver ? {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    } : {
      position: 'relative',
      width: '100%',
      height: '100%'
    };
  }
  
  // Wybierz losowego wrestlera przy starcie i resecie gry
  const pickRandomWrestler = () => {
    setImageError(false)
    setCurrentWrestler(getRandomFourTriesWrestler())
  }
  
  useEffect(() => {
    pickRandomWrestler()
  }, [])
  
  // Efekt do obsługi ekranu ładowania i animacji
  useEffect(() => {
    if (!isLoading && !isTransitioning) return;
    
    let timer: NodeJS.Timeout;
    
    // Obsługa ekranu ładowania
    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoading(false);
        // Włącz animację tylko dla ostatniego etapu (po zakończeniu gry)
        if (currentZoomLevel === 4) {
          setIsTransitioning(true);
        }
        // Przywróć focus na pole wprowadzania tekstu po zakończeniu ładowania
        // jeśli gra nadal trwa
        if (!gameOver && inputRef.current) {
          inputRef.current.focus();
        }
      }, 800); // Czas ekranu ładowania
    }
    
    // Obsługa animacji (tylko dla ostatniego etapu)
    if (isTransitioning) {
      timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Czas animacji
    }
    
    return () => clearTimeout(timer);
  }, [isLoading, isTransitioning, currentZoomLevel, gameOver]);
  
  // Dodajemy nowy efekt, który będzie przywracał focus po zmianie guess na pusty string
  useEffect(() => {
    if (guess === '' && !gameOver && !isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [guess, gameOver, isLoading]);
  
  const handleGuess = () => {
    // Sprawdź czy zgadnięto poprawnie
    if (checkWrestlerGuess(currentWrestler, guess)) {
      // Punkty zależne od ilości pozostałych prób
      const earnedPoints = triesLeft * 25
      setPointsEarned(earnedPoints)
      setScore(score + earnedPoints)
      setSuccess(true)
      setGameOver(true)
      
      // Przy poprawnej odpowiedzi od razu włączamy animację przejścia, bez ekranu ładowania
      setIsTransitioning(true);
      // Pokaż pełne zdjęcie (poziom 4, oryginalne zdjęcie)
      setCurrentZoomLevel(4)
    } else {
      // Niepoprawna odpowiedź
      setTriesLeft(triesLeft - 1)
      
      // Sprawdź czy skończyły się próby
      if (triesLeft <= 1) {
        setGameOver(true)
        // Pokaż pełne zdjęcie (poziom 4, oryginalne zdjęcie)
        setCurrentZoomLevel(4)
        // Przy ostatniej nieudanej próbie również uruchamiamy animację przejścia, bez ekranu ładowania
        setIsTransitioning(true);
      } else {
        // Włącz ekran ładowania tylko dla niepoprawnych odpowiedzi gdy gracz ma jeszcze próby
        setIsLoading(true);
        
        // Zwiększ poziom zoomu (pokaż więcej szczegółów)
        if (currentZoomLevel < 3) {
          setCurrentZoomLevel(currentZoomLevel + 1)
        }
      }
    }
    
    setGuess('')
  }
  
  const resetGame = () => {
    setGuess('')
    setTriesLeft(4)
    setGameOver(false)
    setSuccess(false)
    setCurrentZoomLevel(0)
    setPointsEarned(0)
    setImageError(false)
    setIsLoading(true) // Włącz ekran ładowania przy resecie gry
    pickRandomWrestler()
  }
  
  const handleImageError = () => {
    setImageError(true)
  }
  
  const getTriesLabel = () => {
    switch (triesLeft) {
      case 4: return t.fourTries.firstTry;
      case 3: return t.fourTries.secondTry;
      case 2: return t.fourTries.thirdTry;
      case 1: return t.fourTries.lastTry;
      default: return '';
    }
  }
  
  return (
    <div className="relative min-h-screen pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-4"
      >
        <FaArrowLeft />
        {t.guessWrestler.backToGames}
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 p-6 mb-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <FaCamera className="text-purple-400" />
            {t.fourTries.title}
          </h1>
          <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-lg">
            <FaTrophy className="text-yellow-400" />
            <span className="font-bold">{t.fourTries.score}: {score}</span>
          </div>
        </div>
        
        {/* Informacja o pozostałych próbach */}
        {!gameOver && (
          <div className="mb-4 text-center">
            <div className="inline-block bg-purple-900/40 px-4 py-2 rounded-lg mb-2">
              <span className="font-bold">{t.fourTries.remainingTries}: {triesLeft}</span>
            </div>
            <div className="text-sm text-purple-300">{getTriesLabel()}</div>
            <div className="text-xs text-gray-400 mt-1">
              {t.fourTries.zoomLevel}: {currentZoomLevel + 1}/4
            </div>
          </div>
        )}
        
        {/* Kontener ze zdjęciem wrestlera */}
        <div className={`relative w-full ${gameOver ? 'h-96 md:h-[500px]' : 'h-72 md:h-96'} bg-black/20 rounded-lg overflow-hidden mb-6 transition-all duration-500`}>
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
              <div className="text-center">
                <FaSpinner className="animate-spin text-4xl text-purple-500 mx-auto mb-4" />
                <p className="text-gray-300">Ładowanie...</p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div style={getOuterContainerStyle()} className="relative w-full h-full overflow-hidden">
                {currentWrestler.image && !imageError ? (
                  <div style={getImageContainerStyle()}>
                    <div style={getCurrentZoomStyle()}>
                      <Image
                        src={currentWrestler.image}
                        alt={gameOver ? currentWrestler.name : "Mystery wrestler"}
                        width={gameOver ? 800 : 400}
                        height={gameOver ? 800 : 400}
                        className={gameOver ? "object-contain" : "object-contain"}
                        priority={true}
                        unoptimized={true}
                        onError={handleImageError}
                      />
                    </div>
                  </div>
                ) : (
                  <div style={getImageContainerStyle()}>
                    <div style={getCurrentZoomStyle()}>
                      <div className="w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center text-4xl font-bold text-gray-600">
                        {currentWrestler.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Pole do wprowadzania zgadywania */}
        {!gameOver ? (
          <div className="flex flex-col md:flex-row gap-3">
            <input
              ref={inputRef}
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder={t.fourTries.inputPlaceholder}
              className="flex-1 bg-black/30 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              onKeyPress={(e) => e.key === 'Enter' && handleGuess()}
              disabled={isLoading}
            />
            <button
              onClick={handleGuess}
              className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg px-6 py-3 font-medium transition-opacity ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
              disabled={isLoading}
            >
              {t.fourTries.checkButton}
            </button>
          </div>
        ) : (
          <div className="text-center">
            {success ? (
              <>
                <div className="text-2xl text-green-400 font-bold mb-2">
                  {t.fourTries.congratulations}
                </div>
                <div className="text-xl text-yellow-400 mb-4">
                  {t.fourTries.pointsEarned}: +{pointsEarned}
                </div>
              </>
            ) : (
              <div className="text-2xl text-red-400 font-bold mb-4">
                {t.fourTries.gameOver} <span className="text-white">{currentWrestler.name}</span>
              </div>
            )}
            
            <button
              onClick={resetGame}
              className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-8 py-3 font-medium transition-opacity ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
              disabled={isLoading}
            >
              {t.fourTries.playAgain}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
} 