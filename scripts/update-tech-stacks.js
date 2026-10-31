import fs from "fs";
import path from "path";

const servicesPath = path.resolve(process.cwd(), "src/data/servicesData.ts");
let servicesContent = fs.readFileSync(servicesPath, "utf8");

const serviceItemsMap = {
  uiUxDesignData: [
    { name: "Figma", image: "/assets/tools/figma.svg" },
    { name: "ProtoPie", image: "/assets/tools/protopie.svg" },
    { name: "Framer", image: "/assets/tools/framer.svg" },
    { name: "Lottie", image: "/assets/tools/lottie.svg" },
  ],
  webDesignData: [
    { name: "Figma", image: "/assets/tools/figma.svg" },
    { name: "Webflow", image: "/assets/tools/webflow.svg" },
    { name: "Spline 3D", image: "/assets/tools/spline.svg" },
    { name: "Illustrator", image: "/assets/tools/illustrator.svg" },
  ],
  mobileAppDesignData: [
    { name: "Figma", image: "/assets/tools/figma.svg" },
    { name: "ProtoPie", image: "/assets/tools/protopie.svg" },
    { name: "Lottie Files", image: "/assets/tools/lottie.svg" },
    { name: "Xcode Specs", image: "/assets/tools/xcode.svg" },
  ],
  brandingIdentityData: [
    { name: "Adobe Illustrator", image: "/assets/tools/illustrator.svg" },
    { name: "Adobe Photoshop", image: "/assets/tools/photoshop.svg" },
    { name: "Figma Brand Kits", image: "/assets/tools/figma.svg" },
    { name: "InDesign", image: "/assets/tools/indesign.svg" },
  ],
  wordpressDevData: [
    { name: "WordPress 6+", image: "/assets/tools/wordpress.svg" },
    { name: "ACF Pro", image: "/assets/tools/acf.svg" },
    { name: "PHP 8.3", image: "/assets/tools/php.svg" },
    { name: "MySQL / Redis", image: "/assets/tools/mysql.svg" },
  ],
  shopifyDevData: [
    { name: "Shopify Liquid", image: "/assets/tools/shopify.svg" },
    { name: "Shopify Plus", image: "/assets/tools/shopify.svg" },
    { name: "Storefront API", image: "/assets/tools/graphql.svg" },
    { name: "Klaviyo & ERP", image: "/assets/tools/klaviyo.svg" },
  ],
  webflowDevData: [
    { name: "Webflow", image: "/assets/tools/webflow.svg" },
    { name: "Finsweet Client-First", image: "/assets/tools/finsweet.svg" },
    { name: "GSAP Motion", image: "/assets/tools/gsap.svg" },
    { name: "Zapier / Make", image: "/assets/tools/zapier.svg" },
  ],
  digitalMarketingData: [
    { name: "Google Analytics 4", image: "/assets/tools/ga4.svg" },
    { name: "Klaviyo", image: "/assets/tools/klaviyo.svg" },
    { name: "HubSpot CRM", image: "/assets/tools/hubspot.svg" },
    { name: "Segment CDP", image: "/assets/tools/segment.svg" },
  ],
  paidAdsData: [
    { name: "Google Ads", image: "/assets/tools/google-ads.svg" },
    { name: "Meta Ads Manager", image: "/assets/tools/meta-ads.svg" },
    { name: "LinkedIn Campaign", image: "/assets/tools/linkedin-ads.svg" },
    { name: "Triple Whale / Hyros", image: "/assets/tools/triple-whale.svg" },
  ],
  seoMarketingData: [
    { name: "Ahrefs Enterprise", image: "/assets/tools/ahrefs.svg" },
    { name: "SEMrush", image: "/assets/tools/semrush.svg" },
    { name: "Google Search Console", image: "/assets/tools/gsc.svg" },
    { name: "Screaming Frog", image: "/assets/tools/screaming-frog.svg" },
  ],
  contentMarketingData: [
    { name: "CreatorIQ", image: "/assets/tools/creatoriq.svg" },
    { name: "Premiere Pro", image: "/assets/tools/premiere.svg" },
    { name: "CapCut Pro", image: "/assets/tools/capcut.svg" },
    { name: "Sprout Social", image: "/assets/tools/sprout-social.svg" },
  ],
};

let replacedCount = 0;
for (const [serviceVar, items] of Object.entries(serviceItemsMap)) {
  const serviceRegex = new RegExp(
    `(export const ${serviceVar}: FullServiceData = [\\s\\S]*?tech_stack:\\s*\\{[\\s\\S]*?items:\\s*\\[)([\\s\\S]*?)(\\],\\s*\\n\\s*\\},\\s*\\n\\s*faqs:)`,
    "g",
  );

  const formattedItems =
    "\n" +
    items
      .map(
        (item) =>
          `      {\n        name: "${item.name}",\n        image: "${item.image}",\n      },`,
      )
      .join("\n") +
    "\n    ";

  const newContent = servicesContent.replace(serviceRegex, (match, prefix, oldItems, suffix) => {
    replacedCount++;
    return prefix + formattedItems + suffix;
  });
  servicesContent = newContent;
}

fs.writeFileSync(servicesPath, servicesContent);
console.log("Replaced tech stacks count: " + replacedCount);

// Also update siteData.ts
const siteDataPath = path.resolve(process.cwd(), "src/data/webdev/siteData.ts");
let siteDataContent = fs.readFileSync(siteDataPath, "utf8");

const siteTechRegex = /(tech_stack:\s*\{[\s\S]*?items:\s*\[)([\s\S]*?)(\],[\s\S]*?faqs:)/g;
const webDevItems = `
      {
        name: "react",
        image: "/assets/tools/react.svg",
      },
      {
        name: "next js",
        image: "/assets/tools/nextjs.svg",
      },
      {
        name: "TypeScript",
        image: "/assets/tools/typescript.svg",
      },
      {
        name: "Javascript",
        image: "/assets/tools/javascript.svg",
      },
    `;

let siteReplaced = 0;
siteDataContent = siteDataContent.replace(siteTechRegex, (match, prefix, oldItems, suffix) => {
  siteReplaced++;
  return prefix + webDevItems + suffix;
});

fs.writeFileSync(siteDataPath, siteDataContent);
console.log("Updated siteData.ts tech_stack icons: " + siteReplaced);
