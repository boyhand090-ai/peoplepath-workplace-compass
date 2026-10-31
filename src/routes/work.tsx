import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  TrendingUp,
  ExternalLink,
  CheckCircle2,
  X,
  Code2,
  Smartphone,
  Globe,
  Palette,
  Bot,
  ShoppingBag,
} from "lucide-react";
import { Preloader } from "@/components/site/preloader";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { Magnetic } from "@/components/site/magnetic";
import { CALENDLY } from "@/data/site";
import { cn } from "@/lib/utils";

const title = "Featured Work & Case Studies — Ozyrah Digital Agency";
const description =
  "Explore production digital platforms, high-conversion real estate developments, aesthetic clinics, and custom e-commerce systems engineered by Ozyrah.";
const keywords =
  "portfolio, case studies, web development portfolio, real estate websites, clinic web portals, e-commerce case studies, Ozyrah work, digital transformation";
const canonical = "https://ozyrah.vercel.app/work";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:site_name", content: "Ozyrah" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: WorkPage,
});

export type CaseStudy = {
  id: string;
  name: string;
  client: string;
  tagline: string;
  description: string;
  categories: string[];
  image: string;
  tools: string[];
  metric: string;
  metricLabel: string;
  year: string;
  challenge: string;
  solution: string;
  impact: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "clothivore",
    name: "Clothivore",
    client: "Clothivore Kids Wear",
    tagline: "High-growth direct-to-consumer children's fashion e-commerce ecosystem",
    description:
      "Modern kids clothing and lifestyle digital storefront with seamless catalog discovery, custom sizing guides, and conversion-optimized checkout.",
    categories: ["E-commerce", "Web Development"],
    image: "/assets/aistudio/6r3e5mCKqUAiw9qid5DGOEfkmuuXt60h7Z2usv1F_9d8f4512.webp",
    tools: ["Shopify Plus", "React", "Tailwind CSS", "TypeScript"],
    metric: "4.8x",
    metricLabel: "Sales Growth",
    year: "2026",
    challenge:
      "High drop-off rates on mobile checkout and slow catalog filtering prevented scale across international multi-currency markets.",
    solution:
      "Engineered a ultra-fast headless storefront with instant category navigation, visual outfit builders, and 1-click mobile checkout.",
    impact: [
      "4.8x increase in annual digital sales volume",
      "<1.1s mobile page load speed across all product categories",
      "+42% boost in repeat customer lifetime value",
    ],
  },
  {
    id: "harley-aesthetic",
    name: "Harley Aesthetic Clinic",
    client: "Harley Clinic International",
    tagline: "Luxury clinical aesthetic & medical wellness consultation portal",
    description:
      "High-end clinical wellness & cosmetic consultation portal with interactive treatment discovery, practitioner credentials, and VIP appointment booking.",
    categories: ["Web Applications", "Web Development"],
    image: "/assets/aistudio/M2pVke9n4dopwlBtUWhzsskIbknjCSn5cyWBQrIM_9f6690e4.webp",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    metric: "+260%",
    metricLabel: "Bookings",
    year: "2026",
    challenge:
      "Manual phone intake and outdated web forms failed to convey premium aesthetic clinic quality, losing high-ticket patients.",
    solution:
      "Designed an elegant luxury portal featuring real-time practitioner schedules, virtual consultations, and treatment result galleries.",
    impact: [
      "+260% increase in qualified consultation bookings",
      "99% positive client onboarding satisfaction score",
      "Nominated for Medical Web Design of the Year",
    ],
  },
  {
    id: "property-point",
    name: "Property Point",
    client: "Property Point Estate & Builders",
    tagline: "Corporate estate & architectural builders platform",
    description:
      "Modern corporate estate & architectural developers platform showcasing commercial properties, residential plots, and investment consultancy.",
    categories: ["Web Development", "Web Applications"],
    image: "/assets/aistudio/WbyV4mpz09NgUcFkbm1Op9uKH4BrLS8l1TLob5Pv_1cee4d43.webp",
    tools: ["React", "TypeScript", "Tailwind CSS", "CRM"],
    metric: "98%",
    metricLabel: "Lead Quality",
    year: "2026",
    challenge:
      "Commercial and residential buyers needed transparent project progress tracking, legal documentation verification, and immediate broker connectivity.",
    solution:
      "Delivered an interactive investor portal featuring 3D master plans, plot availability matrices, and automated WhatsApp inquiry routing.",
    impact: [
      "98% buyer verification score on inbound inquiries",
      "$65M+ in property transactions facilitated digitally",
      "Featured across real estate developer showcases",
    ],
  },
  {
    id: "hiba-downtown",
    name: "Hiba Downtown",
    client: "Hiba Group Developments",
    tagline: "Prestigious urban high-rise development & residential towers",
    description:
      "Prestigious urban high-rise development featuring luxury multi-tower residences, retail promenades, and interactive virtual floorplan tours.",
    categories: ["Web Applications", "Web Development"],
    image: "/assets/aistudio/BhiqS7sCf7M6Ecm8A5N5UCQ4bqsKGaf6IZ6918EG_77386ddb.webp",
    tools: ["Three.js", "React", "Tailwind CSS"],
    metric: "120M+",
    metricLabel: "Inquiries",
    year: "2026",
    challenge:
      "Off-plan investors needed to visualize tower elevations, sun exposure, and unit configurations before physical ground breaking.",
    solution:
      "Built a WebGL 3D architectural explorer allowing buyers to tour apartments, inspect balcony views, and reserve units directly.",
    impact: [
      "120M+ PKR in pre-launch reservation deposits logged",
      "Over 35,000 interactive 3D floorplan tours rendered",
      "100% phase-one commercial units spoken for",
    ],
  },
  {
    id: "otel-residence",
    name: "Otel Residence",
    client: "Otel Luxury Living",
    tagline: "Iconic twin luxury residential towers with private concierge portal",
    description:
      "Iconic twin luxury residential towers with landscaped garden terraces, smart home integrations, and private resident concierge portal.",
    categories: ["Web Applications", "Web Development"],
    image: "/assets/aistudio/4KYQtjarr9DSlQyppohioRfS9wigsDuaXCXSc5fY_559aaa1b.webp",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    metric: "100%",
    metricLabel: "Units Reserved",
    year: "2026",
    challenge:
      "High-net-worth buyers expected an exclusive, discreet reservation and concierge experience tailored to high-tier properties.",
    solution:
      "Developed a private members portal for penthouse buyers with bespoke interior customization options and digital contract signing.",
    impact: [
      "100% of luxury units reserved within 90 days of launch",
      "Zero paperwork friction via verified digital escrow workflows",
      "Award-winning luxury living web experience",
    ],
  },
  {
    id: "ar-aesthetics",
    name: "AR Aesthetics Clinic",
    client: "AR Aesthetics Clinics",
    tagline: "Skin, laser, and hair transplant clinic digital transformation",
    description:
      "Specialized clinical skincare, laser treatment, and hair restoration web ecosystem with digital patient intake and consultation funnels.",
    categories: ["Web Development", "AI Automation"],
    image: "/assets/aistudio/AJo940XgwOtE4hXrWEesdzxU6uhIg82A8MkcYd5d_e2a81a7e.webp",
    tools: ["React", "Tailwind CSS", "CRM", "WhatsApp API"],
    metric: "3.5x",
    metricLabel: "Patient Inflow",
    year: "2026",
    challenge:
      "Prospective patients needed clear visual education on procedures and transparent consultation pricing without high-pressure sales.",
    solution:
      "Created an interactive symptom and treatment selector with automated specialist matching and secure pre-op intake questionnaires.",
    impact: [
      "3.5x increase in qualified clinic appointments",
      "-55% drop in no-show rates via automated SMS reminders",
      "Expanded across multiple regional branch locations",
    ],
  },
  {
    id: "sky-tower",
    name: "Sky Tower Commercial",
    client: "Sky Tower Holdings",
    tagline: "Premier commercial skyscraper architectural showcase & lease management",
    description:
      "Premier commercial skyscraper architectural showcase featuring grade-A corporate suites, sustainable engineering, and interactive lease management.",
    categories: ["Web Applications", "Web Development"],
    image: "/assets/aistudio/e8v4LeD2xv0ZxeOZuIOXi3YTOS5cxBkp6vbvtalL_d936d18e.webp",
    tools: ["React", "Figma", "Node.js", "Tailwind CSS"],
    metric: "450K+",
    metricLabel: "Sq Ft Leased",
    year: "2026",
    challenge:
      "Corporate tenants required real-time floor availability, floor plate measurements, and utility efficiency specifications.",
    solution:
      "Engineered a digital leasing portal with dynamic availability filters, corporate lease calculators, and virtual walk-throughs.",
    impact: [
      "450,000+ sq ft of Grade-A office space leased in 6 months",
      "Partnered with Fortune 500 regional headquarters",
      "Recognized for green building digital transparency",
    ],
  },
  {
    id: "grand-avenue",
    name: "Grand Avenue Heights",
    client: "Grand Avenue Urban Living",
    tagline: "Master-planned urban residential sanctuary with elevated sky gardens",
    description:
      "Master-planned urban residential sanctuary with panoramic skywalks, elevated sky gardens, and digital community amenity booking.",
    categories: ["Web Applications", "Web Development"],
    image: "/assets/aistudio/qiIUEKnmftIFGAF752zbJ3c1EU5NyAK4JL7asSMf_b0a0a818.webp",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    metric: "94%",
    metricLabel: "Satisfaction",
    year: "2026",
    challenge:
      "Community residents needed a centralized platform for amenity reservations, facility management, and guest passes.",
    solution:
      "Built a seamless resident portal with QR code entry generation, gym/pool scheduling, and maintenance dispatching.",
    impact: [
      "94% resident satisfaction rating across 800+ households",
      "Sub-15 minute average resolution time for maintenance requests",
      "Featured as model smart residential community",
    ],
  },
  {
    id: "royal-palm",
    name: "Royal Palm Enclave",
    client: "Royal Palm Estates",
    tagline: "Palatial estate living & luxury apartment community",
    description:
      "Palatial estate living and luxury apartment complex immersed in private woodlands, recreation courtyards, and concierge services.",
    categories: ["Branding", "Web Development"],
    image: "/assets/aistudio/iXUtWtWYuJWau1P5GiQ3CvsFZZZduAZZGWsWaelL_4ac54701.webp",
    tools: ["Figma", "React", "Tailwind CSS"],
    metric: "09",
    metricLabel: "Estate Project",
    year: "2026",
    challenge:
      "High-end buyers required privacy and comprehensive architectural specifications before on-site private previews.",
    solution:
      "Crafted an immersive editorial website capturing the architecture, landscape design, and private estate amenities.",
    impact: [
      "Exclusive private preview list fully subscribed within 48 hours",
      "Recognized in architectural design publications",
      "Record price per sq ft achieved in the sector",
    ],
  },
];

