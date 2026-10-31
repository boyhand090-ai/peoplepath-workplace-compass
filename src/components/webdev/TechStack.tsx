import React from "react";
import { siteData } from "@/data/webdev/siteData";

interface TechStackProps {
  data?: typeof siteData.tech_stack;
}

export const TechStack: React.FC<TechStackProps> = ({ data }) => {
  const tech_stack = data || siteData.tech_stack;

  return (
    <section className="bg-[#111111] pt-[40px] sm:pt-[60px] md:pt-[120px] pb-[40px] sm:pb-[60px] md:pb-[140px] relative">
      <div className="container mx-auto px-[16px] 2xl:px-0">
        {/* Module 8: Title & Intro Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] md:gap-[40px] items-start mb-[48px] md:mb-[72px]">
          <div className="lg:col-span-6">
            <h2
              className="text-white text-[32px] sm:text-[44px] md:text-[54px] lg:text-[60px] font-semibold leading-[1.14] tracking-tight"
              style={{ fontFamily: "'Manrope', sans-serif" }}
              dangerouslySetInnerHTML={{ __html: tech_stack.title }}
            />
          </div>
          <div className="lg:col-span-6">
            <div
              className="text-[#B5B5B5] text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] sm:leading-[30px] md:leading-[34px] font-normal [&_p]:mb-3"
              dangerouslySetInnerHTML={{ __html: tech_stack.description }}
            />
          </div>
        </div>

        {/* Module 9: 4 Tech Stack Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] sm:gap-[28px] md:gap-[36px]">
          {tech_stack.items.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-[24px] bg-[#181818] border border-white/5 shadow-xl transition-all duration-300 hover:border-white/20 hover:bg-[#202020] hover:-translate-y-1.5 group aspect-square"
            >
              <div className="w-[80px] sm:w-[100px] md:w-[130px] h-[80px] sm:h-[100px] md:h-[130px] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <span className="text-[#ffffff] font-semibold text-lg sm:text-xl capitalize tracking-tight group-hover:text-[#9AFD0D] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
