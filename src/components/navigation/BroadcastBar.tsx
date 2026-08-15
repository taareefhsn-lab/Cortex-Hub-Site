'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const NAV_LINKS = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Wednesday', href: '#wednesday' },
  { label: 'The Exchange', href: '#exchange' },
  { label: 'Archive', href: '#archive' },
  { label: 'Join', href: '#join' },
];

export function BroadcastBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tickerText, setTickerText] = useState('EP.001 — NEXT WEDNESDAY — TOPIC TBA');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-surface/95 border-b border-violet/40'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Live ticker strip */}
        <div className="bg-violet/10 border-b border-violet/20 overflow-hidden">
          <div className="flex items-center h-7">
            <div className="flex-shrink-0 bg-vermilion px-3 h-full flex items-center">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-void font-bold">
                LIVE
              </span>
            </div>
            <div className="ticker-scroll flex-1 overflow-hidden">
              <div className="flex animate-ticker whitespace-nowrap">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-muted px-6">
                  {tickerText}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-muted px-6">
                  {tickerText}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-muted px-6">
                  {tickerText}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-muted px-6">
                  {tickerText}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="px-[clamp(1.25rem,5vw,6rem)]">
          <nav className="flex items-center justify-between h-14 md:h-16">
            {/* Wordmark */}
            <Link href="/" className="group flex items-baseline gap-1">
              <span className="font-display text-lg md:text-xl font-bold uppercase tracking-tight text-bone">
                Cortex
              </span>
              <span className="font-display text-lg md:text-xl font-bold uppercase tracking-tight text-violet">
                Hub
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted transition-colors duration-200 hover:text-bone"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Button variant="primary" size="sm" href="#register">
                  Register
                </Button>
              </div>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] group"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <span
                  className={`block w-5 h-[1.5px] bg-bone transition-all duration-300 ${
                    mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                  }`}
                  style={{ transitionTimingFunction: mobileOpen ? 'steps(3)' : 'steps(3)' }}
                />
                <span
                  className={`block w-5 h-[1.5px] bg-bone transition-opacity duration-150 ${
                    mobileOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block w-5 h-[1.5px] bg-bone transition-all duration-300 ${
                    mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                  }`}
                  style={{ transitionTimingFunction: mobileOpen ? 'steps(3)' : 'steps(3)' }}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile full-screen nav */}
      <div
        className={`fixed inset-0 z-40 bg-void transition-all duration-500 md:hidden flex flex-col ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'steps(6)' }}
      >
        <div className="flex-1 flex flex-col justify-center px-8 pt-28">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-4 border-b border-violet/20 font-display text-3xl uppercase font-bold text-bone transition-all duration-500 hover:text-acid ${
                mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
                transitionTimingFunction: 'steps(4)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8">
            <Button variant="primary" size="lg" href="#register" className="w-full">
              Register Now
            </Button>
          </div>
        </div>

        {/* Mobile footer info */}
        <div className="px-8 pb-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-muted">
            Dept. of AI & Data Science
          </p>
        </div>
      </div>
    </>
  );
}
