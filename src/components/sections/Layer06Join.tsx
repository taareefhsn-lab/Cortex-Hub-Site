'use client';

import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';

export default function Layer06Join() {
  return (
    <div className="relative z-10 w-full bg-[var(--surface)] pt-16 pb-8 min-h-screen flex flex-col justify-between border-t border-[var(--violet)]/40" id="join">
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,5vw,6rem)]">
        <div className="font-mono text-[var(--violet)] text-sm tracking-widest mb-8 border-b border-[var(--violet)]/40 pb-4">
          006 — BECOME A MEMBER
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--bone)]">
              Membership Application
            </h2>
            <form className="flex flex-col gap-4 font-mono text-sm">
              <div className="flex flex-col gap-2">
                <label className="text-[var(--muted)]">NAME</label>
                <input 
                  type="text" 
                  className="bg-[var(--void)] border border-[var(--violet)]/40 text-[var(--bone)] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--acid)] focus:ring-1 focus:ring-[var(--acid)]"
                  placeholder="ENTER NAME"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[var(--muted)]">EMAIL</label>
                <input 
                  type="email" 
                  className="bg-[var(--void)] border border-[var(--violet)]/40 text-[var(--bone)] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--acid)] focus:ring-1 focus:ring-[var(--acid)]"
                  placeholder="ENTER EMAIL"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[var(--muted)]">ROLL NUMBER</label>
                <input 
                  type="text" 
                  className="bg-[var(--void)] border border-[var(--violet)]/40 text-[var(--bone)] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--acid)] focus:ring-1 focus:ring-[var(--acid)]"
                  placeholder="ENTER ROLL NUMBER"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[var(--muted)]">AREA OF INTEREST</label>
                <select className="bg-[var(--void)] border border-[var(--violet)]/40 text-[var(--bone)] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--acid)] focus:ring-1 focus:ring-[var(--acid)] appearance-none">
                  <option>FRONTEND DEVELOPMENT</option>
                  <option>BACKEND DEVELOPMENT</option>
                  <option>AI / MACHINE LEARNING</option>
                  <option>DESIGN / UI UX</option>
                </select>
              </div>
              <Button type="button" className="mt-4 w-full md:w-auto self-start">SUBMIT APPLICATION</Button>
            </form>
          </div>

          {/* Members Strip */}
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--bone)]">
              Core Team
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-[var(--violet)]/40 p-6 bg-[var(--void)] flex flex-col gap-4 transition-colors hover:border-[var(--violet)]">
                  <div className="font-mono text-xs text-[var(--violet)]">MEMBER 0{i}</div>
                  <div className="font-display font-bold text-xl text-[var(--bone)] uppercase leading-tight">Name Placeholder</div>
                  <div className="font-body text-sm text-[var(--muted)]">Role / Position</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,5vw,6rem)] mt-16 pb-12">
        <div className="border-t border-[var(--violet)]/40 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left side: Details & Contact */}
            <div className="md:col-span-3 flex flex-col gap-3 font-mono text-xs text-[var(--muted)] uppercase">
              <div>Dept. of Artificial Intelligence & Data Science</div>
              <div>Faculty Coordinators: Dr. XYZ, Prof. ABC</div>
              <div className="text-[var(--violet)]">Contact: team@cortexhub.edu</div>
            </div>
            
            {/* Center: Logo */}
            <div className="md:col-span-6 flex justify-center w-full">
              <img 
                src="/cortex-logo.jpg" 
                alt="Cortex Hub Logo" 
                className="w-full max-w-[800px] h-auto object-contain mix-blend-lighten opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_15px_rgba(var(--violet),0.3)]"
              />
            </div>

            {/* Right side: About */}
            <div className="md:col-span-3 flex flex-col gap-3 font-mono text-xs text-[var(--muted)] uppercase md:text-right">
              <div className="text-[var(--bone)]">ABOUT CORTEX HUB</div>
              <div>A two-way marketplace for knowledge.</div>
              <div>No gatekeeping. No hierarchy.</div>
            </div>
          </div>
          
          {/* Bottom: Copyright */}
          <div className="mt-16 text-center font-mono text-[10px] text-[var(--muted)]/50 uppercase tracking-widest">
            © 2026 CORTEX HUB. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
