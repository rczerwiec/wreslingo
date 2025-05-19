'use client'

import React, { JSX } from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Wrestler } from '@/app/types/wrestler'
import { getRandomWrestler, checkWrestlerGuess } from '@/app/data/wrestlers'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaRulerCombined, 
  FaBuilding, 
  FaInfoCircle, 
  FaGlobeAmericas, 
  FaUserCircle, 
  FaCalendarAlt, 
  FaTrophy, 
  FaBolt, 
  FaLightbulb, 
  FaThumbsUp, 
  FaMedal,
  FaArrowRight,
  FaUndo,
  FaHome,
  FaCheckCircle,
  FaSadTear
} from 'react-icons/fa'

type HintType = 'physicalStats' | 'workplace' | 'yearsActive' | 'championships' | 'finishers' | 'characteristic' | 'origin' | 'status' | 'funFact1' | 'funFact2' | 'funFact3'
type UnitSystem = 'metric' | 'imperial'

interface HintConfig {
  label: string
  icon: JSX.Element
  points: number
  priority: number
}

export default function GuessWrestler() {
  const { t, currentLanguage } = useLanguage()
  const [wrestler, setWrestler] = useState<Wrestler | null>(null)
  const [revealedHints, setRevealedHints] = useState<HintType[]>([])
  const [score, setScore] = useState(100)
  const [guess, setGuess] = useState('')
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing')
  const [isHintRevealing, setIsHintRevealing] = useState<HintType | null>(null)
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('imperial')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [guessHistory, setGuessHistory] = useState<Array<{
    guess: string;
    attempt: number;
  }>>([])

  // Konfiguracja wskazówek z tłumaczeniami
  const HINTS_CONFIG: Record<HintType, HintConfig> = {
    physicalStats: {
      label: t.guessWrestler.physicalStats,
      icon: <FaRulerCombined />,
      points: 10,
      priority: 1
    },
    workplace: {
      label: t.guessWrestler.workplace,
      icon: <FaBuilding />,
      points: 20,
      priority: 2
    },
    status: {
      label: t.guessWrestler.status,
      icon: <FaInfoCircle />,
      points: 15,
      priority: 3
    },
    origin: {
      label: t.guessWrestler.origin,
      icon: <FaGlobeAmericas />,
      points: 15,
      priority: 4
    },
    characteristic: {
      label: t.guessWrestler.characteristic,
      icon: <FaUserCircle />,
      points: 20,
      priority: 5
    },
    yearsActive: {
      label: t.guessWrestler.yearsActive,
      icon: <FaCalendarAlt />,
      points: 20,
      priority: 6
    },
    championships: {
      label: t.guessWrestler.championships,
      icon: <FaTrophy />,
      points: 25,
      priority: 8
    },
    finishers: {
      label: t.guessWrestler.finishers,
      icon: <FaBolt />,
      points: 20,
      priority: 7
    },
    funFact1: {
      label: `${t.guessWrestler.funFact} 1`,
      icon: <FaLightbulb />,
      points: 15,
      priority: 9
    },
    funFact2: {
      label: `${t.guessWrestler.funFact} 2`,
      icon: <FaThumbsUp />,
      points: 20,
      priority: 10
    },
    funFact3: {
      label: `${t.guessWrestler.funFact} 3`,
      icon: <FaMedal />,
      points: 25,
      priority: 11
    }
  }

  // Inicjalizacja gry
  useEffect(() => {
    try {
      const newWrestler = getRandomWrestler()
      setWrestler(newWrestler)

      // Losujemy pierwszą podpowiedź
      const availableHints = Object.keys(HINTS_CONFIG) as HintType[]
      const randomIndex = Math.floor(Math.random() * availableHints.length)
      const firstHint = availableHints[randomIndex]
      
      // Ustawiamy pierwszą podpowiedź bez odejmowania punktów
      setRevealedHints([firstHint])
    } catch (e) {
      console.error('Error initializing game:', e)
    }
  }, [])

  const convertHeight = (height: string, to: UnitSystem): string => {
    if (!height) return 'Brak danych'
    
    if (to === 'metric') {
      // Zakładamy, że height jest w formacie "6'3""
      const [feet, inches] = height.replace('"', '').split("'").map(Number)
      const totalCm = Math.round((feet * 30.48) + (inches * 2.54))
      return `${totalCm} cm`
    }
    return height
  }

  const convertWeight = (weight: string, to: UnitSystem): string => {
    if (!weight) return 'Brak danych'
    
    if (to === 'metric') {
      // Zakładamy, że weight jest w formacie "265 lbs"
      const lbs = parseInt(weight.split(' ')[0])
      const kg = Math.round(lbs * 0.453592)
      return `${kg} kg`
    }
    return weight
  }

  // Funkcja do uzyskiwania zlokalizowanej wartości
  const getLocalizedValue = (value: any): string => {
    if (!value) return '';
    
    // Jeśli to obiekt z tłumaczeniami
    if (value && typeof value === 'object' && value[currentLanguage]) {
      return value[currentLanguage];
    }
    
    // Jeśli to zwykły string
    return value.toString();
  }

  const formatHintValue = (type: HintType, wrestler: Wrestler): string | JSX.Element => {
    switch (type) {
      case 'physicalStats':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>{t.guessWrestler.physicalStats.split(' ')[0]}:</span>
              <span>{convertHeight(wrestler.height, unitSystem)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>{t.guessWrestler.physicalStats.split(' ')[2]}:</span>
              <span>{convertWeight(wrestler.weight, unitSystem)}</span>
            </div>
            <div className="mt-2 text-sm">
              <button
                onClick={() => setUnitSystem(prev => prev === 'imperial' ? 'metric' : 'imperial')}
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                {t.guessWrestler.changeUnits} {unitSystem === 'imperial' ? t.guessWrestler.metricUnits : t.guessWrestler.imperialUnits}
              </button>
            </div>
          </div>
        )
      case 'workplace':
        return `${wrestler.currentEmployer} (${wrestler.currentRoster})`
      case 'status':
        return wrestler.yearsActive.to ? t.guessWrestler.notActive : t.guessWrestler.active
      case 'origin':
        return getLocalizedValue(wrestler.birthplace)
      case 'characteristic':
        return getLocalizedValue(wrestler.characteristic)
      case 'yearsActive':
        return `${t.guessWrestler.yearsActive.split(' ')[0]} ${wrestler.yearsActive.from}${wrestler.yearsActive.to ? ` ${t.guessWrestler.yearsActive.split(' ')[2]} ${wrestler.yearsActive.to}` : ` (${t.guessWrestler.active})`}`
      case 'championships':
        return wrestler.championships
          .map(c => `${c.name} (${c.times}x)`)
          .join(', ')
      case 'finishers':
        return wrestler.finishers.join(', ')
      case 'funFact1':
        return getLocalizedValue(wrestler.funFacts[0])
      case 'funFact2':
        return getLocalizedValue(wrestler.funFacts[1])
      case 'funFact3':
        return getLocalizedValue(wrestler.funFacts[2])
      default:
        return ''
    }
  }

  const getRandomUnrevealedHint = (): HintType | null => {
    const availableHints = Object.keys(HINTS_CONFIG)
      .filter(type => !revealedHints.includes(type as HintType)) as HintType[]

    if (availableHints.length === 0) return null
    
    const randomIndex = Math.floor(Math.random() * availableHints.length)
    return availableHints[randomIndex]
  }

  const revealHint = (hintType: HintType) => {
    if (!wrestler || revealedHints.includes(hintType)) return
    
    setIsHintRevealing(hintType)
    setTimeout(() => {
      setRevealedHints(prev => [...prev, hintType])
      // Odejmujemy punkty tylko jeśli to nie jest pierwsza podpowiedź
      if (revealedHints.length > 0) {
        const pointsLost = HINTS_CONFIG[hintType].points
        setScore(prev => Math.max(0, prev - pointsLost))
        
        if (score <= pointsLost) {
          setGameStatus('lost')
        }
      }
      setIsHintRevealing(null)
    }, 500)
  }

  const handleGuess = () => {
    if (!wrestler || !guess.trim()) return

    const currentAttempt = guessHistory.length + 1
    
    if (checkWrestlerGuess(wrestler, guess)) {
      setGameStatus('won')
    } else {
      setGuessHistory(prev => [...prev, {
        guess: guess,
        attempt: currentAttempt
      }])
      
      // Losowe odkrycie następnej wskazówki po błędnej odpowiedzi
      const nextHint = getRandomUnrevealedHint()
      if (nextHint) {
        revealHint(nextHint)
      } else {
        setGameStatus('lost')
      }
    }
    setGuess('')
  }

  const handlePlayAgain = () => {
    const newWrestler = getRandomWrestler()
    setWrestler(newWrestler)
    setRevealedHints([])
    setScore(100)
    setGuess('')
    setGameStatus('playing')
    setGuessHistory([])

    // Losujemy pierwszą podpowiedź
    const availableHints = Object.keys(HINTS_CONFIG) as HintType[]
    const randomIndex = Math.floor(Math.random() * availableHints.length)
    const firstHint = availableHints[randomIndex]
    setRevealedHints([firstHint])
  }

  const handleBackToGames = () => {
    window.location.href = '/'
  }

  const getAttemptLabel = (attempt: number): string => {
    switch (attempt) {
      case 1: return t.guessWrestler.firstTry
      case 2: return t.guessWrestler.secondTry
      case 3: return t.guessWrestler.thirdTry
      case 4: return t.guessWrestler.fourthTry
      case 5: return t.guessWrestler.fifthTry
      default: return `${attempt}`
    }
  }

  // Animacja dla podpowiedzi
  const hintVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    revealed: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.5
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const resultVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="p-8">
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <motion.img
                src="/logo.png"
                alt="WrestlinGo Logo"
                className="h-8 w-auto"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {t.guessWrestler.title}
              </h2>
            </div>
            <motion.div 
              className="flex items-center gap-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              <span className="text-blue-200">{t.guessWrestler.score}:</span>
              <span className="text-2xl font-bold text-white">{score}</span>
            </motion.div>
          </motion.div>
          
          <div className="space-y-8">
            {/* Siatka głównych wskazówek */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {Object.entries(HINTS_CONFIG)
                .filter(([type]) => !type.startsWith('funFact'))
                .map(([type, config]) => {
                  const isRevealed = revealedHints.includes(type as HintType)
                  const isRevealing = isHintRevealing === type
                  
                  return (
                    <motion.div
                      key={type}
                      className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                        isRevealed 
                          ? 'bg-white/10 backdrop-blur-sm' 
                          : 'bg-blue-900/50'
                      }`}
                      variants={hintVariants}
                      animate={isRevealed ? "revealed" : "visible"}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <motion.span 
                            className="text-blue-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            {config.icon}
                          </motion.span>
                          {!isRevealed && (
                            <span className="text-blue-300 text-sm">-{config.points} pkt</span>
                          )}
                        </div>
                        
                        <div className="space-y-1">
                          <h3 className="text-blue-200 font-medium">
                            {config.label}
                          </h3>
                          <AnimatePresence>
                            {isRevealed && wrestler && (
                              <motion.div 
                                className="text-white"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                              >
                                {formatHintValue(type as HintType, wrestler)}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
            </motion.div>

            {/* Ciekawostki w jednym wierszu */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.8 }}
            >
              {Object.entries(HINTS_CONFIG)
                .filter(([type]) => type.startsWith('funFact'))
                .map(([type, config]) => {
                  const isRevealed = revealedHints.includes(type as HintType)
                  const isRevealing = isHintRevealing === type
                  
                  return (
                    <motion.div
                      key={type}
                      className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                        isRevealed 
                          ? 'bg-white/10 backdrop-blur-sm' 
                          : 'bg-blue-900/50'
                      }`}
                      variants={hintVariants}
                      animate={isRevealed ? "revealed" : "visible"}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <motion.span 
                            className="text-blue-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            {config.icon}
                          </motion.span>
                          {!isRevealed && (
                            <span className="text-blue-300 text-sm">-{config.points} pkt</span>
                          )}
                        </div>
                        
                        <div className="space-y-1">
                          <h3 className="text-blue-200 font-medium">
                            {config.label}
                          </h3>
                          <AnimatePresence>
                            {isRevealed && wrestler && (
                              <motion.div 
                                className="text-white"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                              >
                                {formatHintValue(type as HintType, wrestler)}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
            </motion.div>

            {/* Pole do zgadywania */}
            <AnimatePresence mode="wait">
              {gameStatus === 'playing' && (
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder={t.guessWrestler.inputPlaceholder}
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                    onKeyDown={(e) => e.key === 'Enter' && handleGuess()}
                    initial={{ opacity: 0, width: "90%" }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                  
                  <motion.button
                    onClick={handleGuess}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-medium transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaArrowRight />
                    {t.guessWrestler.checkButton}
                  </motion.button>

                  {/* Historia prób */}
                  <AnimatePresence>
                    {guessHistory.length > 0 && (
                      <motion.div 
                        className="space-y-2 mt-6 bg-black/20 rounded-xl p-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {guessHistory.map((entry, index) => (
                          <motion.div 
                            key={index}
                            className="text-sm text-red-200"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {getAttemptLabel(entry.attempt)} {t.guessWrestler.incorrectGuess}: {entry.guess}
                          </motion.div>
                        )).reverse()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Komunikat o wyniku */}
            <AnimatePresence>
              {gameStatus !== 'playing' && (
                <motion.div 
                  className={`p-8 rounded-xl backdrop-blur-sm ${
                    gameStatus === 'won' 
                      ? 'bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 border border-green-500/30' 
                      : 'bg-gradient-to-br from-red-500/20 via-rose-500/20 to-pink-500/20 border border-red-500/30'
                  }`}
                  variants={resultVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  {gameStatus === 'won' ? (
                    <div className="text-center space-y-4">
                      <motion.div 
                        className="text-6xl"
                        animate={{ 
                          y: [0, -15, 0],
                          transition: { 
                            repeat: Infinity, 
                            duration: 1.5,
                            repeatType: "mirror"
                          }
                        }}
                      >
                        <FaCheckCircle className="mx-auto text-green-400" />
                      </motion.div>
                      <motion.h3 
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {t.guessWrestler.congratulations}
                      </motion.h3>
                      <motion.div 
                        className="flex items-center justify-center gap-2 text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span className="text-green-300">{t.guessWrestler.pointsEarned}:</span>
                        <span className="font-bold text-white">{score}</span>
                      </motion.div>
                      <motion.p 
                        className="text-green-200 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        {t.guessWrestler.thatWas} {wrestler?.name}!
                      </motion.p>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <motion.div 
                        className="text-6xl"
                        animate={{ 
                          y: [0, -15, 0],
                          transition: { 
                            repeat: Infinity, 
                            duration: 1.5,
                            repeatType: "mirror"
                          }
                        }}
                      >
                        <FaSadTear className="mx-auto text-red-400" />
                      </motion.div>
                      <motion.h3 
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {t.guessWrestler.gameOver}
                      </motion.h3>
                      <motion.p 
                        className="text-red-200 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {t.guessWrestler.thatWas} {wrestler?.name}!
                      </motion.p>
                    </div>
                  )}
                  
                  <motion.div 
                    className="mt-8 flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <motion.button
                      onClick={handlePlayAgain}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-medium transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaUndo />
                      <span>{t.guessWrestler.playAgain}</span>
                    </motion.button>
                    <motion.button
                      onClick={handleBackToGames}
                      className="flex-1 bg-white/10 text-white px-6 py-4 rounded-xl font-medium transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaHome />
                      <span>{t.guessWrestler.backToGames}</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 