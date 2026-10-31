import React from "react";
import { siteData } from "@/data/webdev/siteData";
import { ArrowUpRight } from "lucide-react";

interface ProjectsProps {
  data?: typeof siteData.projects;
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const projects = data || siteData.projects;

  return (
    <section
      id="work"
      className="project-grids bg-[#1B1B1B] pt-[64px] md:pt-[120px] lg:pt-[150px] pb-[64px] md:pb-[120px]"
    >
      <div className="container mx-auto px-[16px] 2xl:px-0">
        {/* Header Row */}
        <div className="flex flex-col gap-[16px] items-start mb-[40px] md:mb-[60px]">
          <div className="block-title inline-block">
            <span className="inline-flex items-center bg-[#6060603D] text-white text-[15px] md:text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px]">
              <span className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex" />
              How We Work
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-[24px] lg:gap-[40px]">
            <h2
              className="main-title text-[32px] sm:text-[44px] md:text-[52px] lg:text-[clamp(32px,4.1667vw,60px)] leading-[1.18] tracking-tight text-white lg:max-w-[620px]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
            >
              {projects.title}
            </h2>

            <div className="flex flex-col items-start w-full lg:w-[440px] lg:shrink-0 lg:items-end pt-2">
              <a
                href="https://six2eight.com/projects"
                target="_blank"
                rel="noreferrer"
                className="secondary-buttons button-slide cursor-pointer"
              >
                <div className="button-text-wrapper">
                  <span className="button-text">View All Works</span>
                  <span className="button-text button-text-hover" aria-hidden="true">
                    View All Works
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Dynamic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[32px] md:gap-y-[48px]">
          {projects.items.map((item, idx) => {
            const isSpanTwo = idx === 2 || idx === 3;
            return (
              <div
                key={idx}
                className={`project-card group ${isSpanTwo ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}`}
              >
                <a
                  href={`https://six2eight.com${item.permalink}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full cursor-pointer focus:outline-none"
                >
                  <div className="project-card-inner transition-all duration-300 ease-out h-full flex flex-col">
                    {/* Project Image Container */}
                    <div className="project-image relative overflow-hidden rounded-[24px] h-[280px] sm:h-[320px] md:h-[340px] bg-neutral-900 border border-white/5 shadow-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-[#9AFD0D] text-sm font-semibold flex items-center gap-1">
                          Explore Case Study <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Project Title & Meta */}
                    <div className="mt-4 flex items-center justify-between px-1">
                      <div>
                        <h3 className="text-white text-[20px] md:text-[24px] font-semibold tracking-tight group-hover:text-[#9AFD0D] transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-[#8b8b8b] text-[14px] mt-0.5">Web Development</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#9AFD0D] group-hover:text-black transition-colors duration-200">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
