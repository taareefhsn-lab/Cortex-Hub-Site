'use client';

import React, { useState, useEffect } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/Button';
import { EpisodeNumber } from '@/components/ui/EpisodeNumber';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { gsap, EASE_ENTRANCE, EASE_GLITCH, DUR_HERO, DUR_MICRO, DUR_SECTION } from '@/lib/gsap-setup';

export default function Layer00Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isUrgent: false,
    mounted: false
  });

  useEffect(() => {
    const targetDate = new Date('2026-08-20T14:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft(prev => ({ ...prev, days: 0, hours: 0, minutes: 0, seconds: 0, mounted: true }));
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      const isUrgent = distance < 24 * 60 * 60 * 1000;

      setTimeLeft({ days, hours, minutes, seconds, isUrgent, mounted: true });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerRef = useGSAP((context) => {
    const tl = gsap.timeline();
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      gsap.set('.wordmark-channel', { opacity: 1 });
      gsap.set('.wordmark-base', { opacity: 0 });

      tl.from('.cortex-text', {
        x: -200,
        opacity: 0,
        duration: DUR_HERO / 2,
        ease: EASE_ENTRANCE,
      })
      .from('.hub-text', {
        x: 200,
        opacity: 0,
        duration: DUR_HERO / 2,
        ease: EASE_ENTRANCE,
      }, '<0.2')
      .fromTo('.wordmark-r', { x: -15, y: -8 }, { x: 0, y: 0, duration: DUR_MICRO, ease: EASE_GLITCH }, 'glitch')
      .fromTo('.wordmark-g', { x: 15, y: 12 }, { x: 0, y: 0, duration: DUR_MICRO, ease: EASE_GLITCH }, 'glitch')
      .fromTo('.wordmark-b', { x: -8, y: 15 }, { x: 0, y: 0, duration: DUR_MICRO, ease: EASE_GLITCH }, 'glitch')
      .set('.wordmark-base', { opacity: 1 })
      .set('.wordmark-channel', { opacity: 0 });
    });

    mm.add('(max-width: 767px)', () => {
      tl.from('.cortex-text', {
        x: -50,
        opacity: 0,
        duration: DUR_HERO / 2,
        ease: EASE_ENTRANCE,
      })
      .from('.hub-text', {
        x: 50,
        opacity: 0,
        duration: DUR_HERO / 2,
        ease: EASE_ENTRANCE,
      }, '<0.2');
    });

    tl.fromTo('.halftone-burst', 
      { scale: 0, opacity: 1 },
      { scale: 2.5, opacity: 0, duration: DUR_SECTION, ease: 'power2.out' },
      '-=0.4'
    );

    tl.fromTo('.orbit-line',
      { strokeDashoffset: 1 },
      { strokeDashoffset: 0, duration: DUR_SECTION, ease: EASE_ENTRANCE },
      '-=0.8'
    );

    tl.from('.hero-content-fade', {
      y: 40,
      opacity: 0,
      duration: DUR_SECTION,
      ease: EASE_ENTRANCE,
      stagger: 0.15
    }, '-=0.5');
  }, []);

  return (
    <SectionWrapper id="layer00" className="min-h-screen flex items-center bg-[var(--void)] relative" asymmetric>
      <div ref={containerRef} className="w-full lg:w-[65%] flex flex-col items-start gap-12 relative z-10 pt-16">
        
        {/* Wordmark Container */}
        <div className="relative w-full">
          {/* Effects */}
          <div 
            className="halftone-burst absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] pointer-events-none -z-10"
            style={{
              backgroundImage: 'radial-gradient(var(--violet) 2px, transparent 2px)',
              backgroundSize: '24px 24px',
              opacity: 0,
            }}
          />
          <svg className="absolute left-[30%] top-1/2 w-[140%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 overflow-visible">
            <ellipse 
              className="orbit-line"
              cx="50%" cy="50%" rx="45%" ry="30%" 
              fill="none" 
              stroke="var(--violet)" 
              strokeWidth="1" 
              strokeOpacity="0.4"
              pathLength="1"
              strokeDasharray="1 1"
              strokeDashoffset="1"
            />
          </svg>

          {/* Wordmark */}
          <div className="relative text-[clamp(4rem,9vw,10rem)] font-display font-bold leading-none tracking-tighter uppercase">
            {/* Base */}
            <div className="wordmark-base flex flex-wrap sm:flex-nowrap gap-x-4 sm:gap-x-6 text-[var(--bone)] relative z-10">
              <span className="cortex-text inline-block italic">CORTEX</span>
              <span className="hub-text inline-block">HUB</span>
            </div>
            {/* RGB Channels */}
            <div className="hidden md:flex wordmark-channel wordmark-r absolute inset-0 gap-x-6 text-[#FF0000] mix-blend-screen pointer-events-none z-20 opacity-0">
              <span className="cortex-text inline-block italic">CORTEX</span>
              <span className="hub-text inline-block">HUB</span>
            </div>
            <div className="hidden md:flex wordmark-channel wordmark-g absolute inset-0 gap-x-6 text-[#00FF00] mix-blend-screen pointer-events-none z-20 opacity-0">
              <span className="cortex-text inline-block italic">CORTEX</span>
              <span className="hub-text inline-block">HUB</span>
            </div>
            <div className="hidden md:flex wordmark-channel wordmark-b absolute inset-0 gap-x-6 text-[#0000FF] mix-blend-screen pointer-events-none z-20 opacity-0">
              <span className="cortex-text inline-block italic">CORTEX</span>
              <span className="hub-text inline-block">HUB</span>
            </div>
          </div>
        </div>

        {/* Motto & Subtitle */}
        <div className="hero-content-fade flex flex-col gap-4 w-full max-w-2xl opacity-0">
          <h2 className="font-display font-bold text-[var(--muted)] text-2xl sm:text-3xl uppercase tracking-wide">
            Where Knowledge Finds Its Voice
          </h2>
          <div className="font-mono text-[var(--violet)] text-sm uppercase tracking-widest border-b border-[var(--violet)]/40 pb-4">
            Dept. of Artificial Intelligence &amp; Data Science
          </div>
        </div>

        {/* Episode Box */}
        <div className="hero-content-fade flex flex-col md:flex-row w-full border border-[var(--violet)]/40 opacity-0 bg-[var(--surface)] relative group">
          {/* Hover highlight line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--violet)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          
          <div className="flex-1 flex flex-col gap-4 p-6 sm:p-8">
            <EpisodeNumber number={1} />
            <h3 className="font-display text-[var(--bone)] text-xl sm:text-2xl font-bold uppercase tracking-wide leading-tight">
              Introduction to Neural Architecture Search
            </h3>
            <div className="font-mono text-[var(--muted)] text-sm space-y-1">
              <p className="text-[var(--bone)] uppercase tracking-wider">Dr. Priya Sharma, Senior AI Researcher</p>
              <p>Seminar Hall B · 2:00 PM · 120 Seats</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <Button variant="primary">Register</Button>
              <div className="font-mono text-[var(--muted)] text-sm uppercase tracking-wider">
                Seats Left: <span className="text-[var(--bone)]">87</span>
              </div>
            </div>
          </div>

          {/* Countdown Panel */}
          <div className="md:w-64 shrink-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[var(--violet)]/40 p-6 sm:p-8 bg-[var(--void)]">
            <div className="font-mono text-[var(--violet)] text-xs uppercase tracking-widest mb-6">
              Next Episode
            </div>
            
            <div className={`font-mono text-2xl font-bold tracking-wider flex gap-3 items-start ${timeLeft.isUrgent ? 'text-[var(--vermilion)]' : 'text-[var(--acid)]'}`}>
              <div className="flex flex-col items-center">
                <span>{timeLeft.mounted ? String(timeLeft.days).padStart(2, '0') : '00'}</span>
                <span className="text-[var(--muted)] text-[10px] mt-1">DAYS</span>
              </div>
              <span className="text-[var(--violet)]/40 -mt-1">:</span>
              <div className="flex flex-col items-center">
                <span>{timeLeft.mounted ? String(timeLeft.hours).padStart(2, '0') : '00'}</span>
                <span className="text-[var(--muted)] text-[10px] mt-1">HRS</span>
              </div>
              <span className="text-[var(--violet)]/40 -mt-1">:</span>
              <div className="flex flex-col items-center">
                <span>{timeLeft.mounted ? String(timeLeft.minutes).padStart(2, '0') : '00'}</span>
                <span className="text-[var(--muted)] text-[10px] mt-1">MIN</span>
              </div>
              <span className="text-[var(--violet)]/40 -mt-1">:</span>
              <div className="flex flex-col items-center">
                <span>{timeLeft.mounted ? String(timeLeft.seconds).padStart(2, '0') : '00'}</span>
                <span className="text-[var(--muted)] text-[10px] mt-1">SEC</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
