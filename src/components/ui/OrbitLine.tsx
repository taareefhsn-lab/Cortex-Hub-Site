'use client';

import React from 'react';

interface OrbitLineProps {
  progress: number;
  className?: string;
}

export function OrbitLine({ progress, className = '' }: OrbitLineProps) {
  const pathLength = 1000;
  const dashoffset = pathLength - progress * pathLength;

  return (
    <svg 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none" 
      className={`w-full h-full ${className}`}
    >
      <ellipse
        cx="50"
        cy="50"
        rx="48"
        ry="48"
        fill="none"
        stroke="var(--violet)"
        strokeWidth="1"
        strokeDasharray={pathLength}
        strokeDashoffset={dashoffset}
        pathLength={pathLength}
        className="transition-all duration-300 ease-out"
      />
    </svg>
  );
}
