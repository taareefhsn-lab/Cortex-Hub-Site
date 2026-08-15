'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { HalftoneField } from '@/components/ui/HalftoneField';
import { EASE_WIPE as EASE, DUR_SECTION as DURATIONS } from '@/lib/gsap-setup';

gsap.registerPlugin(ScrollTrigger);

export function Layer01Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (!containerRef.current || !textRef.current || !scanlineRef.current) return;

    const chars = textRef.current.querySelectorAll('.char');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        pin: isDesktop,
        scrub: true,
      }
    });

    // Move scanline from top to bottom
    tl.fromTo(scanlineRef.current, 
      { top: '0%' },
      { top: '100%', ease: 'none' }
    );

    // Reveal text based on scanline position
    tl.fromTo(chars, 
      { opacity: 0.2, color: 'var(--muted)' },
      { opacity: 1, color: 'var(--bone)', stagger: 0.01, ease: 'none' },
      '<'
    );

  }, { scope: containerRef });

  const manifestoText = "Cortex Hub is not a club. It is not a committee. It is a marketplace — a place where someone who knows something meets someone who wants to learn it. Every Wednesday, one of those matches happens in a room. No gatekeeping. No hierarchy. Just knowledge, exchanged freely, between people who care enough to show up.";

  return (
    <SectionWrapper id="manifesto"  className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-violet/40 bg-void">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-30">
        <HalftoneField density="sparse"  />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="mb-12 font-data text-violet text-sm tracking-widest uppercase">
          001 — MANIFESTO
        </div>
        
        <div className="relative py-4">
          <div ref={scanlineRef} className="absolute left-0 right-0 h-[2px] bg-violet z-20 shadow-[0_0_10px_var(--violet)] pointer-events-none" />
          <p ref={textRef} className="font-body text-3xl md:text-5xl lg:text-6xl leading-tight max-w-[50ch] text-left text-muted">
            {manifestoText.split('').map((char, index) => (
              <span key={index} className="char relative inline-block">{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
