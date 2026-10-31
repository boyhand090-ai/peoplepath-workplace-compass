import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/webdev/Hero";
import { SubServices } from "@/components/webdev/SubServices";
import { BrandsLogo } from "@/components/webdev/BrandsLogo";
import { Projects } from "@/components/webdev/Projects";
import { PainPoints } from "@/components/webdev/PainPoints";
import { OurProcess } from "@/components/webdev/OurProcess";
import { Strategy } from "@/components/webdev/Strategy";
import { Testimonials } from "@/components/webdev/Testimonials";
import { TechStack } from "@/components/webdev/TechStack";
import { Faqs } from "@/components/webdev/Faqs";
import { ContactForm } from "@/components/webdev/ContactForm";
import { Footer } from "@/components/webdev/Footer";

const siteUrl = "https://ozyrah.vercel.app";
const title = "Web Development Services — Custom Web Apps & High-Speed Sites | Ozyrah";
const description =
  "Custom, high-performance web development built to convert. Enterprise React, Next.js, headless CMS, and full-stack web applications engineered for speed and scale by Ozyrah.";
const keywords =
  "web development services, custom web applications, React developers, Next.js agency, full-stack web development, enterprise website engineering, frontend architecture, Ozyrah web development";

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/services/web-development` },
      { property: "og:site_name", content: "Ozyrah" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/services/web-development` }],
  }),
  component: WebDevelopmentPage,
});

function WebDevelopmentPage() {
  return (
    <div className="webdev-page flex min-h-screen flex-col bg-background text-foreground antialiased">
      <Header />
      <main id="main-content" className="w-full flex-1">
        <Hero />
        <SubServices />
        <BrandsLogo />
        <Projects />
        <PainPoints />
        <OurProcess />
        <Strategy />
        <Testimonials />
        <TechStack />
        <Faqs />
        <ContactForm defaultService="Web Development Services" />
      </main>
      <Footer />
    </div>
  );
}
