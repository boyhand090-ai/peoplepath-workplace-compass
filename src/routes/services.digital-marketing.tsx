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
import { digitalMarketingData } from "@/data/servicesData";

const siteUrl = "https://ozyrah.vercel.app";
const { meta, slug } = digitalMarketingData;

export const Route = createFileRoute("/services/digital-marketing")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      ...(meta.keywords ? [{ name: "keywords", content: meta.keywords }] : []),
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/services/${slug}` },
      { property: "og:site_name", content: "Ozyrah" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: meta.title },
      { name: "twitter:description", content: meta.description },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/services/${slug}` }],
  }),
  component: DigitalMarketingPage,
});

function DigitalMarketingPage() {
  return (
    <div className="webdev-page flex min-h-screen flex-col bg-background text-foreground antialiased">
      <Header />
      <main id="main-content" className="w-full flex-1">
        <Hero data={digitalMarketingData.hero} />
        <SubServices data={digitalMarketingData.subservices} />
        <BrandsLogo />
        <Projects data={digitalMarketingData.projects} />
        <PainPoints data={digitalMarketingData.pain_points} />
        <OurProcess data={digitalMarketingData.process} />
        <Strategy data={digitalMarketingData.strategy} />
        <Testimonials />
        <TechStack data={digitalMarketingData.tech_stack} />
        <Faqs data={digitalMarketingData.faqs} />
        <ContactForm defaultService="Digital Marketing Services" />
      </main>
      <Footer />
    </div>
  );
}
