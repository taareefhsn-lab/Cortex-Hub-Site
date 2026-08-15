'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Flip);
}

export const EASE_ENTRANCE = 'power4.out';
export const EASE_WIPE = 'expo.inOut';
export const EASE_SIGNATURE = 'cubic-bezier(0.16, 1, 0.3, 1)';
export const EASE_GLITCH = 'steps(4)';

export const DUR_MICRO = 0.6;
export const DUR_SECTION = 1.2;
export const DUR_HERO = 2.4;

export const createScrollAnimation = (
  trigger: string | Element,
  animation: gsap.core.Timeline | gsap.core.Tween,
  options?: ScrollTrigger.Vars
) => {
  return ScrollTrigger.create({
    trigger,
    animation,
    scrub: true,
    ...options,
  });
};

export const splitTextIntoWords = (element: HTMLElement) => {
  if (!element) return;
  const text = element.innerText;
  element.innerHTML = '';
  
  const words = text.split(' ');
  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'word';
    wordSpan.style.display = 'inline-block';
    
    const chars = word.split('');
    chars.forEach((char) => {
      const charSpan = document.createElement('span');
      charSpan.className = 'char';
      charSpan.style.display = 'inline-block';
      charSpan.innerText = char;
      wordSpan.appendChild(charSpan);
    });
    
    element.appendChild(wordSpan);
    if (wordIndex < words.length - 1) {
      element.appendChild(document.createTextNode(' '));
    }
  });
};

export { gsap, ScrollTrigger, Flip };
