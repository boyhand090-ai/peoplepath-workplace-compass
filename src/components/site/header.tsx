import { useEffect, useState } from "react";
import { ServicesDropdown } from "./services-dropdown";
import { MobileBottomBar } from "./mobile-bottom-bar";

export function Header() {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const updatePath = () => {
      if (typeof window !== "undefined") {
        setCurrentPath(window.location.pathname);
      }
    };
    updatePath();
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  const handleNav = (
    target: "home" | "work" | "about" | "contact",
    href: string,
    e: React.MouseEvent,
  ) => {
    if (typeof window === "undefined") return;
    const path = window.location.pathname;

    if (target === "home") {
      if (path === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (target === "work") {
      if (path === "/work") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (target === "about") {
      if (path === "/about") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (target === "contact") {
      if (path === "/contact") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
  };

  const isHome = currentPath === "/" || currentPath === "";
  const isWork = currentPath === "/work";
  const isAbout = currentPath === "/about";
  const isContact = currentPath === "/contact";

  return (
    <>
      <header className="hidden lg:block fixed inset-x-0 top-4 sm:top-6 z-50 px-4 pointer-events-none">
        <div className="mx-auto flex h-14 sm:h-16 max-w-3xl items-center justify-between rounded-full bg-[#121212]/95 border border-white/10 px-4 sm:px-6 py-2 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] pointer-events-auto transition-all duration-300">
          {/* Logo - Navigates Home */}
          <a
            href="/"
            onClick={(e) => handleNav("home", "/", e)}
            className="flex items-center shrink-0 group cursor-pointer"
            aria-label="six2eight home"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links matching Bottom Bar strictly */}
          <nav className="flex items-center gap-6 sm:gap-7">
            {/* 1. Home */}
            <a
              href="/"
              onClick={(e) => handleNav("home", "/", e)}
              className={`text-[15px] font-medium transition-colors cursor-pointer ${
                isHome ? "text-[#9AFD0D] font-semibold" : "text-[#E0E0E0] hover:text-white"
              }`}
            >
              Home
            </a>

            {/* 2. Services Dropdown */}
            <ServicesDropdown />

            {/* 3. Work */}
            <a
              href="/work"
              onClick={(e) => handleNav("work", "/work", e)}
              className={`text-[15px] font-medium transition-colors cursor-pointer ${
                isWork ? "text-[#9AFD0D] font-semibold" : "text-[#E0E0E0] hover:text-white"
              }`}
            >
              Work
            </a>

            {/* 4. About Us */}
            <a
              href="/about"
              onClick={(e) => handleNav("about", "/about", e)}
              className={`text-[15px] font-medium transition-colors cursor-pointer ${
                isAbout ? "text-[#9AFD0D] font-semibold" : "text-[#E0E0E0] hover:text-white"
              }`}
            >
              About Us
            </a>
          </nav>

          {/* 5. Contact Us Button */}
          <div className="flex items-center">
            <a
              href="/contact"
              onClick={(e) => handleNav("contact", "/contact", e)}
              className={`rounded-full text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 transition-all shadow-sm shrink-0 cursor-pointer font-semibold ${
                isContact
                  ? "bg-[#9AFD0D] text-black shadow-[0_0_20px_rgba(154,253,13,0.5)] ring-2 ring-[#9AFD0D]"
                  : "bg-white hover:bg-neutral-100 text-black"
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Modern Curved Bottom Menu Bar for Mobile and Small Screens */}
      <MobileBottomBar />
    </>
  );
}

function Logo() {
  return (
    <svg
      width="68"
      height="48"
      viewBox="0 0 68 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 sm:h-10 w-auto"
    >
      <path
        fill="#ffffff"
        d="M14.98 29.31a7 7 0 0 0-2.78-2.84 8 8 0 0 0-4.01-1q-1.86 0-3.36.63a7 7 0 0 0-2.59 1.8 8 8 0 0 0-1.66 2.73 10 10 0 0 0-.58 3.4q0 2.62.94 4.54a7 7 0 0 0 2.8 2.97 9 9 0 0 0 4.54 1.06q1.79 0 3.28-.55 1.5-.54 2.57-1.73a8 8 0 0 0 1.68-3.15h-3.83q-.38.97-1.2 1.65-.8.7-2.47.7-1.38 0-2.35-.62a4 4 0 0 1-1.48-1.84 7 7 0 0 1-.45-2.04H16v-1.26q0-2.6-1.02-4.45M4.14 32.2l.13-.53q.28-1.02.84-1.72a3.7 3.7 0 0 1 3.08-1.41q.9 0 1.74.38.83.39 1.4 1.2t.68 2.08z"
      />
      <path
        fill="#ffffff"
        d="M36.21 25.86v2.15a5.5 5.5 0 0 0-2.11-1.88 7.6 7.6 0 0 0-6.02-.06q-1.35.6-2.26 1.67a8 8 0 0 0-1.42 2.5 9 9 0 0 0-.48 3.07q0 2.36.88 4.13a6.5 6.5 0 0 0 6.33 3.75 5.8 5.8 0 0 0 4.96-2.4v2.36q0 .68-.14 1.34t-.55 1.24-1.2.93-2.03.35-2.03-.34q-.75-.33-1.12-.85a4 4 0 0 1-.52-1h-4.24q.16 1.05.73 1.97a6 6 0 0 0 1.52 1.64q.95.7 2.38 1.14 1.42.42 3.25.43 2.25 0 3.8-.56a6 6 0 0 0 2.5-1.56 6 6 0 0 0 1.38-2.28q.44-1.29.44-2.67V25.86zm-.28 9.37a5 5 0 0 1-.74 1.5 3 3 0 0 1-1.25.97q-.77.34-1.68.34-1.35 0-2.23-.61a4 4 0 0 1-1.33-1.67q-.45-1.06-.45-2.45 0-.96.25-1.83.25-.86.75-1.5a3.6 3.6 0 0 1 3.01-1.39q1.29 0 2.15.65.85.64 1.32 1.71.45 1.08.45 2.36 0 1.06-.25 1.92"
      />
      <path
        fill="#ffffff"
        d="M56.72 28.56a5 5 0 0 0-1.96-2.24 6.3 6.3 0 0 0-3.4-.84q-1.14 0-2.08.29-.94.3-1.7.87a5 5 0 0 0-1.28 1.41v-5.6h-4.17v19.77h4.17V33q0-1.29.44-2.17T48 29.5t1.94-.45q1.54 0 2.39.85.84.85.84 2.46v9.86h4.18V31.68a8 8 0 0 0-.63-3.12"
      />
      <path
        fill="#ffffff"
        d="M64.26 25.86V21.7H60.1v4.16h-2v3.02h2.02v8.58q0 1.54.43 2.62.42 1.08 1.47 1.6 1.05.54 2.9.54H68v-3.28h-1.85q-.8 0-1.21-.24-.43-.24-.55-.7a4 4 0 0 1-.12-1.12v-8H68v-3.02z"
      />
      <path
        fill="#ffffff"
        d="M5.29 22.41a6 6 0 0 1-2.3-1.19 5 5 0 0 1-1.3-1.73 7 7 0 0 1-.54-2.04H5.1q.12.8.57 1.36t1.19.87 1.91.3q1.27 0 1.96-.3.7-.3.99-.75.28-.45.28-.97 0-.77-.55-1.25-.54-.48-1.61-.61l-3.42-.52a7 7 0 0 1-2.3-.73 4.1 4.1 0 0 1-2.37-3.89 4.8 4.8 0 0 1 1.63-3.63q.81-.75 2.1-1.18a10 10 0 0 1 3.07-.43q1.92 0 3.2.45 1.29.46 2.1 1.17.82.72 1.24 1.64t.52 1.91h-3.76a3 3 0 0 0-.49-1.19q-.36-.5-1.07-.82a5 5 0 0 0-1.77-.3c-.7 0-1.3.1-1.7.3q-.62.3-.87.73-.25.42-.25.8 0 .81.55 1.2.54.4 1.55.57l3.26.51q1.54.3 2.64.87t1.7 1.53q.59.94.59 2.33 0 1.53-.74 2.76a5 5 0 0 1-2.34 1.94q-1.59.72-4.14.73a12 12 0 0 1-3.48-.44"
      />
      <path fill="#ffffff" d="M22.06 6.1h-4.18v36.12h4.18z" />
      <path
        fill="#ffffff"
        d="m29.1 6.1 3.54 5.08 3.64-5.08h4.32l-5.8 7.81 6.18 8.55h-4.9l-3.85-5.5-3.89 5.5h-4.42l6.11-8.32-5.61-8.04z"
      />
      <path
        fill="#9AFD0D"
        d="M64.78 13.28a8 8 0 0 0-.57-2.3 8.6 8.6 0 0 0-6.89-5.25l-.13-.01v4l.1.02q.86.17 1.64.75a4.6 4.6 0 0 1 1.84 3.15 4.3 4.3 0 0 1-1.07 3.38 4.4 4.4 0 0 1-3.27 1.5c-1 0-2.23-.56-3.54-1.62L42.46 7.93a.2.2 0 0 0-.21-.03.2.2 0 0 0-.12.19v4.84L50.35 20q3.12 2.51 6.08 2.52a8.4 8.4 0 0 0 8.35-9.24"
      />
      <path fill="#87E00C" d="M46.3 16.54h-4.17v4.19h4.17z" />
      <path fill="#87E00C" d="M22.06 0h-4.18v4.2h4.18z" />
    </svg>
  );
}
