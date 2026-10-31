export interface ServiceItemData {
  id: string;
  title: string;
  shortTitle: string;
  category: "Design" | "Development" | "Marketing & Ads";
  subtitle: string;
  icon: string;
  href: string;
}

export interface ServiceCategoryGroup {
  category: "Design" | "Development" | "Marketing & Ads";
  items: ServiceItemData[];
}

export const ALL_MENU_SERVICES: ServiceItemData[] = [
  // Design Services
  {
    id: "ui-ux-design",
    title: "UI & UX Design Services",
    shortTitle: "UI & UX Design",
    category: "Design",
    subtitle: "Web & Mobile app design",
    icon: "/assets/dropdown/ui-ux-design.svg",
    href: "/services/ui-ux-design",
  },
  {
    id: "web-design",
    title: "Web Design Services",
    shortTitle: "Web Design",
    category: "Design",
    subtitle: "Modern websites that convert",
    icon: "/assets/dropdown/web-design.svg",
    href: "/services/web-design",
  },
  {
    id: "mobile-app-design",
    title: "Mobile App Design Services",
    shortTitle: "Mobile App Design",
    category: "Design",
    subtitle: "Seamless iOS & Android design",
    icon: "/assets/dropdown/mobile-app.svg",
    href: "/services/mobile-app-design",
  },
  {
    id: "branding-identity",
    title: "Branding & Identity Services",
    shortTitle: "Branding & Identity",
    category: "Design",
    subtitle: "Identity that stands out",
    icon: "/assets/dropdown/branding.svg",
    href: "/services/branding-identity",
  },

  // Development Services
  {
    id: "web-development",
    title: "Web Development Services",
    shortTitle: "Web Development",
    category: "Development",
    subtitle: "Built for speed & growth",
    icon: "/assets/dropdown/web-development.svg",
    href: "/services/web-development",
  },
  {
    id: "wordpress-development",
    title: "WordPress Development Services",
    shortTitle: "WordPress Development",
    category: "Development",
    subtitle: "Easy to manage & scale",
    icon: "/assets/dropdown/wordpress-1.svg",
    href: "/services/wordpress-development",
  },
  {
    id: "shopify-development",
    title: "Shopify Development Services",
    shortTitle: "Shopify Development",
    category: "Development",
    subtitle: "Sell more with Shopify",
    icon: "/assets/dropdown/shopify-1.svg",
    href: "/services/shopify-development",
  },
  {
    id: "webflow-development",
    title: "Webflow Development Services",
    shortTitle: "Webflow Development",
    category: "Development",
    subtitle: "Custom sites, no compromises",
    icon: "/assets/dropdown/webflow-1.svg",
    href: "/services/webflow-development",
  },

  // Advertisement & Marketing Services
  {
    id: "digital-marketing",
    title: "Digital Marketing Services",
    shortTitle: "Digital Marketing",
    category: "Marketing & Ads",
    subtitle: "Data-driven campaigns that scale",
    icon: "/assets/dropdown/digital-marketing.svg",
    href: "/services/digital-marketing",
  },
  {
    id: "paid-ads",
    title: "Paid Search & Social Ads",
    shortTitle: "Paid Search & Social Ads",
    category: "Marketing & Ads",
    subtitle: "High-ROI Google & Meta ads",
    icon: "/assets/dropdown/paid-ads.svg",
    href: "/services/paid-ads",
  },
  {
    id: "seo-marketing",
    title: "SEO & Growth Marketing",
    shortTitle: "SEO & Growth Marketing",
    category: "Marketing & Ads",
    subtitle: "Organic search ranking & authority",
    icon: "/assets/dropdown/seo-marketing.svg",
    href: "/services/seo-marketing",
  },
  {
    id: "content-marketing",
    title: "Content & Influencer Marketing",
    shortTitle: "Content & Influencer Marketing",
    category: "Marketing & Ads",
    subtitle: "Attract, engage & retain buyers",
    icon: "/assets/dropdown/content-marketing.svg",
    href: "/services/content-marketing",
  },
];

export const SERVICE_CATEGORIES: ServiceCategoryGroup[] = [
  {
    category: "Design",
    items: ALL_MENU_SERVICES.filter((s) => s.category === "Design"),
  },
  {
    category: "Development",
    items: ALL_MENU_SERVICES.filter((s) => s.category === "Development"),
  },
  {
    category: "Marketing & Ads",
    items: ALL_MENU_SERVICES.filter((s) => s.category === "Marketing & Ads"),
  },
];

export const ALL_SERVICE_TITLES: string[] = ALL_MENU_SERVICES.map((s) => s.title);

/**
 * Normalizes any input service name (e.g., from defaultService or URL) to the matching service title.
 */
export function normalizeServiceName(input?: string): string {
  if (!input) return "Web Development Services";
  const clean = input.trim().toLowerCase();

  const found = ALL_MENU_SERVICES.find(
    (s) =>
      s.title.toLowerCase() === clean ||
      s.shortTitle.toLowerCase() === clean ||
      s.id.toLowerCase() === clean ||
      s.href.toLowerCase().includes(clean),
  );

  if (found) return found.title;

  // Partial heuristics
  if (clean.includes("shopify") || clean.includes("commerce"))
    return "Shopify Development Services";
  if (clean.includes("wordpress")) return "WordPress Development Services";
  if (clean.includes("webflow")) return "Webflow Development Services";
  if (clean.includes("seo") || clean.includes("growth")) return "SEO & Growth Marketing";
  if (clean.includes("paid") || clean.includes("ads")) return "Paid Search & Social Ads";
  if (clean.includes("content") || clean.includes("influencer"))
    return "Content & Influencer Marketing";
  if (clean.includes("digital") || clean.includes("automation"))
    return "Digital Marketing Services";
  if (clean.includes("brand")) return "Branding & Identity Services";
  if (clean.includes("mobile") || clean.includes("app")) return "Mobile App Design Services";
  if (clean.includes("ui") || clean.includes("ux")) return "UI & UX Design Services";
  if (clean.includes("design")) return "Web Design Services";

  return input;
}
