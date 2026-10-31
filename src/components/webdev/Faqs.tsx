import React, { useState } from "react";
import { siteData } from "@/data/webdev/siteData";
import { ChevronDown } from "lucide-react";

interface FaqsProps {
  data?: typeof siteData.faqs;
}

export const Faqs: React.FC<FaqsProps> = ({ data }) => {
  const faqs = data || siteData.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="faq-blocks bg-white pt-[64px] md:pt-[100px] lg:pt-[150px] pb-[64px] md:pb-[100px] lg:pb-[150px]"
    >
      <div className="container mx-auto px-[16px] 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] lg:gap-[48px]">
          {/* Left Sticky Column */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="faq-left lg:sticky lg:top-[120px] mb-8 lg:mb-0">
              <img
                src={faqs.image}
                alt="Frequently asked questions illustration"
                className="w-[140px] md:w-[162px] h-auto mb-[28px] opacity-85 animate-slide-x will-change-transform"
                loading="lazy"
              />

              <h3
                className="text-[30px] sm:text-[38px] lg:text-[46px] font-semibold leading-[1.15] text-[#070707] mb-[28px] lg:max-w-[380px]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {faqs.left_title}
              </h3>

              <div>
                <a
                  href="https://six2eight.com/faq"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-buttons button-slide cursor-pointer text-sm"
                  aria-label="See FAQ"
                >
                  <div className="button-text-wrapper">
                    <span className="button-text" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {faqs.button_text}
                    </span>
                    <span
                      className="button-text button-text-hover"
                      aria-hidden="true"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {faqs.button_text}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ List */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="mb-4">
              <span className="bg-[#1C1A1A] text-white text-[15px] md:text-[16px] font-medium leading-[24px] rounded-[40px] px-[16px] py-[8px] inline-flex items-center">
                <span className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-[#9AFD0D] rounded-full mr-[12px] inline-flex" />
                {faqs.block_title}
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-semibold leading-[1.12] mb-[32px] md:mb-[48px] text-[#070707] tracking-tight">
              {faqs.right_title}
            </h2>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-item border rounded-[16px] p-[20px] sm:p-[24px] transition-all duration-300 ${
                      isOpen
                        ? "border-neutral-400 bg-neutral-50/50 shadow-sm"
                        : "border-[#E7E7E7] hover:border-neutral-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-none gap-4"
                      aria-expanded={isOpen}
                    >
                      <span
                        className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-[#070707] leading-[1.3]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-black text-white" : "bg-neutral-100 text-neutral-600"}`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="pt-4 text-[#414141] text-[15px] sm:text-[16px] md:text-[17px] leading-[27px] font-normal border-t border-neutral-200/60 mt-4 animate-fadeIn">
                        <div
                          className="faq-answer"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
