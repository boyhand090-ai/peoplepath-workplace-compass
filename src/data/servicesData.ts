import { siteData } from "./webdev/siteData";

export interface ServiceMeta {
  title: string;
  description: string;
  keywords?: string;
}

export interface ServiceHero {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  image: string;
}

export interface ServiceSubserviceCard {
  heading: string;
  description: string;
  image: string;
}

export interface ServiceSubservices {
  block_title: string;
  main_title: string;
  cards: ServiceSubserviceCard[];
}

export interface ServiceProjectItem {
  title: string;
  permalink: string;
  image: string;
  colSpan: string;
  tag: string;
  mobileHidden: boolean;
}

export interface ServiceProjects {
  title: string;
  button_url: string;
  items: ServiceProjectItem[];
}

export interface ServicePainPointItem {
  heading: string;
  description: string;
  svg?: string;
}

export interface ServicePainPoints {
  block_title: string;
  main_title: string;
  items: ServicePainPointItem[];
}

export interface ServiceProcessItem {
  title: string;
  description: string;
  image: string;
}

export interface ServiceProcess {
  blockTitle: string;
  mainTitle: string;
  descriptions: string;
  items: ServiceProcessItem[];
}

export interface ServiceStrategyItem {
  heading: string;
  description: string;
  image: string;
}

export interface ServiceStrategy {
  blockTitle: string;
  mainTitle: string;
  bgImage: string;
  items: ServiceStrategyItem[];
}

export interface ServiceTechItem {
  name: string;
  image: string;
}

