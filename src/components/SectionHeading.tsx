// src/components/SectionHeading.tsx
import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = '' }) => {
  return (
    <h2
      className={`relative z-10 text-center text-3xl md:text-4xl font-extrabold tracking-tight mb-10 ${className}`}
    >
      <span className="relative z-20 text-gray-900 dark:text-white">
        {children}
      </span>
    </h2>
  );
};

export default SectionHeading;
