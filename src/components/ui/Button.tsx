'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-mono uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--violet)] disabled:opacity-40 disabled:cursor-not-allowed rounded-none';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantStyles = {
    primary: 'bg-[var(--acid)] text-[var(--void)] border-0 shadow-[4px_4px_0_var(--violet)] hover:shadow-[6px_6px_0_var(--violet)] hover:-translate-x-[2px] hover:-translate-y-[2px]',
    secondary: 'bg-[var(--surface)] text-[var(--bone)] border border-[var(--violet)] border-opacity-40 hover:bg-[var(--void)]',
    ghost: 'bg-transparent text-[var(--bone)] border border-[var(--violet)] border-opacity-40 hover:border-[var(--violet)]'
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
