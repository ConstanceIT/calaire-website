import Lenis from 'lenis';

let lenis: Lenis | null = null;
let rafId: number | null = null;

export function initLenis() {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
    autoRaf: false,
  });
}

/**
 * Start a standalone RAF loop for Lenis. Only call this if NOT using
 * syncScrollTriggerWithLenis (which drives Lenis via GSAP's ticker instead).
 */
export function startLenisRaf() {
  if (!lenis) return;

  function raf(time: number) {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);
}

export function destroyLenis() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  lenis?.destroy();
  lenis = null;
}

export function getLenis() {
  return lenis;
}
