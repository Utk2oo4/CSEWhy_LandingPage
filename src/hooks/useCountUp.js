import { useState, useEffect, useRef } from 'react';

/**
 * useCountUp
 * Counts from 0 → target over `duration` ms using an ease-out curve.
 * Animation only starts once the returned `ref` element enters the viewport.
 *
 * @param {number} target   - The final number to count to
 * @param {number} duration - Animation duration in ms (default 1800)
 * @returns {{ ref: React.RefObject, count: number }}
 */
export default function useCountUp(target, duration = 3000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, count };
}
