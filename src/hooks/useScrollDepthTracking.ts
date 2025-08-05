// src/hooks/useScrollDepthTracking.ts
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

const throttle = <T extends (...args: any[]) => void>(func: T, limit: number) => {
  let inThrottle: boolean;
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;
  return function(this: any, ...args: Parameters<T>) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};


export const useScrollDepthTracking = () => {
  const milestonesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      const maxScroll = scrollHeight - clientHeight;
      const scrollPercent = (scrollTop / maxScroll) * 100;

      const MILESTONES = [25, 50, 75, 90];

      MILESTONES.forEach((milestone) => {
        if (scrollPercent >= milestone && !milestonesRef.current.has(milestone)) {
          trackEvent('scroll_depth_manual', {
            scroll_percent: milestone,
          });
          milestonesRef.current.add(milestone);
        }
      });
    };

    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);
};
