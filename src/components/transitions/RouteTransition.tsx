'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function RouteTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Start covering the screen, then wipe OUT upwards to reveal the page
      gsap.fromTo(
        overlayRef.current,
        { yPercent: 0 },
        {
          yPercent: -100,
          duration: 2.4,
          ease: 'expo.inOut',
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-void border-b border-violet/40 pointer-events-none"
    >
      <div className="text-bone font-display font-bold text-4xl md:text-6xl tracking-widest uppercase">
        Cortex Hub
      </div>
    </div>
  );
}
