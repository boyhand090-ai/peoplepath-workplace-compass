import React, { useState, useRef, useEffect } from "react";
import { siteData } from "@/data/webdev/siteData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, animate } from "motion/react";

interface SubServicesProps {
  data?: typeof siteData.subservices;
}

export const SubServices: React.FC<SubServicesProps> = ({ data }) => {
  const subservices = data || siteData.subservices;
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(subservices.cards.length - 1);
  const [cardWidth, setCardWidth] = useState(380);
  const gap = 24;

  const x = useMotionValue(0);
  const isDraggingRef = useRef(false);

  // Update card width and max index on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      let width = 380;
      if (window.innerWidth < 640) {
        width = 290;
      } else if (window.innerWidth < 1024) {
        width = 330;
      }
      setCardWidth(width);

      const totalTrackWidth = subservices.cards.length * (width + gap) - gap;
      const maxScroll = Math.max(0, totalTrackWidth - containerWidth + 32);
      const computedMax = Math.ceil(maxScroll / (width + gap));
      setMaxIndex(Math.max(0, computedMax));
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [subservices.cards.length]);

  // Sync motion value when currentIndex changes via buttons
  useEffect(() => {
    const targetX = -currentIndex * (cardWidth + gap);
    animate(x, targetX, {
      type: "spring",
      damping: 28,
      stiffness: 220,
      mass: 0.8,
    });
  }, [currentIndex, cardWidth, gap, x]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Wheel horizontal scrolling support
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      const currentX = x.get();
      const maxDragLimit = -(
        subservices.cards.length * (cardWidth + gap) -
        (containerRef.current?.offsetWidth || 1000)
      );
      const newX = Math.min(0, Math.max(maxDragLimit, currentX - e.deltaX));
      x.set(newX);
    }
  };

  return (
    <section
      id="services"
      className="bg-[#F7F8F9] py-[64px] sm:py-[80px] md:py-[140px] overflow-hidden relative select-none"
    >
      <div className="container mx-auto px-[16px] 2xl:px-0">
        {/* Header */}
        <div className="mb-[40px] md:mb-[60px] text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="bg-[#1C1A1A] inline-flex items-center text-white text-[15px] md:text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px]">
              <span className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex" />
              {subservices.block_title}
            </span>
          </div>
          <h2
            className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[clamp(32px,4.24vw,70px)] leading-[1.18] tracking-tight text-[#070707]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
          >
            {subservices.main_title}
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-end gap-3 mb-6 px-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full border border-neutral-300 bg-white text-neutral-800 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-black hover:text-white hover:border-black"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`w-12 h-12 rounded-full border border-neutral-300 bg-white text-neutral-800 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 ${
              currentIndex >= maxIndex
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#9AFD0D] hover:text-black hover:border-[#9AFD0D]"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Viewport Container */}
        <div
          ref={containerRef}
          onWheel={handleWheel}
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing pb-8 pt-2 px-1"
        >
          <motion.div
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: -(
                subservices.cards.length * (cardWidth + gap) -
                (containerRef.current?.offsetWidth || 1000) +
                40
              ),
              right: 0,
            }}
            dragElastic={0.12}
            onDragStart={() => {
              isDraggingRef.current = true;
            }}
            onDragEnd={(_, info) => {
              setTimeout(() => {
                isDraggingRef.current = false;
              }, 50);

              // Update index estimate based on ending position
              const currentX = x.get();
              const newIndex = Math.round(-currentX / (cardWidth + gap));
              setCurrentIndex(Math.max(0, Math.min(maxIndex, newIndex)));
            }}
            className="flex gap-[20px] md:gap-[24px] w-max will-change-transform"
          >
            {subservices.cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.08,
                }}
                style={{ width: `${cardWidth}px` }}
                className="shrink-0"
              >
                <div
                  className="service-card sub-service-card relative bg-center bg-cover rounded-[20px] lg:rounded-[24px] flex justify-between flex-col overflow-hidden group h-[440px] md:h-[540px] lg:h-[610px] select-none cursor-pointer shadow-md"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  {/* Top block spacer */}
                  <div className="top-block flex justify-end pt-[32px] pr-[32px]" />

                  {/* Bottom expanding panel */}
                  <div className="botton-block relative z-10 p-[20px] sm:p-[24px] lg:p-[32px] block rounded-b-[20px] lg:rounded-b-[24px]">
                    <h3 className="text-[22px] md:text-[28px] lg:text-[34px] leading-[1.14] font-semibold text-white tracking-tight transform transition-transform duration-300 ease-out">
                      {card.heading}
                    </h3>
                    <div className="excerpt-content text-[#ededed] text-[14px] md:text-[15px] leading-[23px] font-normal">
                      {card.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
