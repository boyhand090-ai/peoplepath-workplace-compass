import React from "react";
import { siteData } from "@/data/webdev/siteData";

export const BrandsLogo: React.FC = () => {
  const { brands } = siteData;

  const renderLogoGroup = (items: { title: string; url: string }[]) => {
    // Duplicate items to ensure seamless infinite looping
    const displayItems = [...items, ...items, ...items];

    return (
      <div className="flex items-center gap-[32px] md:gap-[56px] shrink-0 py-2">
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center shrink-0 w-[140px] sm:w-[170px] md:w-[200px] h-[64px] sm:h-[80px] px-4 rounded-xl transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
          >
            <img
              src={item.url}
              alt={item.title}
              className="max-h-[36px] sm:max-h-[46px] w-auto object-contain filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="brandslogo logo-layout-two bg-white py-[64px] md:pt-[120px] pb-[40px] md:pb-[120px] overflow-hidden">
      <div className="container mx-auto px-[16px] 2xl:px-0 mb-[40px] xl:mb-[64px]">
        <div className="heading text-center xl:max-w-5xl mx-auto">
          <h2
            className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[clamp(32px,4.24vw,72px)] leading-[1.13] text-[#070707] tracking-tight"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
          >
            {brands.title}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {/* Row 1: Leftward Marquee */}
        <div className="marquee-container">
          <div className="marquee-track">{renderLogoGroup(brands.topRow)}</div>
        </div>

        {/* Row 2: Rightward Marquee (Reverse) */}
        <div className="marquee-container">
          <div className="marquee-track reverse">{renderLogoGroup(brands.middleRow)}</div>
        </div>

        {/* Row 3: Leftward Marquee */}
        <div className="marquee-container">
          <div className="marquee-track" style={{ animationDuration: "38s" }}>
            {renderLogoGroup(brands.bottomRow)}
          </div>
        </div>
      </div>
    </section>
  );
};
