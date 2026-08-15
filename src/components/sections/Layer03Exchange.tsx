'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, EASE_GLITCH, EASE_ENTRANCE, DUR_SECTION } from '@/lib/gsap-setup';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { HalftoneField } from '@/components/ui/HalftoneField';

export function Layer03Exchange() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const lineRRef = useRef<HTMLDivElement>(null);
  const lineGRef = useRef<HTMLDivElement>(null);
  const lineBRef = useRef<HTMLDivElement>(null);
  const lineVioletRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only animate on desktop
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      // Entrances
      gsap.from(leftRef.current, {
        x: '-100%',
        opacity: 0,
        ease: EASE_ENTRANCE,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'center center',
          scrub: true,
        }
      });

      gsap.from(rightRef.current, {
        x: '100%',
        opacity: 0,
        ease: EASE_ENTRANCE,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'center center',
          scrub: true,
        }
      });

      // RGB Tear on the divider
      const tearTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center bottom',
          end: 'center center',
          scrub: true,
        }
      });

      tearTl
        .fromTo([lineRRef.current, lineGRef.current, lineBRef.current], 
          { x: (i) => (i - 1) * 20, opacity: 1 }, 
          { x: 0, opacity: 0, ease: EASE_GLITCH, duration: 1 }
        )
        .fromTo(lineVioletRef.current, 
          { opacity: 0 }, 
          { opacity: 1, ease: EASE_GLITCH, duration: 0.1 }, 
          '-=0.2'
        );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <SectionWrapper ref={sectionRef} className="relative min-h-screen py-64 overflow-hidden border-t border-[rgba(125,78,202,0.4)]">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <HalftoneField />
      </div>
      
      <div className="container mx-auto px-24">
        <div className="mb-48 text-[rgba(125,78,202,1)] font-departure text-sm tracking-widest">
          003 — THE EXCHANGE
        </div>

        {/* Desktop Layout */}
        <div className="relative flex flex-col md:flex-row gap-48 md:gap-0 min-h-[500px]">
          
          {/* Wireframe Globe (Center Background) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 flex justify-center items-center pointer-events-none">
            <svg 
              className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] animate-[spin_20s_linear_infinite]" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="48" stroke="rgba(125, 78, 202, 0.3)" strokeWidth="1" />
              <ellipse cx="50" cy="50" rx="48" ry="16" stroke="rgba(125, 78, 202, 0.3)" strokeWidth="1" />
              <ellipse cx="50" cy="50" rx="16" ry="48" stroke="rgba(125, 78, 202, 0.3)" strokeWidth="1" />
              <path d="M 2 50 L 98 50" stroke="rgba(125, 78, 202, 0.3)" strokeWidth="1" />
              <path d="M 50 2 L 50 98" stroke="rgba(125, 78, 202, 0.3)" strokeWidth="1" />
              <path d="M 15 15 L 85 85" stroke="rgba(125, 78, 202, 0.3)" strokeWidth="1" />
              <path d="M 15 85 L 85 15" stroke="rgba(125, 78, 202, 0.3)" strokeWidth="1" />
            </svg>
          </div>

          {/* LEFT: Demand Side */}
          <div ref={leftRef} className="flex-1 md:pr-48 flex flex-col">
            <h2 className="font-anybody text-4xl md:text-6xl text-[var(--bone)] mb-32 uppercase font-bold tracking-wide">
              I WANT TO LEARN...
            </h2>
            <div className="flex flex-col gap-24 mb-48">
              {[
                { title: 'Transformer Architectures from Scratch', votes: 24 },
                { title: 'Building RAG Pipelines', votes: 18 },
                { title: 'Computer Vision for Edge Devices', votes: 12 }
              ].map((topic, i) => (
                <div key={i} className="pl-16 border-l border-[rgba(125,78,202,0.4)] py-8 flex flex-col gap-8">
                  <div className="font-anybody text-xl md:text-2xl text-[var(--bone)]">{topic.title}</div>
                  <div className="font-departure text-[var(--acid)] text-sm">{topic.votes} VOTES</div>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <Button variant="secondary">Request a Topic</Button>
            </div>
          </div>

          {/* CENTER DIVIDER (Desktop Only) */}
          <div ref={dividerRef} className="hidden md:block relative w-1 mx-24">
            <div ref={lineRRef} className="absolute inset-y-0 w-px bg-[var(--vermilion)] mix-blend-screen" />
            <div ref={lineGRef} className="absolute inset-y-0 w-px bg-[var(--mint)] mix-blend-screen" />
            <div ref={lineBRef} className="absolute inset-y-0 w-px bg-[var(--violet)] mix-blend-screen" />
            <div ref={lineVioletRef} className="absolute inset-y-0 w-px bg-[rgba(125,78,202,0.4)]" />
          </div>
          {/* Mobile Divider */}
          <div className="block md:hidden w-full h-px bg-[rgba(125,78,202,0.4)] my-24" />

          {/* RIGHT: Supply Side */}
          <div ref={rightRef} className="flex-1 md:pl-48 flex flex-col">
            <h2 className="font-anybody text-4xl md:text-6xl text-[var(--bone)] mb-32 uppercase font-bold tracking-wide text-right md:text-left">
              I CAN TEACH...
            </h2>
            <div className="flex flex-col gap-24 mb-48">
              {[
                { title: 'Neural Architecture Search', name: 'Dr. Priya Sharma', role: 'Speaker' },
                { title: 'Prompt Engineering Masterclass', name: 'Karthik R.', role: 'Alumnus' },
                { title: 'MLOps in Production', name: 'Deepak S.', role: 'Industry' }
              ].map((offer, i) => (
                <div key={i} className="pl-16 border-l border-[rgba(125,78,202,0.4)] py-8 flex flex-col gap-8 text-right md:text-left">
                  <div className="font-anybody text-xl md:text-2xl text-[var(--bone)]">{offer.title}</div>
                  <div className="font-archivo text-base">
                    <span className="text-[var(--bone)]">{offer.name}</span>
                    <span className="text-[var(--muted)] ml-8">— {offer.role}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto md:self-start self-end">
              <Button variant="primary">Take the Floor</Button>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
