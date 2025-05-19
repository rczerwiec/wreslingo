'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { useCallback, useEffect, useState } from 'react';

/**
 * Hook rozszerzający router Next.js o zachowanie wybranego języka
 * przy przejściach między stronami
 */
export const useNextRouterWithLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { currentLanguage } = useLanguage();
  const [isHydrated, setIsHydrated] = useState(false);
  
  // Ustawienie flagi hydratacji po montażu komponentu
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  
  // Odwołanie funkcji push z routera, z ustawianiem atrybutu data-language
  const push = useCallback((url: string) => {
    // Manipulacje DOM wykonujemy tylko po hydratacji
    if (isHydrated && typeof document !== 'undefined') {
      // Zapisz język przed nawigacją
      localStorage.setItem('selectedLanguage', currentLanguage);
      
      // Ustaw atrybut data-language w HTML
      try {
        document.documentElement.dataset.language = currentLanguage;
        document.documentElement.setAttribute('data-language-loaded', 'false');
      } catch (e) {
        console.error('Error setting language attribute:', e);
      }
    }
    
    // Przejdź do nowego URL
    router.push(url);
  }, [router, currentLanguage, isHydrated]);
  
  return {
    ...router,
    push,
    pathname,
    currentLanguage,
    isHydrated
  };
}; 