export interface ServiceTechStack {
  title: string;
  description: string;
  items: ServiceTechItem[];
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceFaqs {
  block_title: string;
  right_title: string;
  left_title: string;
  image: string;
  button_text: string;
  button_url: string;
  items: ServiceFaqItem[];
}

export interface FullServiceData {
  slug: string;
  serviceName: string;
  category: "Design Services" | "Development Services" | "Advertisement";
  meta: ServiceMeta;
  hero: ServiceHero;
  subservices: ServiceSubservices;
  projects: ServiceProjects;
  pain_points: ServicePainPoints;
  process: ServiceProcess;
  strategy: ServiceStrategy;
  tech_stack: ServiceTechStack;
  faqs: ServiceFaqs;
}

// 1. UI & UX Design Services
export const uiUxDesignData: FullServiceData = {
  slug: "ui-ux-design",
  serviceName: "UI & UX Design",
  category: "Design Services",
  meta: {
    title: "UI & UX Design Services — Human-Centered Digital Products | Ozyrah",
    description:
      "Transform user journeys with intuitive, human-centered UI & UX design. Design systems, wireframing, interactive prototypes, and high-converting UX by Ozyrah.",
    keywords:
      "UI UX design services, user experience design agency, Figma design systems, UX research, conversion rate optimization, product design studio, Ozyrah design",
  },
  hero: {
    title: "Human-Centered UI & UX Design Services!",
    description:
      "<p>Great design isn't just about how it looks—it's how it works. We engineer user interfaces and journeys that eliminate friction, boost user delight, and systematically increase product retention.</p>",
    buttonLabel: "Book 30-min UX Consultation!",
    buttonUrl: "https://calendly.com/six2eight-sales/li-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "End-to-End UI & UX Design Engineered for Conversion!",
    cards: [
      {
        heading: "User Research & Personas",
        description:
          "Deep dive into user motivations, behavior patterns, and pain points through qualitative interviews and quantitative telemetry.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "Wireframing & Prototyping",
        description:
          "Rapid low- and high-fidelity clickable prototypes that allow early user testing and swift stakeholder alignment before code is written.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "Design Systems & Tokens",
        description:
          "Modular, scalable Figma component libraries with WCAG accessibility tokens, speeding up development and unifying brand touchpoints.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "Interaction & Micro-Animations",
        description:
          "Thoughtful micro-interactions, smooth state transitions, and tactile feedback that make digital products feel alive and rewarding.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "Usability Testing & Heatmaps",
        description:
          "Rigorous user testing sessions and session recording analysis to expose drop-offs and optimize user journey flows.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "Conversion Rate Optimization (CRO)",
        description:
          "Data-driven UI enhancements crafted to optimize sign-up flows, checkout funnels, and core onboarding milestones.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "Mobile & Tablet UX",
        description:
          "Ergonomic thumb-zone layouts and touch gesture behaviors optimized for mobile web and native viewport viewports.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "Developer Handoff & Specs",
        description:
          "Pixel-precise Figma redlines, inspectable tokens, and engineering documentation to guarantee fidelity during build.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "UI/UX Work That Elevates Engagement and Product Growth!",
    button_url: "/work",
    items: [
      {
        title: "Userpath Analytics UX",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/userpath-service-project.webp",
        colSpan: "col-span-2",
        tag: "UI & UX Design",
        mobileHidden: false,
      },
      {
        title: "Sixpay Fintech App",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-1",
        tag: "UI & UX Design",
        mobileHidden: false,
      },
      {
        title: "Aura Creative Suite",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/Frame.png",
        colSpan: "col-span-1",
        tag: "UI & UX Design",
        mobileHidden: false,
      },
      {
        title: "Sereni Mind Wellness UI",
        permalink: "/work",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/03/senerimind-service-project.webp",
        colSpan: "col-span-2",
        tag: "UI & UX Design",
        mobileHidden: true,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "Common UI & UX Pitfalls We Solve For Fast-Growing Teams",
    items: [
      {
        heading: "High Drop-Off Rates",
        description:
          "We analyze user friction points and redesign confusing paths to keep users progressing smoothly toward key actions.",
      },
      {
        heading: "Inconsistent Design Systems",
        description:
          "We replace fragmented styles with centralized, atomic design libraries that ensure unified branding across all screens.",
      },
      {
        heading: "Low Feature Adoption",
        description:
          "We restructure visual hierarchy and interactive hints so users naturally uncover and embrace your product's highest-value tools.",
      },
      {
        heading: "Developer Handoff Friction",
        description:
          "We provide clear design tokens, auto-layout components, and explicit edge-case states so developers never have to guess.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "A Disciplined, User-First UI & UX Design Process!",
    descriptions:
      "<p>We bridge the gap between creative visual intuition and measurable business impact through an iterative, research-grounded design methodology.</p>",
    items: [
      {
        title: "Discovery & User Empathy",
        description:
          "We map your product vision, interview stakeholders, and profile key target personas to establish foundational design objectives.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "Information Architecture & Flows",
        description:
          "We organize sitemaps, navigation hierarchies, and user journey paths to ensure intuitive logical flow throughout the app.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "Low-Fidelity Wireframes",
        description:
          "We outline structural page layouts and functional zones rapidly, iterating on feedback before investing in high-fidelity visuals.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "High-Fidelity Visual Design",
        description:
          "We infuse brand personality, typography, color harmony, and accessibility tokens into polished, contemporary screen designs.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Interactive Prototyping",
        description:
          "We craft dynamic, clickable prototypes that simulate production animations, micro-interactions, and real device transitions.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/QABugFixing.webp",
      },
      {
        title: "Usability Testing & Design Handoff",
        description:
          "We validate interfaces with real users, iterate on findings, and deliver exhaustive engineering documentation.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why industry leaders trust six2eight for UI & UX design!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "45%+ Higher Engagement",
        description:
          "Every flow is optimized for user clarity and cognitive ease, directly elevating time-in-app and task completion rates.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "Scalable Design Systems",
        description:
          "Centralized Figma component libraries with auto-layout and variant states built to scale seamlessly across teams.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "WCAG Accessibility Compliant",
        description:
          "We design with strict contrast, screen-reader ergonomics, and focus states ensuring access for all audiences.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "2x Faster Dev Handoff",
        description:
          "Clean Figma variables, tokenized spacing, and interactive edge cases slash frontend ambiguity and QA revisions.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Data-Driven Decisions",
        description:
          "No subjective guesswork—every layout decision is grounded in empirical user testing and conversion optimization principles.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Mobile-First Ergonomics",
        description:
          "Designed specifically for modern touch ergonomics, thumb zones, and natural gesture behaviors across device scales.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our UI/UX Tool Stack </br>for Precision Product Design",
    description:
      "<p>We utilize the industry's most advanced design, prototyping, and design-system tooling to create flawless interfaces ready for immediate engineering execution.</p>",
    items: [
      {
        name: "Figma",
        image: "/assets/tools/figma.svg",
      },
      {
        name: "ProtoPie",
        image: "/assets/tools/protopie.svg",
      },
      {
        name: "Framer",
        image: "/assets/tools/framer.svg",
      },
      {
        name: "Lottie",
        image: "/assets/tools/lottie.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "Got Questions About UI & UX Design?",
    left_title: "Everything you need to know about our UX process",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "What is included in your UI & UX design deliverables?",
        answer:
          "<p>You receive full Figma design source files, interactive prototypes, user flow maps, complete design system components with variants, and detailed developer handoff redlines ready for production.</p>",
      },
      {
        question: "How do you conduct user research and usability testing?",
        answer:
          "<p>We combine 1-on-1 moderated user testing sessions with unmoderated task tracking, heatmap analytics, and competitor journey audits to validate that interfaces are both intuitive and frictionless.</p>",
      },
      {
        question: "How long does a complete UI & UX project usually take?",
        answer:
          "<p>Standard MVP product redesigns or new product design sprints typically range between 4 to 8 weeks, structured into fast iterative sprints with continuous stakeholder check-ins.</p>",
      },
      {
        question: "Do you design design systems that our engineers can easily use?",
        answer:
          "<p>Yes! We structure design tokens (colors, typography, spacing, border radii) that map 1:1 to modern CSS/Tailwind variables and React/Vue component libraries.</p>",
      },
    ],
  },
};

// 2. Web Design Services
export const webDesignData: FullServiceData = {
  slug: "web-design",
  serviceName: "Web Design",
  category: "Design Services",
  meta: {
    title: "Bespoke Web Design Services — High-Converting Digital Experiences | Ozyrah",
    description:
      "Award-winning web design crafted to elevate your brand and drive business conversions. Modern, responsive, and performance-tuned web design by Ozyrah.",
    keywords:
      "web design services, custom web design agency, responsive website design, modern web designer, corporate web design, luxury brand design, Ozyrah web design",
  },
  hero: {
    title: "Conversion-Focused Modern Web Design Services!",
    description:
      "<p>Your website is your company's #1 growth asset. We design bespoke, immersive digital experiences that capture brand prestige, build immediate trust, and compel visitors to take action.</p>",
    buttonLabel: "Get 30-min Design Consultation!",
    buttonUrl: "https://calendly.com/six2eight-sales/li-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "Custom Web Design That Converts Visitors Into Customers!",
    cards: [
      {
        heading: "Bespoke Brand Web Design",
        description:
          "Distinctive, visually arresting web design crafted from scratch with zero cookie-cutter templates.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "High-Converting Landing Pages",
        description:
          "Optimized marketing landing pages engineered for paid traffic campaigns, SaaS launches, and high lead gen.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "Responsive Mobile-First Layouts",
        description:
          "Flawless rendering and touch experiences across smartphones, tablets, laptops, and ultra-wide displays.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "Interactive 3D & Micro-Animations",
        description:
          "Delightful scroll-driven animations and subtle micro-interactions that keep visitors captivated.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "Typography & Visual Art Direction",
        description:
          "Harmonious typographic pairings, custom iconography, and graphic art direction aligned to your identity.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "Conversion & CTA Placement",
        description:
          "Strategic visual hierarchy and narrative pacing that naturally channels visitors toward booking or purchasing.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "E-Commerce Experience Design",
        description:
          "Product detail pages and streamlined catalog browsing designed to minimize bounce and increase average order value.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "Full Design System Handoff",
        description:
          "Comprehensive UI kits with all interactive states, color variables, and typography styles for turnkey builds.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "High-Impact Websites Designed for Visionary Brands!",
    button_url: "/work",
    items: [
      {
        title: "Aura Creative Studio",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/Frame.png",
        colSpan: "col-span-1",
        tag: "Web Design",
        mobileHidden: false,
      },
      {
        title: "Sixpay Digital Banking",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-1",
        tag: "Web Design",
        mobileHidden: false,
      },
      {
        title: "Cenario.ai Product Site",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/cenario.webp",
        colSpan: "col-span-2",
        tag: "Web Design",
        mobileHidden: false,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "Common Web Design Bottlenecks That Hurt Brand Growth",
    items: [
      {
        heading: "Outdated Brand Aesthetic",
        description:
          "We modernize fatigued websites into sleek, premium digital presences that immediately command respect and authority.",
      },
      {
        heading: "Low Visitor-to-Lead Conversion",
        description:
          "We restructure messaging hierarchy and call-to-actions so high-intent visitors immediately convert into qualified opportunities.",
      },
      {
        heading: "Poor Mobile Experience",
        description:
          "We craft thumb-friendly layouts and responsive typography ensuring your mobile traffic converts just as effectively as desktop.",
      },
      {
        heading: "Cluttered Information Architecture",
        description:
          "We distill complex service offerings into clean, scannable visual sections that guide buyers effortlessly.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "Our Streamlined, Creative Web Design Methodology!",
    descriptions:
      "<p>Every page we design balances visual artistry with conversion science. From moodboards to interactive prototypes, we build with precision.</p>",
    items: [
      {
        title: "Brand Immersion & Strategy",
        description:
          "We study your market positioning, analyze competitor websites, and define your creative direction.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "Information Architecture & Wireframes",
        description:
          "We outline structural layouts, section pacing, and content hierarchies across all key customer touchpoints.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "Moodboards & Art Direction",
        description:
          "We develop bespoke moodboards, color palettes, and typographic scales that capture your exact brand essence.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "High-Fidelity UI Page Design",
        description:
          "We craft striking, polished page designs with bespoke visual elements, custom badges, and high-impact hero sections.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Interactive Prototyping",
        description:
          "We assemble clickable prototypes demonstrating responsive behaviors, hover states, and smooth scroll transitions.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/QABugFixing.webp",
      },
      {
        title: "Complete Developer Handoff",
        description:
          "We deliver organized Figma files, asset exports, and precise responsive specs ready for production development.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why scaling companies choose six2eight for web design!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "Award-Caliber Visual Polish",
        description:
          "Contemporary, typography-forward layouts that elevate your brand reputation above competitor noise.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "Conversion-Engineered Pacing",
        description:
          "Calculated narrative structures and focal points that maximize reading comprehension and lead generation.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "Zero Generic Templates",
        description:
          "100% custom-crafted design solutions tailored to your unique audience, business model, and brand voice.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "Mobile-First Responsiveness",
        description:
          "Designed for tactile mobile ergonomics and responsive fluid layouts across all viewport resolutions.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Developer-Ready Delivery",
        description:
          "Built strictly with production layout grids and autolayout frames for frictionless frontend implementation.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Fast Turnaround Cycles",
        description:
          "Agile design sprints that deliver rapid prototype iterations without sacrificing aesthetic depth.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our Web Design Toolkit </br>for Cutting-Edge Web Experiences",
    description:
      "<p>We rely on top-tier design and prototyping tools to construct pixel-perfect, responsive web experiences with seamless motion.</p>",
    items: [
      {
        name: "Figma",
        image: "/assets/tools/figma.svg",
      },
      {
        name: "Webflow",
        image: "/assets/tools/webflow.svg",
      },
      {
        name: "Spline 3D",
        image: "/assets/tools/spline.svg",
      },
      {
        name: "Illustrator",
        image: "/assets/tools/illustrator.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "Common Questions About Web Design",
    left_title: "Answers to guide your next web design investment",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "Do you design custom websites or use existing themes?",
        answer:
          "<p>Every project is 100% custom-designed from scratch in Figma. We never use pre-made templates or copy competitor work.</p>",
      },
      {
        question: "Will the web design be optimized for mobile and tablets?",
        answer:
          "<p>Yes! We design dedicated desktop, tablet, and mobile views for all key pages to ensure your audience gets a world-class experience on every screen.</p>",
      },
      {
        question: "Can your team also code the website once the design is finished?",
        answer:
          "<p>Absolutely! As a full-service digital agency, our frontend and backend engineers build the designs into custom React, Next.js, Webflow, or WordPress sites.</p>",
      },
      {
        question: "How many revisions do we get during the design process?",
        answer:
          "<p>We work in collaborative sprints with structured review rounds, ensuring you have full control over the direction until every detail is approved.</p>",
      },
    ],
  },
};

// 3. Mobile App Design Services
export const mobileAppDesignData: FullServiceData = {
  slug: "mobile-app-design",
  serviceName: "Mobile App Design",
  category: "Design Services",
  meta: {
    title: "Mobile App Design Services — Native iOS & Android UI/UX | Ozyrah",
    description:
      "Native iOS and Android mobile app design services engineered for 5-star ratings, retention, and frictionless mobile interactions by Ozyrah.",
    keywords:
      "mobile app design, iOS app UI UX, Android app design, Flutter UI design, mobile product design, app interface design agency, Ozyrah mobile design",
  },
  hero: {
    title: "Seamless iOS & Android Mobile App Design Services!",
    description:
      "<p>Captivate mobile users from their very first swipe. We design intuitive, tactile native mobile interfaces that adhere to Apple Human Interface and Google Material 3 standards.</p>",
    buttonLabel: "Schedule App Design Strategy!",
    buttonUrl: "https://calendly.com/six2eight-sales/li-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "Native Mobile App Experiences Built for High Daily Active Users!",
    cards: [
      {
        heading: "iOS Human Interface Design",
        description:
          "Native iOS app architectures that leverage Swift UI ergonomics, dynamic islands, widgets, and SF Symbols.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "Android Material Design 3",
        description:
          "Fluid Android layouts adhering to Google Material You dynamic color themes and back-gesture ergonomics.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "Frictionless Onboarding UX",
        description:
          "Streamlined sign-up and permission flows designed to maximize Day-1 activation and prevent drop-offs.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "Thumb-Zone Navigation",
        description:
          "Ergonomic mobile interface layouts that keep primary actions comfortably within single-hand reach.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "Micro-Interactions & Haptics",
        description:
          "Tactile visual feedback and motion choreographies that make tapping, dragging, and refreshing delightful.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "In-App Monetization & Paywalls",
        description:
          "High-converting paywall screens, subscription tiers, and one-tap checkout flows optimized for mobile commerce.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "Dark Mode & Accessibility",
        description:
          "Native dark mode theming and high-contrast accessibility support ensuring usability across all lighting conditions.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "App Store & Play Store Assets",
        description:
          "High-impact preview screenshots and promotional graphics engineered to drive organic app store installs.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "Mobile Apps That Users Love Opening Every Single Day!",
    button_url: "/work",
    items: [
      {
        title: "Sixpay Mobile Wallet",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-2",
        tag: "Mobile App Design",
        mobileHidden: false,
      },
      {
        title: "Sereni Mind Wellness App",
        permalink: "/work",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/03/senerimind-service-project.webp",
        colSpan: "col-span-2",
        tag: "Mobile App Design",
        mobileHidden: false,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "Mobile App Experience Roadblocks We Conquer",
    items: [
      {
        heading: "High Day-1 Churn",
        description:
          "We simplify registration and onboarding so new users experience core product value within 30 seconds of launch.",
      },
      {
        heading: "Clunky Mobile Navigation",
        description:
          "We eliminate awkward multi-level menus in favor of intuitive bottom bars, sheets, and gesture-driven screens.",
      },
      {
        heading: "Platform Inconsistencies",
        description:
          "We tailor UX patterns respectfully to iOS and Android conventions, so users feel immediately at home.",
      },
      {
        heading: "Low Subscription Conversion",
        description:
          "We design transparent, value-highlighting paywalls that clearly articulate benefits and drive subscriptions.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "Our Native Mobile App Design Process!",
    descriptions:
      "<p>From user journeys to interactive mobile prototypes running on real smartphones, we validate every gesture before build.</p>",
    items: [
      {
        title: "App Strategy & Platform Scope",
        description:
          "We align on target platforms (iOS, Android, React Native, Flutter) and define primary user utility goals.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "User Journey & Wireflows",
        description:
          "We map out comprehensive screen-to-screen user flows, error edge cases, and empty states.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "UI Design & Component Kits",
        description:
          "We build native UI components aligned with your brand identity and native platform guidelines.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "Micro-Interactions & Gestures",
        description:
          "We design custom spring animations, swipe actions, pull-to-refresh, and bottom sheet physics.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Real-Device Clickable Testing",
        description:
          "We test clickable prototypes on real iPhones and Android handsets to evaluate ergonomics in hand.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/QABugFixing.webp",
      },
      {
        title: "Developer Redlines & Token Exports",
        description:
          "We supply exact layout specs, typography styles, vector assets, and Lottie animations to developers.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why founders choose six2eight for mobile app design!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "92%+ Onboarding Completion",
        description:
          "Friction-free onboarding journeys designed to turn casual downloads into dedicated daily active users.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "Native iOS & Android Guidelines",
        description:
          "Strict alignment with Apple HIG and Google Material 3 ensures seamless native platform acceptance.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "Ergonomic Touch Targets",
        description:
          "Every button, tap area, and swipe gesture is calibrated for comfortable single-handed use.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "Higher App Store Ratings",
        description:
          "Intuitive, bug-resistant interface design directly correlates with 5-star customer reviews.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Lottie & Motion Integration",
        description:
          "Lightweight, hardware-accelerated animations that delight users without draining mobile battery.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Ready for React Native / Swift",
        description:
          "Design specs organized to map cleanly into React Native, Flutter, Swift, or Kotlin codebases.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our Mobile Design Stack </br>for Native Smartphone Apps",
    description:
      "<p>We employ modern mobile prototyping and animation tools to deliver native interfaces ready for iOS & Android development.</p>",
    items: [
      {
        name: "Figma",
        image: "/assets/tools/figma.svg",
      },
      {
        name: "ProtoPie",
        image: "/assets/tools/protopie.svg",
      },
      {
        name: "Lottie Files",
        image: "/assets/tools/lottie.svg",
      },
      {
        name: "Xcode Specs",
        image: "/assets/tools/xcode.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "Mobile App Design FAQs",
    left_title: "Key considerations for your mobile app project",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "Do you design for both iOS and Android simultaneously?",
        answer:
          "<p>Yes, we design comprehensive cross-platform systems that share core brand elements while adapting gracefully to iOS and Android-specific navigation patterns.</p>",
      },
      {
        question: "Can I preview and test the mobile app design on my actual phone?",
        answer:
          "<p>Yes! We provide interactive Figma and ProtoPie prototypes that you can install and test directly on your mobile device just like a live app.</p>",
      },
      {
        question: "Do you provide App Store screenshot assets?",
        answer:
          "<p>Yes, we design marketing-ready App Store and Google Play screenshot assets that highlight key features and drive higher organic install conversions.</p>",
      },
    ],
  },
};

// 4. Branding & Identity Services
export const brandingIdentityData: FullServiceData = {
  slug: "branding-identity",
  serviceName: "Branding & Identity",
  category: "Design Services",
  meta: {
    title: "Branding & Visual Identity Design Services — Iconic Brand Systems | Ozyrah",
    description:
      "Craft an iconic, memorable brand identity. Logos, color systems, typography, and comprehensive brand guidelines that command authority by Ozyrah.",
    keywords:
      "branding agency, visual identity design, logo design studio, brand style guide, corporate identity, luxury branding, brand strategy agency, Ozyrah branding",
  },
  hero: {
    title: "Memorable Branding & Visual Identity Services!",
    description:
      "<p>Stand out in crowded markets with an unmistakable brand presence. We forge cohesive, timeless brand identities—from iconic logos to comprehensive design guidelines—that resonate with your audience.</p>",
    buttonLabel: "Start Brand Discovery Call!",
    buttonUrl: "https://calendly.com/six2eight-sales/li-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "Comprehensive Branding Solutions That Inspire Trust & Loyalty!",
    cards: [
      {
        heading: "Brand Strategy & Positioning",
        description:
          "Define your market niche, value proposition, competitive advantages, and brand archetype.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "Logo Design & Iconography",
        description:
          "Timeless, versatile vector logos, monograms, and icon marks engineered for digital and print media.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "Color Psychology & Systems",
        description:
          "Scientifically curated color palettes that evoke emotional resonance and ensure high digital contrast.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "Typography Hierarchy",
        description:
          "Distinctive headline, body, and monospace font pairings that give your brand a recognizable voice.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "Comprehensive Brand Guidelines",
        description:
          "Exhaustive 40+ page brand stylebooks defining logo clearspace, color codes, dos & don'ts, and usage rules.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "Social Media Brand Kits",
        description:
          "Ready-to-use template kits for LinkedIn, Instagram, X, and YouTube to maintain visual consistency.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "Brand Voice & Messaging",
        description:
          "Actionable guidelines on tone, tagline formulations, vocabulary, and communication pillars.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "Collateral & Pitch Decks",
        description:
          "Investor pitch decks, business stationery, business cards, and digital presentation templates.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "Brand Identities That Elevate Valuation and Customer Perception!",
    button_url: "/work",
    items: [
      {
        title: "Aura Visual Identity",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/Frame.png",
        colSpan: "col-span-2",
        tag: "Branding & Identity",
        mobileHidden: false,
      },
      {
        title: "Sixpay Fintech Branding",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-2",
        tag: "Branding & Identity",
        mobileHidden: false,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "Common Branding Challenges Modern Companies Face",
    items: [
      {
        heading: "Forgettable Brand Presence",
        description:
          "We develop distinctive, original visual marks and cohesive identity systems that make your business instantly memorable.",
      },
      {
        heading: "Inconsistent Cross-Channel Assets",
        description:
          "We eliminate scattered branding by delivering centralized, comprehensive guidelines that every team member can follow.",
      },
      {
        heading: "Lack of Buyer Trust",
        description:
          "A premium, unified brand image immediately signals enterprise stability, credibility, and authority to buyers.",
      },
      {
        heading: "Scalability Limitations",
        description:
          "We construct flexible vector brand systems that reproduce cleanly from a 16px favicon to a billboard banner.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "Our Strategic 5-Step Brand Identity Process!",
    descriptions:
      "<p>We uncover what makes your business unique, translating core values into a compelling visual identity that commands market leadership.</p>",
    items: [
      {
        title: "Brand Audit & Discovery",
        description:
          "We examine your company mission, market landscape, and audience psyche to unearth core differentiators.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "Concept Exploration",
        description:
          "We develop distinct creative visual directions and logo concepts, demonstrating real-world applications.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "Typography & Color Selection",
        description:
          "We refine color palettes, contrast ratios, and typographic systems that convey authority and style.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "Identity Extension & Mockups",
        description:
          "We apply the identity across stationery, websites, social cards, packaging, and digital interfaces.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Comprehensive Stylebook Handover",
        description:
          "We deliver full vector packages (SVG, EPS, AI, PNG) alongside a definitive brand guideline manual.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why founders partner with six2eight for brand identity!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "Timeless Aesthetic Value",
        description:
          "We craft brand marks built to endure decades, avoiding ephemeral micro-trends that age poorly.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "Enterprise Credibility",
        description:
          "Polished, cohesive identity systems that give startups the gravitas and authority of industry leaders.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "Trademark-Ready Vectors",
        description:
          "100% original, copyright-compliant vector marks designed for seamless international trademark registration.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "Comprehensive Deliverables",
        description:
          "Everything from logo lockups and favicon packs to investor deck templates and print-ready collateral.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Seamless Digital Integration",
        description:
          "Brand palettes and typography engineered specifically to translate effortlessly into CSS and web design.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Collaborative Iteration",
        description:
          "Direct access to senior brand directors ensures your vision is reflected in every curve and serif.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our Branding Arsenal </br>for Iconic Visual Systems",
    description:
      "<p>We work with industry-standard vector, raster, and layout tools to deliver pixel-perfect brand collateral for print and digital.</p>",
    items: [
      {
        name: "Adobe Illustrator",
        image: "/assets/tools/illustrator.svg",
      },
      {
        name: "Adobe Photoshop",
        image: "/assets/tools/photoshop.svg",
      },
      {
        name: "Figma Brand Kits",
        image: "/assets/tools/figma.svg",
      },
      {
        name: "InDesign",
        image: "/assets/tools/indesign.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "Branding & Identity FAQs",
    left_title: "Clarifying your brand creation journey",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "What formats do you provide for the final logo files?",
        answer:
          "<p>You receive all scalable master vector files (AI, EPS, SVG, PDF) and optimized raster exports (PNG with transparent backgrounds, JPG, WebP) in light, dark, and monochrome variations.</p>",
      },
      {
        question: "Do you help with naming and tagline development?",
        answer:
          "<p>Yes! Our brand strategy tier includes brand naming workshops, domain availability checks, and tagline crafting.</p>",
      },
      {
        question: "Will I fully own the intellectual property of the design?",
        answer:
          "<p>Yes, 100%. Upon completion and final payment, all intellectual property rights for the approved brand identity transfer completely to your company.</p>",
      },
    ],
  },
};

// 5. WordPress Development Services
export const wordpressDevData: FullServiceData = {
  slug: "wordpress-development",
  serviceName: "WordPress Development",
  category: "Development Services",
  meta: {
    title: "Custom WordPress Development Services — High-Speed & Enterprise Security | Ozyrah",
    description:
      "Enterprise custom WordPress development. Bespoke Gutenberg blocks, Advanced Custom Fields, WooCommerce, and headless setups engineered by Ozyrah.",
    keywords:
      "custom WordPress development, WordPress agency, headless WordPress, custom Gutenberg blocks, WooCommerce development, WordPress speed optimization, Ozyrah",
  },
  hero: {
    title: "High-Performance Custom WordPress Development Services!",
    description:
      "<p>Tired of slow, bloated WordPress templates that break with every update? We engineer custom, lightweight WordPress themes and Gutenberg block architectures built for blazing speed, enterprise security, and effortless team content editing.</p>",
    buttonLabel: "Get 30-min WordPress Consultation!",
    buttonUrl: "https://calendly.com/six2eight-sales/web-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "Custom WordPress Builds Engineered for Speed, Scale & Ease!",
    cards: [
      {
        heading: "Custom Gutenberg Block Development",
        description:
          "Bespoke, modular blocks that let your marketing team assemble custom pages effortlessly without breaking layouts.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "Advanced Custom Fields (ACF Pro)",
        description:
          "Tailored backend data architectures that make managing complex catalogs, case studies, and resources intuitive.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "WooCommerce E-Commerce",
        description:
          "Scalable e-commerce store builds with custom checkouts, payment integrations, and high-concurrency order handling.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "Speed & Core Web Vitals",
        description:
          "Advanced asset minification, Redis object caching, and database tuning to achieve 90+ Google PageSpeed ratings.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "Headless WordPress (REST / GraphQL)",
        description:
          "Leverage WordPress as a headless content engine paired with modern Next.js or React frontends.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "Security Hardening & Backups",
        description:
          "Enterprise firewall integration, automated offsite backups, two-factor auth, and zero-vulnerability coding.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "Seamless CMS Migrations",
        description:
          "Frictionless data migration from legacy platforms, Drupal, or older WordPress versions with zero SEO loss.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "Ongoing Maintenance & Audits",
        description:
          "Proactive monthly core updates, security patching, uptime monitoring, and staging environment management.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "WordPress Websites Trusted by Hundreds of Thousands of Visitors!",
    button_url: "/work",
    items: [
      {
        title: "GunMade Publication",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/userpath-service-project.webp",
        colSpan: "col-span-2",
        tag: "WordPress Development",
        mobileHidden: false,
      },
      {
        title: "Fiction Profits Portal",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-1",
        tag: "WordPress Development",
        mobileHidden: false,
      },
      {
        title: "Fortified Roofing Hub",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/Frame.png",
        colSpan: "col-span-1",
        tag: "WordPress Development",
        mobileHidden: false,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "Common WordPress Headaches We Eliminate Permanently",
    items: [
      {
        heading: "Bloated Theme Speed Bottlenecks",
        description:
          "We ditch heavy visual builders and off-the-shelf themes in favor of clean custom code loading under 1 second.",
      },
      {
        heading: "Plugin Conflicts & White Screens",
        description:
          "We replace dozens of unnecessary plugins with native custom functionality that never breaks upon update.",
      },
      {
        heading: "Cluttered, Confusing Admin",
        description:
          "We customize the WordPress dashboard so your marketing team can publish and edit content in seconds.",
      },
      {
        heading: "Security Vulnerabilities",
        description:
          "We implement rigorous security headers, disable unused REST endpoints, and enforce strict permission hierarchies.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "Our Battle-Tested Custom WordPress Development Process!",
    descriptions:
      "<p>We treat WordPress like enterprise software. Every line of PHP, JavaScript, and CSS is crafted for performance, security, and longevity.</p>",
    items: [
      {
        title: "Architecture & Custom Field Modeling",
        description:
          "We map out content types, taxonomy hierarchies, and custom fields to match your content strategy.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "Clean Custom Theme Development",
        description:
          "We code custom Gutenberg blocks and templates using modern PHP 8.x and semantic Tailwind styling.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "Third-Party API & CRM Integration",
        description:
          "We integrate CRMs, email marketing tools, custom webhooks, and payment processors seamlessly.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "Speed & Core Web Vitals Optimization",
        description:
          "We configure server-side caching, image WebP compression, and asset deferral to achieve green scores.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Security Auditing & QA",
        description:
          "We execute strict vulnerability scanning, cross-browser validation, and checkout testing.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/QABugFixing.webp",
      },
      {
        title: "Staging Handover & Video Training",
        description:
          "We provide bespoke video walkthroughs demonstrating how your team can manage every section effortlessly.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why top brands trust our custom WordPress engineering!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "Sub-Second Page Speeds",
        description:
          "Zero heavy builders. Clean, bespoke codebases that load instantly and rank higher on Google.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "90% Less Plugin Dependency",
        description:
          "We custom-code functions natively, minimizing maintenance headaches and security vectors.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "Intuitive Gutenberg Blocks",
        description:
          "Marketing teams can build rich pages easily using modular blocks that strictly adhere to your design system.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "Enterprise Security Hardening",
        description:
          "Automated firewall monitoring, isolated uploads, and hardened database prefixes keep your site safe.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Zero-Downtime Deployment",
        description:
          "CI/CD automated deployment pipelines with dedicated staging environments for safe testing.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Dedicated Ongoing Support",
        description:
          "We don't abandon you after launch. Proactive maintenance and SLA support keep your website in top shape.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our WordPress Stack </br>for Scalable, High-Speed Sites",
    description:
      "<p>We combine modern PHP 8+, ACF Pro, Redis caching, and headless APIs to transform WordPress into an enterprise-grade web engine.</p>",
    items: [
      {
        name: "WordPress 6+",
        image: "/assets/tools/wordpress.svg",
      },
      {
        name: "ACF Pro",
        image: "/assets/tools/acf.svg",
      },
      {
        name: "PHP 8.3",
        image: "/assets/tools/php.svg",
      },
      {
        name: "MySQL / Redis",
        image: "/assets/tools/mysql.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "WordPress Development FAQs",
    left_title: "Clear answers to plan your WordPress build",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "Why should we build a custom WordPress theme instead of buying one?",
        answer:
          "<p>Commercial themes are weighed down with thousands of lines of unused code, generic options, and security vulnerabilities. A custom six2eight theme contains only what you need, runs 5x faster, and is tailored to your business.</p>",
      },
      {
        question: "Will our marketing team be able to edit and create new pages easily?",
        answer:
          "<p>Yes! We build custom Gutenberg block suites that allow your team to create new pages like playing with digital LEGO blocks, while keeping brand styles locked in.</p>",
      },
      {
        question: "Can you migrate our current content without losing SEO rankings?",
        answer:
          "<p>Yes. We carefully preserve URL structures, metadata, 301 redirects, and schema markup to guarantee your search traffic remains unharmed.</p>",
      },
    ],
  },
};

// 6. Shopify Development Services
export const shopifyDevData: FullServiceData = {
  slug: "shopify-development",
  serviceName: "Shopify Development",
  category: "Development Services",
  meta: {
    title: "Shopify & Shopify Plus Development Services — High-Converting Stores | Ozyrah",
    description:
      "Scale e-commerce revenue with custom Shopify and Shopify Plus development. Bespoke Liquid themes, checkout optimization, and custom app integration by Ozyrah.",
    keywords:
      "Shopify Plus agency, custom Shopify development, e-commerce web design, Shopify theme customization, headless Shopify, conversion rate optimization, Ozyrah",
  },
  hero: {
    title: "Revenue-Driven Shopify & Shopify Plus Development Services!",
    description:
      "<p>Convert more store visitors into loyal repeat customers. We build high-speed custom Shopify stores engineered for maximum average order value (AOV), frictionless mobile checkout, and effortless catalog management.</p>",
    buttonLabel: "Get 30-min Shopify Consultation!",
    buttonUrl: "https://calendly.com/six2eight-sales/web-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "Everything You Need to Scale Your Shopify E-Commerce Brand!",
    cards: [
      {
        heading: "Custom Liquid Theme Development",
        description:
          "Bespoke, high-speed Shopify themes tailored to your brand identity with zero slow template bloat.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "Shopify Plus Enterprise Architecture",
        description:
          "Advanced Shopify Plus customizations, custom checkout scripts, B2B wholesale portals, and multi-store setups.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "Conversion Rate Optimization (CRO)",
        description:
          "Dynamic slide-out carts, 1-click upsells, sticky add-to-cart buttons, and trust badges designed to boost conversions.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "Headless Shopify (Storefront API)",
        description:
          "Blazing fast headless e-commerce architectures combining Next.js frontends with Shopify backend checkout.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "ERP & Inventory Synchronization",
        description:
          "Seamless integration with Klaviyo, NetSuite, ShipBob, Gorgias, and custom ERP systems for automated fulfillment.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "Sub-Second Mobile Store Speed",
        description:
          "Liquid code minification and modern WebP image delivery ensuring rapid product browsing on smartphones.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "Subscriptions & ReCharge Setup",
        description:
          "Frictionless recurring subscription setups and customer portal customizations to maximize lifetime value (LTV).",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "Platform Migration to Shopify",
        description:
          "Zero-data-loss migrations from Magento, WooCommerce, or BigCommerce including customers, orders, and SEO URLs.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "E-Commerce Stores Generating Millions in Direct-to-Consumer Sales!",
    button_url: "/work",
    items: [
      {
        title: "1-BLANQS Fashion Store",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-1",
        tag: "Shopify Development",
        mobileHidden: false,
      },
      {
        title: "Crocs Digital Experience",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/Frame.png",
        colSpan: "col-span-1",
        tag: "Shopify Development",
        mobileHidden: false,
      },
      {
        title: "EscapeLux Luxury E-Com",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/userpath-service-project.webp",
        colSpan: "col-span-2",
        tag: "Shopify Development",
        mobileHidden: false,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "E-Commerce Roadblocks That Stall Shopify Store Revenue",
    items: [
      {
        heading: "Cart Abandonment",
        description:
          "We optimize the cart drawer with shipping progress bars, 1-click upsells, and trust triggers to complete checkouts.",
      },
      {
        heading: "Laggy Mobile Browsing",
        description:
          "We strip out heavy unneeded apps and optimize Liquid templates so your mobile catalog loads under 1.2 seconds.",
      },
      {
        heading: "Rigid Pre-Built Themes",
        description:
          "We custom-develop flexible Shopify Theme 2.0 sections allowing your team to customize every product page without code.",
      },
      {
        heading: "Broken Third-Party App Stacks",
        description:
          "We consolidate redundant apps into native lightweight code, saving monthly subscription costs and speeding up the site.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "Our Conversion-Focused Shopify Development Process!",
    descriptions:
      "<p>We combine UX e-commerce best practices with clean Shopify Liquid engineering to turn browsers into repeat buyers.</p>",
    items: [
      {
        title: "E-Commerce Funnel Audit",
        description:
          "We examine conversion funnels, catalog architecture, and identify checkout friction points.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "Shopify Theme 2.0 Architecture",
        description:
          "We build modular, section-based Liquid templates compatible with the Shopify customizer.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "Product Detail & Cart Engineering",
        description:
          "We build variant swatches, dynamic bundle builders, slide-out carts, and one-click upsells.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "App Stack & Checkout Setup",
        description:
          "We integrate payment gateways, Klaviyo tracking, reviews, and fulfillment logistics.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Stress Testing & Load QA",
        description:
          "We simulate traffic spikes to verify stability during flash sales, BFCM events, and product drops.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/QABugFixing.webp",
      },
      {
        title: "Launch & Revenue Tracking",
        description:
          "We oversee DNS propagation and verify end-to-end pixel attribution for Meta, Google, and TikTok ads.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why high-growth brands trust six2eight for Shopify development!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "35%+ Higher Mobile Conversion",
        description:
          "Frictionless mobile checkout flows and lightning-fast product pages keep impulse shoppers buying.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "Zero Bloated Apps Needed",
        description:
          "We build essential upsells, swatches, and size guides directly into native Liquid, saving monthly costs.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "Shopify Plus Experts",
        description:
          "Certified expertise in custom checkout UI extensions, scripts, B2B wholesale pricing, and multi-currency.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "BFCM Traffic Resilience",
        description:
          "Stores optimized to handle thousands of concurrent checkouts during peak holiday sales without slowdown.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Marketing Team Friendly",
        description:
          "All pages built with Shopify Theme 2.0 modular blocks so your marketing team can launch promotions easily.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Omnichannel Attribution Ready",
        description:
          "Pre-configured GA4, Meta CAPI, and TikTok event tracking ensures 100% accurate ROAS reporting.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our Shopify Stack </br>for Rapid E-Commerce Growth",
    description:
      "<p>We combine modern Shopify Liquid, Theme 2.0 sections, Storefront API, and headless architectures to power premier digital storefronts.</p>",
    items: [
      {
        name: "Shopify Liquid",
        image: "/assets/tools/shopify.svg",
      },
      {
        name: "Shopify Plus",
        image: "/assets/tools/shopify.svg",
      },
      {
        name: "Storefront API",
        image: "/assets/tools/graphql.svg",
      },
      {
        name: "Klaviyo & ERP",
        image: "/assets/tools/klaviyo.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "Shopify Development FAQs",
    left_title: "Everything you need to know about your Shopify store",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "Can you migrate our store from WooCommerce or Magento to Shopify?",
        answer:
          "<p>Yes! We securely migrate your full catalog, customer accounts, order histories, and SEO URL structures with zero downtime.</p>",
      },
      {
        question: "Do you build custom Shopify apps or private integrations?",
        answer:
          "<p>Yes, we build private custom apps to connect proprietary ERPs, warehouse management systems, or custom product configurators.</p>",
      },
      {
        question: "How do you improve Shopify mobile loading speed?",
        answer:
          "<p>We eliminate redundant apps, clean up unused JavaScript, lazy-load assets, and rewrite theme code to achieve optimal Core Web Vitals.</p>",
      },
    ],
  },
};

// 7. Webflow Development Services
export const webflowDevData: FullServiceData = {
  slug: "webflow-development",
  serviceName: "Webflow Development",
  category: "Development Services",
  meta: {
    title: "Webflow Development Services — Client-First Standard & Custom Interactions | Ozyrah",
    description:
      "Pixel-perfect Webflow development built on Client-First standards. Advanced CMS, custom interactions, and marketing autonomy engineered by Ozyrah.",
    keywords:
      "Webflow development agency, certified Webflow experts, Finsweet Client-First, custom Webflow interactions, Webflow CMS architecture, Ozyrah Webflow",
  },
  hero: {
    title: "Pixel-Perfect Webflow Development Services!",
    description:
      "<p>Break free from development bottlenecks. We build custom, ultra-fast Webflow websites adhering to Finsweet Client-First standards, giving your marketing team complete autonomy to publish content in seconds without writing code.</p>",
    buttonLabel: "Get 30-min Webflow Consultation!",
    buttonUrl: "https://calendly.com/six2eight-sales/web-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "Custom Webflow Builds With Zero Creative Compromises!",
    cards: [
      {
        heading: "Client-First Class Architecture",
        description:
          "Built on Finsweet Client-First standards for ultra-clean class naming, modularity, and lightning-fast maintenance.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "Complex Webflow CMS Systems",
        description:
          "Dynamic multi-reference CMS collections for blogs, case studies, team members, and resource libraries.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "Custom Interactions & GSAP",
        description:
          "Silky 60fps scroll animations, magnetic buttons, custom cursor effects, and 3D Spline embeds.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "Finsweet Attributes & Filters",
        description:
          "Advanced search, multi-faceted filtering, CMS load-more buttons, and sorting without complex third-party tools.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "Custom Code & API Embeds",
        description:
          "Extending Webflow with custom JavaScript, Memberstack auth, Stripe checkouts, and CRM webhook routing.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "SEO & Schema Architecture",
        description:
          "Dynamic OpenGraph cards, JSON-LD structured data, and automatic sitemap generation for maximum search visibility.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "Webflow Localization",
        description:
          "Multi-language site versions customized for international audiences with localized URLs and SEO tags.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "Team Training & Video Handoff",
        description:
          "Tailored screen recordings walking your team through editing content, creating blog posts, and updating assets.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "Webflow Websites That Combine Unmatched Speed and Visual Polish!",
    button_url: "/work",
    items: [
      {
        title: "Cenario.ai SaaS Website",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/cenario.webp",
        colSpan: "col-span-2",
        tag: "Webflow Development",
        mobileHidden: false,
      },
      {
        title: "Qore Logiq Brand Hub",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-1",
        tag: "Webflow Development",
        mobileHidden: false,
      },
      {
        title: "PowerSynch Platform",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/Frame.png",
        colSpan: "col-span-1",
        tag: "Webflow Development",
        mobileHidden: false,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "Common Webflow Issues We Eliminate For Marketing Teams",
    items: [
      {
        heading: "Messy Class Structures",
        description:
          "We strictly apply Client-First class structures so your project remains organized, scalable, and easy to modify.",
      },
      {
        heading: "Rigid CMS Limitations",
        description:
          "We configure dynamic multi-reference fields and custom filtering so your team never runs into dead ends.",
      },
      {
        heading: "Broken Mobile Breakpoints",
        description:
          "We test fluid responsive units across all 7 Webflow breakpoints, ensuring flawless display on all screens.",
      },
      {
        heading: "Developer Bottlenecks for Edits",
        description:
          "We configure the Webflow Editor so marketers can change copy, images, and publish blog articles in seconds.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "Our Client-First Webflow Development Workflow!",
    descriptions:
      "<p>We turn Figma designs into semantic, performant Webflow websites built on industry-leading conventions.</p>",
    items: [
      {
        title: "Design Inspection & Style Guide Setup",
        description:
          "We set up global typography, colors, container widths, and buttons in a dedicated Webflow Style Guide page.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "Client-First Semantic Build",
        description:
          "We construct every section using semantic HTML elements (nav, header, main, section, footer) and clean classes.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "Dynamic CMS Modeling",
        description:
          "We build intuitive CMS collections with custom input validation and conditional visibility rules.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "Interaction & Motion Choreography",
        description:
          "We bring pages to life with custom Webflow interactions, scroll reveals, and micro-animations.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Cross-Device QA & Speed Tuning",
        description:
          "We verify typography scaling, form submissions, and Core Web Vitals across iOS, Android, and desktop.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/QABugFixing.webp",
      },
      {
        title: "Custom Domain Launch & Training",
        description:
          "We handle SSL, DNS connection, automated backups, and provide your team with tailored training videos.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why scaling brands choose six2eight for Webflow development!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "Finsweet Client-First Certified",
        description:
          "World-class code organization standards ensuring any developer or team member can easily understand the project.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "Instant Content Publishing",
        description:
          "Empowers your marketing and sales teams to launch new landing pages and write blogs without dev assistance.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "95+ PageSpeed Scores",
        description:
          "Enterprise AWS & Fastly CDN infrastructure ensures your site loads in under a second across the globe.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "Zero Security Maintenance",
        description:
          "No plugin updates or database vulnerabilities. Webflow handles hosting, security, and SSL automatically.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Custom Code Capabilities",
        description:
          "We integrate custom JavaScript APIs, dynamic filters, and CRM webhooks for unlimited flexibility.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Clean Pixel-Fidelity",
        description:
          "100% faithful translation from Figma files into live responsive code with exact spacing and typography.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our Webflow Toolkit </br>for Seamless Visual Development",
    description:
      "<p>We augment native Webflow capabilities with Finsweet Attributes, custom GSAP scripts, and seamless third-party automations.</p>",
    items: [
      {
        name: "Webflow",
        image: "/assets/tools/webflow.svg",
      },
      {
        name: "Finsweet Client-First",
        image: "/assets/tools/finsweet.svg",
      },
      {
        name: "GSAP Motion",
        image: "/assets/tools/gsap.svg",
      },
      {
        name: "Zapier / Make",
        image: "/assets/tools/zapier.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "Webflow Development FAQs",
    left_title: "Key details about our Webflow solutions",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "What is Client-First and why does it matter for my Webflow site?",
        answer:
          "<p>Client-First is the gold standard for Webflow organization created by Finsweet. It ensures structured class naming, consistent rem-based sizing, and makes it incredibly easy for any team member to edit pages without breaking styles.</p>",
      },
      {
        question: "Can we export the code if we want to host it ourselves?",
        answer:
          "<p>Yes! Webflow allows exporting clean, production-ready HTML, CSS, and JS assets anytime if you prefer self-hosting.</p>",
      },
      {
        question: "Can Webflow handle dynamic CMS filtering and search?",
        answer:
          "<p>Yes, we implement advanced Finsweet Attributes for multi-category filtering, real-time search, and pagination with zero lag.</p>",
      },
    ],
  },
};

// 8. Digital Marketing Services
export const digitalMarketingData: FullServiceData = {
  slug: "digital-marketing",
  serviceName: "Digital Marketing",
  category: "Advertisement",
  meta: {
    title: "Digital Marketing Services — Full-Funnel Growth & Revenue Acquisition | Ozyrah",
    description:
      "Data-driven digital marketing services that scale revenue. Omnichannel acquisition, conversion optimization, and marketing automation by Ozyrah.",
    keywords:
      "digital marketing services, full-funnel growth agency, customer acquisition, marketing automation, omnichannel marketing, performance growth, Ozyrah marketing",
  },
  hero: {
    title: "Data-Driven Digital Marketing Growth Services!",
    description:
      "<p>Stop guessing where your growth comes from. We engineer full-funnel digital marketing strategies combining organic search, high-impact paid ads, conversion rate optimization, and automated lifecycle marketing to predictably acquire and retain high-value customers.</p>",
    buttonLabel: "Get 30-min Marketing Audit!",
    buttonUrl: "https://calendly.com/six2eight-sales/li-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "Omnichannel Growth Strategies Built for Predictable ROI!",
    cards: [
      {
        heading: "Full-Funnel Growth Strategy",
        description:
          "Holistic marketing roadmaps connecting top-of-funnel awareness to bottom-of-funnel conversion and retention.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "Audience Segmentation & Personas",
        description:
          "Pinpoint customer segments based on real purchase intent, behavioral data, and lifetime revenue potential.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "Conversion Rate Optimization (CRO)",
        description:
          "Systematic A/B split testing across landing pages and sales funnels to maximize revenue from existing traffic.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "Lifecycle & Email Automation",
        description:
          "Triggered email flows in Klaviyo or HubSpot that nurture leads, reduce churn, and drive repeat purchases.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "Attribution Modeling & Analytics",
        description:
          "Unified analytics dashboards using GA4 and custom attribution to accurately trace customer touchpoints.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "Account-Based Marketing (ABM)",
        description:
          "High-precision B2B marketing targeting key accounts and decision-makers on LinkedIn and industry portals.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "Retention & LTV Expansion",
        description:
          "Post-purchase customer engagement programs, loyalty funnels, and automated reactivation sequences.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "Weekly Executive Reporting",
        description:
          "Transparent, real-time KPI dashboards tracking CPA, ROAS, LTV, and overall return on marketing spend.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "Marketing Campaigns Delivering Explosive Revenue Growth!",
    button_url: "/work",
    items: [
      {
        title: "Crecer Financial Campaign",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/userpath-service-project.webp",
        colSpan: "col-span-2",
        tag: "Digital Marketing",
        mobileHidden: false,
      },
      {
        title: "Leading Leads B2B Funnel",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-1",
        tag: "Digital Marketing",
        mobileHidden: false,
      },
      {
        title: "Berlitz Digital Acquisition",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/Frame.png",
        colSpan: "col-span-1",
        tag: "Digital Marketing",
        mobileHidden: false,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "Digital Marketing Pitfalls That Drain Marketing Budgets",
    items: [
      {
        heading: "Skyrocketing Customer Acquisition Costs (CAC)",
        description:
          "We optimize targeting parameters and conversion funnels to bring CAC down while lifting customer quality.",
      },
      {
        heading: "Fragmented Tracking & Blind Spots",
        description:
          "We implement robust attribution systems so you know exactly which campaigns generate bottom-line profit.",
      },
      {
        heading: "Leaky Conversion Funnels",
        description:
          "We fix drop-off points between ad click and final checkout with high-converting custom landing pages.",
      },
      {
        heading: "Stagnant Organic Growth",
        description:
          "We align paid momentum with long-term organic authority to establish sustainable, multi-channel inbound traffic.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "Our Scientific, Data-First Marketing Methodology!",
    descriptions:
      "<p>We combine rapid experimental testing with deep analytical attribution to scale your customer base profitably.</p>",
    items: [
      {
        title: "Growth Audit & Funnel Inspection",
        description:
          "We analyze current conversion rates, channel performance, and traffic quality across your entire stack.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "Audience & Competitor Intelligence",
        description:
          "We identify untapped buyer cohorts and study competitor advertising funnels to uncover advantages.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "Campaign Architecture & Creative Testing",
        description:
          "We deploy multi-variant ad hooks, landing page variants, and audience segments to locate winning angles.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "Attribution & Data Pipeline Setup",
        description:
          "We configure server-side tracking, custom event pipelines, and executive dashboards for clear ROI visibility.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Optimization & Budget Reallocation",
        description:
          "We aggressively scale high-performing campaigns while cutting underperforming segments.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/QABugFixing.webp",
      },
      {
        title: "Retention & Lifecycle Scaling",
        description:
          "We build automated email and retention funnels to turn one-off customers into repeat brand advocates.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why scaling businesses choose six2eight for digital marketing!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "Predictable Revenue Growth",
        description:
          "Engineered acquisition channels designed to reliably generate qualified sales opportunities month after month.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "100% Closed-Loop Attribution",
        description:
          "Transparent revenue tracking eliminates the mystery of which marketing dollars drive real cashflow.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "High-Converting Creative In-House",
        description:
          "Our in-house design and copywriting teams produce high-impact ad creatives tailored to your brand.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "Reduced Waste & Lower CAC",
        description:
          "Continuous audience pruning and negative keyword monitoring preserve budget for high-intent buyers.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Retention-Focused Systems",
        description:
          "We prioritize customer lifetime value (LTV) just as heavily as initial customer acquisition.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Dedicated Growth Strategists",
        description:
          "You work directly with senior growth leaders with a vested interest in hitting your revenue benchmarks.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our Marketing Analytics Stack </br>for Precision Growth Tracking",
    description:
      "<p>We deploy enterprise tracking, customer data platforms (CDP), and marketing automation tools to power data-backed campaigns.</p>",
    items: [
      {
        name: "Google Analytics 4",
        image: "/assets/tools/ga4.svg",
      },
      {
        name: "Klaviyo",
        image: "/assets/tools/klaviyo.svg",
      },
      {
        name: "HubSpot CRM",
        image: "/assets/tools/hubspot.svg",
      },
      {
        name: "Segment CDP",
        image: "/assets/tools/segment.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "Digital Marketing FAQs",
    left_title: "Everything you need to know about scaling with us",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "How soon can we expect to see results from digital marketing campaigns?",
        answer:
          "<p>Paid acquisition channels and landing page conversion optimizations typically generate measurable inbound leads within 14 to 21 days, while organic SEO and brand compounding build significant momentum across 60 to 90 days.</p>",
      },
      {
        question: "How do you track return on investment (ROI)?",
        answer:
          "<p>We set up custom Google Analytics 4 conversion events, server-side tracking (CAPI), and live client dashboards connecting every dollar spent to closed revenue.</p>",
      },
      {
        question: "Do you handle creative ad design and copywriting in-house?",
        answer:
          "<p>Yes! Our creative studio designs ad graphics, video motion hooks, and persuasive sales copywriting so you don't need multiple agencies.</p>",
      },
    ],
  },
};

// 9. Paid Search & Social Ads
export const paidAdsData: FullServiceData = {
  slug: "paid-ads",
  serviceName: "Paid Search & Social Ads",
  category: "Advertisement",
  meta: {
    title: "Paid Search & Social Ads Management — High-ROAS Google & Meta Ads | Ozyrah",
    description:
      "Maximize return on ad spend (ROAS) with performance-driven Google Ads, Meta Ads (Facebook/Instagram), TikTok, and LinkedIn ad management by Ozyrah.",
    keywords:
      "paid ads agency, Google Ads management, Meta Ads agency, TikTok ads, LinkedIn PPC, ROAS optimization, performance marketing agency, Ozyrah paid ads",
  },
  hero: {
    title: "High-ROI Paid Search & Social Ad Campaigns!",
    description:
      "<p>Turn ad spend into high-margin revenue. We design, launch, and scale performance advertising campaigns across Google, Meta, LinkedIn, and TikTok that systematically outperform industry benchmarks.</p>",
    buttonLabel: "Get Free Paid Ads Audit!",
    buttonUrl: "https://calendly.com/six2eight-sales/li-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "Performance Ad Campaigns Engineered to Scale ROAS!",
    cards: [
      {
        heading: "Google Search & Performance Max",
        description:
          "Capture high-intent buyers actively searching for your solutions with keyword-exact bidding and smart bidding.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "Meta Ads (Facebook & Instagram)",
        description:
          "Engaging video hooks, carousel showcases, and lookalike audience targeting that drive massive direct response.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "LinkedIn B2B Lead Generation",
        description:
          "High-precision B2B ads targeting job titles, company sizes, and executive decision-makers with zero waste.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "TikTok & UGC Video Creatives",
        description:
          "Native, high-velocity short-form video ads that blend seamlessly into feeds and trigger immediate impulsive action.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "Custom High-Converting Landing Pages",
        description:
          "Bespoke, rapid-loading landing pages specifically matched to ad copy for maximum quality score and conversions.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "Server-Side Tracking (Meta CAPI & GTM)",
        description:
          "Bypass ad blockers and iOS privacy restrictions with robust first-party server-side event tracking.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "Dynamic Retargeting Funnels",
        description:
          "Multi-touch retargeting sequences that re-engage abandoned carts and website visitors with compelling offers.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "Creative Hook A/B Testing",
        description:
          "Continuous testing of headline hooks, visual angles, and calls-to-action to combat ad fatigue and lower CPA.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "Ad Campaigns Delivering Consistent 4x+ Return on Ad Spend!",
    button_url: "/work",
    items: [
      {
        title: "Valid Traders Meta Ads",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-1",
        tag: "Paid Ads",
        mobileHidden: false,
      },
      {
        title: "Review Inc Google Ads",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/Frame.png",
        colSpan: "col-span-1",
        tag: "Paid Ads",
        mobileHidden: false,
      },
      {
        title: "TeleTraining B2B Campaign",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/userpath-service-project.webp",
        colSpan: "col-span-2",
        tag: "Paid Ads",
        mobileHidden: false,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "Paid Advertising Traps That Waste Company Capital",
    items: [
      {
        heading: "Ad Fatigue & Rising CPMs",
        description:
          "We deploy weekly creative refreshes and fresh visual hooks to maintain high click-through rates and low costs.",
      },
      {
        heading: "Inaccurate iOS Tracking",
        description:
          "We implement Conversions API (CAPI) and offline conversion uploads to recover lost data and improve ad bidding.",
      },
      {
        heading: "Poor Quality Inbound Leads",
        description:
          "We add qualifying form fields, negative keyword scrubbing, and intent-based copy to filter out low-value inquiries.",
      },
      {
        heading: "Mismatched Landing Pages",
        description:
          "We build dedicated landing pages that echo the exact promise of the ad, instantly boosting conversion rates.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "Our Data-Driven Performance Paid Ads Process!",
    descriptions:
      "<p>We treat paid traffic as a mathematical system. We test systematically, identify winning creative hooks, and scale aggressively.</p>",
    items: [
      {
        title: "Historical Account Audit",
        description:
          "We review past campaign performance, identify wasted spend, and audit tracking tags and conversion events.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "Audience & Competitor Reconnaissance",
        description:
          "We research competitor ads and build high-affinity interest, keyword, and lookalike audience buckets.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "Creative Production & Copywriting",
        description:
          "Our team designs high-converting ad images, UGC video concepts, and persuasive ad copy variations.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "Tracking & Conversion API Setup",
        description:
          "We verify Google Enhanced Conversions, Meta CAPI, and GA4 to ensure flawless algorithmic learning.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Initial Launch & Angle Validation",
        description:
          "We launch controlled testing budgets to identify winning audience segments and high-CTR creative hooks.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/QABugFixing.webp",
      },
      {
        title: "Aggressive Scaling & Retargeting",
        description:
          "We scale budgets into winning campaigns while layering dynamic multi-touch retargeting sequences.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why media buyers and founders choose six2eight for paid ads!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "4.2x Average Account ROAS",
        description:
          "Rigorous bid management and creative iteration that consistently outpaces generic agency averages.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "First-Party Server-Side Tracking",
        description:
          "100% accurate conversion data fed directly to ad algorithms for superior bidding precision post-iOS14.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "High-Volume Creative Engine",
        description:
          "We produce fresh graphic banners, video variations, and copy iterations every single week.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "Dedicated Landing Pages Included",
        description:
          "We don't send expensive paid traffic to weak homepages—we design high-converting custom landing pages.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Strict Budget Protection",
        description:
          "Proactive negative keyword scrubbing and automated rules that prevent accidental budget overspend.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Direct Slack Communication",
        description:
          "Daily transparency and direct access to your dedicated media buying team via real-time Slack channels.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our Media Buying Stack </br>for Enterprise Ad Scale",
    description:
      "<p>We harness the most advanced advertising platforms and tracking infrastructure to drive profitable customer acquisition.</p>",
    items: [
      {
        name: "Google Ads",
        image: "/assets/tools/google-ads.svg",
      },
      {
        name: "Meta Ads Manager",
        image: "/assets/tools/meta-ads.svg",
      },
      {
        name: "LinkedIn Campaign",
        image: "/assets/tools/linkedin-ads.svg",
      },
      {
        name: "Triple Whale / Hyros",
        image: "/assets/tools/triple-whale.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "Paid Search & Social Ads FAQs",
    left_title: "Clear answers to maximize your advertising budget",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "What minimum monthly ad budget do you recommend?",
        answer:
          "<p>For paid search and social campaigns to accumulate statistical significance and feed ad algorithms effectively, we typically recommend a minimum monthly ad spend of $3,000 to $5,000+.</p>",
      },
      {
        question: "Who pays the advertising platform costs directly?",
        answer:
          "<p>You pay Google, Meta, and TikTok directly through your own ad accounts. You retain 100% ownership of all campaign data, pixels, and creative assets.</p>",
      },
      {
        question: "How do you combat rising ad costs post-iOS14?",
        answer:
          "<p>We deploy first-party server-side Conversions API (CAPI), build dedicated high-converting custom landing pages, and rapidly iterate on native short-form video creative hooks.</p>",
      },
    ],
  },
};

// 10. SEO & Growth Marketing
export const seoMarketingData: FullServiceData = {
  slug: "seo-marketing",
  serviceName: "SEO & Growth Marketing",
  category: "Advertisement",
  meta: {
    title: "SEO & Organic Growth Marketing Services — Top Google Rankings | Ozyrah",
    description:
      "Dominate search rankings with data-backed technical SEO, high-authority link acquisition, topical authority clustering, and organic growth by Ozyrah.",
    keywords:
      "SEO agency, technical SEO services, organic growth marketing, link building, high-intent keywords, local SEO, enterprise SEO consulting, Ozyrah SEO",
  },
  hero: {
    title: "Sustainable SEO & Organic Growth Marketing Services!",
    description:
      "<p>Rank at the top of Google for keywords that actually drive revenue. We combine technical SEO audits, high-intent topic clustering, and digital PR authority acquisition to build an unstoppable organic traffic engine for your brand.</p>",
    buttonLabel: "Get Comprehensive SEO Audit!",
    buttonUrl: "https://calendly.com/six2eight-sales/li-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "End-to-End Organic Search Optimization Built for Dominance!",
    cards: [
      {
        heading: "Technical SEO Audits & Fixes",
        description:
          "Fix crawl errors, canonical loops, sitemap discrepancies, and optimize crawl budget for fast indexing.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "Core Web Vitals Optimization",
        description:
          "Fine-tune Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "Commercial Keyword Clustering",
        description:
          "Identify high-converting, high-intent search queries that buyers search immediately before purchasing.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "Semantic Content Optimization",
        description:
          "Structure long-form pillar articles and service pages with rich schema markup and semantic entities.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "High-Authority Link Acquisition",
        description:
          "Earn editorial backlinks from real, high-DR industry publications through digital PR and white-hat outreach.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "Competitor Keyword Conquesting",
        description:
          "Identify competitor keyword rankings and build superior content assets to capture their market share.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "Local SEO & Google Business Profile",
        description:
          "Optimize regional presence, local map pack rankings, and local citations for high-ticket local inquiries.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "Algorithm Penalty Recovery",
        description:
          "Audit link profiles, remove toxic backlinks, and resolve content quality issues following Google updates.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "Organic Search Strategies That Multiply Qualified Inbound Leads!",
    button_url: "/work",
    items: [
      {
        title: "GunMade Organic Authority",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/userpath-service-project.webp",
        colSpan: "col-span-2",
        tag: "SEO Marketing",
        mobileHidden: false,
      },
      {
        title: "Fortified Roofing Local SEO",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-1",
        tag: "SEO Marketing",
        mobileHidden: false,
      },
      {
        title: "Fiction Profits Search Rankings",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/Frame.png",
        colSpan: "col-span-1",
        tag: "SEO Marketing",
        mobileHidden: false,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "Search Engine Frustrations That Hold Websites Back",
    items: [
      {
        heading: "Invisible on Page 2 and Beyond",
        description:
          "We optimize on-page structure and acquire authoritative backlinks to push your money pages into top 3 spots.",
      },
      {
        heading: "Wasted Traffic With Low Conversions",
        description:
          "We target commercial and transactional keywords rather than vanity traffic, bringing real buyers to your site.",
      },
      {
        heading: "Technical Crawling & Indexing Issues",
        description:
          "We resolve indexing errors, canonical duplicates, and rendering bugs so search engines crawl every valuable page.",
      },
      {
        heading: "Hits From Google Core Updates",
        description:
          "We audit and realign your content with Google's E-E-A-T guidelines to ensure resilient, long-term ranking stability.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "Our Systematic, White-Hat Organic Search SEO Process!",
    descriptions:
      "<p>We build organic search momentum through disciplined technical foundations, rich content clusters, and authoritative backlinks.</p>",
    items: [
      {
        title: "Exhaustive Technical & Indexing Audit",
        description:
          "We run deep crawler audits to diagnose crawl budget, status code errors, and Core Web Vitals bottlenecks.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "Keyword Opportunity & Intent Mapping",
        description:
          "We map high-intent search queries directly to specific landing pages and content cluster hubs.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "On-Page Semantic & Schema Optimization",
        description:
          "We enhance metadata, title tags, internal linking, and rich structured data schemas (FAQ, Organization, Product).",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "High-Value Topic Cluster Content",
        description:
          "We publish comprehensive pillar pages that thoroughly satisfy user search intent and outrank competitors.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Authority Link Building & Digital PR",
        description:
          "We execute targeted outreach to earn editorial backlinks from credible, high-authority domain sources.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/QABugFixing.webp",
      },
      {
        title: "Rank Tracking & Revenue Correlation",
        description:
          "We monitor keyword position shifts, organic click growth, and organic revenue via Google Search Console.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why serious companies partner with six2eight for SEO growth!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "250%+ Organic Traffic Growth",
        description:
          "Proven track record of taking websites from obscure search positions to dominant top rankings.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "100% White-Hat Practices",
        description:
          "Zero risky PBNs or spam links. We build genuine authority that withstands every Google algorithm change.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "Revenue-Focused Keyword Intent",
        description:
          "We focus on high-ticket commercial keywords that directly turn searchers into paid customers.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "Deep Technical Web Mastery",
        description:
          "Our in-house developers resolve complex JavaScript rendering and Core Web Vitals issues with ease.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Comprehensive Schema Architecture",
        description:
          "Rich snippets and structured data markup that increase SERP real estate and organic click-through rates.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Transparent Monthly Reporting",
        description:
          "No confusing vanity metrics. Clear monthly breakdowns of keyword positions, traffic, and generated leads.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our SEO Tool Stack </br>for Precision Organic Dominance",
    description:
      "<p>We deploy premier enterprise SEO software to dissect competitor strategies, track rankings, and identify lucrative keyword gaps.</p>",
    items: [
      {
        name: "Ahrefs Enterprise",
        image: "/assets/tools/ahrefs.svg",
      },
      {
        name: "SEMrush",
        image: "/assets/tools/semrush.svg",
      },
      {
        name: "Google Search Console",
        image: "/assets/tools/gsc.svg",
      },
      {
        name: "Screaming Frog",
        image: "/assets/tools/screaming-frog.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "SEO & Growth Marketing FAQs",
    left_title: "Answers to help you plan your SEO strategy",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "How long does it take to see tangible results from SEO?",
        answer:
          "<p>While technical optimizations and indexing fixes can show ranking improvements within 30 to 60 days, significant compound traffic and revenue growth typically mature between 3 to 6 months of consistent strategy.</p>",
      },
      {
        question: "Do you guarantee #1 rankings on Google?",
        answer:
          "<p>No honest agency can guarantee a #1 rank because Google's algorithm is proprietary. However, we consistently deliver top-3 positions for our clients through rigorous white-hat technical, content, and backlink execution.</p>",
      },
      {
        question: "How do you acquire backlinks safely?",
        answer:
          "<p>We acquire backlinks exclusively through genuine digital PR, high-quality guest editorial placements, and creating link-worthy original research data assets.</p>",
      },
    ],
  },
};

// 11. Content & Influencer Marketing
export const contentMarketingData: FullServiceData = {
  slug: "content-marketing",
  serviceName: "Content & Influencer Marketing",
  category: "Advertisement",
  meta: {
    title: "Content & Influencer Marketing Services — High-Impact Brand Growth | Ozyrah",
    description:
      "Attract, engage, and convert buyers with compelling content creation and vetted influencer partnerships engineered by Ozyrah.",
    keywords:
      "content marketing agency, influencer marketing management, short-form video production, brand storytelling, creator partnerships, thought leadership, Ozyrah",
  },
  hero: {
    title: "Engaging Content & Influencer Marketing Services!",
    description:
      "<p>Build an authentic, passionate community around your brand. We source top-tier creators, produce viral short-form video assets, and craft authoritative thought-leadership content that earns buyer trust and drives sustainable customer acquisition.</p>",
    buttonLabel: "Book Creator Strategy Session!",
    buttonUrl: "https://calendly.com/six2eight-sales/li-discovery-call",
    image: "https://cms.six2eight.com/wp-content/uploads/2025/06/webdev-1.webp",
  },
  subservices: {
    block_title: "Sub services",
    main_title: "Authentic Content & Creator Campaigns That Multiply Customer Trust!",
    cards: [
      {
        heading: "Creator & Influencer Management",
        description:
          "Vetting, negotiating, and managing authentic creators across TikTok, Instagram, YouTube, and LinkedIn.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/web-strategy.webp",
      },
      {
        heading: "User-Generated Content (UGC) Production",
        description:
          "High-converting UGC video reviews, unboxings, and product demonstrations formatted for social feeds and paid ads.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/frontend-development.webp",
      },
      {
        heading: "Viral Short-Form Video (Reels, TikTok, Shorts)",
        description:
          "Scriptwriting, editing, and motion hook optimization engineered to maximize algorithmic reach and engagement.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/bacekend-development.webp",
      },
      {
        heading: "Thought Leadership & Industry Articles",
        description:
          "Deep, insightful whitepapers, case studies, and editorial essays that position your leadership as industry visionaries.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/cms-intregation.webp",
      },
      {
        heading: "Multi-Platform Content Repurposing",
        description:
          "Turn one flagship video or podcast into 20+ micro-assets including carousels, quote cards, newsletters, and clips.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/testing-qa.webp",
      },
      {
        heading: "Influencer Whitelisting (Spark Ads)",
        description:
          "Run paid advertising directly through creator social handles for higher credibility, CTR, and lower CPA.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/SEO-basic.webp",
      },
      {
        heading: "Case Study & Social Proof Production",
        description:
          "In-depth customer success narratives and video testimonials that remove doubt at the bottom of the funnel.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Deployment.webp",
      },
      {
        heading: "Contracting & Usage Rights Management",
        description:
          "Ironclad creator contracts securing perpetual digital usage rights for organic posting and paid media scaling.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/Maintence-support.webp",
      },
    ],
  },
  projects: {
    title: "Content Campaigns Generating Tens of Millions of Organic Impressions!",
    button_url: "/work",
    items: [
      {
        title: "Crocs Creator Campaign",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/userpath-service-project.webp",
        colSpan: "col-span-2",
        tag: "Content Marketing",
        mobileHidden: false,
      },
      {
        title: "Storytime Owls Content Series",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/sixpay-service-project.webp",
        colSpan: "col-span-1",
        tag: "Content Marketing",
        mobileHidden: false,
      },
      {
        title: "1-BLANQS Lifestyle Assets",
        permalink: "/work",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/03/Frame.png",
        colSpan: "col-span-1",
        tag: "Content Marketing",
        mobileHidden: false,
      },
    ],
  },
  pain_points: {
    block_title: "Pain Points",
    main_title: "Content & Influencer Obstacles We Solve Completely",
    items: [
      {
        heading: "Unreliable, Flaky Creators",
        description:
          "We vet creators thoroughly for authentic engagement and handle all contracting, briefs, and delivery milestones.",
      },
      {
        heading: "High Cost With Low Conversions",
        description:
          "We pair creator content with performance marketing, whitelisting assets for paid ads to ensure direct ROI.",
      },
      {
        heading: "Content Production Burnout",
        description:
          "Our repurposing pipeline turns a single piece of long-form content into a full month of multi-channel social assets.",
      },
      {
        heading: "Lack of Cohesive Brand Voice",
        description:
          "We develop strict creative briefs ensuring creators communicate your core value proposition naturally and accurately.",
      },
    ],
  },
  process: {
    blockTitle: "Our Process",
    mainTitle: "Our Strategic Content & Influencer Marketing Framework!",
    descriptions:
      "<p>We manage creator partnerships from initial talent discovery through to whitelisted paid ad scaling.</p>",
    items: [
      {
        title: "Brand Voice & Campaign Angle Brief",
        description:
          "We define campaign goals, key selling propositions, creative themes, and target demographic cohorts.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/Kickoff-CallRequirementGathering.webp",
      },
      {
        title: "Creator Discovery & Audience Vetting",
        description:
          "We audit creator demographics, follower authenticity, engagement rates, and previous brand collaborations.",
        image:
          "https://cms.six2eight.com/wp-content/uploads/2025/07/ArchitecturePlanningTechStackSelection.webp",
      },
      {
        title: "Contracting & Clear Rights Negotiation",
        description:
          "We secure full digital advertising rights, exclusivity clauses, and strict delivery timelines in contracts.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/FrontendDevelopment.webp",
      },
      {
        title: "Content Production & Editing Review",
        description:
          "Our in-house video editors enhance raw footage with punchy captions, sound design, and branding.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/BackendDevelopment.webp",
      },
      {
        title: "Multi-Platform Rollout & Whitelisting",
        description:
          "We launch organic posts alongside Meta/TikTok whitelisted ads targeting hyper-specific buyer audiences.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/QABugFixing.webp",
      },
      {
        title: "Performance Review & Creator Iteration",
        description:
          "We double down on top-performing creators and creative hooks to build ongoing long-term brand ambassador programs.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/07/LaunchOngoingSupport.webp",
      },
    ],
  },
  strategy: {
    blockTitle: "USP",
    mainTitle: "Why leading consumer and B2B brands trust our content team!",
    bgImage: "https://cms.six2eight.com/wp-content/uploads/2025/11/footer_elements.webp",
    items: [
      {
        heading: "5x Higher Organic Engagement",
        description:
          "Authentic, relatable creator content consistently beats sterile corporate ads across social feeds.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/06/DesignersIcons.webp",
      },
      {
        heading: "Full Paid Ad Whitelisting Rights",
        description:
          "We secure complete advertising permissions so you can run ads from the creator's official handle.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/clientFeedbackicons.webp",
      },
      {
        heading: "Vetted Micro & Macro Creators",
        description:
          "We work only with proven creators with verified audience demographics and high engagement rates.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-5.webp",
      },
      {
        heading: "Turnkey Campaign Management",
        description:
          "From product seeding and contracts to editing and analytics, we manage the entire creator pipeline.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-3.webp",
      },
      {
        heading: "Multi-Asset Content Engines",
        description:
          "A continuous flow of fresh, authentic social media video assets to fuel paid campaigns and organic channels.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-2.webp",
      },
      {
        heading: "Direct Sales Tracking",
        description:
          "Custom affiliate discount codes and UTM attribution tracking ensure measurable returns on every partnership.",
        image: "https://cms.six2eight.com/wp-content/uploads/2025/02/webdesign-strategy-6.webp",
      },
    ],
  },
  tech_stack: {
    title: "Our Content & Creator Stack </br>for High-Velocity Production",
    description:
      "<p>We leverage creator relationship platforms, advanced video editing suites, and social intelligence tools to run seamless campaigns.</p>",
    items: [
      {
        name: "CreatorIQ",
        image: "/assets/tools/creatoriq.svg",
      },
      {
        name: "Premiere Pro",
        image: "/assets/tools/premiere.svg",
      },
      {
        name: "CapCut Pro",
        image: "/assets/tools/capcut.svg",
      },
      {
        name: "Sprout Social",
        image: "/assets/tools/sprout-social.svg",
      },
    ],
  },
  faqs: {
    block_title: "FAQ",
    right_title: "Content & Influencer Marketing FAQs",
    left_title: "Helpful insights into creator partnerships",
    image: "/faqImage.webp",
    button_text: "See All FAQs",
    button_url: "/faq",
    items: [
      {
        question: "How do you find and vet creators for our brand?",
        answer:
          "<p>We analyze follower authenticity, audience demographics, geographic location, engagement rates, and previous brand sponsorship performance using tools like CreatorIQ to eliminate fake followers.</p>",
      },
      {
        question: "Can we use the creator's video in our paid ads?",
        answer:
          "<p>Yes! Every contract we negotiate includes explicit digital advertising rights and spark ad / whitelisting permissions so you can run the video through paid channels.</p>",
      },
      {
        question: "What format of content works best for conversions?",
        answer:
          "<p>Authentic, vertical short-form video (9:16) featuring a clear 3-second hook, real product problem demonstration, and an honest user recommendation consistently delivers the highest ROAS.</p>",
      },
    ],
  },
};
