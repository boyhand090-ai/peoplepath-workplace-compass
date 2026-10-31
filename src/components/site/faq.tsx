import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqList = [
  {
    question: "What UI/UX design services does six2eight provide?",
    answer:
      "We provide comprehensive UI/UX design services spanning customer research, product strategy, wireframing, high-fidelity UI design, component design systems, mobile app design for iOS and Android, and complete design-to-code developer handoff.",
  },
  {
    question: "How does six2eight approach user-centered design?",
    answer:
      "We start by studying real user behavior, business objectives, and friction points. Through iterative wireframing, interactive prototyping, and usability validation, we craft intuitive journeys that make every interaction feel natural and convert visitors into customers.",
  },
  {
    question: "What industries does six2eight specialize in?",
    answer:
      "We partner with SaaS platforms, high-growth e-commerce brands, tech startups, fintech apps, healthcare providers, and professional B2B services looking for distinctive digital presence and measurable conversion growth.",
  },
  {
    question: "How does six2eight balance UI/UX design with technical development?",
    answer:
      "Our design and engineering teams collaborate from day one. Every animation, layout, and component is designed with technical feasibility, responsiveness, and performance in mind, eliminating post-design surprises and ensuring pixel-perfect implementation.",
  },
  {
    question: "What is six2eight's process for building high-performing websites?",
    answer:
      "We follow a disciplined 6-stage lifecycle: Discover, Strategize, Design, Build, Launch, and Optimize. We prioritize clean semantic markup, Core Web Vitals performance, SEO foundations, and conversion-focused architecture.",
  },
  {
    question: "How long does a typical website design and development project take?",
    answer:
      "A typical end-to-end custom design and development project takes between 4 to 8 weeks depending on complexity, page count, and custom integrations. Structured sprint timelines and delivery milestones are established during onboarding.",
  },
  {
    question: "How does six2eight ensure quality during development?",
    answer:
      "Every project undergoes rigorous cross-browser testing, multi-device QA, accessibility compliance audits, automated build validation, and Core Web Vitals speed optimization before going live.",
  },
  {
    question: "Does six2eight provide post-launch optimization and support?",
    answer:
      "Yes. We offer continuous post-launch support, security updates, feature enhancements, conversion rate optimization (CRO), and speed monitoring to help your digital product thrive and scale over time.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="bg-white py-16 sm:py-24 lg:py-28 text-neutral-900 border-t border-neutral-100"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 3D Question Mark, Heading, and See FAQ CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px]">
            <img
              src="/faqImage.webp"
              alt="FAQ 3D Question Mark"
              className="w-[120px] sm:w-[140px] lg:w-[156px] h-auto object-contain mb-8 transition-transform hover:scale-105 duration-300 drop-shadow-sm"
              loading="lazy"
            />

            <h3
              className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-neutral-950 leading-[1.2] tracking-tight max-w-sm mb-6"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Clear answers to move forward confidently
            </h3>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#9AFD0D] hover:bg-[#8cee07] text-neutral-950 font-bold text-xs sm:text-sm px-6 py-2.5 sm:py-3 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                See FAQ
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Badge, Title, and Accordion */}
          <div className="lg:col-span-7">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#111113] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs mb-4">
              <span className="size-2 rounded-full bg-[#9AFD0D] shadow-[0_0_8px_#9AFD0D] animate-pulse" />
              FAQ
            </div>

            {/* Main Section Title */}
            <h2
              className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-neutral-950 tracking-tight leading-[1.14] mb-8 sm:mb-10"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Got Questions? Let&rsquo;s Clear Things Up.
            </h2>

            {/* Accordion List */}
            <div className="space-y-3.5 sm:space-y-4">
              {faqList.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.question}
                    className={`rounded-[14px] sm:rounded-[16px] border bg-white transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-neutral-300 shadow-sm"
                        : "border-neutral-200/90 hover:border-neutral-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-5 cursor-pointer gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-semibold text-neutral-900 leading-snug">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`size-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-neutral-900" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-[15px] leading-relaxed text-neutral-600 border-t border-neutral-100/90 mt-1 animate-in fade-in duration-200">
                        {item.answer}
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
}
