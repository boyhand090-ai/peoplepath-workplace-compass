import { useEffect, useState } from "react";
import { Calendar, Mail, Phone, X, ChevronRight, ArrowUpRight, ArrowRight } from "lucide-react";
import { CALENDLY } from "@/data/site";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";

type MobileServiceItem = {
  title: string;
  subtitle: string;
  icon: string;
  href: string;
};

const mobileDesignServices: MobileServiceItem[] = [
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

const mobileDevServices: MobileServiceItem[] = [
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

const mobileAdServices: MobileServiceItem[] = [
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

export function MobileBottomBar() {
  const [activeTab, setActiveTab] = useState<"home" | "services" | "work" | "about" | "contact">(
    "home",
  );
  const [contactOpen, setContactOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Update active tab based on scroll position or pathname
  useEffect(() => {
    const handleScrollOrLocation = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === "/contact") {
        setActiveTab("contact");
        return;
      }
      if (path === "/about") {
        setActiveTab("about");
        return;
      }
      if (path === "/work") {
        setActiveTab("work");
        return;
      }
      if (path.startsWith("/services")) {
        setActiveTab("services");
        return;
      }

      if (hash === "#work") {
        setActiveTab("work");
        return;
      }
      if (hash === "#services") {
        setActiveTab("services");
        return;
      }

      // Check section in viewport on homepage
      const workEl = document.getElementById("work");
      const servicesEl = document.getElementById("services");

      if (workEl) {
        const rect = workEl.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveTab("work");
          return;
        }
      }

      if (servicesEl) {
        const rect = servicesEl.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveTab("services");
          return;
        }
      }

      if (window.scrollY < 300) {
        setActiveTab("home");
      }
    };

    handleScrollOrLocation();
    window.addEventListener("scroll", handleScrollOrLocation, { passive: true });
    window.addEventListener("popstate", handleScrollOrLocation);

    return () => {
      window.removeEventListener("scroll", handleScrollOrLocation);
      window.removeEventListener("popstate", handleScrollOrLocation);
    };
  }, []);

  // Lock body scroll and handle Escape key when Services drawer is open
  useEffect(() => {
    if (servicesOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setServicesOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
    document.body.style.overflow = "";
    return undefined;
  }, [servicesOpen]);

  const handleNav = (target: "home" | "services" | "work" | "about", href: string) => {
    setActiveTab(target);
    setServicesOpen(false);
    const path = window.location.pathname;

    if (target === "home") {
      if (path === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/#top";
      }
      return;
    }

    if (target === "services") {
      setServicesOpen((prev) => !prev);
      return;
    }

    if (target === "work") {
      if (path === "/work") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/work";
      }
      return;
    }

    if (target === "about") {
      if (path === "/about") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/about";
      }
      return;
    }
  };

  const handleServicesTabClick = () => {
    setContactOpen(false);
    setServicesOpen((prev) => !prev);
    setActiveTab("services");
  };

  const handleServiceSelect = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(false);
    setActiveTab("services");

    if (href === "/services/web-development") {
      if (window.location.pathname === "/services/web-development") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/services/web-development";
      }
      return;
    }

    if (href === "/#services") {
      if (window.location.pathname === "/") {
        const el = document.getElementById("services");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "/#services";
      }
      return;
    }

    window.location.href = href;
  };

  const handleChatFab = () => {
    setServicesOpen(false);
    if (window.location.pathname === "/contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <>
      {/* Bottom Floating Navigation Dock — visible on mobile & small screens */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-0 inset-x-0 z-50 lg:hidden pointer-events-auto select-none"
      >
        <div className="relative w-full max-w-lg mx-auto">
          {/* SVG Background with smooth concave cutout notch for the center FAB */}
          <div className="absolute inset-x-0 bottom-0 top-0 flex pointer-events-none drop-shadow-[0_-8px_24px_rgba(0,0,0,0.85)]">
            {/* Left Wing */}
            <div className="flex-1 bg-[#070707] border-t border-white/10 rounded-tl-[24px]" />

            {/* Center Notched Scoop */}
            <div className="w-[104px] h-[64px] shrink-0 relative">
              <svg
                width="104"
                height="64"
                viewBox="0 0 104 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full block"
              >
                {/* Solid Background Fill */}
                <path
                  d="M 0 0 C 14 0, 22 4, 28 14 C 34 24, 42 34, 52 34 C 62 34, 70 24, 76 14 C 82 4, 90 0, 104 0 L 104 64 L 0 64 Z"
                  fill="#070707"
                />
                {/* Continuous Top Specular Stroke */}
                <path
                  d="M 0 0 C 14 0, 22 4, 28 14 C 34 24, 42 34, 52 34 C 62 34, 70 24, 76 14 C 82 4, 90 0, 104 0"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            {/* Right Wing */}
            <div className="flex-1 bg-[#070707] border-t border-white/10 rounded-tr-[24px]" />
          </div>

          {/* Underfill to ensure no gap on devices with home indicator (safe-area-inset-bottom) */}
          <div className="absolute inset-x-0 -bottom-10 h-10 bg-[#070707] pointer-events-none" />

          {/* Elevated Center Floating Action Button (FAB) with Neon Lime Glow */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-20">
            {/* Pulsing Radial Lime Glow Halo */}
            <div
              aria-hidden="true"
              className={cn(
                "absolute -inset-2 rounded-full bg-[#9AFD0D]/35 blur-[14px] pointer-events-none animate-pulse",
                activeTab === "contact" && "bg-[#9AFD0D]/55 blur-[18px]",
              )}
            />
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full bg-[#9AFD0D]/50 blur-[6px] pointer-events-none"
            />

            {/* Circular FAB Button */}
            <button
              type="button"
              onClick={handleChatFab}
              aria-label="Contact six2eight"
              className={cn(
                "relative flex size-[52px] items-center justify-center rounded-full bg-[#0a0a0a] border border-[#9AFD0D]/60 shadow-[0_0_20px_rgba(154,253,13,0.45),inset_0_1px_2px_rgba(255,255,255,0.2)] transition-all duration-200 active:scale-95 cursor-pointer hover:border-[#9AFD0D] hover:shadow-[0_0_26px_rgba(154,253,13,0.65)]",
                activeTab === "contact" &&
                  "border-[#9AFD0D] shadow-[0_0_28px_rgba(154,253,13,0.85)] ring-2 ring-[#9AFD0D]/50 scale-105",
              )}
            >
              {/* Custom Chat Speech Bubble Icon with 2 text lines inside matching the image */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#9AFD0D"
                className="shrink-0 drop-shadow-[0_0_4px_rgba(154,253,13,0.8)]"
              >
                <path d="M4 4C2.9 4 2 4.9 2 6v9c0 1.1.9 2 2 2h2v3.5c0 .4.5.7.8.4L11.3 17H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4zm4 4h8c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1z" />
              </svg>
            </button>
          </div>

          {/* Navigation Items Grid (2 left, center spacer, 2 right) */}
          <div className="relative z-10 flex items-center justify-between h-[64px] px-3 pb-[max(env(safe-area-inset-bottom,0px),4px)]">
            {/* 1. Home Button */}
            <button
              type="button"
              onClick={() => handleNav("home", "/#top")}
              className="flex flex-1 flex-col items-center justify-center py-1 transition-colors duration-200 group cursor-pointer"
            >
              <div
                className={cn(
                  "flex items-center justify-center transition-transform group-active:scale-90",
                  activeTab === "home" ? "text-[#9AFD0D]" : "text-[#9ca3af] group-hover:text-white",
                )}
              >
                {/* Rounded pentagon / home with interior line matching image */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3.5 C12.5 3.5 13 3.8 13.3 4.2 L20.2 11.5 C20.7 12 21 12.6 21 13.3 L21 18 C21 19.7 19.7 21 18 21 L6 21 C4.3 21 3 19.7 3 18 L3 13.3 C3 12.6 3.3 12 3.8 11.5 L10.7 4.2 C11 3.8 11.5 3.5 12 3.5 Z" />
                  <path d="M9.5 15 C10.3 16.2 13.7 16.2 14.5 15" />
                </svg>
              </div>
              <span
                className={cn(
                  "text-[11px] font-medium tracking-tight mt-0.5",
                  activeTab === "home" ? "text-[#9AFD0D] font-semibold" : "text-[#9ca3af]",
                )}
              >
                Home
              </span>
            </button>

            {/* 2. Services Button */}
            <button
              type="button"
              onClick={handleServicesTabClick}
              className="flex flex-1 flex-col items-center justify-center py-1 transition-colors duration-200 group cursor-pointer"
            >
              <div
                className={cn(
                  "flex items-center justify-center transition-transform group-active:scale-90",
                  activeTab === "services" || servicesOpen
                    ? "text-[#9AFD0D]"
                    : "text-[#9ca3af] group-hover:text-white",
                )}
              >
                {/* Briefcase / bag icon matching image */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6 V5 C9 3.9 9.9 3 11 3 H13 C14.1 3 15 3.9 15 5 V6" />
                  <rect x="3" y="6" width="18" height="15" rx="4" />
                  <path d="M3 11 C8 13.5 16 13.5 21 11" />
                  <rect
                    x="10.5"
                    y="10"
                    width="3"
                    height="4"
                    rx="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>
              <span
                className={cn(
                  "text-[11px] font-medium tracking-tight mt-0.5",
                  activeTab === "services" || servicesOpen
                    ? "text-[#9AFD0D] font-semibold"
                    : "text-[#9ca3af]",
                )}
              >
                Services
              </span>
            </button>

            {/* Center Spacer for Floating FAB cutout */}
            <div className="w-[84px] shrink-0" aria-hidden="true" />

            {/* 3. Work Button */}
            <button
              type="button"
              onClick={() => handleNav("work", "/work")}
              className="flex flex-1 flex-col items-center justify-center py-1 transition-colors duration-200 group cursor-pointer"
            >
              <div
                className={cn(
                  "flex items-center justify-center transition-transform group-active:scale-90",
                  activeTab === "work" ? "text-[#9AFD0D]" : "text-[#9ca3af] group-hover:text-white",
                )}
              >
                {/* Target / bullseye with arrow hitting center matching image */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11.5" cy="12.5" r="8.5" />
                  <circle cx="11.5" cy="12.5" r="4.5" />
                  <path d="M11.5 12.5 L19.5 4.5" />
                  <path d="M15.5 4.5 H19.5 V8.5" />
                </svg>
              </div>
              <span
                className={cn(
                  "text-[11px] font-medium tracking-tight mt-0.5",
                  activeTab === "work" ? "text-[#9AFD0D] font-semibold" : "text-[#9ca3af]",
                )}
              >
                Work
              </span>
            </button>

            {/* 4. About Us Button */}
            <button
              type="button"
              onClick={() => handleNav("about", "/about")}
              className="flex flex-1 flex-col items-center justify-center py-1 transition-colors duration-200 group cursor-pointer"
            >
              <div
                className={cn(
                  "flex items-center justify-center transition-transform group-active:scale-90",
                  activeTab === "about"
                    ? "text-[#9AFD0D]"
                    : "text-[#9ca3af] group-hover:text-white",
                )}
              >
                {/* User / profile icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span
                className={cn(
                  "text-[11px] font-medium tracking-tight mt-0.5",
                  activeTab === "about" ? "text-[#9AFD0D] font-semibold" : "text-[#9ca3af]",
                )}
              >
                About Us
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Services Drawer Backdrop */}
      {servicesOpen && (
        <div
          aria-hidden="true"
          onClick={() => setServicesOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity lg:hidden"
        />
      )}

      {/* Services Drawer Sheet matching uploaded screenshot */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Services Navigation"
        className={cn(
          "fixed inset-x-0 bottom-0 mx-auto w-full max-w-lg z-40 max-h-[85vh] bg-white rounded-t-[30px] flex flex-col shadow-[0_-16px_50px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out will-change-transform lg:hidden",
          servicesOpen ? "translate-y-0" : "translate-y-full pointer-events-none",
        )}
      >
        {/* Top Centered Gray Pill Drag Handle */}
        <div className="pt-3 pb-2 flex justify-center shrink-0">
          <div className="w-12 h-1 bg-[#D1D5DB] rounded-full" />
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto px-3 pt-1 pb-28 overscroll-contain flex-1">
          {/* Section 1: Design Services */}
          <div className="mb-2 px-4 py-2.5 rounded-2xl bg-[#FAF7FE]">
            <h3 className="text-[17px] font-bold text-gray-950 tracking-tight">Design Services</h3>
          </div>

          <div className="divide-y divide-gray-100 mb-4">
            {mobileDesignServices.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleServiceSelect(item.href, e)}
                className="flex items-center justify-between px-3.5 py-3.5 hover:bg-gray-50 active:bg-gray-100 transition-colors w-full text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1 pr-3">
                  <div className="size-10 sm:size-11 rounded-full bg-black flex items-center justify-center shrink-0 shadow-sm">
                    <img src={item.icon} alt="" className="size-5 object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14.5px] font-bold text-gray-950 leading-snug">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">{item.subtitle}</div>
                  </div>
                </div>
                <ArrowRight className="size-4.5 text-gray-900 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          {/* Section 2: Development Services */}
          <div className="mt-4 mb-2 px-4 py-2.5 rounded-2xl bg-[#FFF6F0]">
            <h3 className="text-[17px] font-bold text-gray-950 tracking-tight">
              Development Services
            </h3>
          </div>

          <div className="divide-y divide-gray-100 mb-4">
            {mobileDevServices.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleServiceSelect(item.href, e)}
                className="flex items-center justify-between px-3.5 py-3.5 hover:bg-gray-50 active:bg-gray-100 transition-colors w-full text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1 pr-3">
                  <div className="size-10 sm:size-11 rounded-full bg-black flex items-center justify-center shrink-0 shadow-sm">
                    <img src={item.icon} alt="" className="size-5 object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14.5px] font-bold text-gray-950 leading-snug">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">{item.subtitle}</div>
                  </div>
                </div>
                <ArrowRight className="size-4.5 text-gray-900 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          {/* Section 3: Advertisement */}
          <div className="mt-4 mb-2 px-4 py-2.5 rounded-2xl bg-[#F0FDF4]">
            <h3 className="text-[17px] font-bold text-gray-950 tracking-tight">Advertisement</h3>
          </div>

          <div className="divide-y divide-gray-100">
            {mobileAdServices.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleServiceSelect(item.href, e)}
                className="flex items-center justify-between px-3.5 py-3.5 hover:bg-gray-50 active:bg-gray-100 transition-colors w-full text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3.5 min-w-0 flex-1 pr-3">
                  <div className="size-10 sm:size-11 rounded-full bg-black flex items-center justify-center shrink-0 shadow-sm">
                    <img src={item.icon} alt="" className="size-5 object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14.5px] font-bold text-gray-950 leading-snug">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">{item.subtitle}</div>
                  </div>
                </div>
                <ArrowRight className="size-4.5 text-gray-900 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Direct Contact Dialog if not on a page with #contact */}
      <Sheet open={contactOpen} onOpenChange={setContactOpen}>
        <SheetContent
          side="bottom"
          className="bg-[#0f0f10] border-t border-white/10 text-white rounded-t-[28px] p-6 pb-10"
        >
          <SheetHeader className="text-left pb-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#9AFD0D] animate-ping" />
                Let's Talk Growth
              </SheetTitle>
              <SheetClose className="size-8 rounded-full bg-white/10 flex items-center justify-center text-neutral-300 hover:text-white">
                <X className="size-4" />
              </SheetClose>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Ready to turn digital challenges into measurable opportunities?
            </p>
          </SheetHeader>

          <div className="pt-5 space-y-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#9AFD0D] text-black font-semibold text-sm shadow-[0_0_20px_rgba(154,253,13,0.3)] transition-transform active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <Calendar className="size-5" />
                <div>
                  <div className="font-bold">Book a 30-min Strategy Call</div>
                  <div className="text-xs text-black/75 font-normal">
                    Direct with our growth directors
                  </div>
                </div>
              </div>
              <ArrowUpRight className="size-4" />
            </a>

            <a
              href="mailto:hello@six2eight.com"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-[#9AFD0D]" />
                <div>
                  <div className="text-sm font-medium">Email Our Team</div>
                  <div className="text-xs text-neutral-400">hello@six2eight.com</div>
                </div>
              </div>
              <ChevronRight className="size-4 text-neutral-500" />
            </a>

            <a
              href="/contact"
              onClick={() => {
                setContactOpen(false);
                if (window.location.pathname === "/contact") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-[#9AFD0D]" />
                <div>
                  <div className="text-sm font-medium">Complete Intake Form</div>
                  <div className="text-xs text-neutral-400">Detailed project scope & budget</div>
                </div>
              </div>
              <ChevronRight className="size-4 text-neutral-500" />
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
