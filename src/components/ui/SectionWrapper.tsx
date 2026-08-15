import React, { forwardRef } from 'react';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  asymmetric?: boolean;
}

export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(({
  id,
  children,
  className = '',
  asymmetric = true,
}: SectionWrapperProps, ref) => {
  return (
    <section ref={ref}
      id={id}
      data-section
      className={`py-[clamp(6rem,14vh,12rem)] px-[clamp(1.25rem,5vw,6rem)] ${
        asymmetric ? 'ml-[5vw]' : ''
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
});
