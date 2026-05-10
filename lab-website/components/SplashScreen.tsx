'use client';

import React, { useState, useEffect } from 'react';
import ParticleAnimation from './ParticleAnimation';

let splashHasPlayed = false;

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(!splashHasPlayed);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (splashHasPlayed) return;

    // Prevent scrolling while the splash screen is active
    if (isAnimating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isAnimating]);

  const handleComplete = () => {
    splashHasPlayed = true;
    setIsFadingOut(true);
    // Wait for the fade transition to complete before unmounting
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // 1 second fade duration matches CSS transition
  };

  return (
    <>
      {/* Full Page Splash Screen Overlay */}
      {isAnimating && (
        <div 
          className={`fixed inset-0 z-[100] bg-black transition-opacity duration-1000 flex items-center justify-center ${
            isFadingOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Layer 1: Main DNA / Text Animation */}
          <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 pointer-events-none">
            <ParticleAnimation onComplete={handleComplete} className="h-full" />
          </div>
        </div>
      )}

      {/* Main Content (loads bottom-up) */}
      <div 
        className={`transition-all duration-1000 ease-out transform min-h-screen ${
          isAnimating && !isFadingOut 
            ? 'translate-y-[10vh] opacity-0 overflow-hidden h-screen' 
            : 'translate-y-0 opacity-100 h-auto'
        }`}
      >
        {children}
      </div>
    </>
  );
}
