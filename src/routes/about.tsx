import { createFileRoute } from "@tanstack/react-router";
import { useState, type MouseEvent } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  TrendingUp,
  Handshake,
  Linkedin,
  Facebook,
  Globe2,
  Trophy,
  Users2,
  Clock,
} from "lucide-react";
import { Preloader } from "@/components/site/preloader";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { CountUp } from "@/components/site/count-up";
import { Magnetic } from "@/components/site/magnetic";
import { LazyImage } from "@/components/site/lazy-image";
import { ReviewCarousel } from "@/components/site/review-carousel";
import { VisionariesCarousel } from "@/components/site/visionaries-carousel";
import { CALENDLY } from "@/data/site";

const siteUrl = "https://ozyrah.vercel.app";
const title = "About Ozyrah — Global Digital Growth, Design & Engineering Studio";
const description =
  "Meet Ozyrah: an elite squad of product designers, software engineers, and growth strategists building connected, high-impact digital systems for world-class brands.";
const keywords =
  "about Ozyrah, digital agency team, software engineering, UI/UX design studio, web development agency, tech leadership, digital transformation experts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/about` },
      { property: "og:site_name", content: "Ozyrah" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/about` }],
  }),
  component: About,
});

const stats: [string, string, string][] = [
  ["180+", "Projects shipped", "Sites, platforms and campaigns launched end to end."],
  ["40+", "People worldwide", "A distributed crew spanning a dozen time zones."],
  ["4.9", "Average review", "Clients keep coming back — and say so publicly."],
  ["12+", "Industries", "Fintech, health, retail, education and beyond."],
  ["20+", "Years of craft", "Senior leadership with two decades in digital."],
  ["90+", "Brands partnered", "From seed-stage startups to global enterprises."],
];
const people: [string, string][] = [
  ["Maya Chen", "Founder & CEO"],
  ["Daniel Ortiz", "Co-Founder & CPO"],
  ["Priya Raman", "Head of Engineering"],
  ["Leo Martins", "Design Lead"],
  ["Amara Okafor", "Operations"],
  ["Jonas Berg", "Creative Director"],
  ["Sofia Rossi", "Senior PM"],
  ["Omar Haddad", "Head of Growth"],
];
const founder = {
  name: "Syed Md Talha",
  role: "Founder & CEO",
  image: "/assets/aistudio/1776519339994_81198518.png",
  linkedin: "https://www.linkedin.com/in/syedmdtalha26/",
  facebook: "https://www.facebook.com/syedmdtalha26/",
  bio: [
    "Syed founded Ozyrah on a simple belief: great digital work happens when strategy, design and engineering sit at one table instead of handing problems over a wall.",
    "Over the years he has guided founders and enterprises through launches, rebuilds and growth pushes — always hands-on, always allergic to shortcuts that don't scale.",
    "When he isn't in a sprint review, you'll find him sketching product ideas, mentoring young designers and engineers, or quietly rewriting a landing page at midnight.",
  ],
  quote: "Build things people love to use, and growth takes care of itself.",
};
const approach = [
  [Sparkles, "Always moving", "Hand-offs across time zones keep work progressing day and night."],
  [Zap, "Speed with substance", "We ship quickly, but every pixel earns its place."],
  [TrendingUp, "Built to grow", "Systems and code that scale as your business does."],
  [Handshake, "Shared wins", "We measure success by your metrics, not our portfolio."],
] as const;
const words = ["Strategy", "Design", "Technology", "Marketing", "Automation", "Growth"];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [t, setT] = useState("");
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setT(`perspective(900px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-2px)`);
  };
  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => setT("")}
      style={{ transform: t }}
      className={`rounded-3xl border border-border/70 bg-card transition-all duration-300 ease-out hover:border-border hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Preloader />
      <Header />
      <main id="main-content">
        {/* Intro */}
        <section className="relative px-5 pb-16 pt-40 lg:px-8">
          {/* Lightweight non-blocking ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 h-[320px] w-[600px] max-w-full rounded-full bg-primary/8 blur-[120px]"
          />

          <div className="relative mx-auto max-w-5xl text-center animate-fade-up">
            <div>
              <span className="eyebrow border-primary/40 shadow-[0_0_18px_-2px_rgba(154,253,13,0.35)]">
                About Ozyrah
              </span>
            </div>
            <h1 className="text-display mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
              We make hard problems look <span className="text-shine italic">simple.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              A full-service growth studio connecting strategy, design, technology and marketing —
              so every part of your business pulls in the same direction.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noreferrer"
                  className="pill group inline-flex items-center gap-2 bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105"
                >
                  Book a Free Call
                  <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                </a>
              </Magnetic>
              <a
                href="#team-photo"
                className="pill inline-flex items-center gap-2 border border-border/80 bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
              >
                Meet the Team
              </a>
            </div>

            {/* Hero quick-proof badges - immediate paint & zero layout shift */}
            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 border-t border-border/40 pt-8 sm:grid-cols-4">
              {[
                { icon: Globe2, label: "Global Reach", detail: "12 Time Zones" },
                { icon: Trophy, label: "Proven Impact", detail: "180+ Shipped" },
                { icon: Users2, label: "Senior Squads", detail: "40+ Specialists" },
                { icon: Clock, label: "Rapid Delivery", detail: "Continuous Sprints" },
              ].map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border/60 bg-surface/30 p-3.5 text-center backdrop-blur-sm transition-all hover:border-primary/30"
                >
                  <div className="mx-auto flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-foreground">{label}</p>
                  <p className="text-[11px] text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Word marquee */}
        <div className="border-y border-border py-6">
          <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex w-max shrink-0 gap-12 pr-12">
              {[...words, ...words, ...words, ...words].map((w, i) => (
                <span
                  key={i}
                  className={`text-4xl font-semibold tracking-tight md:text-6xl ${i % 2 ? "text-outline" : "text-foreground"}`}
                >
                  {w} <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Team photo */}
        <div id="team-photo" className="group mx-auto mt-24 max-w-7xl px-5 lg:px-8">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-[2rem] border border-border">
              <LazyImage
                src="/assets/team.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="The Ozyrah team"
                width={1600}
                height={912}
                aspectRatio="aspect-[1600/912]"
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-8">
                <p className="pill inline-flex border border-border bg-ink/70 px-4 py-2 text-sm backdrop-blur">
                  40+ people · 12 time zones · 1 team
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mission / vision */}
        <section className="content-visibility-auto mx-auto mt-24 grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          {[
            [
              "Mission",
              "Help ambitious teams turn ideas into products and growth engines that are easy to use and ready to scale.",
            ],
            [
              "Vision",
              "Be the partner growing brands trust to set the standard for connected, user-first digital systems.",
            ],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 50} variant={i ? "right" : "left"}>
              <TiltCard className="h-full border-primary/30 p-10 shadow-[0_0_30px_-5px_rgba(154,253,13,0.2)] hover:border-primary/60 hover:shadow-[0_0_40px_-2px_rgba(154,253,13,0.35)]">
                <span className="eyebrow border-primary/40 shadow-[0_0_16px_-2px_rgba(154,253,13,0.35)]">
                  {t}
                </span>
                <p className="mt-5 text-2xl font-medium leading-snug md:text-3xl">{d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </section>

        {/* Stats */}
        <section className="content-visibility-auto mx-auto mt-32 max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="eyebrow border-primary/40 shadow-[0_0_18px_-2px_rgba(154,253,13,0.35)]">
              Strategy
            </span>
          </Reveal>
          <Reveal delay={40}>
            <h2 className="text-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Why teams pick us for <span className="text-primary">growth</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {stats.map(([n, t, d], i) => (
              <Reveal
                key={t}
                delay={i * 35}
                className="group bg-background p-8 transition-colors duration-300 hover:bg-surface"
              >
                <CountUp
                  value={n}
                  className="text-6xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary"
                />
                <p className="mt-4 font-semibold">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="content-visibility-auto mx-auto mt-32 max-w-7xl px-5 lg:px-8">
          <Reveal>
            <VisionariesCarousel />
          </Reveal>
        </section>

        {/* Founder */}
        <section className="content-visibility-auto relative mx-auto mt-32 max-w-7xl px-5 lg:px-8">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="size-1.5 rounded-full bg-primary" /> Our Founder
              </span>
            </Reveal>
            <Reveal delay={40}>
              <h2 className="text-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                The mind behind <span className="text-primary">Ozyrah</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid items-stretch gap-12 lg:grid-cols-[5fr_6fr]">
              {/* Portrait */}
              <Reveal variant="left" className="h-full">
                <div className="relative mx-auto w-full max-w-md">
                  <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface shadow-[0_0_35px_-8px_rgba(154,253,13,0.25)] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_45px_-5px_rgba(154,253,13,0.38)]">
                    <LazyImage
                      src={founder.image}
                      fallbackSrc="/assets/founder.jpg"
                      alt={founder.name}
                      aspectRatio="aspect-[4/5]"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                      <div>
                        <p className="text-lg font-semibold tracking-tight text-foreground">
                          {founder.name}
                        </p>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {founder.role}
                        </p>
                      </div>
                      <span className="rounded-full border border-primary/40 bg-surface/80 px-3 py-1 text-xs font-medium text-foreground shadow-[0_0_12px_rgba(154,253,13,0.35)] backdrop-blur-sm">
                        Ozyrah
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Bio */}
              <Reveal variant="right" delay={50} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-primary/30 bg-card p-8 shadow-[0_0_35px_-8px_rgba(154,253,13,0.22)] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_45px_-5px_rgba(154,253,13,0.35)] md:p-10">
                  <div>
                    <h3 className="text-display text-3xl font-semibold tracking-tight md:text-4xl">
                      {founder.name}
                    </h3>
                    <p className="mt-2.5 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-primary">
                      <span aria-hidden className="h-px w-8 bg-primary/80" />
                      {founder.role}
                    </p>
                    <blockquote className="mt-6 rounded-2xl border border-border/70 bg-surface/50 p-6">
                      <p className="text-lg font-medium italic leading-relaxed text-foreground/90 md:text-xl">
                        “{founder.quote}”
                      </p>
                    </blockquote>
                    <div className="mt-6 space-y-4">
                      {founder.bio.map((p, i) => (
                        <p
                          key={p.slice(0, 24)}
                          className={
                            i === 0
                              ? "text-base leading-relaxed text-foreground"
                              : "text-sm leading-relaxed text-muted-foreground"
                          }
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border/60 pt-6">
                    <div className="flex flex-wrap gap-3">
                      <Magnetic>
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="pill group inline-flex items-center gap-2 border border-primary/40 bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground shadow-[0_0_18px_-2px_rgba(154,253,13,0.35)] transition-all duration-300 hover:border-primary hover:bg-surface hover:shadow-[0_0_26px_rgba(154,253,13,0.6)]"
                        >
                          <Linkedin className="size-4 text-primary transition-colors group-hover:text-primary group-hover:drop-shadow-[0_0_6px_#9AFD0D]" />
                          Connect on LinkedIn
                          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </a>
                      </Magnetic>
                      <Magnetic>
                        <a
                          href={founder.facebook}
                          target="_blank"
                          rel="noreferrer"
                          className="pill group inline-flex items-center gap-2 border border-primary/40 bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground shadow-[0_0_18px_-2px_rgba(154,253,13,0.35)] transition-all duration-300 hover:border-primary hover:bg-surface hover:shadow-[0_0_26px_rgba(154,253,13,0.6)]"
                        >
                          <Facebook className="size-4 text-primary transition-colors group-hover:text-primary group-hover:drop-shadow-[0_0_6px_#9AFD0D]" />
                          Follow on Facebook
                          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </a>
                      </Magnetic>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="content-visibility-auto mx-auto mt-32 max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="eyebrow">Our Approach</span>
          </Reveal>
          <Reveal delay={40}>
            <h2 className="text-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              How we make a difference
            </h2>
          </Reveal>
          <ul className="mt-14 border-t border-border">
            {approach.map(([Icon, t, d], i) => (
              <Reveal
                as="li"
                key={t}
                delay={i * 40}
                variant="left"
                className="group relative grid items-center gap-4 border-b border-border py-10 transition-all duration-300 hover:pl-6 md:grid-cols-[80px_1fr_1fr_48px]"
              >
                <span className="font-mono text-primary">0{i + 1}</span>
                <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-4xl">
                  {t}
                </h3>
                <p className="text-muted-foreground">{d}</p>
                <span className="hidden size-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary shadow-[0_0_20px_rgba(154,253,13,0.35)] drop-shadow-[0_0_6px_rgba(154,253,13,0.4)] transition-all duration-300 group-hover:rotate-12 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_28px_rgba(154,253,13,0.7)] md:inline-flex">
                  <Icon className="size-5" />
                </span>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Testimonials */}
        <section className="content-visibility-auto mx-auto mt-32 max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white shadow-xs">
                <span className="size-2 rounded-full bg-[#9AFD0D] shadow-[0_0_8px_#9AFD0D]" />
                Testimonials
              </div>
            </Reveal>
            <Reveal delay={40}>
              <h2 className="text-display mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                Hear from those who've seen
                <br />
                the change!
              </h2>
            </Reveal>
          </div>
          <div className="mt-14">
            <ReviewCarousel />
          </div>
        </section>

        {/* CTA */}
        <section className="content-visibility-auto mx-auto my-32 max-w-7xl px-5 lg:px-8">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-[2rem] bg-primary p-12 text-primary-foreground md:p-20">
              {/* Moving Circle in Right Top Corner */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-12 z-10 pointer-events-none select-none flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Rotating Circular Typography Badge */}
                  <div className="absolute size-28 sm:size-36 md:size-44 animate-[spin_18s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="size-full overflow-visible">
                      <path
                        id="ctaCirclePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[7px] sm:text-[7.5px] font-bold uppercase tracking-[0.24em] fill-black/85">
                        <textPath href="#ctaCirclePath" startOffset="0%">
                          • OZYRAH • START A PROJECT • DIGITAL GROWTH
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
                Senior growth squads, ready when you are.
              </h2>
              <p className="relative mt-5 max-w-xl opacity-80">
                Plug our cross-functional team into your workflow to design, build and grow your
                next big thing.
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
      <Footer />
    </div>
  );
}
