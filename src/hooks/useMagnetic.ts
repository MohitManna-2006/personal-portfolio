import { useEffect, useRef } from 'react';

export type MagneticOptions = {
  radius?: number;         // px, activation radius
  maxTranslate?: number;   // px, cap translation
  strength?: number;       // 0..1 follow strength per frame
  keyboard?: boolean;      // enable keyboard interactions
  spring?: { stiffness: number; damping: number; mass: number };
};

const DEFAULTS: Required<MagneticOptions> = {
  radius: 14,
  maxTranslate: 16,
  strength: 0.28,
  keyboard: true,
  spring: { stiffness: 180, damping: 18, mass: 0.9 },
};

export function useMagnetic<T extends HTMLElement>(options?: MagneticOptions) {
  const { radius, maxTranslate, strength, keyboard } = { ...DEFAULTS, ...options };
  const ref = useRef<T | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const effectiveRadius = radius * dpr;
    el.style.setProperty('--magnetic-radius', `${effectiveRadius}px`);
    el.style.willChange = 'transform';

    const step = () => {
      current.current.x += (target.current.x - current.current.x) * strength;
      current.current.y += (target.current.y - current.current.y) * strength;
      el.style.transform = `translate3d(${current.current.x.toFixed(2)}px, ${current.current.y.toFixed(2)}px, 0)`;
      if (Math.abs(current.current.x - target.current.x) > 0.1 || Math.abs(current.current.y - target.current.y) > 0.1) {
        rafId.current = requestAnimationFrame(step);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(x, y);
      if (dist < effectiveRadius) {
        const clamped = Math.min(1, dist / effectiveRadius);
        const scale = (1 - clamped) * maxTranslate / (dist || 1);
        target.current.x = x * scale;
        target.current.y = y * scale;
        cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(step);
      } else {
        target.current.x = 0;
        target.current.y = 0;
        cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(step);
      }
    };

    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
      // overshoot scale then settle
      el.style.transition = 'transform 120ms cubic-bezier(.2,.8,.2,1)';
      el.style.transform = `translate3d(0,0,0) scale(1.02)`;
      window.setTimeout(() => {
        el.style.transition = 'transform 220ms cubic-bezier(.2,.8,.2,1)';
        el.style.transform = `translate3d(0,0,0) scale(1)`;
      }, 120);
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(step);
    };

    const onClick = () => {
      // Trigger a punchier ripple pulse via data attribute toggle
      el.setAttribute('data-rippling', 'true');
      el.style.transition = 'transform 160ms ease-out';
      el.style.transform += ' scale(1.04)';
      window.setTimeout(() => {
        el.style.transition = 'transform 260ms ease-out';
        el.style.transform = `translate3d(${current.current.x.toFixed(2)}px, ${current.current.y.toFixed(2)}px, 0)`;
        el.removeAttribute('data-rippling');
      }, 200);
    };

    el.addEventListener('pointermove', onPointerMove, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
    el.addEventListener('click', onClick);

    // Keyboard interactions and focus ring
    const addFocus = () => el.classList.add('kFocus');
    const removeFocus = () => el.classList.remove('kFocus');
    const onKey = (e: KeyboardEvent) => {
      if (!keyboard) return;
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        onClick();
      }
    };
    if (keyboard) {
      el.setAttribute('tabindex', '0');
      el.addEventListener('focus', addFocus);
      el.addEventListener('blur', removeFocus);
      el.addEventListener('keydown', onKey);
    }
    // Basic touch support (treat as pointer move)
    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const t = e.touches[0];
      onPointerMove(new PointerEvent('pointermove', { clientX: t.clientX, clientY: t.clientY }));
    };
    const onTouchEnd = onLeave;
    el.addEventListener('touchmove', onTouchMove, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', onLeave);
      el.removeEventListener('click', onClick);
      if (keyboard) {
        el.removeEventListener('focus', addFocus);
        el.removeEventListener('blur', removeFocus);
        el.removeEventListener('keydown', onKey);
      }
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
      cancelAnimationFrame(rafId.current);
    };
  }, [radius, maxTranslate, strength]);

  return { ref } as const;
}
