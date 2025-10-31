import { useEffect, useRef, useState } from 'react';

export type TiltSpring = {
  stiffness: number; // higher = snappier
  damping: number;   // higher = less oscillation
  mass: number;      // higher = heavier
};

export type UseTiltOptions = {
  maxTiltDeg?: number;       // default 12
  perspective?: number;      // default 1050
  followStrength?: number;   // easing toward target in rAF (0-1)
  deadzone?: number;         // normalized deadzone (e.g., 0.08)
  inertia?: number;          // fraction of velocity kept on leave (0..1)
  fpsFloor?: number;         // soft pause under this FPS
  scrollSuspendMs?: number;  // suspend tilt during scroll
  spring?: TiltSpring;       // informational for callers
  disableBelowWidth?: number; // disable below this viewport width (e.g., 640)
};

export type UseTiltReturn = {
  containerRef: React.RefObject<HTMLElement>;
  tiltX: number; // degrees
  tiltY: number; // degrees
  isActive: boolean;
  isVisible: boolean;
};

export const MAX_TILT = 12;
export const PERSPECTIVE = 1050;
export const DEADZONE = 0.08;
export const INERTIA = 0.10;
export const FPS_FLOOR = 45;
export const SCROLL_SUSPEND_MS = 250;

const DEFAULTS: Required<Omit<UseTiltOptions, 'spring'>> & { spring: TiltSpring } = {
  maxTiltDeg: MAX_TILT,
  perspective: PERSPECTIVE,
  followStrength: 0.12,
  deadzone: DEADZONE,
  inertia: INERTIA,
  fpsFloor: FPS_FLOOR,
  scrollSuspendMs: SCROLL_SUSPEND_MS,
  spring: { stiffness: 180, damping: 18, mass: 0.9 },
  disableBelowWidth: 640,
};

function getPrefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !('matchMedia' in window)) return false;
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

// Normalizes pointer position relative to element center into [-1, 1]
function normalizePointer(el: HTMLElement, clientX: number, clientY: number) {
  const rect = el.getBoundingClientRect();
  const x = clientX - (rect.left + rect.width / 2);
  const y = clientY - (rect.top + rect.height / 2);
  const nx = (x / (rect.width / 2));
  const ny = (y / (rect.height / 2));
  // clamp to [-1, 1]
  const mx = Math.max(-1, Math.min(1, nx));
  const my = Math.max(-1, Math.min(1, ny));
  // Also provide percent [0..1] for cursor light positioning
  const px = (clientX - rect.left) / rect.width;
  const py = (clientY - rect.top) / rect.height;
  return { mx, my, px, py };
}

