'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useLanguage, LanguageCode } from '../contexts/LanguageContext'
import { FaChevronDown, FaGlobeAmericas } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

type FlagConfig = {
  [key in LanguageCode]: {
    name: string;
    icon: string;
  }
}

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const FLAGS: FlagConfig = {
    pl: {
      name: 'Polski',
      icon: '🇵🇱'
    },
    en: {
      name: 'English',
      icon: '🇬🇧'
    },
    de: {
      name: 'Deutsch',
      icon: '🇩🇪'
    },
    es: {
      name: 'Español',
      icon: '🇪🇸'
    }
  }
  
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  
  const toggleDropdown = () => setIsOpen(!isOpen)
  
  const handleLanguageChange = (lang: LanguageCode) => {
    changeLanguage(lang)
    setIsOpen(false)
  }
  
  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-700/50 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaGlobeAmericas className="text-blue-300" />
        </motion.div>
        <motion.span 
          className="mx-2"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          {FLAGS[currentLanguage].icon}
        </motion.span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute right-0 mt-2 w-40 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="py-1"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {Object.entries(FLAGS).map(([code, { name, icon }], index) => (
                <motion.button
                  key={code}
                  onClick={() => handleLanguageChange(code as LanguageCode)}
                  className={`w-full px-4 py-2 text-left flex items-center space-x-2 ${
                    currentLanguage === code
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-blue-700/30 text-blue-100'
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    backgroundColor: currentLanguage === code ? 'rgb(37 99 235)' : 'rgba(59, 130, 246, 0.3)',
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span 
                    className="text-xl"
                    whileHover={{ scale: 1.2 }}
                  >
                    {icon}
                  </motion.span>
                  <span>{name}</span>
                  {currentLanguage === code && (
                    <motion.span 
                      className="ml-auto text-blue-200"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 