import { useEffect, useRef } from "react";
import { heroImages } from "@/data/site";

type Card = {
  el: HTMLDivElement;
  x: number; // vw-ish px
  y: number;
  vy: number;
  rot: number;
  vr: number;
  drift: number;
  phase: number;
  depth: number; // 0 far .. 1 near
};

function rand(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export function FallingCards() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const w = () => wrap.clientWidth;
    const h = () => wrap.clientHeight;

    const countFor = (width: number) => (width < 640 ? 4 : width < 1024 ? 7 : 12);

    let cards: Card[] = [];
    let raf = 0;
    let running = true;

    const sideX = (depth: number) => {
      const width = w();
      const cw = 220 * (0.55 + depth * 0.85);
      // keep mostly on the sides: left band or right band
      const band = Math.random() < 0.5 ? 0 : 1;
      const margin = width < 640 ? 0.24 : 0.3;
      return band === 0
        ? rand(-cw * 0.35, width * margin - cw * 0.5)
        : rand(width * (1 - margin) - cw * 0.4, width - cw * 0.6);
    };

    const reset = (c: Card, initial: boolean) => {
      c.depth = rand(0.15, 1);
      const scale = 0.45 + c.depth * 0.75;
      c.x = sideX(c.depth);
      c.y = initial ? rand(-h() * 0.4, h()) : rand(-h() * 0.6, -220);
      c.vy = (18 + c.depth * 52) / 60; // px per frame @60fps
      c.rot = rand(-12, 12);
      c.vr = rand(-0.05, 0.05);
      c.drift = rand(10, 34) * (Math.random() < 0.5 ? -1 : 1);
      c.phase = rand(0, Math.PI * 2);
      const img = heroImages[Math.floor(Math.random() * heroImages.length)]!;
      const imgEl = c.el.firstElementChild as HTMLImageElement;
      imgEl.src = img.src;
      const wpx = Math.round(rand(150, 260) * scale * 1.15);
      const hpx = Math.round(wpx * rand(0.6, 1.25));
      c.el.style.width = `${wpx}px`;
      c.el.style.height = `${hpx}px`;
      c.el.style.opacity = String(0.16 + c.depth * 0.34);
      c.el.style.filter = `blur(${((1 - c.depth) * 5).toFixed(2)}px)`;
      c.el.style.zIndex = String(Math.round(c.depth * 10));
    };

    const build = () => {
      wrap.innerHTML = "";
      cards = [];
      const n = countFor(w());
      for (let i = 0; i < n; i++) {
        const el = document.createElement("div");
        el.className =
          "absolute left-0 top-0 overflow-hidden rounded-2xl border border-white/10 bg-surface/70 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.75)] backdrop-blur-sm will-change-transform";
        const img = document.createElement("img");
        img.alt = "";
        img.loading = "lazy";
        img.decoding = "async";
        img.className = "size-full object-cover";
        el.appendChild(img);
        wrap.appendChild(el);
        const c: Card = { el, x: 0, y: 0, vy: 1, rot: 0, vr: 0, drift: 0, phase: 0, depth: 0.5 };
        reset(c, true);
        cards.push(c);
      }
    };

    build();

    let last = performance.now();
    let t = 0;
    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min(2.5, (now - last) / 16.667);
      last = now;
      t += dt;
      const hh = h();
      for (const c of cards) {
        c.y += c.vy * dt;
        c.rot += c.vr * dt;
        c.phase += 0.004 * dt;
        const dx = Math.sin(c.phase) * c.drift;
        if (c.y > hh + 260) reset(c, false);
        c.el.style.transform = `translate3d(${(c.x + dx).toFixed(2)}px, ${c.y.toFixed(2)}px, 0) rotate(${c.rot.toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    let rt: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(rt);
      rt = setTimeout(build, 250);
    });
    ro.observe(wrap);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
      ro.disconnect();
      clearTimeout(rt);
      void t;
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden [perspective:1200px]"
    />
  );
}