export function useTilt(options?: UseTiltOptions): UseTiltReturn {
  const { maxTiltDeg, perspective, followStrength, spring, disableBelowWidth, deadzone, inertia, fpsFloor, scrollSuspendMs } = { ...DEFAULTS, ...options };

  const containerRef = useRef<HTMLElement>(null);
  const target = useRef({ mx: 0, my: 0 });
  const current = useRef({ mx: 0, my: 0 });
  const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });
  const [active, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const velocity = useRef({ mx: 0, my: 0 });
  const rmc = useRef(getPrefersReducedMotion());
  const disabledDueToWidth = () => (typeof window !== 'undefined' ? window.innerWidth < disableBelowWidth : false);
  const suspendedUntil = useRef(0);
  const lastTs = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = 0;
    let running = false;

    // Set constants as CSS variables for easy theme tweaking
    el.style.setProperty('--perspective', `${perspective}px`);
    el.style.setProperty('--max-tilt', `${maxTiltDeg}`);
    el.style.setProperty('--tilt-max', `${maxTiltDeg}`);
    el.style.setProperty('--tilt-deadzone', `${deadzone}`);
    el.style.setProperty('--shadow-depth', `60`);
    el.style.setProperty('--glow-opacity-max', `0.22`);
    el.style.setProperty('--sheen-max', `0.22`);

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!el) return;
      const { mx, my, px, py } = normalizePointer(el, clientX, clientY);
      const dz = (v: number) => (Math.abs(v) < (deadzone ?? 0) ? 0 : v);
      target.current.mx = dz(mx);
      target.current.my = dz(my);
      el.style.setProperty('--mx', String(mx));
      el.style.setProperty('--my', String(my));
      el.style.setProperty('--px', `${(px * 100).toFixed(2)}%`);
      el.style.setProperty('--py', `${(py * 100).toFixed(2)}%`);
      // Sheen angle derived from atan2
      const angle = Math.atan2(my, mx) * (180 / Math.PI);
      el.style.setProperty('--sheen-rot', `${angle.toFixed(2)}deg`);
      const mag = Math.min(1, Math.hypot(mx, my));
      el.style.setProperty('--sheen-opacity', `${(0.18 * mag).toFixed(3)}`);
      // Shadow and edge-glow variables (shadow casts opposite of light/tilt direction)
      const shadowX = (-mx * 18); // px
      const shadowY = (Math.max(14, 30 + my * 10)); // px base + tilt influence
      el.style.setProperty('--shadow-x', `${shadowX.toFixed(2)}px`);
      el.style.setProperty('--shadow-y', `${shadowY.toFixed(2)}px`);
      // Edge glow follows toward the edge we're pointing to
      const gx = 50 + mx * 40; // percent
      const gy = 50 + my * 40; // percent
      el.style.setProperty('--glow-x', `${gx.toFixed(2)}%`);
      el.style.setProperty('--glow-y', `${gy.toFixed(2)}%`);
      el.style.setProperty('--glow-opacity', `${(0.06 + mag * 0.12).toFixed(3)}`);
      if (!running) start();
    };

    const onEnter = () => {
      setActive(true);
    };
    const onLeave = () => {
      setActive(false);
      // tiny coast using last velocity
      target.current.mx = current.current.mx + velocity.current.mx * (inertia ?? 0);
      target.current.my = current.current.my + velocity.current.my * (inertia ?? 0);
      if (!running) start();
    };

    const pmReduce = rmc.current;
    const disable = pmReduce || disabledDueToWidth();

    const start = () => {
      if (pmReduce) return; // respect reduced motion
      running = true;
      const step = (ts?: number) => {
        const now = ts || performance.now();
        const dt = lastTs.current ? Math.max(1, now - lastTs.current) : 16;
        lastTs.current = now;

        if (now < suspendedUntil.current || (1000 / dt) < (fpsFloor ?? 0) || !isVisible) {
          // drift back to rest while suspended/not visible/low FPS
          target.current.mx = 0;
          target.current.my = 0;
        }
        // follow toward target using simple smoothing
        const nextMx = current.current.mx + (target.current.mx - current.current.mx) * followStrength;
        const nextMy = current.current.my + (target.current.my - current.current.my) * followStrength;
        velocity.current.mx = nextMx - current.current.mx;
        velocity.current.my = nextMy - current.current.my;
        current.current.mx = nextMx;
        current.current.my = nextMy;

        const tiltX = current.current.my * maxTiltDeg; // rotateX follows Y
        const tiltY = -current.current.mx * maxTiltDeg; // rotateY opposite X

        // Expose values via CSS variables for composable transforms
        el.style.setProperty('--tiltX', tiltX.toFixed(3));
        el.style.setProperty('--tiltY', tiltY.toFixed(3));

        setTilt({ tiltX, tiltY });

        // continue until close to target
        if (Math.abs(target.current.mx - current.current.mx) > 0.001 ||
            Math.abs(target.current.my - current.current.my) > 0.001 ||
            active) {
          rafId = requestAnimationFrame(step);
        } else {
          running = false;
        }
      };
      rafId = requestAnimationFrame(step);
    };

    if (!disable) {
      const handlePointerMove = (e: PointerEvent) => onPointerMove(e.clientX, e.clientY);
      const handlePointerEnter = () => onEnter();
      const handlePointerLeave = () => onLeave();

      el.addEventListener('pointermove', handlePointerMove, { passive: true });
      el.addEventListener('pointerenter', handlePointerEnter, { passive: true });
      el.addEventListener('pointerleave', handlePointerLeave, { passive: true });

      // Touch support
      const onTouchMove = (e: TouchEvent) => {
        if (e.touches && e.touches[0]) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      };
      const onTouchStart = (e: TouchEvent) => {
        if (e.touches && e.touches[0]) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
        onEnter();
      };
      const onTouchEnd = () => onLeave();

      el.addEventListener('touchstart', onTouchStart, { passive: true });
      el.addEventListener('touchmove', onTouchMove, { passive: true });
      el.addEventListener('touchend', onTouchEnd, { passive: true });

      // Suspend during scroll
      const onScroll = () => { suspendedUntil.current = performance.now() + (scrollSuspendMs ?? 250); };
      window.addEventListener('scroll', onScroll, { passive: true });

      // Visibility observer
      let io: IntersectionObserver | null = null;
      if ('IntersectionObserver' in window) {
        io = new IntersectionObserver((entries) => {
          const entry = entries[0];
          setIsVisible(!!entry.isIntersecting);
        }, { threshold: 0.1 });
        io.observe(el);
      }

      return () => {
        el.removeEventListener('pointermove', handlePointerMove);
        el.removeEventListener('pointerenter', handlePointerEnter);
        el.removeEventListener('pointerleave', handlePointerLeave);
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchmove', onTouchMove);
        el.removeEventListener('touchend', onTouchEnd);
        window.removeEventListener('scroll', onScroll);
        if (io) io.disconnect();
        cancelAnimationFrame(rafId);
      };
    }

    // If disabled: ensure variables are reset
    el.style.setProperty('--tiltX', '0');
    el.style.setProperty('--tiltY', '0');
    el.style.setProperty('--mx', '0');
    el.style.setProperty('--my', '0');
    el.style.setProperty('--sheen-opacity', '0');
    el.style.setProperty('--shadow-x', '0px');
    el.style.setProperty('--shadow-y', '30px');
    el.style.setProperty('--glow-x', '50%');
    el.style.setProperty('--glow-y', '50%');
    el.style.setProperty('--glow-opacity', '0');

    return () => cancelAnimationFrame(rafId);
  }, [maxTiltDeg, perspective, followStrength, spring, disableBelowWidth, deadzone, inertia, fpsFloor, scrollSuspendMs]);

  return {
    containerRef: containerRef as React.RefObject<HTMLElement>,
    tiltX: tilt.tiltX,
    tiltY: tilt.tiltY,
    isActive: active,
    isVisible,
  };
}
