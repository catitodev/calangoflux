import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
  /** Normalized x position relative to element (0 to 1) */
  normalizedX: number;
  /** Normalized y position relative to element (0 to 1) */
  normalizedY: number;
  /** Whether the cursor is currently over the tracked element */
  isHovering: boolean;
}

/**
 * useMouseTracker — Cursor-reactive element hook.
 * Updates position within 16ms via requestAnimationFrame for 60fps.
 * Returns normalized coordinates relative to the tracked element.
 * Respects prefers-reduced-motion: returns center position without tracking.
 */
export function useMouseTracker(): {
  ref: React.RefObject<HTMLElement>;
  position: MousePosition;
} {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const rafId = useRef<number | null>(null);
  const latestEvent = useRef<{ clientX: number; clientY: number } | null>(null);

  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0.5,
    normalizedY: 0.5,
    isHovering: false,
  });

  const updatePosition = useCallback(() => {
    if (!latestEvent.current || !ref.current) {
      rafId.current = null;
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const { clientX, clientY } = latestEvent.current;

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const normalizedX = Math.max(0, Math.min(1, x / rect.width));
    const normalizedY = Math.max(0, Math.min(1, y / rect.height));

    const isHovering =
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom;

    setPosition({ x, y, normalizedX, normalizedY, isHovering });
    rafId.current = null;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      latestEvent.current = { clientX: e.clientX, clientY: e.clientY };

      // Throttle updates to requestAnimationFrame (16ms)
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updatePosition);
      }
    },
    [updatePosition]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition((prev) => ({
      ...prev,
      normalizedX: 0.5,
      normalizedY: 0.5,
      isHovering: false,
    }));
  }, []);

  useEffect(() => {
    // If reduced motion is preferred, don't track
    if (prefersReducedMotion) return;

    const element = ref.current;
    if (!element) return;

    // Listen on document for smoother tracking even outside element
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [prefersReducedMotion, handleMouseMove, handleMouseLeave]);

  // Return static center position if reduced motion is preferred
  if (prefersReducedMotion) {
    return {
      ref,
      position: {
        x: 0,
        y: 0,
        normalizedX: 0.5,
        normalizedY: 0.5,
        isHovering: false,
      },
    };
  }

  return { ref, position };
}

/**
 * useGlobalMouseTracker — Tracks cursor position globally (relative to viewport).
 * Useful for floating elements that react to cursor anywhere on the page.
 */
export function useGlobalMouseTracker(): { x: number; y: number } {
  const prefersReducedMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const latestEvent = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const update = useCallback(() => {
    setPos(latestEvent.current);
    rafId.current = null;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      latestEvent.current = { x: e.clientX, y: e.clientY };
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [prefersReducedMotion, update]);

  return pos;
}

export default useMouseTracker;
