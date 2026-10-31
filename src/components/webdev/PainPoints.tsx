import React from "react";
import { siteData } from "@/data/webdev/siteData";
import { painPointSvgs } from "@/data/webdev/painPointSvgs";

export interface PainPointItem {
  heading: string;
  description: string;
  svg?: string;
}

export interface PainPointsData {
  block_title: string;
  main_title: string;
  items: PainPointItem[];
}

interface PainPointsProps {
  data?: PainPointsData;
}

export const PainPoints: React.FC<PainPointsProps> = ({ data }) => {
  const pain_points = data || siteData.pain_points;

  return (
    <section
      id="how-we-work"
      className="how-we-work-section px-[16px] lg:px-0 pt-[64px] pb-[64px] sm:pt-[80px] md:pt-[140px] sm:pb-[80px] md:pb-[140px] bg-[#1B1B1B]"
    >
      <div className="container mx-auto 2xl:px-0">
        {/* Section Header */}
        <div className="mb-[40px] md:mb-[60px] text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="bg-[#6060603D] text-white text-[15px] md:text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px] inline-flex items-center">
              <span className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex" />
              {pain_points.block_title}
            </span>
          </div>
          <h2
            className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[clamp(32px,4.25vw,72px)] leading-[1.18] font-semibold tracking-tight text-white"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {pain_points.main_title}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px]">
          {pain_points.items.map((item, idx: number) => (
            <article
              key={idx}
              className="h-full min-h-[304px] rounded-[16px] bg-white/10 p-px transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/50 group"
            >
              <div className="flex h-full min-h-[inherit] flex-col items-start justify-between rounded-[15px] bg-[#0c0c0c] bg-gradient-to-b from-white/10 to-transparent px-[24px] py-[36px]">
                <div className="flex w-full flex-col items-start gap-[24px]">
                  {/* SVG Icon */}
                  <div className="relative flex size-[48px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-white/10 p-2 text-white group-hover:bg-[#9AFD0D]/20 transition-colors duration-300">
                    {item.svg || painPointSvgs[idx] ? (
                      <div
                        className="w-full h-full flex items-center justify-center [&_svg]:w-full [&_svg]:h-full"
                        dangerouslySetInnerHTML={{ __html: item.svg || painPointSvgs[idx] }}
                      />
                    ) : (
                      <div className="w-6 h-6 bg-[#9AFD0D] rounded-full" />
                    )}
                  </div>

                  {/* Heading */}
                  <h3 className="text-[22px] md:text-[24px] font-semibold leading-[1.25] text-white group-hover:text-[#9AFD0D] transition-colors duration-200">
                    {item.heading}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#b5b5b5] text-[15px] md:text-[16px] font-normal leading-[24px] mt-4">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
