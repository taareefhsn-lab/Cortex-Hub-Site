import React from 'react';

interface HalftoneFieldProps {
  density?: 'sparse' | 'medium' | 'dense';
  direction?: 'left' | 'right' | 'center';
  className?: string;
}

export function HalftoneField({
  density = 'medium',
  direction = 'center',
  className = ''
}: HalftoneFieldProps) {
  const densityMap = {
    sparse: '8px',
    medium: '4px',
    dense: '2px'
  };

  const bgSize = densityMap[density];
  const dotColor = 'rgba(125, 78, 202, 0.15)'; // violet at 15% opacity
  const transparent = 'transparent';

  let maskImage = '';
  if (direction === 'left') {
    maskImage = 'linear-gradient(to right, black, transparent)';
  } else if (direction === 'right') {
    maskImage = 'linear-gradient(to left, black, transparent)';
  } else {
    maskImage = 'radial-gradient(circle at center, black, transparent)';
  }

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(${dotColor} 1px, ${transparent} 1px)`,
        backgroundSize: `${bgSize} ${bgSize}`,
        WebkitMaskImage: maskImage,
        maskImage: maskImage
      }}
    />
  );
}
