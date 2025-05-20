'use client'

import Link from 'next/link'
import { FaArrowLeft, FaTools, FaTrophy } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useLanguage } from '@/app/contexts/LanguageContext'

export default function RankingPage() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-4"
      >
        <FaArrowLeft />
        {t.underConstruction.backToHome}
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black/30 backdrop-blur-md rounded-xl border border-white/10 p-8 mb-6 max-w-xl mx-auto"
      >
        <div className="flex items-center justify-center mb-8">
          <div className="bg-yellow-900/30 p-5 rounded-full">
            <FaTrophy className="text-5xl text-yellow-400" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2">{t.underConstruction.ranking.title}</h1>
        
        <div className="flex items-center justify-center mb-6 text-yellow-300 gap-3">
          <FaTools className="text-xl animate-pulse" />
          <p className="text-lg">{t.underConstruction.pageInProgress}</p>
        </div>
        
        <p className="text-center text-blue-200 mb-8">
          {t.underConstruction.ranking.message}
        </p>
        
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg transform hover:scale-[1.02] transition-all duration-300 font-medium"
          >
            {t.underConstruction.backToHome}
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 