import React from 'react';

interface EpisodeNumberProps {
  number: number;
  className?: string;
}

export function EpisodeNumber({ number, className = '' }: EpisodeNumberProps) {
  const paddedNumber = number.toString().padStart(3, '0');
  return (
    <span className={`font-mono text-[var(--violet)] uppercase tracking-[0.08em] text-xs ${className}`}>
      EP.{paddedNumber}
    </span>
  );
}
