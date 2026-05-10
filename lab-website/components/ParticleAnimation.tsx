'use client';

import React, { useEffect, useRef } from 'react';

interface ParticleAnimationProps {
  onComplete?: () => void;
  className?: string;
}

export default function ParticleAnimation({ onComplete, className }: ParticleAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    
    // Support high DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Mouse tracking for interactivity
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    // Add event listeners directly to canvas
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    let particles: Particle[] = [];
    let animationFrameId: number;

    // Phases:
    // 0: Gather to DNA
    // 1: Hold DNA
    // 2: Disperse
    // 3: Gather to Text
    // 4: Hold Text
    let phase = 0;
    let phaseTimer = 0;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      dnaTarget: { x: number; y: number };
      textTarget: { x: number; y: number };
      size: number;
      friction: number;
      ease: number;

      constructor(x: number, y: number, dnaTarget: { x: number; y: number }, textTarget: { x: number; y: number }) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.dnaTarget = dnaTarget;
        this.textTarget = textTarget;
        this.size = Math.random() * 2.5 + 2; // slightly smaller circles
        this.friction = Math.random() * 0.04 + 0.88;
        this.ease = Math.random() * 0.05 + 0.05;
      }

      update() {
        let targetX = this.x;
        let targetY = this.y;

        if (phase === 0) {
          targetX = this.dnaTarget.x;
          targetY = this.dnaTarget.y;
        } else if (phase === 1) {
          targetX = this.dnaTarget.x + Math.sin(Date.now() * 0.002 + this.y) * 2;
          targetY = this.dnaTarget.y + Math.cos(Date.now() * 0.002 + this.x) * 2;
        } else if (phase === 2) {
          // Free roam (handled by explosive velocity initially, then just friction)
        } else if (phase === 3) {
          targetX = this.textTarget.x;
          targetY = this.textTarget.y;
        } else if (phase === 4) {
          targetX = this.textTarget.x + Math.sin(Date.now() * 0.001 + this.y) * 0.5;
          targetY = this.textTarget.y + Math.cos(Date.now() * 0.001 + this.x) * 0.5;
        }

        if (phase !== 2) {
          // Mouse repel physics
          const dxMouse = mouse.x - this.x;
          const dyMouse = mouse.y - this.y;
          const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          
          if (distanceMouse < 80) {
            const force = (80 - distanceMouse) / 80;
            const angle = Math.atan2(dyMouse, dxMouse);
            targetX -= Math.cos(angle) * force * 100;
            targetY -= Math.sin(angle) * force * 100;
          }

          const dx = targetX - this.x;
          const dy = targetY - this.y;
          this.vx += dx * this.ease * 0.1;
          this.vy += dy * this.ease * 0.1;
        }

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const getDNAPixels = () => {
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const oCtx = offscreen.getContext('2d', { willReadFrequently: true });
      if (!oCtx) return [];

      oCtx.clearRect(0, 0, width, height);
      oCtx.lineWidth = 4;
      oCtx.strokeStyle = 'black';
      oCtx.lineCap = 'round';

      const amplitude = Math.min(height * 0.35, 450); // Fills up to 70% of screen height
      const frequency = 0.012; // Adjusted frequency to maintain a nice twist ratio at the new height
      const centerY = height / 2;
      const strandWidth = Math.min(width * 0.95, 1400);
      const startX = width / 2 - strandWidth / 2;
      const endX = width / 2 + strandWidth / 2;

      for (let x = startX; x <= endX; x += 1) {
        const y1 = centerY + Math.sin(x * frequency) * amplitude;
        const y2 = centerY + Math.sin(x * frequency + Math.PI) * amplitude;

        oCtx.fillStyle = 'black';
        oCtx.fillRect(x, y1, 4, 4);
        oCtx.fillRect(x, y2, 4, 4);

        if (Math.round(x) % 20 === 0) {
          oCtx.beginPath();
          oCtx.moveTo(x, y1);
          oCtx.lineTo(x, y2);
          oCtx.stroke();
        }
      }

      const imageData = oCtx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      const coords = [];

      for (let y = 0; y < height; y += 2) {
        for (let x = 0; x < width; x += 2) {
          const index = (y * width + x) * 4;
          if (pixels[index + 3] > 128) {
            coords.push({ x, y });
          }
        }
      }
      return coords;
    };

    const getTextPixels = () => {
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const oCtx = offscreen.getContext('2d', { willReadFrequently: true });
      if (!oCtx) return [];

      oCtx.clearRect(0, 0, width, height);
      
      // Responsive font size
      let fontSize = Math.min(width * 0.25, 360);
      if (width < 1024) fontSize = 200;
      if (width < 768) fontSize = 140;
      if (width < 480) fontSize = 80;
      
      oCtx.font = `bold ${fontSize}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      oCtx.fillStyle = 'black';
      oCtx.textAlign = 'center';
      oCtx.textBaseline = 'middle';
      
      // We want to align center
      oCtx.fillText('Jain Lab', width / 2, height / 2);

      const imageData = oCtx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      const coords = [];

      for (let y = 0; y < height; y += 2) { 
        for (let x = 0; x < width; x += 2) {
          const index = (y * width + x) * 4;
          if (pixels[index + 3] > 128) {
            coords.push({ x, y });
          }
        }
      }
      return coords;
    };

    const initParticles = () => {
      phase = 0;
      phaseTimer = 0;
      
      const dnaCoords = getDNAPixels();
      const textCoords = getTextPixels();

      // Ensure we have coords
      if (dnaCoords.length === 0 || textCoords.length === 0) return;

      const MAX_PARTICLES = 5500;
      
      // Randomly sample coordinates down to our maximum limit
      let finalDnaCoords = dnaCoords;
      let finalTextCoords = textCoords;
      
      if (dnaCoords.length > MAX_PARTICLES) {
        finalDnaCoords = [];
        const step = dnaCoords.length / MAX_PARTICLES;
        for (let i = 0; i < MAX_PARTICLES; i++) {
          finalDnaCoords.push(dnaCoords[Math.floor(i * step)]);
        }
      }
      
      if (textCoords.length > MAX_PARTICLES) {
        finalTextCoords = [];
        const step = textCoords.length / MAX_PARTICLES;
        for (let i = 0; i < MAX_PARTICLES; i++) {
          finalTextCoords.push(textCoords[Math.floor(i * step)]);
        }
      }

      const particleCount = Math.max(finalDnaCoords.length, finalTextCoords.length);
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const startX = Math.random() * width;
        const startY = Math.random() * height;

        const dnaTarget = finalDnaCoords[i % finalDnaCoords.length];
        const textTarget = finalTextCoords[i % finalTextCoords.length];

        particles.push(new Particle(startX, startY, dnaTarget, textTarget));
      }
    };

    // Make sure fonts are loaded so text rendering is correct
    document.fonts.ready.then(() => {
      initParticles();
      animate();
    });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      phaseTimer++;

      if (phase === 0 && phaseTimer > 100) {
        // Hold DNA
        phase = 1;
        phaseTimer = 0;
      } else if (phase === 1 && phaseTimer > 60) {
        // Disperse
        phase = 2;
        phaseTimer = 0;
        
        particles.forEach(p => {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 15 + 5;
          p.vx = Math.cos(angle) * speed;
          p.vy = Math.sin(angle) * speed;
        });
      } else if (phase === 2 && phaseTimer > 50) {
        // Gather to text
        phase = 3;
        phaseTimer = 0;
      } else if (phase === 3 && phaseTimer > 100) {
        // Hold text
        phase = 4;
        phaseTimer = 0;
      } else if (phase === 4 && phaseTimer > 50) {
        if (onComplete) {
          onComplete();
          phaseTimer = -99999; // prevent multiple calls
        }
      }

      // Batch rendering using circles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      
      particles.forEach(p => {
        p.update();
        ctx.moveTo(p.x + p.size, p.y); // move to edge of circle to prevent connecting lines
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      });
      
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full relative select-none ${className || 'h-[60vh] min-h-[400px]'}`}>
      <canvas ref={canvasRef} className="block absolute inset-0" />
      {/* Fallback for screen readers */}
      <h1 className="sr-only">Jain Lab</h1>
    </div>
  );
}
