import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CALENDLY } from "@/data/site";

export type Visionary = {
  name: string;
  role: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
};

export const visionaries: Visionary[] = [
  {
    name: "Sean Napier",
    role: "Founder and CEO",
    image: "/assets/aistudio/1776519339994_81198518.png",
    gradientFrom: "#a3f7bf",
    gradientTo: "#6ee7b7",
  },
  {
    name: "Jahid Hasan",
    role: "Co-Founder & CPO",
    image: "/assets/team/jahid.jpg",
    gradientFrom: "#67e8f9",
    gradientTo: "#38bdf8",
  },
  {
    name: "Sarah Nelson",
    role: "Executive Assistant",
    image: "/assets/team/sarah.jpg",
    gradientFrom: "#5eead4",
    gradientTo: "#2dd4bf",
  },
  {
    name: "Butch",
    role: "Head of Sales",
    image: "/assets/team/butch.jpg",
    gradientFrom: "#86efac",
    gradientTo: "#4ade80",
  },
  {
    name: "Maya Chen",
    role: "Head of Product Design",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    gradientFrom: "#99f6e4",
    gradientTo: "#2dd4bf",
  },
  {
    name: "Daniel Ortiz",
    role: "Principal Solutions Architect",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    gradientFrom: "#a7f3d0",
    gradientTo: "#34d399",
  },
];

export function VisionariesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const updateProgress = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    const currentProgress = (el.scrollLeft / maxScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 320;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDown.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeftPos.current = el.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    el.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <div className="w-full select-none">
      {/* Header section matching Screenshot */}
      <div className="text-center">
        {/* Badge: Team Members */}
        <div className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white shadow-xs">
          <span className="size-2 rounded-full bg-[#9AFD0D] shadow-[0_0_8px_#9AFD0D]" />
          Team Members
        </div>

        {/* Heading */}
        <h2 className="text-display mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Get to Know the Visionaries
        </h2>

        {/* Subtitle row with avatars + Expert 40+ badge + at six2eight */}
        <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center -space-x-2">
            <img
              src="/assets/aistudio/1776519339994_81198518.png"
              alt="Sean Napier"
              className="size-8 sm:size-9 rounded-full border-2 border-background object-cover"
              loading="lazy"
            />
            <img
              src="/assets/team/jahid.jpg"
              alt="Jahid Hasan"
              className="size-8 sm:size-9 rounded-full border-2 border-background object-cover"
              loading="lazy"
            />
            <img
              src="/assets/team/sarah.jpg"
              alt="Sarah Nelson"
              className="size-8 sm:size-9 rounded-full border-2 border-background object-cover"
              loading="lazy"
            />
            <div className="flex size-8 sm:size-9 flex-col items-center justify-center rounded-full border-2 border-background bg-[#9AFD0D] text-[8px] sm:text-[9px] font-black leading-tight text-black shadow-xs">
              <span className="font-medium text-[7.5px] leading-none">Expert</span>
              <span className="font-bold text-[10px] leading-none">40+</span>
            </div>
          </div>
          <span className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            at six2eight
          </span>
        </div>
      </div>

      {/* Cards carousel */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className="mt-12 sm:mt-16 flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 cursor-grab active:cursor-grabbing no-scrollbar scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {visionaries.map((member, idx) => (
          <div
            key={`${member.name}-${idx}`}
            className="w-[260px] sm:w-[290px] md:w-[310px] shrink-0"
          >
            <div
              className="group relative flex flex-col justify-end h-[380px] sm:h-[420px] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-border/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${member.gradientFrom} 0%, ${member.gradientTo} 100%)`,
              }}
            >
              {/* Background repeated watermark brand lettering */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-start overflow-hidden pt-4 pl-4 select-none opacity-20"
              >
                <span className="text-5xl sm:text-6xl font-black tracking-tighter text-emerald-950 leading-none">
                  six
                </span>
                <span className="text-5xl sm:text-6xl font-black tracking-tighter text-emerald-950 leading-none">
                  2eight
                </span>
              </div>

              {/* Member Portrait */}
              <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Bottom dark vignette overlay with name & title */}
              <div className="relative z-20 w-full bg-gradient-to-t from-black via-black/85 to-transparent px-5 sm:px-6 pt-24 pb-5 sm:pb-6 text-left">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-300">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation & Progress Bar Row */}
      <div className="mt-8 sm:mt-10 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Previous team members"
            className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all hover:bg-accent active:scale-95 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="size-4 stroke-[2]" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Next team members"
            className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all hover:bg-accent active:scale-95 cursor-pointer shadow-xs"
          >
            <ArrowRight className="size-4 stroke-[2]" />
          </button>
        </div>

        {/* Progress Bar Track */}
        <div className="relative h-[2px] w-full max-w-[500px] rounded-full bg-border overflow-hidden">
          <div
            className="absolute top-0 bottom-0 bg-[#9AFD0D] rounded-full transition-all duration-200"
            style={{
              width: "28%",
              left: `${(scrollProgress / 100) * 72}%`,
            }}
          />
        </div>
      </div>

      {/* Bottom Subtitle & Consultation Button */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-muted-foreground font-normal">
          Meet the talented people behind our success
        </p>

        <a
          href={CALENDLY}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-foreground/80 px-6 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-all hover:bg-foreground hover:text-background active:scale-95"
        >
          Book a Free Consultation
        </a>
      </div>
    </div>
  );
}
