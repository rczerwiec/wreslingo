'use client'

import { useLanguage, TranslationType } from './contexts/LanguageContext';
import { FaUserSecret, FaGamepad, FaTrophy, FaCamera, FaMusic } from 'react-icons/fa';
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
  
  // Animacja dla liter w nagłówku
  const titleLetterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    })
  };
  
  return (
    <div className="space-y-12">
      <style jsx global>{`
        .text-gradient-blue {
          background: linear-gradient(to right, #ffffff, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .text-gradient-gold {
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
      
      <motion.section 
        className="text-center pt-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          {/* Efekt glow dla tytułu */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-20 bg-blue-500 blur-[50px] opacity-20 animate-pulse"></div>
          
          {/* Animowany tytuł */}
          <div className="text-4xl md:text-6xl font-extrabold mb-8 relative">
            <h1 className="sr-only">{t.home.welcome}</h1>
            <div className="flex justify-center relative z-10">
              {t.home.welcome.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={titleLetterVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block ${letter === ' ' ? 'ml-4' : ''} ${
                    index < 10 ? 'text-gradient-blue' : 'text-gradient-gold'
                  }`}
                  style={{
                    textShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            {/* Podkreślenie */}
            <motion.div 
              className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded w-0 mx-auto mt-2"
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </div>
          
          <motion.p 
            className="text-xl text-blue-200 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {t.home.subtitle}
          </motion.p>
        </div>
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

        {/* Karta 4 Próby */}
        <motion.div className="group" variants={itemVariants}>
          <div className="relative bg-black/30 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 flex items-center gap-2">
                  <FaCamera className="text-purple-300 group-hover:text-white transition-colors duration-300" />
                  {t.fourTries.title}
                </h3>
              </div>
              <p className="text-blue-200 mb-6 group-hover:text-white transition-colors duration-300">
                {t.home.fourTriesDesc}
              </p>
              <motion.a
                href="/games/four-tries"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transform hover:scale-[1.02] transition-all duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/games/four-tries';
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.home.playNow}
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        {/* Karta Jaka to melodia */}
        <motion.div className="group" variants={itemVariants}>
          <div className="relative bg-black/30 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
                  <FaMusic className="text-green-300 group-hover:text-white transition-colors duration-300" />
                  {t.themeSong?.title || "Jaka to melodia?"}
                </h3>
              </div>
              <p className="text-blue-200 mb-6 group-hover:text-white transition-colors duration-300">
                {t.home.themeSongDesc || "Posłuchaj krótkiego fragmentu muzyki wejściowej i odgadnij, do którego wrestlera należy. Czy rozpoznasz słynne theme songi?"}
              </p>
              <motion.a
                href="/games/theme-song"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-lg transform hover:scale-[1.02] transition-all duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/games/theme-song';
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.home.playNow}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
