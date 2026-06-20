import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop/non-touch screens
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch) return;

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const updateRing = () => {
      // Lagging effect
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }
      requestAnimationFrame(updateRing);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    const animId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        ref={ringRef}
        id="cursor-ring"
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-50 transition-all duration-150 ease-out will-change-transform ${
          isHovering
            ? 'bg-blue-500/15 border-cyan-400 scale-125'
            : 'border-blue-500/40 scale-100'
        }`}
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        id="cursor-dot"
        className={`fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 bg-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-75 will-change-transform ${
          isHovering ? 'scale-[0.5] bg-cyan-300' : 'scale-100'
        }`}
      />
    </>
  );
}
