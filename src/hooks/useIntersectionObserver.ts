// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef } from 'react';

interface ObserverOptions extends IntersectionObserverInit {
  once?: boolean;
}

export const useIntersectionObserver = (
  callback: () => void,
  options: ObserverOptions = {}
) => {
  const targetRef = useRef<HTMLElement | null>(null);
  const hasFiredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (options.once) {
              if (!hasFiredRef.current) {
                callback();
                hasFiredRef.current = true;
                if (targetRef.current) {
                  observer.unobserve(targetRef.current);
                }
              }
            } else {
              callback();
            }
          }
        });
      },
      {
        root: options.root,
        rootMargin: options.rootMargin,
        threshold: options.threshold,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
  }, [callback, options]);

  return (el: HTMLElement | null) => {
    targetRef.current = el;
  };
};
