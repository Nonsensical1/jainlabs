'use client';
import React, { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure CSS transition triggers after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-out transform min-h-screen ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
