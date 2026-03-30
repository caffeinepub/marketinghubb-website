import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        }
      },
      { threshold },
    );

    const elements = el.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right",
    );
    for (const child of elements) {
      observer.observe(child);
    }
    if (
      el.classList.contains("scroll-reveal") ||
      el.classList.contains("scroll-reveal-left") ||
      el.classList.contains("scroll-reveal-right")
    ) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useScrollRevealSingle(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
