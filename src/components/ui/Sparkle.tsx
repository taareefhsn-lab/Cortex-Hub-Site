import React from 'react';

interface SparkleProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Sparkle({ size = 'md', className = '' }: SparkleProps) {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`text-[var(--bone)] ${sizeMap[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 0C12 0 12 10 24 12C24 12 14 12 12 24C12 24 12 14 0 12C0 12 10 12 12 0Z" 
        fill="currentColor"
      />
    </svg>
  );
}
