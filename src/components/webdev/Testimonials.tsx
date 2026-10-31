import React, { useRef, useState, useEffect } from "react";
import { siteData } from "@/data/webdev/siteData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Testimonials: React.FC = () => {
  const { testimonials } = siteData;
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
    <section className="testimonials-sections bg-white text-neutral-900 py-20 sm:py-28 lg:py-32 overflow-hidden select-none">
      <div className="container mx-auto px-5 lg:px-8 max-w-7xl">
        {/* Top Centered Pill Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-[#161616] px-4 py-2 text-sm font-medium text-white shadow-xs">
            <span className="size-2.5 rounded-full bg-[#9AFD0D] shadow-[0_0_12px_#9AFD0D] animate-pulse" />
            {testimonials.block_title || "Testimonials"}
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-black leading-[1.14]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Words from the People
            <br />
            We&rsquo;ve Worked With
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
          {testimonials.items.map((item, idx) => (
            <div
              key={`${item.clientName}-${idx}`}
              className="w-[300px] sm:w-[350px] md:w-[370px] shrink-0"
            >
              <div className="relative flex flex-col justify-between h-[250px] sm:h-[270px] rounded-[24px] border border-[#E5E7EB] bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-neutral-300">
                {/* Card Top: Logo & Company Name */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="size-9 sm:size-10 rounded-full overflow-hidden border border-neutral-100 bg-neutral-100 shrink-0 flex items-center justify-center">
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.clientName}
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xs font-bold text-neutral-800">
                        {item.clientName.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-base sm:text-[17px] font-bold text-black tracking-tight"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {item.clientName}
                  </h3>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[14px] text-[#4A4A4A] leading-[22px] sm:leading-[24px] relative z-10 font-normal">
                  {item.reviewText
                    ? item.reviewText.replace(/<[^>]*>/g, "").trim()
                    : item.reviewTitle}
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
              className="absolute top-0 bottom-0 bg-black rounded-full transition-all duration-200"
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
            200+ Happy Customers based on
            <br />
            complement and customer reviews
          </p>

          <a
            href={
              testimonials.consultationUrl ||
              "https://calendly.com/six2eight-sales/li-discovery-call"
            }
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
};
