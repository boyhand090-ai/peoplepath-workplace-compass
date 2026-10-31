import React from "react";
import { siteData } from "@/data/webdev/siteData";

interface HeroProps {
  data?: typeof siteData.hero;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const hero = data || siteData.hero;

  return (
    <section
      id="top"
      className="pt-[100px] sm:pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[40px] sm:pb-[60px] md:pb-[140px] bg-[#111111] relative service-hero-block overflow-hidden"
    >
      <div className="container mx-auto px-[16px] 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[48px] items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-start gap-[16px] md:gap-[24px] lg:col-span-7">
            <div className="flex flex-col gap-4">
              <h1
                className="text-left text-[#ffffff] text-[42px] sm:text-[54px] md:text-[68px] lg:text-[clamp(48px,4.25vw,88px)] leading-[1.12] lg:leading-[1.18] font-semibold tracking-tight"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {hero.title}
              </h1>
            </div>

            <div
              className="text-left text-[16px] md:text-[20px] leading-[26px] md:leading-[32px] w-full text-[#B5B5B5] [&_p]:mb-2"
              dangerouslySetInnerHTML={{ __html: hero.description }}
            />

            <div className="button-blocks mt-4 mb-2">
              <a
                href={hero.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={hero.buttonLabel}
                className="secondary-buttons button-slide cursor-pointer"
              >
                <div className="button-text-wrapper">
                  <span className="button-text">{hero.buttonLabel}</span>
                  <span className="button-text button-text-hover" aria-hidden="true">
                    {hero.buttonLabel}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column (Hero Graphic) */}
          <div className="flex flex-col justify-start lg:col-span-5 w-full">
            <div className="relative w-full rounded-[20px] md:rounded-[24px] overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/5 shadow-2xl group">
              <img
                src={hero.image}
                alt={hero.title}
                className="w-full h-auto object-cover relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
