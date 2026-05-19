import { useRef } from 'react';
import {
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  MotionValue,
} from 'framer-motion';

export type AnimationType = 'parallax' | 'reveal' | 'transform' | 'counter';

export interface ScrollAnimationConfig {
  type: AnimationType;
  offset?: [string, string];
  outputRange?: [number, number] | [string, string];
  respectsReducedMotion?: boolean;
}

interface ScrollAnimationResult {
  ref: React.RefObject<HTMLElement>;
  progress: MotionValue<number>;
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  x: MotionValue<number>;
}

const DEFAULT_OFFSET: [string, string] = ['start end', 'end start'];

/**
 * useScrollAnimation — Core hook for scroll-driven animations.
 * Supports parallax, reveal, transform, and counter animation types.
 * Respects prefers-reduced-motion: returns final state without animations.
 * Uses only GPU-composited properties (transform, opacity) for 60fps.
 */
export function useScrollAnimation(config: ScrollAnimationConfig): ScrollAnimationResult {
  const {
    type,
    offset = DEFAULT_OFFSET,
    outputRange,
  } = config;

  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  // Static motion values for reduced motion (final state)
  const staticOpacity = useMotionValue(1);
  const staticY = useMotionValue(0);
  const staticScale = useMotionValue(1);
  const staticX = useMotionValue(0);

  // Define output ranges based on animation type
  let opacityRange: [number, number];
  let yRange: [number, number];
  let scaleRange: [number, number];
  let xRange: [number, number];

  switch (type) {
    case 'parallax':
      opacityRange = [1, 1];
      yRange = outputRange
        ? [outputRange[0] as number, outputRange[1] as number]
        : [80, -80];
      scaleRange = [1, 1];
      xRange = [0, 0];
      break;

    case 'reveal':
      opacityRange = [0, 1];
      yRange = outputRange
        ? [outputRange[0] as number, outputRange[1] as number]
        : [40, 0];
      scaleRange = [0.95, 1];
      xRange = [0, 0];
      break;

    case 'transform':
      opacityRange = [0.6, 1];
      yRange = [0, 0];
      scaleRange = outputRange
        ? [outputRange[0] as number, outputRange[1] as number]
        : [0.8, 1];
      xRange = [0, 0];
      break;

    case 'counter':
      opacityRange = [0, 1];
      yRange = [20, 0];
      scaleRange = [1, 1];
      xRange = [0, 0];
      break;

    default:
      opacityRange = [1, 1];
      yRange = [0, 0];
      scaleRange = [1, 1];
      xRange = [0, 0];
  }

  // Create motion values from scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [opacityRange[0], opacityRange[1], opacityRange[1]]);
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[1]]);
  const x = useTransform(scrollYProgress, [0, 1], xRange);

  // If reduced motion is preferred, return static final-state values
  if (prefersReducedMotion) {
    return {
      ref,
      progress: scrollYProgress,
      opacity: staticOpacity,
      y: staticY,
      scale: staticScale,
      x: staticX,
    };
  }

  return {
    ref,
    progress: scrollYProgress,
    opacity,
    y,
    scale,
    x,
  };
}

/**
 * useParallax — Convenience hook for parallax scroll effects.
 * Moves element along Y axis proportional to scroll.
 */
export function useParallax(speed: number = 0.5) {
  return useScrollAnimation({
    type: 'parallax',
    outputRange: [speed * 100, -(speed * 100)],
    offset: ['start end', 'end start'],
  });
}

/**
 * useRevealOnScroll — Convenience hook for reveal animations.
 * Fades in and slides up as element enters viewport.
 */
export function useRevealOnScroll() {
  return useScrollAnimation({
    type: 'reveal',
    offset: ['start 90%', 'start 40%'],
    outputRange: [40, 0],
  });
}

export default useScrollAnimation;
