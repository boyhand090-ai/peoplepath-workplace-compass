import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CALENDLY } from "@/data/site";

// Official real vector SVGs for all apps
function TeamsLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none">
      <circle cx="16.5" cy="7.5" r="2.5" fill="#7B83EB" />
      <path
        d="M19.5 11h-4a1 1 0 00-1 1v4a3 3 0 003 3h1a3 3 0 003-3v-3a2 2 0 00-2-2z"
        fill="#7B83EB"
      />
      <circle cx="9" cy="6.5" r="3" fill="#FFFFFF" />
      <path
        d="M3 13.5C3 11.01 5.01 9 7.5 9h3c2.49 0 4.5 2.01 4.5 4.5V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.5z"
        fill="#FFFFFF"
      />
      <path d="M7 11.5h4v1.5H9.75v4H8.25v-4H7v-1.5z" fill="#4B53BC" />
    </svg>
  );
}

function ZoomLogo() {
  return (
    <svg className="size-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.5 7A2.5 2.5 0 001 9.5v5A2.5 2.5 0 003.5 17h9a2.5 2.5 0 002.5-2.5v-1.2l4.8 2.88A1 1 0 0021 15.32V8.68a1 1 0 00-1.2-.86L15 10.7V9.5A2.5 2.5 0 0012.5 7h-9z" />
    </svg>
  );
}

function MeetLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none">
      <path d="M4 7a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" fill="#00832d" />
      <path d="M14 10l5-3.5a1 1 0 011.5.85v9.3a1 1 0 01-1.5.85L14 14v-4z" fill="#00ac47" />
      <path d="M4 14.5v2.5a2 2 0 002 2h6v-4.5H4z" fill="#ffba00" />
      <path d="M4 7a2 2 0 012-2h6v4.5H4V7z" fill="#ea4335" />
      <path d="M14 6.5l5.5 3.5v-3.5L14 6.5z" fill="#0066da" />
    </svg>
  );
}

function CalLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="3" fill="#FFFFFF" />
      <path d="M3 8h18V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2z" fill="#4285F4" />
      <rect x="7" y="2" width="2" height="3.5" rx="0.5" fill="#1967D2" />
      <rect x="15" y="2" width="2" height="3.5" rx="0.5" fill="#1967D2" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="800"
        fill="#1A73E8"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        31
      </text>
    </svg>
  );
}

function NotionLogo() {
  return (
    <svg className="size-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.46 4.21c.75.6 1.03.56 2.43.46l11.44-.84c1.12-.09 1.3-.46 1.03-1.02-.28-.47-.84-.65-1.68-.61l-12 .84c-.94.1-1.5.56-1.22 1.17zm1.12 3.17v12.42c0 .93.47 1.3 1.49 1.21l13.03-.93c1.03-.1 1.3-.75 1.3-1.68V6.07c0-.84-.37-1.21-1.21-1.12l-13.4 1.03c-.84.09-1.22.56-1.22 1.4zm12.65.56c.1.56 0 1.12-.46 1.21l-1.31.28v8.69c0 .84-.47 1.02-1.12.93-.66-.09-1.03-.65-1.5-1.3l-4.1-6.73v6.63l1.77.38c.47.09.56.65.47 1.03-.1.37-.47.46-1.12.46l-3.36.19c-.47 0-.75-.37-.66-.84.1-.47.47-.65 1.03-.75l1.3-.28V9.16l-1.4-.19c-.46-.09-.56-.65-.46-1.03.09-.37.46-.46 1.02-.46l3.65-.28 4.38 6.81V8.41l-1.39-.28c-.47-.1-.56-.66-.47-1.03.1-.37.47-.47 1.03-.47l2.99-.19c.46 0 .84.38.84.84z" />
    </svg>
  );
}

function MiroLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="#050038">
      <path d="M19.467 2.333L14.733 10.4l3.467 11.267L24 4.8 19.467 2.333zM9.733 2.333L5 10.4l3.467 11.267 5.8-16.867L9.733 2.333zM0 2.333L4.2 10.4 0 21.667l4.533-9.6L0 2.333z" />
    </svg>
  );
}

function TypeformLogo() {
  return (
    <svg className="size-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.5 7h17v3.2h-6.9v9.8H10.4V10.2H3.5V7z" />
    </svg>
  );
}

function AnalyticsLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="13" width="3.5" height="7" rx="1.75" fill="#F9AB00" />
      <rect x="10.25" y="8" width="3.5" height="12" rx="1.75" fill="#E37400" />
      <rect x="16.5" y="4" width="3.5" height="16" rx="1.75" fill="#E37400" />
      <circle cx="18.25" cy="5.5" r="1.75" fill="#F9AB00" />
    </svg>
  );
}

function FigmaLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
    </svg>
  );
}

function PrincipleLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 6h6a4 4 0 010 8H7V6zm0 8h4"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FramerLogo() {
  return (
    <svg className="size-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 2h16v7h-8zM4 9h8l8 7H4zM4 16h8v6z" />
    </svg>
  );
}

function TokensLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.6">
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" stroke="none" />
    </svg>
  );
}

function NextLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10.5" fill="#000000" stroke="#444444" strokeWidth="1" />
      <path d="M8.5 7.5v9h1.8V10.2l6.2 6.3h1.5V7.5h-1.8v6.2l-6-6.2H8.5z" fill="#FFFFFF" />
    </svg>
  );
}

function TsLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="white">
      <path
        d="M11 15.5v-1.8H9.3v-5h3.6V7.2H7.5v1.5h1.8v5H11zm5.2.2c1 0 1.8-.4 2.3-1l-1-1c-.3.4-.7.6-1.3.6-.7 0-1.1-.3-1.1-.8 0-.5.4-.8 1.4-1.1 1.6-.5 2.2-1.1 2.2-2.2 0-1.3-1-2.2-2.6-2.2-.9 0-1.7.3-2.3.8l.9 1.1c.4-.3.9-.5 1.4-.5.7 0 1.1.3 1.1.8 0 .5-.4.8-1.3 1.1-1.6.5-2.3 1.2-2.3 2.3 0 1.3 1.1 2.2 2.7 2.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function TailwindLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

function CypressLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 8.5A5.5 5.5 0 1016 15.5"
        stroke="#22D3EE"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LighthouseLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3 5h-6l3-5z" fill="#FFA100" />
      <path d="M7 7l2 14h6l2-14H7z" fill="#F44B21" />
      <circle cx="12" cy="10" r="2" fill="#FFFFFF" />
      <path d="M4 10.5l3-1v2l-3-1zm16 0l-3-1v2l3-1z" fill="#FFA100" />
    </svg>
  );
}

function SentryLogo() {
  return (
    <svg className="size-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.2 2.1c-.6-.4-1.4-.4-2 0L3.5 7.1C3 7.5 2.6 8.2 2.6 9v6c0 .8.4 1.5.9 1.9l7.7 5c.6.4 1.4.4 2 0l7.7-5c.6-.4.9-1.1.9-1.9V9c0-.8-.4-1.5-.9-1.9L13.2 2.1zM12 6.2l5.5 3.6-2.3 3.6-3.2-2.1v6.5h-2V11.3l-3.2 2.1-2.3-3.6L12 6.2z" />
    </svg>
  );
}

function VitestLogo() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none">
      <path d="M18.8 4L12 19.5 5.2 4h4.4l2.4 6 2.4-6h4.4z" fill="#FCC72B" />
      <path d="M13.2 4l-4.5 10.2L12 17l4.5-9.2H13.2z" fill="#729B1B" />
    </svg>
  );
}

function CloudflareLogo() {
  return (
    <svg className="size-4 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.5 14.5c.2-.5.3-1 .3-1.6 0-2.3-1.8-4.2-4.1-4.2-.6 0-1.1.1-1.6.4C13.2 6.4 10.9 4.5 8.2 4.5c-3.4 0-6.1 2.7-6.1 6.1 0 .6.1 1.2.3 1.8C1 13 0 14.3 0 15.8 0 17.8 1.6 19.5 3.7 19.5h15.6c2.6 0 4.7-2.1 4.7-4.7 0-2.1-1.4-3.9-3.4-4.5l-1.1.2z" />
    </svg>
  );
}

function VercelLogo() {
  return (
    <svg className="size-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L24 22H0L12 2z" />
    </svg>
  );
}

