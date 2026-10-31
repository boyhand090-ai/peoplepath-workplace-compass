import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric value up when it scrolls into view.
 * Accepts strings like "200+", "98%", "10x" and animates only the digits.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^(\D*)(\d[\d.,]*)(.*)$/);
  const prefix = match?.[1] ?? "";
  const suffix = match?.[3] ?? "";
  const target = match ? Number(match[2]!.replace(/,/g, "")) : NaN;
  const [display, setDisplay] = useState(() =>
    Number.isNaN(target) ? value : `${prefix}0${suffix}`,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const dur = 600;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const n = target * eased;
        setDisplay(`${prefix}${target % 1 ? n.toFixed(1) : Math.round(n)}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50 && rect.bottom > 0) {
      run();
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        }
      },
      { threshold: 0.05, rootMargin: "100px 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [prefix, suffix, target, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
