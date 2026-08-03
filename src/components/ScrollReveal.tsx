'use client';

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

/**
 * ScrollReveal — Intersection-based reveal with physical motion vocabulary.
 *
 * Motion types:
 * - compress: Element releases from vertical compression (containment → release)
 * - rise: Subtle upward emergence (signal propagation)
 * - expand: Horizontal expansion from center (thermal movement)
 * - resistance: Element appears to push through resistance before settling
 * - none: Instant reveal (for safety content — no motion delay)
 *
 * Respects prefers-reduced-motion. Falls back to opacity-only transition.
 */

type MotionType = 'compress' | 'rise' | 'expand' | 'resistance' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  motion?: MotionType;
  /** Delay in ms (stagger children) */
  delay?: number;
  /** IntersectionObserver threshold (0–1) */
  threshold?: number;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Element tag */
  as?: keyof JSX.IntrinsicElements;
}

const MOTION_INITIAL: Record<MotionType, CSSProperties> = {
  compress: {
    opacity: 0,
    transform: 'scaleY(0.92) translateY(2rem)',
    transformOrigin: 'bottom center',
  },
  rise: {
    opacity: 0,
    transform: 'translateY(2.5rem)',
  },
  expand: {
    opacity: 0,
    transform: 'scaleX(0.85)',
    transformOrigin: 'center',
  },
  resistance: {
    opacity: 0,
    transform: 'translateY(3rem) scale(0.97)',
    filter: 'blur(2px)',
  },
  none: {
    opacity: 0,
  },
};

const MOTION_FINAL: CSSProperties = {
  opacity: 1,
  transform: 'none',
  filter: 'none',
};

export function ScrollReveal({
  children,
  motion = 'rise',
  delay = 0,
  threshold = 0.15,
  className,
  style,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const duration = motion === 'resistance' ? '900ms' : motion === 'compress' ? '700ms' : '600ms';
  const easing = motion === 'resistance'
    ? 'cubic-bezier(0.22, 1, 0.36, 1)' // Strong deceleration — pushing through
    : 'cubic-bezier(0.16, 1, 0.3, 1)'; // Standard ease-out

  const motionStyle: CSSProperties = {
    ...(isVisible ? MOTION_FINAL : MOTION_INITIAL[motion]),
    transition: `opacity ${duration} ${easing} ${delay}ms, transform ${duration} ${easing} ${delay}ms, filter ${duration} ${easing} ${delay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
    ...style,
  };

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={className} style={motionStyle}>
      {children}
    </Tag>
  );
}
