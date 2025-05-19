'use client'

import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { FaGithub, FaTwitter, FaEnvelope, FaCopyright, FaHeart } from 'react-icons/fa'

export const Footer: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-black/30 backdrop-blur-sm text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-200">{t.footer.about}</h3>
            <p className="text-white/80">{t.footer.aboutText}</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-200">{t.footer.contact}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-300" />
                <a href="mailto:contact@wrestlingo.com" className="text-white/80 hover:text-white transition-colors">
                  contact@wrestlingo.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaTwitter className="text-blue-300" />
                <a href="https://twitter.com/wrestlingo" className="text-white/80 hover:text-white transition-colors">
                  @wrestlingo
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaGithub className="text-blue-300" />
                <a href="https://github.com/wrestlingo" className="text-white/80 hover:text-white transition-colors">
                  github.com/wrestlingo
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-200">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-white/80 hover:text-white transition-colors">
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white/80 hover:text-white transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-white/80 hover:text-white transition-colors">
                  {t.footer.cookies}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FaCopyright className="mr-2 text-blue-300" />
            <p className="text-white/80">{t.footer.copyright} {new Date().getFullYear()}</p>
          </div>
          
          <p className="text-white/60 flex items-center">
            {t.footer.madeWith} <FaHeart className="mx-1 text-red-500" /> {t.footer.byWrestlingo}
          </p>
        </div>
      </div>
    </footer>
  )
} 