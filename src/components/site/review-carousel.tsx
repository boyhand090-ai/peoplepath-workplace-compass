import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, MapPin, Mail } from "lucide-react";
import { CALENDLY } from "@/data/site";

export type Testimonial = {
  company: string;
  avatar: string;
  quote: string;
};

// Exact testimonials matching the user screenshot image.png
export const testimonialsList: Testimonial[] = [
  {
    company: "Vizerto",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/03/Container-8.webp",
    quote:
      "They made sure the app felt simple to use without losing any of the bells and whistles. Everything just worked better after their touch.",
  },
  {
    company: "Storytime Owls",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/06/Story.webp",
    quote:
      "They actually get how users think, and the onboarding ended up feeling really smooth. We liked it so much we’re already planning the next round of changes.",
  },
  {
    company: "GunMade",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/06/Container-7.webp",
    quote:
      "They explained things in plain English, which made choices easy. Felt like a real collaboration, not a cookie-cutter process.",
  },
  {
    company: "DailyTime",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/03/Container-9.webp",
    quote:
      "Responses were fast, things didn’t get messy, and the process actually made sense. You don’t always get that with designers, so it was refreshing.",
  },
  {
    company: "Core & More",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/12/Container-11.webp",
    quote:
      "Issues were fixed fast, and the work was solid. Will definitely reach out for the next project.",
  },
  {
    company: "Fiction Profits",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/12/Container-10.webp",
    quote:
      "Communication was easy and we didn’t have to chase anyone. It’s nice when a project just clicks like that.",
  },
];

export function ReviewCarousel() {
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
    const amount = 380;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
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
      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 cursor-grab active:cursor-grabbing no-scrollbar scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonialsList.map((item, idx) => (
          <div
            key={`${item.company}-${idx}`}
            className="w-[300px] sm:w-[350px] md:w-[380px] shrink-0"
          >
            <div className="relative flex flex-col justify-between h-[250px] sm:h-[270px] rounded-[24px] border border-[#E5E7EB] bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-neutral-300 text-neutral-900">
              {/* Card Top: Logo & Company Name */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="size-9 sm:size-10 rounded-full overflow-hidden border border-neutral-100 bg-neutral-100 shrink-0 flex items-center justify-center">
                  <img
                    src={item.avatar}
                    alt={item.company}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base sm:text-[17px] font-bold text-black tracking-tight">
                  {item.company}
                </h3>
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-[14px] text-[#4A4A4A] leading-[22px] sm:leading-[24px] relative z-10 font-normal">
                {item.quote}
              </p>

              {/* Faint Quotation Mark Watermark */}
              <div
                aria-hidden="true"
                className="absolute right-5 bottom-3 pointer-events-none select-none z-0"
              >
                <svg className="size-16 sm:size-20 fill-[#F3F4F6]" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Navigation & Progress Bar Row */}
      <div className="mt-8 sm:mt-10 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Previous testimonials"
            className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all hover:bg-accent active:scale-95 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="size-4 stroke-[2]" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Next testimonials"
            className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all hover:bg-accent active:scale-95 cursor-pointer shadow-xs"
          >
            <ArrowRight className="size-4 stroke-[2]" />
          </button>
        </div>

        {/* Progress Bar Track */}
        <div className="relative h-[2px] w-full max-w-[540px] rounded-full bg-border overflow-hidden">
          <div
            className="absolute top-0 bottom-0 bg-[#9AFD0D] rounded-full transition-all duration-200"
            style={{
              width: "25%",
              left: `${(scrollProgress / 100) * 75}%`,
            }}
          />
        </div>
      </div>

      {/* Bottom Happy Customers Count & Consultation CTA Button */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs sm:text-[13px] text-muted-foreground leading-tight font-normal">
          Happy Customers based on complement
          <br />
          and customer reviews on Clutch
        </p>

        <a
          href={CALENDLY}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#9AFD0D] px-6 sm:px-7 py-3 text-xs sm:text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-xs"
        >
          Book a Free Consultation
        </a>
      </div>

      {/* Contact & Address Block matching bottom of image.png */}
      <div className="mt-16 sm:mt-20 overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#0c0d10] p-4 sm:p-6 lg:p-7 border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4 sm:gap-6">
          {/* Left Banner: Green gradient ambient card */}
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0c2a1a] via-[#091f14] to-[#06120c] border border-emerald-500/20 p-8 sm:p-10 flex flex-col justify-between min-h-[300px]">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-12 -left-12 size-48 rounded-full bg-[#9AFD0D]/15 blur-3xl" />

            {/* Logo */}
            <div className="flex items-center gap-1.5 relative z-10">
              <span className="text-2xl font-bold tracking-tight text-white">six</span>
              <span className="text-2xl font-bold tracking-tight text-[#9AFD0D]">2</span>
              <span className="text-2xl font-bold tracking-tight text-white">eight</span>
            </div>

            {/* Content */}
            <div className="mt-12 sm:mt-16 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Elite product squads,
                <br />
                ready to deploy
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
                Let our senior cross-functional teams integrate seamlessly into your workflow to
                design, develop, and ship your next high-fidelity digital ecosystem.
              </p>
            </div>
          </div>

          {/* Right Column: Two stacked info cards */}
          <div className="flex flex-col gap-4 justify-between">
            {/* Card 1: Join us at / Address */}
            <div className="rounded-[22px] bg-[#14161a] border border-white/8 p-6 sm:p-7 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 text-zinc-300">
                <MapPin className="size-4 text-zinc-400" />
                <h4 className="text-sm sm:text-base font-semibold text-white">Join us at</h4>
              </div>
              <div className="mt-3 pl-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                  ADDRESS
                </span>
                <p className="mt-1 text-xs sm:text-sm text-zinc-300 font-medium">
                  921 Town Centre Blvd, #266, Clayton, North Carolina 27520, US
                </p>
              </div>
            </div>

            {/* Card 2: Write to us / Emails */}
            <div className="rounded-[22px] bg-[#14161a] border border-white/8 p-6 sm:p-7 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Mail className="size-4 text-zinc-400" />
                <h4 className="text-sm sm:text-base font-semibold text-white">Write to us</h4>
              </div>
              <div className="mt-3 pl-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                    FOR BUSINESS
                  </span>
                  <a
                    href="mailto:hello@six2eight.com"
                    className="mt-1 text-xs sm:text-sm text-zinc-300 hover:text-[#9AFD0D] font-medium transition-colors block"
                  >
                    hello@six2eight.com
                  </a>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                    FOR JOBS
                  </span>
                  <a
                    href="mailto:careers@six2eight.com"
                    className="mt-1 text-xs sm:text-sm text-zinc-300 hover:text-[#9AFD0D] font-medium transition-colors block"
                  >
                    careers@six2eight.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
