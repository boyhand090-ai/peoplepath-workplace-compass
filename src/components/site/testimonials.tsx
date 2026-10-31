import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, TrendingUp, User } from "lucide-react";
import { CALENDLY, clientTestimonials } from "@/data/site";

export function Testimonials() {
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
    <section className="bg-white text-neutral-900 py-20 sm:py-28 lg:py-32 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Top Centered Pill Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-[#161616] px-4 py-2 text-sm font-medium text-white shadow-xs">
            <span className="size-2.5 rounded-full bg-[#9AFD0D] shadow-[0_0_12px_#9AFD0D] animate-pulse" />
            Testimonials
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-black leading-[1.14]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Hear from those who’ve seen
            <br />
            the change!
          </h2>
        </div>

        {/* Horizontal Testimonials Carousel Track */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 cursor-grab active:cursor-grabbing no-scrollbar scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {clientTestimonials.map((item, idx) => (
            <div
              key={`${item.company}-${idx}`}
              className="w-[300px] sm:w-[350px] md:w-[370px] shrink-0"
            >
              <div className="relative flex flex-col justify-between h-[250px] sm:h-[270px] rounded-[24px] border border-[#E5E7EB] bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-neutral-300">
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
                  <h3
                    className="text-base sm:text-[17px] font-bold text-black tracking-tight"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
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
              className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-black transition-all hover:bg-neutral-100 hover:border-black active:scale-95 cursor-pointer shadow-xs"
            >
              <ArrowLeft className="size-4 stroke-[2]" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next testimonials"
              className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-black transition-all hover:bg-neutral-100 hover:border-black active:scale-95 cursor-pointer shadow-xs"
            >
              <ArrowRight className="size-4 stroke-[2]" />
            </button>
          </div>

          {/* Progress Bar Track */}
          <div className="relative h-[2px] w-full max-w-[540px] rounded-full bg-[#E5E7EB] overflow-hidden">
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
          <p className="text-xs sm:text-[13px] text-[#4A4A4A] leading-tight font-normal">
            Happy Customers based on complement
            <br />
            and customer reviews on Clutch
          </p>

          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#9AFD0D] px-6 sm:px-7 py-3 text-xs sm:text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-xs"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export function Strategy() {
  return (
    <section
      id="strategy"
      className="bg-[#050505] border-t border-white/10 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#6060603D] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <span className="size-2.5 rounded-full bg-[#9AFD0D] shadow-[0_0_12px_#9AFD0D] animate-pulse" />
            Strategy
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2
            className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.12]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Why brands choose six2eight for
            <br />
            design & development?
          </h2>
        </div>

        {/* 6 Cards 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {/* CARD 1: 200+ Projects Delivered */}
          <div className="relative bg-[#121212] rounded-[24px] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 shadow-xl group overflow-hidden">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                200+
              </span>
              <span className="text-xs sm:text-sm text-[#888888] font-medium mt-1 block">
                Projects Delivered
              </span>
            </div>

            {/* Graphic: Glowing Box with Cursor pointing to Projects pill & orbiting sphere */}
            <div className="relative my-7 flex h-36 w-full items-center justify-center">
              {/* Orbiting sphere */}
              <div className="absolute right-10 top-2 size-12 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10 shadow-lg opacity-80 animate-float-reverse" />
              {/* Dashed trajectory curve */}
              <svg
                className="absolute inset-0 size-full overflow-visible opacity-30"
                viewBox="0 0 200 120"
              >
                <path
                  d="M 20 100 Q 100 20 180 80"
                  stroke="#9AFD0D"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="4 4"
                  className="animate-dash-crawl"
                />
              </svg>
              {/* Projects tag pill with green cursor */}
              <div className="relative flex items-center gap-2 rounded-xl border border-[#9AFD0D]/60 bg-[#161616] px-4 py-2.5 backdrop-blur-md shadow-[0_0_25px_rgba(154,253,13,0.2)] animate-float-gentle">
                <svg
                  className="size-4 text-[#9AFD0D] fill-[#9AFD0D] drop-shadow-[0_0_6px_#9AFD0D] animate-cursor-move"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 0l16 12-7 2-4 7z" />
                </svg>
                <span className="text-xs font-semibold text-white tracking-wide">Projects</span>
                <span className="size-2 rounded-full bg-[#9AFD0D] animate-pulse" />
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#A3A3A3] leading-relaxed font-normal">
              Behind every product we build is a person using it. That’s what good design is for.
            </p>
          </div>

          {/* CARD 2: 50+ From 2 to 50+ */}
          <div className="relative bg-[#121212] rounded-[24px] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 shadow-xl group overflow-hidden">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                50+
              </span>
              <span className="text-xs sm:text-sm text-[#888888] font-medium mt-1 block">
                From 2 to 50+
              </span>
            </div>

            {/* Graphic: Glowing Green Globe with Moving Revolving Avatar Orbit */}
            <div className="relative my-7 flex h-36 w-full items-center justify-center">
              {/* Rotating Orbiting Ring with Avatars */}
              <div className="absolute size-36 rounded-full border border-dashed border-[#9AFD0D]/50 animate-orbit">
                {/* Avatar 1 (top of orbit) */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 size-7 rounded-full overflow-hidden border-2 border-[#9AFD0D] shadow-[0_0_10px_rgba(154,253,13,0.7)] animate-counter-orbit">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                {/* Avatar 2 (bottom-right of orbit) */}
                <div className="absolute bottom-2 right-1 size-6 rounded-full overflow-hidden border border-white/50 shadow-md animate-counter-orbit">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                {/* Avatar 3 (bottom-left of orbit) */}
                <div className="absolute bottom-2 left-1 size-6 rounded-full overflow-hidden border border-white/50 shadow-md animate-counter-orbit">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>

              {/* Center Green Globe */}
              <div className="relative flex size-12 items-center justify-center rounded-full bg-[#9AFD0D] text-black shadow-[0_0_35px_#9AFD0D] z-10 transition-transform duration-300 hover:scale-110 animate-pulse">
                <svg
                  className="size-7 stroke-[1.8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#A3A3A3] leading-relaxed font-normal">
              Started as a small team is now 50+ people working across the globe.
            </p>
          </div>

          {/* CARD 3: 92% Client satisfaction */}
          <div className="relative bg-[#121212] rounded-[24px] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 shadow-xl group overflow-hidden">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                92%
              </span>
              <span className="text-xs sm:text-sm text-[#888888] font-medium mt-1 block">
                Client satisfaction
              </span>
            </div>

            {/* Graphic: Dark Laptop with Rating Pill */}
            <div className="relative my-7 flex h-36 w-full items-center justify-center">
              <div className="relative w-48 rounded-t-xl rounded-b-md border border-white/15 bg-neutral-900 p-2 shadow-2xl">
                <div className="flex h-20 w-full items-center justify-center rounded-lg bg-black/80 border border-white/5 p-2">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-neutral-800/90 px-3 py-1.5 shadow-md animate-float">
                    <div className="flex size-5 items-center justify-center rounded-full bg-neutral-700 text-white font-bold animate-icon-sway">
                      <User className="size-3 text-neutral-300" />
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-400 text-xs animate-star-shimmer">
                      {"★★★★★"}
                    </div>
                    <span className="size-1.5 rounded-full bg-[#9AFD0D] animate-pulse" />
                  </div>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-b-md bg-neutral-700 mx-auto" />
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#A3A3A3] leading-relaxed font-normal">
              Most clients don&apos;t leave. That&apos;s the real measure of quality work.
            </p>
          </div>

          {/* CARD 4: 15+ Industries served */}
          <div className="relative bg-[#121212] rounded-[24px] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 shadow-xl group overflow-hidden">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                15+
              </span>
              <span className="text-xs sm:text-sm text-[#888888] font-medium mt-1 block">
                Industries served
              </span>
            </div>

            {/* Graphic: 3 Glowing Badges radiating down */}
            <div className="relative my-7 flex h-36 w-full items-center justify-center overflow-hidden">
              <svg className="absolute inset-0 size-full opacity-35" viewBox="0 0 200 120">
                <path
                  d="M 50 40 Q 100 80 100 110"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="3 3"
                  className="animate-dash-crawl"
                />
                <path
                  d="M 100 30 L 100 110"
                  stroke="#9AFD0D"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="4 4"
                  className="animate-dash-crawl"
                />
                <path
                  d="M 150 40 Q 100 80 100 110"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="3 3"
                  className="animate-dash-crawl"
                />
                <ellipse
                  cx="100"
                  cy="110"
                  rx="30"
                  ry="8"
                  stroke="#9AFD0D"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                  className="animate-pulse"
                />
              </svg>
              <div className="relative flex w-44 justify-between items-center z-10">
                {/* Cloud / SaaS badge */}
                <div className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-neutral-900 text-[#9AFD0D] shadow-[0_0_12px_rgba(154,253,13,0.3)] animate-float hover:scale-110 transition-transform">
                  <svg
                    className="size-4 animate-icon-sway"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
                  </svg>
                </div>
                {/* Shopping cart / E-commerce badge */}
                <div className="flex size-11 -translate-y-2 items-center justify-center rounded-full border border-[#9AFD0D]/60 bg-neutral-900 text-[#9AFD0D] shadow-[0_0_16px_rgba(154,253,13,0.45)] animate-float-fast hover:scale-110 transition-transform">
                  <svg
                    className="size-5 animate-badge-pop"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                {/* Star / Premium badge */}
                <div className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-neutral-900 text-[#9AFD0D] shadow-[0_0_12px_rgba(154,253,13,0.3)] animate-float-delayed hover:scale-110 transition-transform">
                  <svg
                    className="size-4 animate-star-shimmer"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#A3A3A3] leading-relaxed font-normal">
              Fintech, SaaS, healthcare, e-commerce — we adapt to your domain.
            </p>
          </div>

          {/* CARD 5: 48hr Average kickoff time */}
          <div className="relative bg-[#121212] rounded-[24px] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 shadow-xl group overflow-hidden">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                48hr
              </span>
              <span className="text-xs sm:text-sm text-[#888888] font-medium mt-1 block">
                Average kickoff time
              </span>
            </div>

            {/* Graphic: Laptop with Briefcase and A+ Badge */}
            <div className="relative my-7 flex h-36 w-full items-center justify-center">
              <div className="relative w-48 rounded-xl border border-white/15 bg-neutral-900 p-2.5 shadow-2xl">
                <div className="flex h-16 w-full items-center justify-between rounded-lg bg-black/80 border border-white/5 px-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#9AFD0D]/10 border border-[#9AFD0D]/30 text-[#9AFD0D] animate-float-gentle">
                    <svg
                      className="size-4 animate-icon-sway"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1 rounded-md bg-[#9AFD0D] px-2 py-0.5 text-xs font-extrabold text-black shadow-[0_0_10px_#9AFD0D] animate-badge-pop">
                    <span>A+</span>
                  </div>
                </div>
                <div className="mt-1 h-1 w-24 bg-neutral-700 rounded-full mx-auto" />
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#A3A3A3] leading-relaxed font-normal">
              No long onboarding. We move fast without cutting corners.
            </p>
          </div>

          {/* CARD 6: $2B+ Revenue influenced */}
          <div className="relative bg-[#121212] rounded-[24px] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 shadow-xl group overflow-hidden">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                $2B+
              </span>
              <span className="text-xs sm:text-sm text-[#888888] font-medium mt-1 block">
                Revenue influenced
              </span>
            </div>

            {/* Graphic: 3 Stacked Cards with Checkmark & Growth Tag */}
            <div className="relative my-7 flex h-36 w-full items-center justify-center">
              <div className="relative flex flex-col items-center gap-2">
                <div className="h-5 w-40 rounded-lg border border-white/10 bg-neutral-900/60 opacity-60 animate-float-reverse" />
                <div className="flex h-8 w-44 items-center justify-between rounded-lg border border-white/20 bg-neutral-900 px-3 shadow-lg animate-float-gentle">
                  <div className="h-2 w-16 rounded-full bg-white/20" />
                  <span className="flex size-4 items-center justify-center rounded-full bg-[#9AFD0D] text-[10px] font-bold text-black animate-badge-pop">
                    ✓
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[#9AFD0D]/40 bg-black/90 px-3.5 py-1.5 shadow-[0_0_15px_rgba(154,253,13,0.2)] animate-float">
                  <TrendingUp className="size-3.5 text-[#9AFD0D] animate-icon-sway" />
                  <span className="text-xs font-semibold text-white">Revenue Growth</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#A3A3A3] leading-relaxed font-normal">
              Revenue raised by our clients over the past decade. Good design compounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
