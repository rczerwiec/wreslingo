'use client'

import React, { useEffect, useState } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const ClientLanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  
  // Tylko wyświetlamy komponenty po pełnym załadowaniu po stronie klienta
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow"></div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        {children}
      </main>
      <Footer />
    </div>
  )
} 