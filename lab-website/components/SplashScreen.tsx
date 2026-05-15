'use client';

import React, { useState, useEffect } from 'react';
import ParticleAnimation from './ParticleAnimation';

let splashHasPlayed = false;

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(!splashHasPlayed);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (splashHasPlayed) {
      // If returning to home page via client navigation, trigger the bottom-up animation instantly
      const timer = setTimeout(() => setContentVisible(true), 50);
      return () => clearTimeout(timer);
    }

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
    setContentVisible(true);
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
          className={`fixed inset-0 z-[100] bg-white/60 backdrop-blur-sm transition-opacity duration-1000 flex items-center justify-center ${
            isFadingOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Layer 1: Main DNA / Text Animation */}
          <div className="relative z-10 w-full h-full">
            <ParticleAnimation onComplete={handleComplete} className="h-full" />
          </div>
        </div>
      )}

      {/* Main Content (loads bottom-up) */}
      <div 
        className={`transition-all duration-1000 ease-out transform min-h-screen ${
          !contentVisible 
            ? 'translate-y-12 opacity-0 overflow-hidden h-screen' 
            : 'translate-y-0 opacity-100 h-auto'
        }`}
      >
        {children}
      </div>
    </>
  );
}
