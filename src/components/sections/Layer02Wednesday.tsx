'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { EpisodeNumber } from '@/components/ui/EpisodeNumber';
import { EASE_ENTRANCE as EASE, DUR_SECTION as DURATIONS } from '@/lib/gsap-setup';

gsap.registerPlugin(ScrollTrigger);

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const programs = [
  { id: '01', title: 'SDP', desc: 'Hands-on workshops building real skills' },
  { id: '02', title: 'Technical Session', desc: 'Deep dives into cutting-edge topics' },
  { id: '03', title: 'Workshop', desc: 'Guided building sessions with expert mentors' },
  { id: '04', title: 'Seminar', desc: 'Industry perspectives and academic research' }
];

export function Layer02Wednesday() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const wedRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    
    if (!containerRef.current || !tickerRef.current || !wedRef.current || !programsRef.current) return;

    if (isDesktop) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
        }
      });

      tl.to(tickerRef.current, {
        x: '-30%',
        ease: 'none',
        duration: 1
      })
      .to(wedRef.current, {
        scale: 1.2,
        color: 'var(--acid)',
        ease: EASE,
        duration: 0.5
      }, '<0.5')
      .fromTo(programsRef.current.children, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: EASE },
        '<'
      );
    } else {
      // Mobile animation
      gsap.fromTo(programsRef.current.children,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1, 
          duration: 0.6,
          ease: EASE,
          scrollTrigger: {
            trigger: programsRef.current,
            start: 'top 80%'
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <SectionWrapper id="wednesday"  className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-violet/40 bg-void">
      <div className="absolute top-12 left-6 font-data text-violet text-sm tracking-widest uppercase z-10">
        002 — THE WEDNESDAY RHYTHM
      </div>

      <div className="w-full mt-24">
        {/* Desktop Ticker / Mobile Stack */}
        <div ref={tickerRef} className="flex flex-col md:flex-row items-center md:items-baseline md:whitespace-nowrap px-6 gap-8 md:gap-16 transition-transform will-change-transform">
          {days.map((day) => (
            <div 
              key={day}
              ref={day === 'WED' ? wedRef : null}
              className={`font-display font-bold text-5xl md:text-8xl lg:text-9xl uppercase tracking-tighter ${
                day === 'WED' ? 'text-acid scale-110 md:scale-100' : 'text-muted/30 md:text-muted/10'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Programs */}
        <div ref={programsRef} className="w-full max-w-7xl mx-auto mt-24 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="pt-6 border-t border-violet/40">
              <div className="font-data text-muted text-sm mb-4">
                <EpisodeNumber number={parseInt(program.id, 10)} />
              </div>
              <h3 className="font-display font-bold text-2xl text-bone uppercase mb-2">
                {program.title}
              </h3>
              <p className="font-body text-muted text-sm">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
