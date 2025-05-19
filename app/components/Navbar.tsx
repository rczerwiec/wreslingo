'use client'

import React, { useState } from 'react'
import { LanguageSelector } from './LanguageSelector'
import { useLanguage } from '../contexts/LanguageContext'
import { FaGamepad, FaTrophy, FaHome, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar: React.FC = () => {
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navigateTo = (path: string) => {
    window.location.href = path
    setMobileMenuOpen(false)
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
    <div className="relative">
      <motion.nav 
        className="sticky top-0 z-40 bg-black/30 backdrop-blur-sm text-white h-20 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Desktop Menu */}
          <div className="hidden md:flex md:justify-between md:items-center">
            {/* Menu po lewej */}
            <motion.div 
              className="flex space-x-2 justify-start"
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
            
            {/* Pusta przestrzeń na środku (dla logo) */}
            <div className="w-28"></div>
            
            {/* Menu po prawej */}
            <motion.div 
              className="flex items-center space-x-2 justify-end"
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

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center justify-between">
            <div className="w-8"></div>
            
            <div className="w-8 flex justify-end">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 focus:outline-none"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="md:hidden absolute left-0 right-0 top-20 bg-black/95 backdrop-blur-md z-50 p-4 flex flex-col space-y-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button 
                  onClick={() => navigateTo('/games')}
                  className="px-4 py-3 rounded-lg border border-blue-600 hover:bg-blue-600 transition-all duration-200 text-blue-200 hover:text-white flex items-center gap-2"
                  variants={buttonVariants}
                  whileTap="tap"
                >
                  <FaGamepad />
                  {t.nav.games}
                </motion.button>
                <motion.button 
                  onClick={() => navigateTo('/ranking')}
                  className="px-4 py-3 rounded-lg border border-blue-600 hover:bg-blue-600 transition-all duration-200 text-blue-200 hover:text-white flex items-center gap-2"
                  variants={buttonVariants}
                  whileTap="tap"
                >
                  <FaTrophy />
                  {t.nav.ranking}
                </motion.button>
                <motion.button 
                  onClick={() => navigateTo('/login')}
                  className="px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white flex items-center gap-2"
                  variants={buttonVariants}
                  whileTap="tap"
                >
                  <FaSignInAlt />
                  {t.nav.login}
                </motion.button>
                <motion.button 
                  onClick={() => navigateTo('/register')}
                  className="px-4 py-3 rounded-lg border border-blue-600 hover:bg-blue-600 transition-all duration-200 text-blue-200 hover:text-white flex items-center gap-2"
                  variants={buttonVariants}
                  whileTap="tap"
                >
                  <FaUserPlus />
                  {t.nav.register}
                </motion.button>
                <div className="pt-2 pb-1 border-t border-white/10">
                  <LanguageSelector />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      
      {/* Logo na górze, ponad navbarem */}
      <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-50">
        <motion.button 
          onClick={() => navigateTo('/')}
          className="group block"
          variants={logoVariants}
          whileHover="hover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          <img
            src="/logo.png"
            alt="WrestlinGo Logo"
            className="h-32 w-auto transform transition-transform duration-300"
          />
        </motion.button>
      </div>
    </div>
  )
} 