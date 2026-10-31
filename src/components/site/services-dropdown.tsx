import { useEffect, useId, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

type ServiceItem = {
  title: string;
  subtitle: string;
  icon: string;
  href: string;
};

const designServices: ServiceItem[] = [
  {
    title: "UI & UX Design Services",
    subtitle: "Web & Mobile app design",
    icon: "/assets/dropdown/ui-ux-design.svg",
    href: "/services/ui-ux-design",
  },
  {
    title: "Web Design Services",
    subtitle: "Modern websites that convert",
    icon: "/assets/dropdown/web-design.svg",
    href: "/services/web-design",
  },
  {
    title: "Mobile App Design Services",
    subtitle: "Seamless iOS & Android design",
    icon: "/assets/dropdown/mobile-app.svg",
    href: "/services/mobile-app-design",
  },
  {
    title: "Branding & Identity Services",
    subtitle: "Identity that stands out",
    icon: "/assets/dropdown/branding.svg",
    href: "/services/branding-identity",
  },
];

const developmentServices: ServiceItem[] = [
  {
    title: "Web Development Services",
    subtitle: "Built for speed & growth",
    icon: "/assets/dropdown/web-development.svg",
    href: "/services/web-development",
  },
  {
    title: "WordPress Development Services",
    subtitle: "Easy to manage & scale",
    icon: "/assets/dropdown/wordpress-1.svg",
    href: "/services/wordpress-development",
  },
  {
    title: "Shopify Development Services",
    subtitle: "Sell more with Shopify",
    icon: "/assets/dropdown/shopify-1.svg",
    href: "/services/shopify-development",
  },
  {
    title: "Webflow Development Services",
    subtitle: "Custom sites, no compromises",
    icon: "/assets/dropdown/webflow-1.svg",
    href: "/services/webflow-development",
  },
];

const advertisementServices: ServiceItem[] = [
  {
    title: "Digital Marketing Services",
    subtitle: "Data-driven campaigns that scale",
    icon: "/assets/dropdown/digital-marketing.svg",
    href: "/services/digital-marketing",
  },
  {
    title: "Paid Search & Social Ads",
    subtitle: "High-ROI Google & Meta ads",
    icon: "/assets/dropdown/paid-ads.svg",
    href: "/services/paid-ads",
  },
  {
    title: "SEO & Growth Marketing",
    subtitle: "Organic search ranking & authority",
    icon: "/assets/dropdown/seo-marketing.svg",
    href: "/services/seo-marketing",
  },
  {
    title: "Content & Influencer Marketing",
    subtitle: "Attract, engage & retain buyers",
    icon: "/assets/dropdown/content-marketing.svg",
    href: "/services/content-marketing",
  },
];

export function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const menuId = useId();

  // Position state: dropdown is centered horizontally in viewport with smooth entrance
  const [coords, setCoords] = useState<{
    top: number;
    width: number;
    arrowLeft: number;
  }>({
    top: 76,
    width: 820,
    arrowLeft: 410,
  });

  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return;
    const btnRect = buttonRef.current.getBoundingClientRect();
    const btnCenter = btnRect.left + btnRect.width / 2;
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    // Centered menu width fitting the 3 columns cleanly without overflow
    const menuWidth = Math.min(820, Math.max(320, viewportWidth - 32));
    // When menu is centered at left: 50% / translateX(-50%), its left edge is:
    const dropdownLeft = (viewportWidth - menuWidth) / 2;
    // Arrow points accurately to the center of the Services trigger button
    const arrowLeft = Math.max(28, Math.min(btnCenter - dropdownLeft, menuWidth - 28));

    setCoords({
      top: Math.round(btnRect.bottom + 12),
      width: Math.round(menuWidth),
      arrowLeft: Math.round(arrowLeft),
    });
  }, []);

  const handleMouseEnter = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = undefined;
    }
    updatePosition();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
    }
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
    }, 240);
  };

  useEffect(() => {
    if (!open) return;
    updatePosition();
    const onResize = () => updatePosition();
    const onScroll = () => updatePosition();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        wrapRef.current &&
        !wrapRef.current.contains(target) &&
        !document.getElementById(menuId)?.contains(target)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, menuId, updatePosition]);

  const [isServicesPage, setIsServicesPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsServicesPage(window.location.pathname.startsWith("/services"));
    }
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative inline-flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => {
          updatePosition();
          setOpen((o) => !o);
        }}
        className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors cursor-pointer py-1 ${
          isServicesPage
            ? "text-[#9AFD0D] font-semibold"
            : open
              ? "text-white"
              : "text-[#E0E0E0] hover:text-white"
        }`}
      >
        <span>Services</span>
        <ChevronDown
          aria-hidden
          className={`size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "rotate-180 text-white" : isServicesPage ? "text-[#9AFD0D]" : "text-[#E0E0E0]"
          }`}
        />
      </button>

      {/* Dropdown Menu Modal centered horizontally on viewport with smooth cubic-bezier open animation */}
      <div
        id={menuId}
        data-open={open}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "fixed",
          top: `${coords.top}px`,
          left: "50%",
          width: `${coords.width}px`,
          transform: `translateX(-50%) ${
            open ? "translateY(0) scale(1)" : "translateY(-12px) scale(0.96)"
          }`,
          transformOrigin: "top center",
          pointerEvents: open ? "auto" : "none",
        }}
        className={`z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Invisible bridge to prevent mouse leaving trigger gap */}
        <div className="absolute -top-3.5 inset-x-0 h-4 pointer-events-auto" />

        {/* Top Notch Pointer Arrow pointing directly to Services trigger button */}
        <div
          aria-hidden="true"
          style={{ left: `${coords.arrowLeft}px` }}
          className="absolute -top-1.5 -translate-x-1/2 size-3 rotate-45 bg-white border-t border-l border-black/10 z-20 shadow-[-2px_-2px_4px_rgba(0,0,0,0.04)]"
        />

        {/* Main White Dropdown Card with refined shadow and glassmorphism border */}
        <div className="relative rounded-[24px] bg-white p-4 sm:p-5 shadow-[0_24px_60px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.06)] border border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 items-start">
            {/* Column 1: Design Services */}
            <div className="flex flex-col min-w-0">
              {/* Header Badge */}
              <div className="inline-flex items-center rounded-lg bg-[#F6F4FF] px-3 py-1.5 mb-2 w-fit">
                <span className="text-[13.5px] font-bold text-[#111111]">Design Services</span>
              </div>

              {/* Service Items */}
              <div className="flex flex-col gap-0.5">
                {designServices.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-2.5 p-2 rounded-xl hover:bg-black/[0.04] transition-colors"
                  >
                    <div className="size-9 rounded-full bg-[#161616] shrink-0 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <img src={item.icon} alt="" className="size-4.5 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-semibold text-[#111111] leading-tight group-hover:text-black truncate">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] text-[#666666] font-normal leading-snug mt-0.5 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Development Services */}
            <div className="flex flex-col min-w-0">
              {/* Header Badge */}
              <div className="inline-flex items-center rounded-lg bg-[#FFF5ED] px-3 py-1.5 mb-2 w-fit">
                <span className="text-[13.5px] font-bold text-[#111111]">Development Services</span>
              </div>

              {/* Service Items */}
              <div className="flex flex-col gap-0.5">
                {developmentServices.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-2.5 p-2 rounded-xl hover:bg-black/[0.04] transition-colors"
                  >
                    <div className="size-9 rounded-full bg-[#161616] shrink-0 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <img src={item.icon} alt="" className="size-4.5 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-semibold text-[#111111] leading-tight group-hover:text-black truncate">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] text-[#666666] font-normal leading-snug mt-0.5 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Advertisement */}
            <div className="flex flex-col min-w-0">
              {/* Header Badge */}
              <div className="inline-flex items-center rounded-lg bg-[#F0FDF4] px-3 py-1.5 mb-2 w-fit">
                <span className="text-[13.5px] font-bold text-[#111111]">Advertisement</span>
              </div>

              {/* Service Items */}
              <div className="flex flex-col gap-0.5">
                {advertisementServices.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-2.5 p-2 rounded-xl hover:bg-black/[0.04] transition-colors"
                  >
                    <div className="size-9 rounded-full bg-[#161616] shrink-0 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <img src={item.icon} alt="" className="size-4.5 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-semibold text-[#111111] leading-tight group-hover:text-black truncate">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] text-[#666666] font-normal leading-snug mt-0.5 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
