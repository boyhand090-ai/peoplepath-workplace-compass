import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioFilters, projects, type Project } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";

/** Responsive srcset off a single 4K source so retina/4K screens get full detail. */
function srcSet(url: string) {
  if (url.startsWith("/") || !url.includes("unsplash.com")) {
    return undefined;
  }
  const base = url.replace(/&w=\d+/, "");
  return [960, 1440, 1920, 2560, 3840].map((w) => `${base}&w=${w} ${w}w`).join(", ");
}

/**
 * Bento mosaic — 6-column grid tailored for 9 showcase projects.
 * Packed tightly into balanced rows with generous card sizing to prevent text collision.
 */
const BENTO_SPANS = [
  "lg:col-span-3 lg:row-span-2", // 0 — hero cell (tall)
  "lg:col-span-3", // 1
  "lg:col-span-3", // 2
  "lg:col-span-3 lg:row-span-2", // 3 — tall cell
  "lg:col-span-3", // 4
  "lg:col-span-3", // 5
  "lg:col-span-2", // 6
  "lg:col-span-2", // 7
  "lg:col-span-2", // 8
];

function ProjectCard({ p, large, index }: { p: Project; large?: boolean; index?: number }) {
  const numberText =
    p.metric && p.metric !== "—"
      ? p.metric
      : typeof index === "number"
        ? String(index + 1).padStart(2, "0")
        : "01";

  return (
    <article
      className={cn(
        "group glass-card glass-polish hover-lift sheen-hover relative h-full overflow-hidden rounded-2xl",
        "min-h-[400px] sm:min-h-[460px] lg:min-h-0 lg:aspect-auto",
      )}
    >
      <img
        src={p.image}
        srcSet={srcSet(p.image)}
        sizes={large ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
        alt={`${p.name} — ${p.categories.join(", ")} project`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] z-0"
      />

      {/* Deep gradient wash for crisp, guaranteed text legibility while letting the photo shine */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-45% to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95 z-1" />

      {/* Subtle primary glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(120%_90%_at_50%_120%,color-mix(in_oklab,var(--color-primary)_26%,transparent),transparent_65%)] z-1" />

      {/* Top meta row: clean year badge on left, and 2-3 tags only when card has ample size */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5 sm:p-6 z-2">
        <span className="pill glass-panel border border-white/10 px-3.5 py-1 text-xs font-medium tracking-wider text-white/90 backdrop-blur-md">
          {p.year}
        </span>

        {/* Display 2-3 tags only if the card has enough size (large bento cards) */}
        {large && p.categories && p.categories.length > 0 && (
          <div className="flex flex-wrap items-center justify-end gap-1.5 max-w-[70%]">
            {p.categories.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-200 backdrop-blur-md shadow-xs transition-colors group-hover:border-primary/40 group-hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom content: spacious layout with generous breathing room, zero overlapping tags */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8 z-2">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-end justify-between gap-4">
            <h3
              className={cn(
                "text-display font-semibold tracking-tight text-white drop-shadow-md",
                large ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl lg:text-3xl",
              )}
            >
              {p.name}
            </h3>
            <div className="shrink-0 text-right">
              <div className="text-display text-2xl font-bold leading-none text-[#9AFD0D] transition-transform duration-500 group-hover:scale-110 sm:text-3xl">
                {numberText}
              </div>
              {p.metricLabel && (
                <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-zinc-300 sm:text-[11px]">
                  {p.metricLabel}
                </div>
              )}
            </div>
          </div>

          {p.copy && (
            <p
              className={cn(
                "text-xs leading-relaxed text-zinc-200/90 drop-shadow-sm sm:text-sm",
                large ? "line-clamp-3 max-w-2xl" : "line-clamp-2 max-w-xl",
              )}
            >
              {p.copy}
            </p>
          )}
        </div>
      </div>

      <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10 transition-colors duration-500 group-hover:ring-primary/40" />
    </article>
  );
}

export function Portfolio() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="work" className="relative border-t border-border py-20 sm:py-28">
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60%_40%_at_15%_0%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_70%),radial-gradient(50%_35%_at_85%_100%,color-mix(in_oklab,var(--color-primary)_8%,transparent),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#6060603D] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <span className="size-2.5 rounded-full bg-[#9AFD0D] shadow-[0_0_12px_#9AFD0D] animate-pulse" />
                Featured Portfolio
              </span>
            </div>
            <h2 className="text-display mt-3 text-3xl sm:text-5xl">Selected client projects</h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              A curated showcase of architectural developments, aesthetic clinics, and high-growth
              digital commerce platforms built for ambitious businesses.
            </p>
          </div>
          <Magnetic>
            <a
              href="#contact"
              className="pill press sheen-hover inline-flex w-fit items-center gap-2 border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
            >
              Discuss Your Project <ArrowUpRight className="size-4" />
            </a>
          </Magnetic>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-2" delay={80}>
          {portfolioFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                "pill press border px-4 py-2 text-sm transition-all duration-300 cursor-pointer",
                active === f
                  ? "border-primary bg-primary text-primary-foreground scale-105 shadow-[0_10px_30px_-12px_var(--color-primary)]"
                  : "border-border text-muted-foreground hover:bg-surface-2 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6 lg:auto-rows-[25rem]">
          {visible.map((p, i) => {
            const span = BENTO_SPANS[i % BENTO_SPANS.length] ?? BENTO_SPANS[0]!;
            const large = span.includes("row-span-2") || span.includes("col-span-4");
            return (
              <Reveal
                key={p.name}
                variant={i % 2 === 0 ? "left" : "right"}
                delay={(i % 3) * 90}
                className={cn("h-full", span)}
              >
                <ProjectCard p={p} large={large} index={i} />
              </Reveal>
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
