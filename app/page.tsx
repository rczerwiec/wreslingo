'use client'

import { useLanguage } from './contexts/LanguageContext';
import { FaUserSecret, FaGamepad, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };
  
  return (
    <div className="space-y-12">
      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.home.welcome}
        </motion.h1>
        <motion.p 
          className="text-xl text-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t.home.subtitle}
        </motion.p>
      </motion.section>

      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Karta Zgadnij Wrestlera */}
        <motion.div className="group" variants={itemVariants}>
          <div className="relative bg-black/30 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                  <FaUserSecret className="text-blue-300 group-hover:text-white transition-colors duration-300" />
                  {t.guessWrestler.title}
                </h3>
              </div>
              <p className="text-blue-200 mb-6 group-hover:text-white transition-colors duration-300">
                {t.home.guessWrestlerDesc}
              </p>
              <motion.a
                href="/games/guess-wrestler"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg transform hover:scale-[1.02] transition-all duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/games/guess-wrestler';
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.home.playNow}
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Placeholder na przyszłe gry */}
        <motion.div className="group" variants={itemVariants}>
          <div className="relative bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-blue-500/5"></div>
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-400 flex items-center gap-2">
                  <FaGamepad className="text-gray-500" />
                  {t.home.moreGamesSoon}
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                {t.home.workingOnNewChallenges}
              </p>
              <div className="w-full h-12 bg-white/5 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">{t.home.comingSoon}</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Drugi placeholder na przyszłe gry */}
        <motion.div className="group" variants={itemVariants}>
          <div className="relative bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-blue-500/5"></div>
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-400 flex items-center gap-2">
                  <FaTrophy className="text-gray-500" />
                  {t.home.moreGamesSoon}
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                {t.home.workingOnNewChallenges}
              </p>
              <div className="w-full h-12 bg-white/5 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">{t.home.comingSoon}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
