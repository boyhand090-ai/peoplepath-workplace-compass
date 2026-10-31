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
import { brandingIdentityData } from "@/data/servicesData";

const siteUrl = "https://ozyrah.vercel.app";
const { meta, slug } = brandingIdentityData;

export const Route = createFileRoute("/services/branding-identity")({
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
  component: BrandingIdentityPage,
});

function BrandingIdentityPage() {
  return (
    <div className="webdev-page flex min-h-screen flex-col bg-background text-foreground antialiased">
      <Header />
      <main id="main-content" className="w-full flex-1">
        <Hero data={brandingIdentityData.hero} />
        <SubServices data={brandingIdentityData.subservices} />
        <BrandsLogo />
        <Projects data={brandingIdentityData.projects} />
        <PainPoints data={brandingIdentityData.pain_points} />
        <OurProcess data={brandingIdentityData.process} />
        <Strategy data={brandingIdentityData.strategy} />
        <Testimonials />
        <TechStack data={brandingIdentityData.tech_stack} />
        <Faqs data={brandingIdentityData.faqs} />
        <ContactForm defaultService="Branding & Identity Services" />
      </main>
      <Footer />
    </div>
  );
}