function SslLogo() {
  return (
    <svg
      className="size-3.5 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="11" width="16" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function renderAppLogo(name: string) {
  switch (name) {
    case "Teams":
      return <TeamsLogo />;
    case "Zoom":
      return <ZoomLogo />;
    case "Meet":
      return <MeetLogo />;
    case "Cal":
      return <CalLogo />;
    case "Notion":
      return <NotionLogo />;
    case "Miro":
      return <MiroLogo />;
    case "Typeform":
      return <TypeformLogo />;
    case "Analytics":
      return <AnalyticsLogo />;
    case "Figma":
      return <FigmaLogo />;
    case "Principle":
      return <PrincipleLogo />;
    case "Framer":
      return <FramerLogo />;
    case "Tokens":
      return <TokensLogo />;
    case "React":
      return <ReactLogo />;
    case "Next.js":
      return <NextLogo />;
    case "TypeScript":
      return <TsLogo />;
    case "Tailwind":
      return <TailwindLogo />;
    case "Cypress":
      return <CypressLogo />;
    case "Lighthouse":
      return <LighthouseLogo />;
    case "Sentry":
      return <SentryLogo />;
    case "Vitest":
      return <VitestLogo />;
    case "Cloudflare":
      return <CloudflareLogo />;
    case "Vercel":
      return <VercelLogo />;
    case "SSL":
      return <SslLogo />;
    default:
      return <span className="text-xs font-bold">{name[0]}</span>;
  }
}

type ProcessTab = {
  name: string;
  color: string;
  title: string;
  subtitle: string;
  apps: { name: string; bg: string }[];
  cursors: { name: string; color: string; pos: string; delay?: string }[];
  photos: string[];
};

const processTabs: ProcessTab[] = [
  {
    name: "Discovery",
    color: "#F97316",
    title: "Kickoff & project discovery",
    subtitle: "Understanding the business, users, and goals before a single pixel is designed.",
    apps: [
      { name: "Teams", bg: "#4B53BC" },
      { name: "Zoom", bg: "#2D8CFF" },
      { name: "Meet", bg: "#00897B" },
      { name: "Cal", bg: "#4285F4" },
    ],
    cursors: [
      { name: "Jahid", color: "#3B82F6", pos: "bottom-14 left-1/4", delay: "0s" },
      { name: "Sarah", color: "#EC4899", pos: "bottom-3 left-1/2", delay: "0.5s" },
      { name: "Butch", color: "#9AFD0D", pos: "top-4 right-24", delay: "0.2s" },
      { name: "Youssef", color: "#8B5CF6", pos: "top-16 right-36", delay: "0.7s" },
      { name: "Diplo", color: "#EAB308", pos: "bottom-8 right-8", delay: "1s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    ],
  },
  {
    name: "Research",
    color: "#FACC15",
    title: "User & market intelligence",
    subtitle: "Deep dive into user pain points, competitor benchmarks, and product positioning.",
    apps: [
      { name: "Notion", bg: "#000000" },
      { name: "Miro", bg: "#FFD02F" },
      { name: "Typeform", bg: "#262627" },
      { name: "Analytics", bg: "#E37400" },
    ],
    cursors: [
      { name: "Persona", color: "#FACC15", pos: "top-8 left-1/4", delay: "0s" },
      { name: "Pain Point", color: "#EF4444", pos: "bottom-12 left-1/2", delay: "0.4s" },
      { name: "Benchmark", color: "#10B981", pos: "top-12 right-16", delay: "0.8s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80",
    ],
  },
  {
    name: "UI/UX Design",
    color: "#06B6D4",
    title: "Wireframes & design system",
    subtitle: "Crafting intuitive flows, pixel-perfect UI components, and interactive prototypes.",
    apps: [
      { name: "Figma", bg: "#000000" },
      { name: "Principle", bg: "#6366F1" },
      { name: "Framer", bg: "#0055FF" },
      { name: "Tokens", bg: "#10B981" },
    ],
    cursors: [
      { name: "Auto-layout", color: "#06B6D4", pos: "top-10 left-1/4", delay: "0.1s" },
      { name: "Variant", color: "#8B5CF6", pos: "bottom-12 right-28", delay: "0.6s" },
      { name: "Prototype", color: "#EC4899", pos: "top-14 right-10", delay: "0.9s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop&q=80",
    ],
  },
  {
    name: "Development",
    color: "#3B82F6",
    title: "Scalable full-stack builds",
    subtitle: "Engineering fast, modern web applications with clean code, React, and robust APIs.",
    apps: [
      { name: "React", bg: "#23272F" },
      { name: "Next.js", bg: "#000000" },
      { name: "TypeScript", bg: "#3178C6" },
      { name: "Tailwind", bg: "#0F172A" },
    ],
    cursors: [
      { name: "PR Approved", color: "#10B981", pos: "top-8 left-1/3", delay: "0.2s" },
      { name: "API Ready", color: "#3B82F6", pos: "bottom-10 right-28", delay: "0.5s" },
      { name: "100% Typed", color: "#F59E0B", pos: "top-14 right-10", delay: "0.8s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80",
    ],
  },
  {
    name: "QA Testing",
    color: "#A855F7",
    title: "Cross-browser & speed QA",
    subtitle:
      "Rigorous device testing, edge case checks, accessibility compliance, and zero regressions.",
    apps: [
      { name: "Cypress", bg: "#1B1E2E" },
      { name: "Lighthouse", bg: "#FF4E42" },
      { name: "Sentry", bg: "#362D59" },
      { name: "Vitest", bg: "#729B1A" },
    ],
    cursors: [
      { name: "0 Errors", color: "#10B981", pos: "top-10 left-1/4", delay: "0s" },
      { name: "Pass 100%", color: "#A855F7", pos: "bottom-12 right-24", delay: "0.6s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=80",
    ],
  },
  {
    name: "Launch",
    color: "#10B981",
    title: "Deployment & continuous support",
    subtitle:
      "Smooth zero-downtime production deployment, domain routing, and ongoing optimization.",
    apps: [
      { name: "Cloudflare", bg: "#F38020" },
      { name: "Vercel", bg: "#000000" },
      { name: "Analytics", bg: "#EA4335" },
      { name: "SSL", bg: "#10B981" },
    ],
    cursors: [
      { name: "Live 🚀", color: "#10B981", pos: "top-12 left-1/3", delay: "0.3s" },
      { name: "Uptime 99.9%", color: "#9AFD0D", pos: "bottom-10 right-20", delay: "0.7s" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    ],
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const currentTab = processTabs[active] ?? processTabs[0]!;

  return (
    <section className="bg-[#050505] border-t border-white/10 py-20 sm:py-28 lg:py-32 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.45fr] lg:items-center">
          {/* Left Column: Heading & Subtitle only */}
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#6060603D] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <span className="size-2.5 rounded-full bg-[#9AFD0D] shadow-[0_0_12px_#9AFD0D] animate-pulse" />
                Our Process
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-white leading-[1.08] mt-4 mb-3"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              How We Get It
              <br />
              Done.
            </h2>

            <p className="text-xs sm:text-sm text-[#888888] max-w-sm leading-relaxed font-normal">
              Every step, done right. From discovery to launch structured, smooth, and built to
              deliver.
            </p>
          </div>

          {/* Right Column: Top Colored Tabs & Exact Light Luminous Card */}
          <div>
            {/* Horizontal Tabs with active colored underline indicator */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-4 px-1">
              {processTabs.map((tab, idx) => {
                const isActive = active === idx;
                return (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={`relative py-1 text-xs sm:text-[13px] font-semibold transition-colors cursor-pointer ${
                      isActive ? "text-white" : "text-[#777777] hover:text-white"
                    }`}
                  >
                    <span>{tab.name}</span>
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                        style={{ backgroundColor: tab.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Rich Luminous Card matching screenshot exactly */}
            <div className="relative rounded-[26px] bg-gradient-to-br from-[#FFFFFF] via-[#F4FFF2] to-[#E2FCDA] p-7 sm:p-9 shadow-[0_24px_70px_rgba(0,0,0,0.6)] border border-white/50 overflow-hidden min-h-[360px]">
              {/* Soft Ethereal Radial Ambient Blur */}
              <div
                className="pointer-events-none absolute inset-0 opacity-55 blur-3xl transition-all duration-700"
                style={{
                  background: `radial-gradient(circle at 20% 30%, ${currentTab.color}35, transparent 65%), radial-gradient(circle at 75% 70%, #9AFD0D30, transparent 60%)`,
                }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-[1.25fr_1fr] gap-6 items-center relative z-10">
                {/* Left Sub-Column: App Badges, Headline, Subtitle */}
                <div>
                  {/* Floating App Badges */}
                  <div className="flex items-center gap-2 mb-6">
                    {currentTab.apps.map((app) => (
                      <div
                        key={app.name}
                        className="group/badge relative flex size-7 sm:size-8 items-center justify-center rounded-lg text-white font-bold text-xs shadow-md border border-white/30 transition-all duration-200 hover:scale-110 hover:shadow-lg overflow-hidden cursor-pointer"
                        style={{ backgroundColor: app.bg }}
                        title={app.name}
                      >
                        {renderAppLogo(app.name)}
                      </div>
                    ))}
                  </div>

                  {/* Step Title in Bold Dark Charcoal/Black */}
                  <h3
                    className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight leading-[1.16] mb-2"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {currentTab.title}
                  </h3>

                  {/* Subtitle in Dark Gray */}
                  <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed max-w-xs">
                    {currentTab.subtitle}
                  </p>
                </div>

                {/* Right Sub-Column: Team Collaboration Photos & Floating Cursors */}
                <div className="relative h-48 sm:h-56 flex items-center justify-center">
                  {/* Photo Collage */}
                  <div className="relative w-full max-w-[240px] flex items-center justify-center">
                    <div className="size-28 sm:size-32 rounded-2xl overflow-hidden border-2 border-white shadow-xl -rotate-3 z-10">
                      <img
                        src={currentTab.photos[0]}
                        alt="Team lead"
                        className="size-full object-cover"
                      />
                    </div>
                    {currentTab.photos[1] && (
                      <div className="size-20 sm:size-24 rounded-xl overflow-hidden border-2 border-white shadow-lg rotate-6 -ml-8 -mt-6 z-20">
                        <img
                          src={currentTab.photos[1]}
                          alt="Colleague on call"
                          className="size-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Floating Figma-style Cursor Tags with bobbing animations */}
                  {currentTab.cursors.map((cursor) => (
                    <div
                      key={cursor.name}
                      className={`absolute ${cursor.pos} flex items-center gap-1.5 z-30 pointer-events-none select-none animate-cursor-bob`}
                      style={{ animationDelay: cursor.delay ?? "0s" }}
                    >
                      <svg
                        className="size-3.5 drop-shadow-sm"
                        style={{ fill: cursor.color, color: cursor.color }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 0l16 12-7 2-4 7z" />
                      </svg>
                      <span
                        className="rounded px-1.5 py-0.5 text-[10px] font-bold text-black shadow-md tracking-tight"
                        style={{ backgroundColor: cursor.color }}
                      >
                        {cursor.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const consultAvatars = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    alt: "Strategy lead",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    alt: "Technical director",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
    alt: "Product strategist",
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&fit=crop&q=80",
    alt: "Design lead",
  },
];

export function ConsultCta() {
  return (
    <section className="py-20 sm:py-28 bg-[#000000]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#FFFFFF] overflow-hidden shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.35fr] items-center">
            {/* Left Column: Eyebrow, Heading with Inline Avatars, Subtitle, CTA */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col items-start z-10">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-sm font-medium text-[#111111] backdrop-blur-md shadow-xs">
                <span className="size-2.5 rounded-full bg-[#9AFD0D] shadow-[0_0_12px_#9AFD0D] animate-pulse" />
                <span>Let&rsquo;s talk</span>
              </div>

              {/* Main Heading with 4 inline avatars with lime green rings */}
              <h2
                className="mt-6 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111111] tracking-tight leading-[1.14]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Consult{" "}
                <span className="inline-flex items-center align-middle mx-1 -translate-y-0.5">
                  {consultAvatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar.src}
                      alt={avatar.alt}
                      className="size-8 sm:size-9 lg:size-10 rounded-full border-2 border-[#9AFD0D] object-cover -ml-2.5 first:ml-0 shadow-sm"
                    />
                  ))}
                </span>{" "}
                strategy
                <br />
                to build stronger product
              </h2>

              {/* Subtitle / Description */}
              <p className="mt-5 text-sm sm:text-base text-[#555555] font-normal leading-relaxed max-w-md">
                30 minutes to understand your product, uncover the real problems, and figure out
                what actually needs to change.
              </p>

              {/* CTA Button */}
              <div className="mt-8 sm:mt-10">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#9AFD0D] px-8 py-3.5 text-sm sm:text-[15px] font-bold text-black transition-all hover:bg-[#8cee07] hover:scale-[1.02] shadow-[0_4px_24px_rgba(154,253,13,0.35)]"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>

            {/* Right Column: Realistic Keyboard Surface with 5 Floating Metric Cards */}
            <div className="relative min-h-[460px] sm:min-h-[500px] overflow-hidden flex flex-col justify-center px-4 py-8 sm:p-8">
              {/* Keyboard Backdrop Keycaps extending to the top and right edges */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none select-none flex flex-col gap-2.5 justify-center pl-2 pt-2 sm:pl-4 sm:pt-4 overflow-hidden"
              >
                {/* Row 1: Esc, F1, F2, F3, F4, F5, F6 */}
                <div className="flex gap-2.5">
                  <div className="h-11 w-16 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    Esc
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F1
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F2
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F3
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F4
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F5
                  </div>
                  <div className="h-11 w-14 rounded-[14px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    F6
                  </div>
                </div>

                {/* Row 2: Numbers (~, 1, 2, 3, 4, 5, 6) */}
                <div className="flex gap-2.5">
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>~</span>
                    <span className="mt-1 text-[13px] font-medium text-[#71717A]">`</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>!</span>
                    <span className="text-[13px] font-medium text-[#71717A]">1</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>@</span>
                    <span className="text-[13px] font-medium text-[#71717A]">2</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>#</span>
                    <span className="text-[13px] font-medium text-[#71717A]">3</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>$</span>
                    <span className="text-[13px] font-medium text-[#71717A]">4</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>%</span>
                    <span className="text-[13px] font-medium text-[#71717A]">5</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-between py-2 text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>^</span>
                    <span className="text-[13px] font-medium text-[#71717A]">6</span>
                  </div>
                </div>

                {/* Row 3: Tab, Q, W, E, R, T, Y */}
                <div className="flex gap-2.5">
                  <div className="h-14 w-20 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    Tab
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    Q
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    W
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    E
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    R
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    T
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    Y
                  </div>
                </div>

                {/* Row 4: Caps, A, S, D, F, G */}
                <div className="flex gap-2.5">
                  <div className="h-14 w-24 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] font-medium text-[#A1A1AA]">
                    Caps
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    A
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    S
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    D
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    F
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    G
                  </div>
                </div>

                {/* Row 5: Shift, ~, Z, X, C, V */}
                <div className="flex gap-2.5">
                  <div className="h-14 w-28 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[16px] text-[#A1A1AA]">
                    ⇧
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-[11px] text-[#A1A1AA] font-mono leading-none">
                    <span>~</span>
                    <span className="mt-1 text-[13px] font-medium text-[#71717A]">`</span>
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    Z
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    X
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    C
                  </div>
                  <div className="h-14 w-14 rounded-[16px] bg-[#FAFAFA] border border-[#E7E9ED] shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_-2px_0_rgba(0,0,0,0.04)] flex items-center justify-center text-[13px] font-medium text-[#71717A]">
                    V
                  </div>
                </div>
              </div>

              {/* 5 Prominent Floating Feature Cards in Foreground */}
              <div className="relative z-10 flex flex-col gap-3.5 my-auto">
                {/* Top Row: 3 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
                  {/* Card 1: Quick product audit */}
                  <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] min-h-[116px] sm:min-h-[124px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                    <svg
                      className="size-5 text-[#111111]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111111] leading-snug">
                      Quick product audit
                    </span>
                  </div>

                  {/* Card 2: Growth direction */}
                  <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] min-h-[116px] sm:min-h-[124px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                    <svg
                      className="size-5 text-[#111111]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="6" r="6" />
                      <circle cx="12" cy="2" r="2" />
                    </svg>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111111] leading-snug">
                      Growth direction
                    </span>
                  </div>

                  {/* Card 3: Expert perspective */}
                  <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] min-h-[116px] sm:min-h-[124px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                    <svg
                      className="size-5 text-[#111111]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="8" r="3" />
                      <path d="M6.5 18a6 6 0 0 1 11 0" />
                    </svg>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111111] leading-snug">
                      Expert perspective
                    </span>
                  </div>
                </div>

                {/* Bottom Row: 2 Cards + 1 empty space allowing S and D to be visible */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 items-start">
                  {/* Card 4: $2B+ Revenue influenced */}
                  <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] min-h-[116px] sm:min-h-[124px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                    <svg
                      className="size-5 text-[#111111]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111111] leading-snug">
                      $2B+ Revenue influenced
                    </span>
                  </div>

                  {/* Card 5: 48h avg onboarding */}
                  <div className="rounded-[20px] bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] min-h-[116px] sm:min-h-[124px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                    <svg
                      className="size-5 text-[#111111]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-xs sm:text-[13px] font-bold text-[#111111] leading-snug">
                      48h avg onboarding
                    </span>
                  </div>

                  {/* Empty 3rd slot allows the 'S' and 'D' keycaps underneath to show cleanly */}
                  <div className="hidden sm:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
