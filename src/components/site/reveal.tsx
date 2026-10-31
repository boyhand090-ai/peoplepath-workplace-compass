import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** motion flavour */
  variant?: "up" | "blur" | "scale" | "left" | "right";
  as?: ElementType;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const rect = el.getBoundingClientRect();
    // Only animate elements that start below the initial viewport
    if (rect.top > window.innerHeight + 100) {
      setShown(false);
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              setShown(true);
              io.disconnect();
            }
          }
        },
        { threshold: 0.01, rootMargin: "200px 0px 100px 0px" },
      );
      io.observe(el);
      return () => io.disconnect();
    }
    return undefined;
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-shown={shown ? "true" : "false"}
      className={cn(`reveal reveal-${variant}`, className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Wraps a list so children animate in sequence. */
export function RevealGroup({
  children,
  className,
  step = 90,
  variant = "up",
}: {
  children: ReactNode[];
  className?: string;
  step?: number;
  variant?: RevealProps["variant"];
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={i * step} variant={variant} className="contents-reveal">
          {child}
        </Reveal>
      ))}
    </div>
  );
}
