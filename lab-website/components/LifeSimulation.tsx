'use client';

import React, { useEffect, useRef } from 'react';

// Selected color palette based on the user's life.js colors
const allColors = [
  'yellow', 'red', 'dodgerblue', 'fuchsia', 'lime', 'orange', 'aqua', 'purple', 
  'green', 'blue', 'cyan', 'magenta', 'pink', 'gold', 'teal', 'coral'
];

// Reference density: home page uses ~1000 particles in a 1920×500 area
const REFERENCE_DENSITY = 1000 / (1920 * 500); // particles per px²

interface LifeSimulationProps {
  className?: string;
  particleCount?: number; // if provided, overrides dynamic calculation
  edgeBias?: boolean; // if true, 70% of particles spawn in the outer margins
  transparent?: boolean;
}

export default function LifeSimulation({ className, particleCount, edgeBias = false, transparent = false }: LifeSimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let intervalId: NodeJS.Timeout;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simulation Parameters
    const particleRadMultiplier = 6;
    const damping = 0.999;
    const particleRadius = 1.75;
    const collisionDistance = particleRadius * particleRadMultiplier;
    const maxSpeed = 2;
    const interactionRange = 45;
    const maxForceRange = 12;
    let gridSize = interactionRange;

    let particles: Particle[] = [];
    let colors: string[] = [];
    let grid: Record<string, Particle[]> = {};
    let forces: Record<string, Record<string, number>> = {};
    let interactionRanges: Record<string, number> = {};

    let mouseX = -1000;
    let mouseY = -1000;
    let isMouseOver = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseOver = true;
    };

    const handleMouseLeave = () => {
      isMouseOver = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      ax: number;
      ay: number;
      color: string;
      interactionRange: number;
      interactionRangeSquared: number;

      constructor(x: number, y: number, color: string, iRange: number, iRangeSq: number) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.ax = 0;
        this.ay = 0;
        this.color = color;
        this.interactionRange = iRange;
        this.interactionRangeSquared = iRangeSq;
      }

      applyMouseForce() {
        if (!isMouseOver) return;
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        
        // Toroidal interaction wrapping for mouse so they don't fly across the screen abruptly if wrapped
        if (Math.abs(dx) > canvas.width / 2) dx = dx > 0 ? dx - canvas.width : dx + canvas.width;
        if (Math.abs(dy) > canvas.height / 2) dy = dy > 0 ? dy - canvas.height : dy + canvas.height;

        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > 0) {
          // Global gentle pull towards the cursor
          let force = 0.25;
          // Stronger pull when within 200px
          if (dist < 200) {
            force = 1.2 * (1 - dist / 200) + 0.25;
          }
          this.ax += (dx / dist) * force;
          this.ay += (dy / dist) * force;
        }
      }

      update() {
        this.vx += this.ax;
        this.vy += this.ay;
        this.vx *= damping;
        this.vy *= damping;

        let speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
          const ratio = maxSpeed / speed;
          this.vx *= ratio;
          this.vy *= ratio;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.wrapEdges();
        this.ax = 0;
        this.ay = 0;
      }

      wrapEdges() {
        if (canvas.width > 0) {
          if (this.x < 0) this.x = ((this.x % canvas.width) + canvas.width) % canvas.width;
          if (this.x >= canvas.width) this.x = this.x % canvas.width;
        }
        if (canvas.height > 0) {
          if (this.y < 0) this.y = ((this.y % canvas.height) + canvas.height) % canvas.height;
          if (this.y >= canvas.height) this.y = this.y % canvas.height;
        }
      }

      applyForces(particles: Particle[], grid: Record<string, Particle[]>) {
        const cellX = Math.floor(this.x / gridSize);
        const cellY = Math.floor(this.y / gridSize);
        const gridWidth = Math.ceil(canvas.width / gridSize);
        const gridHeight = Math.ceil(canvas.height / gridSize);

        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const neighborX = (cellX + i + gridWidth) % gridWidth;
            const neighborY = (cellY + j + gridHeight) % gridHeight;
            const cellKey = `${neighborX},${neighborY}`;
            if (grid[cellKey]) {
              grid[cellKey].forEach(p => {
                if (p !== this) {
                  this.applyForceFromParticle(p);
                }
              });
            }
          }
        }
      }

      applyForceFromParticle(p: Particle) {
        let dx = p.x - this.x;
        let dy = p.y - this.y;

        // Toroidal interaction wrapping
        if (Math.abs(dx) > canvas.width / 2) dx = dx > 0 ? dx - canvas.width : dx + canvas.width;
        if (Math.abs(dy) > canvas.height / 2) dy = dy > 0 ? dy - canvas.height : dy + canvas.height;

        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared < this.interactionRangeSquared) {
          const distance = Math.sqrt(distanceSquared);
          if (distance > 0) {
            const force = forces[this.color][p.color];
            this.ax += (dx / distance) * force;
            this.ay += (dy / distance) * force;
          }
        }
      }

      handleCollisions(particles: Particle[], grid: Record<string, Particle[]>) {
        const cellX = Math.floor(this.x / gridSize);
        const cellY = Math.floor(this.y / gridSize);
        const gridWidth = Math.ceil(canvas.width / gridSize);
        const gridHeight = Math.ceil(canvas.height / gridSize);

        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const neighborX = (cellX + i + gridWidth) % gridWidth;
            const neighborY = (cellY + j + gridHeight) % gridHeight;
            const cellKey = `${neighborX},${neighborY}`;
            if (grid[cellKey]) {
              grid[cellKey].forEach(p => {
                if (p !== this) {
                  this.resolveCollisionWithParticle(p);
                }
              });
            }
          }
        }
      }

      resolveCollisionWithParticle(p: Particle) {
        let dx = p.x - this.x;
        let dy = p.y - this.y;

        if (Math.abs(dx) > canvas.width / 2) dx = dx > 0 ? dx - canvas.width : dx + canvas.width;
        if (Math.abs(dy) > canvas.height / 2) dy = dy > 0 ? dy - canvas.height : dy + canvas.height;

        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared > 0 && distanceSquared < collisionDistance * collisionDistance) {
          const distance = Math.sqrt(distanceSquared);
          const overlap = (collisionDistance - distance) / 18;
          const angle = Math.atan2(dy, dx);
          const sin = Math.sin(angle);
          const cos = Math.cos(angle);

          this.x -= overlap * cos;
          this.y -= overlap * sin;
          p.x += overlap * cos;
          p.y += overlap * sin;

          const vxRel = this.vx - p.vx;
          const vyRel = this.vy - p.vy;
          const dotProduct = vxRel * dx + vyRel * dy;
          if (dotProduct > 0) {
            const collisionScale = dotProduct / distanceSquared;
            const collisionVectorX = collisionScale * dx;
            const collisionVectorY = collisionScale * dy;

            this.vx -= collisionVectorX;
            this.vy -= collisionVectorY;
            p.vx += collisionVectorX;
            p.vy += collisionVectorY;
          }
        }
      }
    }

    function generatePatternedForcesAndRanges() {
      const newForces: Record<string, Record<string, number>> = {};
      const newInteractionRanges: Record<string, number> = {};

      allColors.forEach(color => {
        newForces[color] = {};
        allColors.forEach(targetColor => {
          let force = (color === targetColor) 
            ? Math.random() * maxForceRange - (maxForceRange / 2) 
            : Math.random() * maxForceRange * 2 - maxForceRange;
          newForces[color][targetColor] = parseFloat(force.toFixed(1));
        });
        newInteractionRanges[color] = collisionDistance + Math.random() * (interactionRange - collisionDistance);
      });

      return { newForces, newInteractionRanges };
    }

    function buildGrid() {
      grid = {};
      particles.forEach(p => {
        const cellX = Math.floor(p.x / gridSize);
        const cellY = Math.floor(p.y / gridSize);
        const cellKey = `${cellX},${cellY}`;
        if (!grid[cellKey]) {
          grid[cellKey] = [];
        }
        grid[cellKey].push(p);
      });
    }

    function initParticles() {
      // Calculate particle count from canvas area to match home page density
      const area = canvas.width * canvas.height;
      const count = particleCount ?? Math.round(area * REFERENCE_DENSITY);
      // Clamp to a reasonable range for performance
      const isMobile = canvas.width < 768;
      const maxCount = isMobile ? 600 : 3000;
      const finalCount = Math.max(200, Math.min(count, maxCount));

      const colorCount = 7;
      const startIndex = Math.floor(Math.random() * allColors.length);
      colors = allColors.slice(startIndex, startIndex + colorCount);
      if (colors.length < colorCount) {
        colors = colors.concat(allColors.slice(0, colorCount - colors.length));
      }

      particles = [];
      const particlesPerColor = Math.floor(finalCount / colors.length);

      for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        for (let j = 0; j < particlesPerColor; j++) {
          let x: number;
          const y = Math.random() * canvas.height;

          if (edgeBias && Math.random() < 0.7) {
            // 70% of particles spawn in the outer margins
            // The content card is max-w-[1200px] centered with ~32px padding
            const cardWidth = Math.min(1200, canvas.width * 0.85);
            const marginLeft = (canvas.width - cardWidth) / 2;
            // Spawn in left or right margin
            if (Math.random() < 0.5) {
              x = Math.random() * marginLeft; // left margin
            } else {
              x = canvas.width - Math.random() * marginLeft; // right margin
            }
          } else {
            x = Math.random() * canvas.width;
          }

          particles.push(new Particle(x, y, color, interactionRanges[color] || interactionRange, (interactionRanges[color] || interactionRange) ** 2));
        }
      }
      buildGrid();
    }

    function randomizeForcesAndRanges() {
      const { newForces, newInteractionRanges } = generatePatternedForcesAndRanges();
      forces = newForces;
      interactionRanges = newInteractionRanges;
      particles.forEach(p => {
        p.interactionRange = interactionRanges[p.color];
        p.interactionRangeSquared = p.interactionRange ** 2;
      });
    }

    // Initialize
    const initialRandomValues = generatePatternedForcesAndRanges();
    forces = initialRandomValues.newForces;
    interactionRanges = initialRandomValues.newInteractionRanges;
    initParticles();

    // Auto randomize every 60 seconds (like the original script)
    intervalId = setInterval(() => {
      randomizeForcesAndRanges();
    }, 60000);

    function animate() {
      const rect = canvas.getBoundingClientRect();
      // rect.top is the position of the canvas top relative to the viewport. 
      // If canvas is scrolled up, rect.top is negative.
      // So -rect.top is the current scroll Y relative to the canvas.
      const scrollY = -rect.top;
      const viewportHeight = window.innerHeight;
      
      // Buffer a full viewport height above and below to prevent visual pop-in during fast scrolling
      const buffer = viewportHeight;
      const renderTop = Math.max(0, scrollY - buffer);
      const renderBottom = scrollY + viewportHeight + buffer;

      // Use destination-out to gradually make older frames transparent.
      // This creates a trailing effect without painting a solid color block, 
      // which completely fixes the visible "rendering square" on non-white/dark backgrounds.
      ctx!.globalCompositeOperation = 'destination-out';
      ctx!.fillStyle = 'rgba(0, 0, 0, 0.3)'; // Color doesn't matter for destination-out, only alpha
      ctx!.fillRect(0, renderTop, canvas.width, viewportHeight + buffer * 2);
      ctx!.globalCompositeOperation = 'source-over';

      // Instantly wipe any old pixels that have fallen outside the render window 
      // so frozen particles don't linger if you scroll away and scroll back
      if (renderTop > 0) {
        ctx!.clearRect(0, 0, canvas.width, renderTop);
      }
      if (renderBottom < canvas.height) {
        ctx!.clearRect(0, renderBottom, canvas.width, canvas.height - renderBottom);
      }

      buildGrid();
      particles.forEach(p => p.applyMouseForce());
      particles.forEach(p => p.applyForces(particles, grid));
      particles.forEach(p => p.handleCollisions(particles, grid));
      
      // Batch render particles by color for much better performance
      const byColor: Record<string, Particle[]> = {};
      particles.forEach(p => {
        p.update();
        
        // VIEWPORT CULLING: Only render if the particle is within the visible viewport (plus the large buffer)
        if (p.y >= scrollY - buffer && p.y <= scrollY + viewportHeight + buffer) {
          if (!byColor[p.color]) byColor[p.color] = [];
          byColor[p.color].push(p);
        }
      });

      for (const color in byColor) {
        ctx!.fillStyle = color;
        ctx!.beginPath();
        byColor[color].forEach(p => {
          ctx!.moveTo(p.x + particleRadius, p.y);
          ctx!.arc(p.x, p.y, particleRadius, 0, Math.PI * 2);
        });
        ctx!.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, [particleCount]);

  return <canvas ref={canvasRef} className={`block w-full h-full ${transparent ? 'bg-transparent' : 'bg-white'} ${className || ''}`} />;
}
