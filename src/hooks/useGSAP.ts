'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type UseGSAPCallback = (context: gsap.Context) => void;

export const useGSAP = (callback: UseGSAPCallback, dependencies: React.DependencyList = []) => {
  const container = useRef<any>(null);

  useIsomorphicLayoutEffect(() => {
    if (!container.current) return;
    
    const ctx = gsap.context(callback, container);
    
    return () => {
      ctx.revert();
    };
  }, dependencies);

  return container;
};
