import { createFileRoute } from "@tanstack/react-router";
import { heroImages } from "@/data/site";
import { Toaster } from "@/components/ui/sonner";
import { Preloader } from "@/components/site/preloader";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { ShowcaseReveal } from "@/components/site/showcase-reveal";
import { Services, ClientLogos } from "@/components/site/services";
import { Portfolio } from "@/components/site/portfolio";
import { Testimonials, Strategy } from "@/components/site/testimonials";
import { Process, ConsultCta } from "@/components/site/process";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

const title = "Ozyrah — Premier Digital Growth, Web Engineering & AI Agency";
const description =
  "Accelerate your business with Ozyrah. We engineer high-velocity websites, custom web applications, e-commerce platforms, UI/UX systems, and AI automation.";
const keywords =
  "digital growth agency, web development, custom web applications, UI/UX design, AI automation, e-commerce development, Shopify Plus, Next.js, Ozyrah, full-stack agency, high-conversion websites";
const canonical = "https://ozyrah.vercel.app/";
const socialImage =
  "https://ozyrah.vercel.app/assets/aistudio/6r3e5mCKqUAiw9qid5DGOEfkmuuXt60h7Z2usv1F_9d8f4512.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "Ozyrah" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: socialImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImage },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <Header />
      <main id="main-content">
        <Hero />
        <ShowcaseReveal />
        <Services />
        <ClientLogos />
        <Portfolio />
        <Testimonials />
        <Strategy />
        <Process />
        <ConsultCta />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
