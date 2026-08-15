'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SectionWrapper } from '../ui/SectionWrapper';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const outcomes = [
  'Applied Knowledge: Turn theory into working prototypes during live sessions.',
  'Verified Credentials: Earn digitally verifiable certificates for teaching and learning.',
  'Open Resource Library: Access all past slides, repositories, and notes.'
];

export default function Layer05Outcomes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    rowsRef.current.forEach((row, i) => {
      if (!row) return;

      const direction = i % 2 === 0 ? 100 : -100;
      
      gsap.fromTo(
        row,
        {
          clipPath: `inset(0 ${direction === 100 ? 100 : 0}% 0 ${direction === -100 ? 100 : 0}%)`,
          opacity: 0.2,
        },
        {
          clipPath: 'inset(0 0% 0 0%)',
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <SectionWrapper id="outcomes" asymmetric={false} className="relative bg-[var(--void)] w-full overflow-hidden">
      <div ref={containerRef} className="flex flex-col gap-16 md:gap-24 py-16">
        <div className="font-mono text-[var(--violet)] text-sm tracking-widest mb-8 border-b border-[var(--violet)]/40 pb-4">
          005 — OUTCOMES
        </div>
        <div className="flex flex-col gap-16 md:gap-24">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) rowsRef.current[index] = el;
              }}
              className={`font-display font-bold text-4xl md:text-5xl lg:text-[4vw] uppercase tracking-tight text-[var(--bone)] leading-[1.1] ${
                index % 2 === 0 ? 'text-left' : 'text-right'
              }`}
            >
              {outcome}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
