'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap-setup';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { EpisodeNumber } from '@/components/ui/EpisodeNumber';
import { OrbitLine } from '@/components/ui/OrbitLine';

export function Layer04Archive() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  const episodes = [
    { num: 1, title: 'Introduction to Neural Architecture Search', speaker: 'Dr. Priya Sharma', date: '14 Aug 2026', att: 94 },
    { num: 2, title: 'Building Your First RAG Pipeline', speaker: 'Karthik R.', date: '07 Aug 2026', att: 78 },
    { num: 3, title: 'Edge Computing with TinyML', speaker: 'Prof. Anand K.', date: '31 Jul 2026', att: 112 },
    { num: 4, title: 'The Art of Prompt Engineering', speaker: 'Deepak S.', date: '24 Jul 2026', att: 65 },
    { num: 5, title: 'Data Storytelling & Visualization', speaker: 'Meera L.', date: '17 Jul 2026', att: 89 },
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const setRed = gsap.quickSetter('.channel-r', 'x', 'px');
      const setBlue = gsap.quickSetter('.channel-b', 'x', 'px');
      
      let proxy = { velocity: 0 };
      
      const st = ScrollTrigger.create({
        trigger: document.body,
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          gsap.to(proxy, {
            velocity: self.getVelocity(),
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
            onUpdate: () => {
              const maxOffset = 6;
              let offset = (proxy.velocity / 300) * maxOffset;
              offset = Math.max(-maxOffset, Math.min(maxOffset, offset));
              
              setRed(-offset);
              setBlue(offset);
            }
          });
        }
      });
      
      return () => st.kill();
    });

    mm.add('(max-width: 767px)', () => {
      rowsRef.current.forEach((row) => {
        if (!row) return;
        gsap.from(row, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            end: 'top 65%',
            scrub: true,
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <SectionWrapper id="archive" ref={sectionRef} className="relative min-h-screen py-64 overflow-hidden border-t border-[rgba(125,78,202,0.4)]">
      <div className="container mx-auto px-24">
        <div className="mb-48 text-[rgba(125,78,202,1)] font-departure text-sm tracking-widest">
          004 — EPISODE GUIDE
        </div>
        
        <div className="flex flex-col">
          {episodes.map((ep, i) => (
            <div 
              key={i} 
              ref={el => { rowsRef.current[i] = el }}
              className="relative group border-t border-[rgba(125,78,202,0.2)] py-24 md:py-32 hover:bg-[rgba(125,78,202,0.05)] transition-colors duration-300"
            >
              {/* Active Episode OrbitLine */}
              {i === 0 && (
                <div className="absolute inset-0 pointer-events-none hidden md:block opacity-30">
                  <OrbitLine progress={1} className="w-[102%] h-[120%] -ml-[1%] -mt-[10%]" />
                </div>
              )}

              {/* Desktop Channels Wrapper */}
              <div className="relative w-full">
                
                {/* Channel R */}
                <div className="channel-r absolute inset-0 hidden md:flex items-center text-[var(--vermilion)] mix-blend-screen opacity-0 md:opacity-70 pointer-events-none z-0" aria-hidden="true">
                  <EpisodeRowContent ep={ep} />
                </div>
                
                {/* Channel G */}
                <div className="channel-g absolute inset-0 hidden md:flex items-center text-[var(--mint)] mix-blend-screen opacity-0 md:opacity-70 pointer-events-none z-0" aria-hidden="true">
                  <EpisodeRowContent ep={ep} />
                </div>
                
                {/* Channel B */}
                <div className="channel-b absolute inset-0 hidden md:flex items-center text-[var(--violet)] mix-blend-screen opacity-0 md:opacity-70 pointer-events-none z-0" aria-hidden="true">
                  <EpisodeRowContent ep={ep} />
                </div>

                {/* Base Layer */}
                <div className="relative z-10 flex text-[var(--bone)] opacity-90 group-hover:opacity-100 transition-opacity">
                  <EpisodeRowContent ep={ep} isBase={true} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function EpisodeRowContent({ ep, isBase = false }: { ep: any, isBase?: boolean }) {
  return (
    <div className="flex flex-col md:flex-row w-full gap-8 md:gap-24 items-start md:items-center">
      <div className="w-24 shrink-0">
        {isBase ? (
          <EpisodeNumber number={ep.num} />
        ) : (
          <span className="font-departure text-[var(--violet)] uppercase tracking-[0.08em] text-xs">
            EP.{ep.num.toString().padStart(3, '0')}
          </span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-anybody text-2xl md:text-3xl font-bold uppercase">
          {ep.title}
        </h3>
        <div className={`font-archivo mt-4 md:mt-2 text-sm ${isBase ? 'text-[var(--muted)] group-hover:text-[var(--bone)] transition-colors' : 'text-inherit'}`}>
          {ep.speaker}
        </div>
      </div>
      <div className="flex gap-24 items-end md:items-center w-full md:w-auto mt-8 md:mt-0 justify-between md:justify-end">
        <div className={`font-departure text-xs md:text-sm ${isBase ? 'text-[var(--muted)] group-hover:text-[var(--bone)] transition-colors' : 'text-inherit'}`}>
          {ep.date}
        </div>
        <div className={`font-departure text-xs md:text-sm ${isBase ? 'text-[var(--mint)] group-hover:opacity-100 transition-opacity' : 'text-inherit'}`}>
          {ep.att} ATTENDED
        </div>
      </div>
    </div>
  );
}
