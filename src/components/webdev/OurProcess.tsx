import React, { useEffect, useRef, useState } from "react";
import { siteData } from "@/data/webdev/siteData";

interface OurProcessProps {
  data?: typeof siteData.process;
}

export const OurProcess: React.FC<OurProcessProps> = ({ data }) => {
  const process = data || siteData.process;
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // Extended winding path spanning all 6 steps from Step 1 (top) through Step 6 (bottom)
  const pathTopToBottom =
    "M 11.3047 12.5059 C 34.9714 37.6725 142.405 83.6056 382.805 66.0056 C 623.205 48.4056 685.97 82.6723 687.302 102.006 C 726.802 174.006 153.302 196.506 159.802 346.506 C 166.302 496.506 646.802 359.006 672.802 449.006 C 698.802 539.006 112.802 556.506 159.802 687.006 C 203.696 808.881 615.659 776.815 695.168 838.023 C 704.823 845.455 705.083 859.072 699.714 870.009 C 627.893 1016.3 335.533 891.792 140.305 1074.01 C 80 1130 180 1200 340 1220 C 500 1240 640 1180 660 1260";

  // Dynamic cursor position & rotation linked to scroll
  const [arrowState, setArrowState] = useState<{
    x: number;
    y: number;
    angle: number;
    hasScrollInit: boolean;
  }>({
    x: 0,
    y: 0,
    angle: 0,
    hasScrollInit: false,
  });

  const [mobileArrow, setMobileArrow] = useState({ progress: 0, down: true });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const lastScrollYRef = useRef(0);
  const targetDistanceRef = useRef(0);
  const currentDistanceRef = useRef(0);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    let pathLength = 0;
    try {
      pathLength = path.getTotalLength();
    } catch {
      pathLength = 2400;
    }

    let rafId: number;

    const handleScroll = () => {
      if (!sectionRef.current || !path) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Map scroll progress tightly across all 6 steps
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const startOffset = windowHeight * 0.8;
      const endOffset = Math.max(1, sectionHeight - windowHeight * 0.1);
      const currentScroll = startOffset - sectionTop;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / endOffset));

      const currentScrollY = window.scrollY;
      lastScrollYRef.current = currentScrollY;

      // Distance across the extended path
      targetDistanceRef.current = rawProgress * pathLength;
    };

    const animateLoop = () => {
      if (path) {
        // Near-instant interpolation (0.9) so the cursor keeps up with fast scroll
        currentDistanceRef.current +=
          (targetDistanceRef.current - currentDistanceRef.current) * 0.9;
        const d = Math.max(0, Math.min(pathLength, currentDistanceRef.current));

        try {
          const pt = path.getPointAtLength(d);
          const isMovingDown = targetDistanceRef.current >= currentDistanceRef.current;

          let angle = 0;
          if (isMovingDown) {
            // Looking forward along the path towards the bottom
            const ptNext = path.getPointAtLength(Math.min(pathLength, d + 4));
            angle = Math.atan2(ptNext.y - pt.y, ptNext.x - pt.x) * (180 / Math.PI);
          } else {
            // Looking backward along the path towards the top
            const ptPrev = path.getPointAtLength(Math.max(0, d - 4));
            angle = Math.atan2(ptPrev.y - pt.y, ptPrev.x - pt.x) * (180 / Math.PI);
          }

          setArrowState({
            x: pt.x,
            y: pt.y,
            angle,
            hasScrollInit: true,
          });

          // Determine which step (0 to 5) the cursor has reached to trigger picture shake
          const progress = pathLength > 0 ? d / pathLength : 0;
          const currentStep = Math.min(5, Math.max(0, Math.floor(progress * 6)));
          setMobileArrow({ progress, down: isMovingDown });
          setActiveStep((prev) => (prev !== currentStep ? currentStep : prev));
        } catch {
          // ignore
        }
      }
      rafId = requestAnimationFrame(animateLoop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    rafId = requestAnimationFrame(animateLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="our-process bg-[#111111] pt-[64px] md:pt-[86px] lg:pt-[150px] pb-[80px] md:pb-[140px] relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-[1020px] text-white text-center mx-auto relative z-10 px-[16px] lg:px-0 mb-[60px] md:mb-[100px]">
        <div className="mb-4">
          <span className="inline-flex items-center bg-[#6060603D] text-white text-[15px] md:text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px]">
            <span className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex" />
            {process.blockTitle}
          </span>
        </div>

        <h2
          className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[clamp(32px,4.25vw,72px)] leading-[1.18] tracking-tight text-white mb-5 font-normal"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400 }}
        >
          {process.mainTitle}
        </h2>

        <p className="text-[#B5B5B5] text-[16px] lg:text-[20px] leading-[1.5] lg:leading-[32px] font-normal max-w-3xl mx-auto">
          {process.descriptions.replace(/<[^>]*>/g, "")}
        </p>
      </div>

      {/* Alternating Zig-Zag Process Steps with Winding Connector Path */}
      <div className="max-w-[1100px] text-white mx-auto relative z-10 px-[20px] lg:px-0">
        <div className="process-wrappers relative">
          {/* Background Connecting Dashed Path SVG (Desktop & Tablet) extending from Step 1 to Step 6 */}
          <div
            className="hidden lg:block bg-shape absolute top-[80px] left-0 right-0 h-full w-[710px] mx-auto pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <svg
              width="710"
              height="1280"
              viewBox="0 0 710 1280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto opacity-75 overflow-visible"
            >
              <path
                ref={pathRef}
                id="process-curve-path"
                d={pathTopToBottom}
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="8 8"
              />

              {/* Scroll-directed glowing green arrow cursor (top-to-bottom and bottom-to-top) */}
              {arrowState.hasScrollInit ? (
                <g
                  transform={`translate(${arrowState.x}, ${arrowState.y}) rotate(${arrowState.angle})`}
                >
                  <path
                    d="M-10 -22 L40 0 L-10 22 L5 0 Z"
                    fill="#9AFD0D"
                    filter="drop-shadow(0 0 18px rgba(154,253,13,1)) drop-shadow(0 0 8px #9AFD0D)"
                  />
                </g>
              ) : (
                /* Fast Fallback SVG animateMotion from top to bottom */
                <g className="arrow-element">
                  <path
                    d="M-10 -22 L40 0 L-10 22 L5 0 Z"
                    fill="#9AFD0D"
                    filter="drop-shadow(0 0 18px rgba(154,253,13,1)) drop-shadow(0 0 8px #9AFD0D)"
                  >
                    <animateMotion dur="4.5s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#process-curve-path" />
                    </animateMotion>
                  </path>
                </g>
              )}
            </svg>
          </div>

          {/* Mobile & tablet: vertical dashed track with scroll-driven glowing arrow */}
          <div
            className="lg:hidden absolute left-[2px] top-0 bottom-0 pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <div className="absolute inset-y-0 left-[11px] border-l-2 border-dashed border-white/25" />
            <div
              className="absolute left-0"
              style={{
                top: `${mobileArrow.progress * 100}%`,
                transform: `translateY(-50%) rotate(${mobileArrow.down ? 90 : -90}deg)`,
              }}
            >
              <svg width="24" height="24" viewBox="-12 -24 54 48" className="overflow-visible">
                <path
                  d="M-10 -22 L40 0 L-10 22 L5 0 Z"
                  fill="#9AFD0D"
                  filter="drop-shadow(0 0 12px rgba(154,253,13,1)) drop-shadow(0 0 6px #9AFD0D)"
                />
              </svg>
            </div>
          </div>

          {/* 2-Column Alternating Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[64px] md:gap-y-[100px] lg:gap-y-[130px] gap-x-[40px] lg:gap-x-[80px] relative z-10">
            {process.items.map((item, idx) => {
              const isEven = idx % 2 === 0;
              // Stagger second column down for organic winding flow
              const marginTopClass = !isEven ? "md:mt-[80px] lg:mt-[120px]" : "";

              return (
                <div
                  key={idx}
                  className={`process-item-container relative group ${marginTopClass}`}
                >
                  <div className="process-items relative">
                    <div className="pl-[84px] sm:pl-[100px] md:pl-[124px] lg:pl-[140px] relative">
                      {/* Giant Number Watermark (1 to 6) shifted slightly right */}
                      <div className="absolute left-[30px] sm:left-[36px] lg:left-[32px] top-[-10px] sm:top-[-18px] text-[#FFFFFF0F] text-[70px] sm:text-[96px] md:text-[120px] lg:text-[156px] leading-[0.75em] font-extrabold select-none transition-colors duration-300 group-hover:text-[#9AFD0D]/15">
                        {idx + 1}
                      </div>

                      {/* Content block */}
                      <div className="relative z-20">
                        <h3 className="text-white text-[22px] sm:text-[26px] lg:text-[34px] leading-[1.2] font-semibold mb-[12px] group-hover:text-[#9AFD0D] transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-[#D9DDE1] text-[15px] sm:text-[16px] leading-[24px] max-w-[420px]">
                          {item.description}
                        </p>
                      </div>

                      {/* Floating Illustration Card Beside/Behind Step (shakes when cursor reaches this step) */}
                      {item.image && (
                        <div
                          className={`mt-6 md:mt-8 relative w-[180px] sm:w-[220px] md:w-[260px] aspect-[4/3] rounded-[18px] overflow-hidden bg-neutral-900/80 border p-2 transition-all duration-300 ease-out cursor-pointer ${
                            activeStep === idx
                              ? "process-card-shake z-30"
                              : "border-white/10 shadow-2xl group-hover:scale-105 group-hover:border-[#9AFD0D]/30 hover:process-card-shake"
                          }`}
                          style={
                            {
                              "--base-rot": `${isEven ? 4 : -4}deg`,
                              transform:
                                activeStep === idx ? undefined : `rotate(${isEven ? 4 : -4}deg)`,
                            } as React.CSSProperties
                          }
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain filter drop-shadow-md"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
