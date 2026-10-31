import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { siteData } from "@/data/webdev/siteData";

interface StrategyCardProps {
  item: (typeof siteData.strategy.items)[0];
  index: number;
  compact?: boolean;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ item, index, compact = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Track card relative to viewport for the exact Six2Eight scroll-driven fly-in animation
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 96%", "center 55%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 22,
    mass: 0.6,
  });

  // Exact transform specifications from Six2Eight:
  // Even cards (left column): fly in from left with -13deg tilt
  // Odd cards (right column): fly in from right with +16deg tilt and 50px vertical offset
  const x = useTransform(
    smoothProgress,
    [0, 1],
    compact ? [isEven ? -120 : 120, 0] : [isEven ? -220 : 220, 0],
  );
  const y = useTransform(smoothProgress, [0, 1], [isEven ? 0 : compact ? 30 : 50, 0]);
  const rotate = useTransform(smoothProgress, [0, 1], [isEven ? -13 : 16, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.45, 1], [0, 0.65, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        x,
        y,
        rotate,
        opacity,
      }}
      className="strategy-items relative bg-[#181818] p-[28px] sm:p-[36px] lg:p-[44px] rounded-[24px] min-h-[280px] sm:min-h-[340px] lg:min-h-[384px] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-shadow duration-300 hover:border-white/25 hover:shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden group flex flex-col justify-between will-change-transform"
    >
      {/* Content */}
      <div className="relative z-10 max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] pb-[60px] sm:pb-[80px]">
        <h3 className="text-white text-[24px] sm:text-[32px] lg:text-[36px] leading-[1.14] font-semibold mb-[14px] group-hover:text-[#9AFD0D] transition-colors duration-300 tracking-tight">
          {item.heading}
        </h3>
        <p className="text-[#B5B5B5] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.6] font-normal">
          {item.description}
        </p>
      </div>

      {/* 3D Graphic in corner */}
      {item.image && (
        <div className="absolute right-0 bottom-0 pointer-events-none select-none transition-transform duration-500 ease-out group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1">
          <img
            src={item.image}
            alt={item.heading}
            className="w-[160px] sm:w-[200px] lg:w-[260px] h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            loading="lazy"
          />
        </div>
      )}
    </motion.div>
  );
};

interface StrategyProps {
  data?: typeof siteData.strategy;
}

export const Strategy: React.FC<StrategyProps> = ({ data }) => {
  const strategy = data || siteData.strategy;

  const col1Items = [strategy.items[0], strategy.items[2], strategy.items[4]].filter(Boolean);
  const col2Items = [strategy.items[1], strategy.items[3], strategy.items[5]].filter(Boolean);

  return (
    <section
      id="strategy"
      className="strategy-blocks overflow-hidden bg-[#111111] py-[64px] md:py-[100px] lg:py-[150px] relative"
    >
      {/* Background circular rotating ambient element */}
      <div className="max-w-[1020px] absolute inset-0 w-full h-full object-cover mx-auto left-0 right-0 top-0 bottom-0 pointer-events-none">
        <img
          src={strategy.bgImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain animate-circular-motion opacity-10"
        />
      </div>

      <div className="container mx-auto px-[16px] 2xl:px-0 relative z-10">
        {/* Section Header */}
        <div className="max-w-[1020px] text-white text-center mx-auto mb-[48px] md:mb-[72px]">
          <div className="mb-4">
            <span className="inline-flex items-center bg-[#6060603D] text-white text-[15px] md:text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px]">
              <span className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex" />
              {strategy.blockTitle}
            </span>
          </div>

          <h2
            className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[clamp(32px,4.25vw,72px)] leading-[1.15] font-semibold tracking-tight text-white"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {strategy.mainTitle}
          </h2>
        </div>

        {/* Staggered 2-Column Editorial Grid with Scroll-Driven Card Fly-in Animation */}
        <div className="max-w-[1100px] mx-auto">
          {/* Mobile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-[24px]">
            {strategy.items.map((item, idx) => (
              <StrategyCard key={idx} item={item} index={idx} compact />
            ))}
          </div>

          {/* Desktop 2 Staggered Columns with cinematic fly-in on scroll */}
          <div className="hidden lg:grid grid-cols-2 gap-[32px] items-start">
            {/* Left Column (Even cards: 0, 2, 4) */}
            <div className="flex flex-col gap-[32px]">
              {col1Items.map((item, idx) => (
                <StrategyCard key={idx} item={item!} index={idx * 2} />
              ))}
            </div>

            {/* Right Column (Odd cards: 1, 3, 5 offset downwards by 80px) */}
            <div className="flex flex-col gap-[32px] pt-[80px]">
              {col2Items.map((item, idx) => (
                <StrategyCard key={idx} item={item!} index={idx * 2 + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
