import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Globe2,
  ChevronDown,
  ChevronUp,
  Send,
  Star,
  Users2,
  Headphones,
  Phone,
  Plus,
  Sparkles,
  X,
  Search,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { motion } from "motion/react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { Magnetic } from "@/components/site/magnetic";
import { CALENDLY } from "@/data/site";
import { cn } from "@/lib/utils";
import { saveInquiry } from "@/lib/inbox";

import { allCountries, type CountryCode } from "@/data/countries";

export type { CountryCode };
export const countryCodes = allCountries;

const siteUrl = "https://ozyrah.vercel.app";
const title = "Contact Ozyrah — Start Your Digital Growth & Engineering Project";
const description =
  "Partner with Ozyrah. Request a custom quote or schedule a 30-min strategy session for custom web development, UI/UX systems, e-commerce, or AI automation.";
const keywords =
  "contact Ozyrah, hire web developers, digital agency inquiry, custom software development quote, UI UX design consultation, AI automation agency, web design agency contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/contact` },
      { property: "og:site_name", content: "Ozyrah" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/contact` }],
  }),
  component: ContactPage,
});

const serviceOptions = [
  "UI & UX Design Services",
  "Web Design Services",
  "Mobile App Design Services",
  "Branding & Identity Services",
  "Web Development Services",
  "WordPress Development Services",
  "Shopify Development Services",
  "Webflow Development Services",
  "Digital Marketing Services",
  "Paid Search & Social Ads",
  "SEO & Growth Marketing",
  "Content & Influencer Marketing",
];

const budgetOptions = [
  "< $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const timelineOptions = [
  "Immediate (Next 1-2 weeks)",
  "1 – 2 Months",
  "3 – 6 Months",
  "Flexible / Exploring",
];

const hearAboutOptions = [
  {
    value: "Google Search",
    label: "Google Search",
    subtext: "Search engine query, technical guide, or blog",
    icon: Search,
    color: "text-emerald-400",
  },
  {
    value: "Client Referral",
    label: "Client Referral / Colleague",
    subtext: "Direct recommendation from a founder or partner",
    icon: Users2,
    color: "text-cyan-400",
  },
  {
    value: "LinkedIn",
    label: "LinkedIn",
    subtext: "Company updates, technical case studies, or leadership",
    icon: ArrowUpRight,
    color: "text-blue-400",
  },
  {
    value: "Dribbble / Behance",
    label: "Dribbble / Behance / Portfolio",
    subtext: "Design exploration shots, UI concepts, or showcases",
    icon: Sparkles,
    color: "text-pink-400",
  },
  {
    value: "Twitter / X",
    label: "Twitter / X",
    subtext: "Founder discussions, tech launches, or threads",
    icon: Globe2,
    color: "text-sky-400",
  },
  {
    value: "Other",
    label: "Other Discovery Channel",
    subtext: "Podcast, newsletter, event, or direct discovery",
    icon: Plus,
    color: "text-amber-400",
  },
];

const contactFaqs = [
  {
    q: "How fast will I hear back from your team?",
    a: "We guarantee a written response within 12 business hours. If your project has immediate urgency, booking a slot on our Calendly gets you directly in front of a senior partner this week.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Absolutely. Before sharing proprietary technology, IP, or confidential business plans, we are happy to countersign your mutual NDA or provide our standard reciprocal NDA.",
  },
  {
    q: "How are projects priced?",
    a: "We work with transparent, milestone-based fixed fees for defined roadmaps, and dedicated monthly squads for continuous product evolution. No hidden surprises or surprise scope creep invoices.",
  },
  {
    q: "Who will actually work on my project?",
    a: "Unlike traditional agencies that pitch with senior executives and delegate to junior trainees, Ozyrah squads are staffed strictly with senior designers, engineers, and growth directors with 6+ years of domain experience.",
  },
  {
    q: "Can you take over an existing codebase or design system?",
    a: "Yes. Many of our clients come to us for rescue missions, refactoring, performance overhauls, or next-level feature additions to existing React, Next.js, Webflow, or Shopify stacks.",
  },
];

function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(countryCodes[0]!);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Development"]);
  const [isCustomServiceOpen, setIsCustomServiceOpen] = useState(false);
  const [customServiceInput, setCustomServiceInput] = useState("");
  const [customServicesList, setCustomServicesList] = useState<string[]>([]);
  const [budget, setBudget] = useState("$25,000 – $50,000");
  const [timeline, setTimeline] = useState("1 – 2 Months");
  const [message, setMessage] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [hearAboutDropdownOpen, setHearAboutDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const countryTriggerRef = useRef<HTMLButtonElement>(null);
  const hearAboutRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click and ESC key
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(e.target as Node) &&
        countryTriggerRef.current &&
        !countryTriggerRef.current.contains(e.target as Node)
      ) {
        setCountryDropdownOpen(false);
      }
      if (hearAboutRef.current && !hearAboutRef.current.contains(e.target as Node)) {
        setHearAboutDropdownOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setCountryDropdownOpen(false);
        setHearAboutDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const filteredCountries = countryCodes.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dialCode.includes(countrySearch) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase()),
  );

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv],
    );
  };

  const handleAddCustomService = () => {
    const trimmed = customServiceInput.trim();
    if (!trimmed) {
      toast.error("Please enter your custom service requirement.");
      return;
    }
    if (!selectedServices.includes(trimmed)) {
      setSelectedServices((prev) => [...prev, trimmed]);
    }
    if (!customServicesList.includes(trimmed)) {
      setCustomServicesList((prev) => [...prev, trimmed]);
    }
    toast.success(`Custom service "${trimmed}" added!`);
    setCustomServiceInput("");
  };

  const removeCustomService = (customSrv: string) => {
    setSelectedServices((prev) => prev.filter((s) => s !== customSrv));
    setCustomServicesList((prev) => prev.filter((s) => s !== customSrv));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@ozyrah.com");
    setCopiedEmail(true);
    toast.success("hello@ozyrah.com copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      toast.error("Please provide both your name and email address.");
      return;
    }
    setIsSubmitting(true);

    const formattedPhone = phoneNumber.trim()
      ? `${selectedCountry.dialCode} ${phoneNumber.trim()}`
      : undefined;

    // Include any typed custom service if user hasn't hit 'Add' yet
    const finalServices = [...selectedServices];
    if (customServiceInput.trim() && !finalServices.includes(customServiceInput.trim())) {
      finalServices.push(customServiceInput.trim());
    }

    try {
      saveInquiry({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: formattedPhone,
        company: company.trim() || undefined,
        website: website.trim() || undefined,
        services: finalServices.length > 0 ? finalServices : ["Web Development"],
        budget,
        timeline,
        message: message.trim() || undefined,
        hearAbout: hearAbout || undefined,
        source: "/contact",
      });
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Thank you! Your project request has been logged successfully.");
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen overflow-x-hidden bg-background text-foreground"
    >
      <Header />

      <main id="main-content" className="relative pb-24 pt-32 sm:pt-40">
        {/* Ambient Top Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[420px] w-[800px] max-w-full rounded-full bg-[#9AFD0D]/6 blur-[140px]"
        />

        {/* Section 1: Hero Header */}
        <section className="relative px-5 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#9AFD0D]/40 bg-[#121214] px-4 py-1.5 text-xs font-semibold text-white shadow-[0_0_18px_-2px_rgba(154,253,13,0.3)]">
                <span className="size-2 rounded-full bg-[#9AFD0D] shadow-[0_0_8px_#9AFD0D] animate-pulse" />
                <span>Let&apos;s Build Together</span>
                <span className="text-white/40">|</span>
                <span className="text-neutral-300 font-normal">Direct Squad Access</span>
              </div>
            </Reveal>

            <Reveal delay={30}>
              <h1 className="text-display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Let&apos;s turn your vision into{" "}
                <span className="text-shine italic text-primary">unstoppable growth.</span>
              </h1>
            </Reveal>

            <Reveal delay={60}>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Whether you need a full product redesign, high-velocity web development, brand
                identity, or conversion-focused growth systems — our senior squad is ready to plug
                in.
              </p>
            </Reveal>

            {/* Quick Actions Bar */}
            <Reveal delay={90}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
                <Magnetic>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noreferrer"
                    className="pill group inline-flex items-center gap-2.5 bg-primary px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-primary-foreground shadow-[0_0_24px_rgba(154,253,13,0.4)] transition-all hover:scale-105 active:scale-95"
                  >
                    <Calendar className="size-4.5 text-primary-foreground" />
                    <span>Book a 30-min Strategy Call</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                  </a>
                </Magnetic>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="pill inline-flex items-center gap-2 border border-border/80 bg-surface/60 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-medium text-foreground backdrop-blur transition-all hover:border-primary/50 hover:bg-surface/90 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="size-4 text-primary" />
                      <span className="text-primary font-semibold">hello@ozyrah.com Copied</span>
                    </>
                  ) : (
                    <>
                      <Mail className="size-4 text-neutral-400" />
                      <span>hello@ozyrah.com</span>
                      <Copy className="size-3.5 text-neutral-500 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </Reveal>

            {/* Guarantee badges */}
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 border-t border-border/40 pt-8 sm:grid-cols-4">
              {[
                { icon: Clock, label: "Response Time", detail: "< 12 business hrs" },
                { icon: ShieldCheck, label: "NDA Guarantee", detail: "Protected IP" },
                { icon: Users2, label: "Senior Squads", detail: "Direct partner access" },
                { icon: Globe2, label: "Timezones", detail: "12 zones covered" },
              ].map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border/60 bg-surface/30 p-3 text-center backdrop-blur-sm"
                >
                  <div className="mx-auto flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-3.5" />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-foreground">{label}</p>
                  <p className="text-[11px] text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Main Contact Form & Side Context */}
        <section className="mx-auto mt-20 max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Interactive Project Discovery Intake Form */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] border border-border/80 bg-card p-6 sm:p-10 lg:p-12 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
                {submitted ? (
                  <div className="py-12 sm:py-16 text-center animate-in fade-in zoom-in-95 duration-300">
                    <div className="mx-auto flex size-16 sm:size-20 items-center justify-center rounded-full bg-[#9AFD0D]/15 text-[#9AFD0D] border border-[#9AFD0D]/40 shadow-[0_0_30px_rgba(154,253,13,0.35)]">
                      <CheckCircle2 className="size-8 sm:size-10" />
                    </div>
                    <h3 className="text-display mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                      Brief Received!
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Thank you, <span className="text-foreground font-semibold">{fullName}</span>.
                      Our founders and strategy leads are reviewing your project scope right now.
                      Expect our response at{" "}
                      <span className="text-primary font-medium">{email}</span> within 12 hours.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={CALENDLY}
                        target="_blank"
                        rel="noreferrer"
                        className="pill inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_rgba(154,253,13,0.3)] transition-transform hover:scale-105"
                      >
                        <Calendar className="size-4" />
                        Lock In a Strategy Call Now
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setMessage("");
                        }}
                        className="pill inline-flex items-center gap-2 border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground hover:bg-surface/80"
                      >
                        Send another note
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="eyebrow border-primary/40 shadow-[0_0_12px_-2px_rgba(154,253,13,0.3)]">
                          Project Intake
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">Step 1 of 2</span>
                      </div>
                      <h2 className="text-display mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        Tell us about your project
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Select the disciplines and details that best fit your scope.
                      </p>
                    </div>

                    {/* 1. Services Multi-Select Badges */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          1. What services do you need?
                        </label>
                        <span className="text-[11px] text-[#9AFD0D] font-medium hidden sm:inline">
                          Select multiple or add custom
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {serviceOptions.map((srv) => {
                          const active = selectedServices.includes(srv);
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => toggleService(srv)}
                              className={cn(
                                "rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border flex items-center gap-1.5",
                                active
                                  ? "border-primary bg-primary text-primary-foreground font-semibold shadow-[0_0_16px_rgba(154,253,13,0.3)]"
                                  : "border-border/80 bg-surface/50 text-neutral-300 hover:border-neutral-500 hover:text-white",
                              )}
                            >
                              <span>{srv}</span>
                              {active && <Check className="size-3.5 stroke-[2.5]" />}
                            </button>
                          );
                        })}

                        {/* User-added Custom Services */}
                        {customServicesList.map((customSrv) => (
                          <div
                            key={customSrv}
                            className="rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold border border-primary bg-primary text-primary-foreground shadow-[0_0_16px_rgba(154,253,13,0.3)] flex items-center gap-2"
                          >
                            <span>{customSrv}</span>
                            <button
                              type="button"
                              onClick={() => removeCustomService(customSrv)}
                              className="size-4 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-primary-foreground transition-colors cursor-pointer"
                              title={`Remove ${customSrv}`}
                            >
                              <X className="size-2.5 stroke-[3]" />
                            </button>
                          </div>
                        ))}

                        {/* Custom Service Toggle Button */}
                        <button
                          type="button"
                          onClick={() => setIsCustomServiceOpen((prev) => !prev)}
                          className={cn(
                            "rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border flex items-center gap-1.5",
                            isCustomServiceOpen
                              ? "border-primary bg-primary/20 text-[#9AFD0D] border-dashed shadow-[0_0_14px_rgba(154,253,13,0.25)]"
                              : "border-dashed border-border/80 bg-surface/40 text-neutral-300 hover:border-primary hover:text-[#9AFD0D]",
                          )}
                        >
                          <Sparkles className="size-3.5 text-[#9AFD0D]" />
                          <span>+ Custom</span>
                        </button>
                      </div>

                      {/* Expandable Custom Service Text Input */}
                      {isCustomServiceOpen && (
                        <div className="mt-3.5 rounded-2xl border border-primary/40 bg-[#16161D] p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
                          <label className="block text-xs font-semibold text-white mb-1.5 flex items-center gap-1.5">
                            <Sparkles className="size-3.5 text-[#9AFD0D]" />
                            <span>Add Custom Service or Technology</span>
                          </label>
                          <div className="flex flex-col sm:flex-row gap-2.5">
                            <input
                              type="text"
                              value={customServiceInput}
                              onChange={(e) => setCustomServiceInput(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  handleAddCustomService();
                                }
                              }}
                              placeholder="e.g. AI Autonomous Agents, Custom Web3 Integration..."
                              className="w-full flex-1 rounded-xl bg-surface border border-border px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                            <button
                              type="button"
                              onClick={handleAddCustomService}
                              className="pill inline-flex items-center justify-center gap-1.5 bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-[0_0_16px_rgba(154,253,13,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                            >
                              <Plus className="size-3.5 stroke-[3]" />
                              <span>Add Service</span>
                            </button>
                          </div>
                          <div className="mt-2.5 flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] text-muted-foreground">
                            <span className="shrink-0 text-neutral-400">Suggestions:</span>
                            {[
                              "AI Autonomous Agents",
                              "Custom Mobile App",
                              "Web3 Integration",
                              "Conversion Audit",
                            ].map((s) => (
                              <button
                                key={s}
                                type="button"
                                onClick={() => setCustomServiceInput(s)}
                                className="shrink-0 rounded-lg bg-surface/80 border border-white/5 px-2 py-0.5 text-neutral-300 hover:text-white hover:border-primary/40 transition-colors cursor-pointer"
                              >
                                +{s}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 2. Budget Selection */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        2. Expected Investment Budget
                      </label>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {budgetOptions.map((b) => {
                          const active = budget === b;
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setBudget(b)}
                              className={cn(
                                "rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer border",
                                active
                                  ? "border-primary bg-primary text-primary-foreground font-semibold shadow-[0_0_16px_rgba(154,253,13,0.3)]"
                                  : "border-border/80 bg-surface/50 text-neutral-300 hover:border-neutral-500 hover:text-white",
                              )}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 3. Timeline Selection */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        3. Target Launch Timeline
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        {timelineOptions.map((t) => {
                          const active = timeline === t;
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setTimeline(t)}
                              className={cn(
                                "rounded-2xl p-3 text-left text-xs font-medium transition-all cursor-pointer border flex flex-col justify-between min-h-[56px]",
                                active
                                  ? "border-primary bg-primary/10 text-primary border-2 shadow-[0_0_16px_rgba(154,253,13,0.15)]"
                                  : "border-border/80 bg-surface/50 text-neutral-300 hover:border-neutral-500 hover:text-white",
                              )}
                            >
                              <span>{t}</span>
                              <span className="text-[10px] text-muted-foreground mt-1">
                                {t.includes("Immediate") ? "Priority Sprint" : "Standard Cadence"}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 4. Contact Details Input Fields */}
                    <div className="space-y-4 pt-4 border-t border-border/60">
                      <label className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        4. Contact & Organization Details
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                            Your Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Alex Morgan"
                            className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                            Work Email <span className="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="alex@company.com"
                            className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Contact Number with Country Code Dropdown with Flags */}
                        <div className="relative">
                          <label className="block text-xs font-medium text-neutral-400 mb-1.5 flex items-center justify-between">
                            <span>
                              Contact Number <span className="text-primary">*</span>
                            </span>
                            <span className="text-[10px] text-neutral-500">
                              Includes Country Code
                            </span>
                          </label>
                          <div className="relative flex rounded-xl bg-surface border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/40 transition-all">
                            {/* Country Flag & Dial Code Selector */}
                            <button
                              type="button"
                              ref={countryTriggerRef}
                              onClick={() => setCountryDropdownOpen((prev) => !prev)}
                              className="group flex items-center gap-2 px-3 py-3 border-r border-border/80 bg-surface/80 hover:bg-surface text-xs font-semibold text-foreground transition-all cursor-pointer shrink-0 rounded-l-xl active:scale-[0.98]"
                              title={`${selectedCountry.name} (${selectedCountry.dialCode})`}
                              aria-haspopup="listbox"
                              aria-expanded={countryDropdownOpen}
                            >
                              <img
                                src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w80/${selectedCountry.code.toLowerCase()}.png 2x`}
                                width="20"
                                height="14"
                                alt=""
                                className="w-5 h-3.5 object-cover rounded-[3px] border border-white/20 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                              />
                              <span className="text-neutral-200 font-mono text-xs font-semibold">
                                {selectedCountry.dialCode}
                              </span>
                              <ChevronDown
                                className={cn(
                                  "size-3 text-neutral-400 transition-transform duration-200",
                                  countryDropdownOpen && "rotate-180 text-primary",
                                )}
                              />
                            </button>

                            {/* Phone Input */}
                            <div className="relative flex-1 flex items-center">
                              <Phone className="size-3.5 text-neutral-500 absolute left-3 pointer-events-none" />
                              <input
                                type="tel"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="555 123 4567"
                                className="w-full bg-transparent pl-8 pr-3 py-3 text-sm text-foreground placeholder:text-neutral-500 outline-none rounded-r-xl"
                              />
                            </div>
                          </div>

                          {/* Country Code Dropdown Modal - All 197 Countries */}
                          {countryDropdownOpen && (
                            <div
                              ref={countryDropdownRef}
                              className="absolute left-0 top-full mt-2 w-80 sm:w-96 max-h-84 overflow-hidden flex flex-col rounded-2xl border border-white/10 bg-[#141419]/95 shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06),0_12px_36px_rgba(154,253,13,0.08)] z-50 backdrop-blur-2xl animate-in fade-in-0 zoom-in-95 duration-150"
                            >
                              <div className="p-3 border-b border-white/10 bg-[#101014]/90">
                                <div className="flex items-center justify-between mb-2.5 px-0.5">
                                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                                    Country Dial Code
                                  </span>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#9AFD0D]/15 text-[#9AFD0D] border border-[#9AFD0D]/30 font-bold">
                                    {allCountries.length} Countries
                                  </span>
                                </div>
                                <div className="relative">
                                  <Search className="size-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                  <input
                                    type="text"
                                    value={countrySearch}
                                    onChange={(e) => setCountrySearch(e.target.value)}
                                    placeholder="Search country name or dial code..."
                                    className="w-full rounded-xl bg-[#1C1C24] pl-9 pr-8 py-2 text-xs text-white placeholder:text-neutral-500 outline-none border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                                    autoFocus
                                  />
                                  {countrySearch ? (
                                    <button
                                      type="button"
                                      onClick={() => setCountrySearch("")}
                                      className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-neutral-400 hover:text-white"
                                    >
                                      <X className="size-3" />
                                    </button>
                                  ) : (
                                    <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[9px] font-mono text-neutral-500 bg-white/5 border border-white/10 rounded pointer-events-none">
                                      ESC
                                    </kbd>
                                  )}
                                </div>
                              </div>

                              <div className="overflow-y-auto p-1.5 space-y-0.5 divide-y divide-white/[0.03] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/40">
                                {filteredCountries.length === 0 ? (
                                  <div className="px-3 py-8 text-xs text-neutral-400 text-center">
                                    No countries found matching &quot;{countrySearch}&quot;
                                  </div>
                                ) : (
                                  filteredCountries.map((c) => {
                                    const isSelected =
                                      selectedCountry.code === c.code &&
                                      selectedCountry.dialCode === c.dialCode;
                                    return (
                                      <button
                                        key={`${c.code}-${c.dialCode}`}
                                        type="button"
                                        onClick={() => {
                                          setSelectedCountry(c);
                                          setCountryDropdownOpen(false);
                                          setCountrySearch("");
                                        }}
                                        className={cn(
                                          "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all cursor-pointer text-left group",
                                          isSelected
                                            ? "bg-primary/20 text-white font-semibold border-l-2 border-l-primary"
                                            : "text-neutral-300 hover:bg-white/8 hover:text-white",
                                        )}
                                      >
                                        <div className="flex items-center gap-2.5 truncate">
                                          <img
                                            src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                                            srcSet={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png 2x`}
                                            width="20"
                                            height="14"
                                            alt=""
                                            className="w-5 h-3.5 object-cover rounded-[3px] border border-white/20 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                                            loading="lazy"
                                          />
                                          <span className="truncate group-hover:text-white">
                                            {c.name}
                                          </span>
                                          <span className="text-[10px] text-neutral-500 font-mono">
                                            ({c.code})
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0 ml-2">
                                          <span
                                            className={cn(
                                              "font-mono text-[11px] px-2 py-0.5 rounded-md transition-colors",
                                              isSelected
                                                ? "bg-primary text-black font-bold"
                                                : "bg-white/5 text-neutral-300 group-hover:bg-primary/20 group-hover:text-primary",
                                            )}
                                          >
                                            {c.dialCode}
                                          </span>
                                          {isSelected && (
                                            <Check className="size-3.5 text-primary stroke-[2.5]" />
                                          )}
                                        </div>
                                      </button>
                                    );
                                  })
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Company or Brand */}
                        <div>
                          <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                            Company or Brand
                          </label>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Acme Corp"
                            className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Current Website */}
                      <div>
                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                          Current Website (if applicable)
                        </label>
                        <input
                          type="text"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="https://acme.com"
                          className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                          Project Scope & Core Objectives
                        </label>
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="What problems are you solving? Any specific technologies, design references, target launch deadlines, or requirements?"
                          className="w-full rounded-xl bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Action Button */}
                    <div className="pt-4 border-t border-border/60">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-full bg-primary hover:bg-[#8cee07] text-primary-foreground font-bold py-4 px-8 text-base transition-all shadow-[0_4px_24px_rgba(154,253,13,0.4)] flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="size-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                            <span>Dispatching Brief...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Project Request</span>
                            <Send className="size-4.5" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-muted-foreground mt-3">
                        Protected by client confidentiality. We reply in under 12 business hours.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Direct Connect & Agency Credentials */}
            <div className="lg:col-span-4 space-y-6">
              {/* Card 1: Book Direct Call */}
              <div className="rounded-[28px] border border-primary/40 bg-surface/50 p-6 sm:p-7 shadow-[0_0_30px_-5px_rgba(154,253,13,0.18)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Calendar className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">Skip the Back-and-Forth</h3>
                    <p className="text-xs text-muted-foreground">30-min discovery session</p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Jump straight on a call with our partners. We&apos;ll audit your current digital
                  footprint and evaluate options live.
                </p>

                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                  className="pill group mt-5 flex items-center justify-between bg-primary px-5 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_0_18px_rgba(154,253,13,0.35)] transition-all hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-black animate-ping" />
                    Available Slots This Week
                  </span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                </a>
              </div>

              {/* Card 2: Direct Contact Coordinates */}
              <div className="rounded-[28px] border border-border/80 bg-card p-6 sm:p-7">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Direct Inquiries
                </h3>

                <ul className="space-y-4">
                  <li>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="group flex items-start gap-3 w-full text-left cursor-pointer"
                    >
                      <div className="size-9 rounded-xl bg-surface border border-border flex items-center justify-center text-primary shrink-0 transition-colors group-hover:border-primary/50">
                        <Mail className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">General & Proposals</div>
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          hello@ozyrah.com
                        </div>
                      </div>
                    </button>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="size-9 rounded-xl bg-surface border border-border flex items-center justify-center text-primary shrink-0">
                      <Headphones className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Founder & Leadership</div>
                      <div className="text-sm font-semibold text-foreground">syed@ozyrah.com</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="size-9 rounded-xl bg-surface border border-border flex items-center justify-center text-primary shrink-0">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Locations</div>
                      <div className="text-sm font-semibold text-foreground">
                        London · San Francisco · Global
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Card 3: What happens next */}
              <div className="rounded-[28px] border border-border/80 bg-card p-6 sm:p-7">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  What Happens Next?
                </h3>

                <div className="space-y-3.5 text-xs text-neutral-300">
                  <div className="flex gap-3">
                    <span className="font-mono text-primary font-bold">01</span>
                    <p>
                      <strong className="text-foreground">Scope Review:</strong> Our tech lead and
                      creative director dissect your requirements.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono text-primary font-bold">02</span>
                    <p>
                      <strong className="text-foreground">Discovery Call:</strong> A focused 30-min
                      meeting to align on deliverables, timeline, and fit.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-mono text-primary font-bold">03</span>
                    <p>
                      <strong className="text-foreground">Custom Roadmap:</strong> A fixed proposal
                      with interactive Figma wireframes and development sprints.
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Client Satisfaction</span>
                  <div className="flex items-center gap-1 font-semibold text-foreground">
                    <Star className="size-3.5 fill-primary text-primary" />
                    <span>4.9 / 5.0 (200+ Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: FAQ Accordion */}
        <section className="mx-auto mt-28 max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <span className="eyebrow border-primary/40 shadow-[0_0_14px_-2px_rgba(154,253,13,0.3)]">
              Got Questions?
            </span>
            <h2 className="text-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              Everything you need to know about partnering with Ozyrah.
            </p>
          </div>

          <div className="mt-12 divide-y divide-border/80 rounded-3xl border border-border/80 bg-card p-6 sm:p-8">
            {contactFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between text-left text-base sm:text-lg font-semibold text-foreground transition-colors hover:text-primary cursor-pointer gap-4"
                  >
                    <span>{faq.q}</span>
                    <div className="size-7 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <ChevronUp className="size-4 text-primary" />
                      ) : (
                        <ChevronDown className="size-4 text-neutral-400" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <Toaster position="bottom-right" />
    </motion.div>
  );
}
