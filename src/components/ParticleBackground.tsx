import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationGroupId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#3B82F6', '#06B6D4', '#60A5FA', '#22D3EE'];

    const createParticles = () => {
      const density = window.innerWidth < 768 ? 25 : 60;
      particles.length = 0;
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.6,
          vx: (Math.random() - 0.5) * 0.35,
          vy: Math.random() * -0.45 - 0.1, // Drifts upwards
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.4 + 0.1,
        });
      }
    };

    createParticles();

    let mouse = { x: -1000, y: -1000, rx: 0, ry: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Dampened mouse inertia for parallax
      mouse.rx += (mouse.x - mouse.rx) * 0.08;
      mouse.ry += (mouse.y - mouse.ry) * 0.08;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.vy;
        p.x += p.vx;

        // Apply mouse position drift
        const dx = p.x - mouse.rx;
        const dy = p.y - mouse.ry;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let offsetX = 0;
        let offsetY = 0;
        if (dist < 180) {
          const force = (180 - dist) / 180;
          offsetX = (dx / dist) * force * 15;
          offsetY = (dy / dist) * force * 15;
        }

        // Wrap around limits
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x + offsetX, p.y + offsetY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationGroupId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationGroupId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
