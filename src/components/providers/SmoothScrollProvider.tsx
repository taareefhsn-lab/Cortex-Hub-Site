'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type Lenis from 'lenis';
import { initSmoothScroll, destroySmoothScroll } from '@/lib/smooth-scroll';

const SmoothScrollContext = createContext<Lenis | null>(null);

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      return;
    }

    const lenisInstance = initSmoothScroll();
    setLenis(lenisInstance);

    return () => {
      destroySmoothScroll(lenisInstance);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