const categoryTabs = [
  { label: "All Projects", value: "All" },
  { label: "Web Development", value: "Web Development" },
  { label: "Web Applications", value: "Web Applications" },
  { label: "UI/UX Design", value: "UI/UX Design" },
  { label: "AI Automation", value: "AI Automation" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "Mobile Apps", value: "Mobile Apps" },
  { label: "Branding", value: "Branding" },
];

function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((p) => p.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Preloader />
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative px-5 pt-36 pb-16 sm:pt-40 sm:pb-20 lg:px-8">
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-[340px] w-[700px] max-w-full rounded-full bg-primary/10 blur-[130px]"
          />

          <div className="relative mx-auto max-w-5xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-[0_0_16px_rgba(154,253,13,0.25)]">
                <span className="size-2 rounded-full bg-[#9AFD0D] shadow-[0_0_8px_#9AFD0D] animate-pulse" />
                Featured Work & Case Studies
              </div>
            </Reveal>

            <Reveal delay={40}>
              <h1 className="text-display mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Products that drive real,{" "}
                <span className="text-shine italic text-primary">measurable growth.</span>
              </h1>
            </Reveal>

            <Reveal delay={70}>
              <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
                From fast-scaling venture startups to global digital brands, we build connected
                websites, platforms, and products that convert visitors into lifelong customers.
              </p>
            </Reveal>

            {/* Quick KPI Strip */}
            <Reveal delay={100}>
              <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 border-t border-border/50 pt-8">
                {[
                  { value: "180+", label: "Projects Shipped" },
                  { value: "$2B+", label: "Revenue Influenced" },
                  { value: "99.4%", label: "Client Satisfaction" },
                  { value: "40+", label: "Squad Specialists" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border/60 bg-surface/40 p-4 text-center backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-surface/70"
                  >
                    <p className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Category Sidebar + Projects Grid */}
        <section className="mx-auto mt-12 max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr] lg:items-start lg:gap-8">
            {/* Sticky Filter Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-border/70 bg-card/70 p-4 shadow-lg backdrop-blur-xl">
                <div className="flex flex-wrap gap-2">
                  {categoryTabs.map((tab) => {
                    const isActive = selectedCategory === tab.value;
                    return (
                      <button
                        key={tab.value}
                        type="button"
                        onClick={() => setSelectedCategory(tab.value)}
                        className={cn(
                          "rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                          isActive
                            ? "bg-white text-black shadow-[0_0_18px_rgba(255,255,255,0.3)]"
                            : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white",
                        )}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Magnetic className="mt-4 block">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center rounded-full bg-[#9AFD0D] px-6 py-4 text-sm sm:text-base font-bold text-black transition-all hover:brightness-110 hover:shadow-[0_0_28px_rgba(154,253,13,0.45)]"
                >
                  Book a Free Consultation
                </a>
              </Magnetic>
            </aside>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
              {filteredProjects.map((project, idx) => {
                const wide = idx % 4 === 2;
                const aspect = wide
                  ? "aspect-[16/9]"
                  : idx % 3 === 0
                    ? "aspect-[4/5]"
                    : idx % 3 === 1
                      ? "aspect-[3/4]"
                      : "aspect-[16/10]";
                return (
                  <Reveal
                    key={project.id}
                    delay={(idx % 4) * 40}
                    variant="up"
                    className={cn(wide && "sm:col-span-2")}
                  >
                    <article
                      onClick={() => setActiveCaseStudy(project)}
                      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border/70 bg-card p-3 sm:p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 cursor-pointer"
                    >
                      {/* Image Container */}
                      <div
                        className={cn(
                          "relative w-full overflow-hidden rounded-[20px] bg-neutral-900",
                          aspect,
                        )}
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                        {/* Wide card: title & description overlay */}
                        {wide && (
                          <div className="absolute bottom-3 left-3 right-3 z-10 sm:bottom-5 sm:left-16 sm:right-5">
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                              {project.name}
                            </h3>
                            <p className="mt-1 line-clamp-2 max-w-xl text-xs sm:text-sm text-zinc-300 leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Text Content (regular cards) */}
                      {!wide && (
                        <div className="flex flex-1 flex-col p-2 sm:p-3">
                          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#9AFD0D]">
                            {project.name}
                          </h3>
                          <p className="mt-1.5 line-clamp-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      )}
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Impact Section */}
        <section className="mx-auto mt-28 max-w-7xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-surface/30 p-8 sm:p-14 lg:p-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white shadow-xs">
                  <span className="size-2 rounded-full bg-[#9AFD0D]" />
                  The six2eight Standard
                </span>
                <h2 className="text-display mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  We don't build vanity metrics.
                  <br />
                  <span className="text-[#9AFD0D]">We engineer revenue engines.</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
                  Every button, typography choice, database schema, and animation is designed to
                  shorten time-to-value, reduce friction, and amplify customer lifetime value.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Zero handoff friction between design & engineering",
                    "Continuous weekly sprint deployments",
                    "Mobile-first, responsive, and cross-browser tested",
                    "Enterprise security standards and sub-second loading",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 shrink-0 text-[#9AFD0D] mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-300 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Card */}
              <div className="rounded-[24px] border border-primary/30 bg-[#0e0f12] p-8 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="size-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Free Strategy Call
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-white tracking-tight">
                    Have a project in mind?
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    Book a complimentary 30-minute discovery session with our senior product
                    architects. Get clear estimates and architectural options with zero commitment.
                  </p>
                </div>

                <div className="mt-8">
                  <Magnetic>
                    <a
                      href={CALENDLY}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#9AFD0D] px-6 py-3.5 text-sm font-bold text-black transition-transform hover:scale-102 active:scale-98 shadow-md"
                    >
                      Book a Free Consultation
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global CTA with Animated Moving Circle in Top Right Corner */}
        <section className="mx-auto my-28 max-w-7xl px-5 lg:px-8">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-[2rem] bg-primary p-12 text-primary-foreground md:p-20">
              {/* Moving Circle in Right Top Corner */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-12 z-10 pointer-events-none select-none flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Rotating Circular Typography Badge */}
                  <div className="absolute size-28 sm:size-36 md:size-44 animate-[spin_18s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="size-full overflow-visible">
                      <path
                        id="workCirclePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[7px] sm:text-[7.5px] font-bold uppercase tracking-[0.24em] fill-black/85">
                        <textPath href="#workCirclePath" startOffset="0%">
                          • SIX2EIGHT • START A PROJECT • DIGITAL GROWTH
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Inner Moving Video Circle */}
                  <div className="relative size-18 sm:size-24 md:size-28 rounded-full overflow-hidden border-2 border-black/30 bg-black shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-105">
                    <video
                      src="/eye-loop.mp4"
                      poster="/eye-frame.jpg"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="size-full object-cover scale-125"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-display relative max-w-2xl sm:max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Ready to build something iconic together?
              </h2>
              <p className="relative mt-5 max-w-xl opacity-80">
                Let’s talk about your roadmap, targets, and launch deadlines. Plug our senior squad
                into your workflow today.
              </p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="pill group relative mt-10 inline-flex items-center gap-2 bg-ink px-7 py-3.5 font-medium text-foreground transition-transform hover:scale-105"
              >
                Start a Project{" "}
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Case Study Detail Modal */}
      {activeCaseStudy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveCaseStudy(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[28px] border border-border bg-[#0f1013] p-6 sm:p-10 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveCaseStudy(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#9AFD0D] px-3 py-1 text-xs font-bold text-black">
                {activeCaseStudy.year}
              </span>
              <span className="text-xs font-semibold text-zinc-400">{activeCaseStudy.client}</span>
            </div>

            <h2 className="text-display mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {activeCaseStudy.name}
            </h2>
            <p className="mt-1 text-base text-zinc-300 font-medium">{activeCaseStudy.tagline}</p>

            {/* Modal Image */}
            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
              <img
                src={activeCaseStudy.image}
                alt={activeCaseStudy.name}
                className="size-full object-cover"
              />
              <div className="absolute bottom-4 right-4 rounded-xl bg-black/80 px-4 py-2 border border-white/15 text-right">
                <span className="text-xl font-bold text-[#9AFD0D] block leading-none">
                  {activeCaseStudy.metric}
                </span>
                <span className="text-xs text-zinc-300 font-medium">
                  {activeCaseStudy.metricLabel}
                </span>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9AFD0D]">
                  The Challenge
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeCaseStudy.challenge}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9AFD0D]">
                  Our Solution
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeCaseStudy.solution}
                </p>
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9AFD0D]">
                Key Impact & Deliverables
              </h4>
              <ul className="mt-3 space-y-2">
                {activeCaseStudy.impact.map((imp) => (
                  <li
                    key={imp}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-[#9AFD0D] mt-0.5" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-zinc-400 mr-2">Technologies:</span>
              {activeCaseStudy.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-zinc-400">Want similar results for your business?</p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#9AFD0D] px-6 py-2.5 text-xs sm:text-sm font-bold text-black transition-transform hover:scale-105"
              >
                Discuss This Project
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
