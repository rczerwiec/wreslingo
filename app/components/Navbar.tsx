'use client'

import React from 'react'
import { LanguageSelector } from './LanguageSelector'
import { useLanguage } from '../contexts/LanguageContext'
import { FaGamepad, FaTrophy, FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const Navbar: React.FC = () => {
  const { t } = useLanguage()
  
  const navigateTo = (path: string) => {
    window.location.href = path
  }
  
  const logoVariants = {
    hover: {
      scale: 1.1,
      rotate: [-5, 5, -5],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 1.5
        }
      }
    }
  }
  
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(37, 99, 235, 0.7)" 
    },
    tap: { 
      scale: 0.95
    }
  }
  
  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-black/30 backdrop-blur-sm text-white h-20 flex items-center relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between relative">
          {/* Menu po lewej */}
          <motion.div 
            className="flex space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.button 
              onClick={() => navigateTo('/games')}
              className="px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-600 transition-all duration-200 text-blue-200 hover:text-white flex items-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaGamepad />
              {t.nav.games}
            </motion.button>
            <motion.button 
              onClick={() => navigateTo('/ranking')}
              className="px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-600 transition-all duration-200 text-blue-200 hover:text-white flex items-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaTrophy />
              {t.nav.ranking}
            </motion.button>
          </motion.div>
          
          {/* Logo na środku */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          >
            <motion.button 
              onClick={() => navigateTo('/')}
              className="group block"
              variants={logoVariants}
              whileHover="hover"
            >
              <img
                src="/logo.png"
                alt="WrestlinGo Logo"
                className="h-28 w-auto transform transition-transform duration-300"
              />
            </motion.button>
          </motion.div>
          
          {/* Menu po prawej */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.button 
              onClick={() => navigateTo('/login')}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white flex items-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaSignInAlt />
              {t.nav.login}
            </motion.button>
            <motion.button 
              onClick={() => navigateTo('/register')}
              className="px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-600 transition-all duration-200 text-blue-200 hover:text-white flex items-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaUserPlus />
              {t.nav.register}
            </motion.button>
            <motion.div 
              className="w-px h-6 bg-white/10"
              initial={{ height: 0 }}
              animate={{ height: 24 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            /> {/* separator */}
            <LanguageSelector />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
} 