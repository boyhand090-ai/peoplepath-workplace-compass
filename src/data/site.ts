const CDN = "https://b4550151.smushcdn.com/4550151/wp-content/uploads";

export const heroImages = [
  {
    src: `${CDN}/2025/06/hero-1.webp`,
    alt: "Aura AI face scanning biometric authentication mobile interface design",
  },
  {
    src: `${CDN}/2025/06/hero-2.webp`,
    alt: "Aura AI SaaS platform dashboard user interface displayed on laptop screen",
  },
  {
    src: `${CDN}/2025/12/brand-identity-hero.webp`,
    alt: "E-commerce product branding and packaging design for Elora Kid's Organic Multi supplement",
  },
  {
    src: `${CDN}/2025/06/hero-4.webp`,
    alt: "Interactive SaaS analytics graph chart and data visualization dashboard UI",
  },
  {
    src: `${CDN}/2025/06/hero-6.webp`,
    alt: "Custom responsive web application design interface on desktop monitor",
  },
  {
    src: `${CDN}/2025/06/hero-7.webp`,
    alt: "Aura AI platform user experience design and mobile app layout",
  },
  {
    src: `${CDN}/2025/06/hero-8.webp`,
    alt: "Fintech mobile banking app and digital payment credit card interface design",
  },
  {
    src: `${CDN}/2025/06/hero-9.webp`,
    alt: "User-centered mobile app control settings and security panel UI layout",
  },
  {
    src: `${CDN}/2025/06/hero-10.webp`,
    alt: "Custom iOS and Android mobile app user interface layout design",
  },
  {
    src: `${CDN}/2025/06/hero-5.webp`,
    alt: "AI-powered mobile app user interface and smart workflow design mockup",
  },
  { src: `${CDN}/2025/06/hero-11.webp`, alt: "Mobile digital experience concept showcase" },
];

export type Service = {
  title: string;
  titleTop: string;
  titleBottom: string;
  tags: string[];
  copy: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Branding & Strategy",
    titleTop: "Branding",
    titleBottom: "& Strategy",
    tags: ["Positioning", "Identity", "Creative Direction", "Digital Strategy"],
    copy: "Define what makes your business distinct, with clear positioning, a memorable identity, and a focused digital strategy.",
    image: `${CDN}/2025/06/sass-web-application.webp`,
  },
  {
    title: "E-commerce Development",
    titleTop: "E-commerce",
    titleBottom: "Development",
    tags: ["Online Stores", "Product Pages", "Checkout"],
    copy: "Turn your storefront into a clear path to purchase, with thoughtful product pages and connected shopping experiences.",
    image: `${CDN}/2025/06/shopify-development.webp`,
  },
  {
    title: "UI/UX & Digital Experiences",
    titleTop: "UI/UX",
    titleBottom: "& Digital Experiences",
    tags: ["User Research", "UX Design", "UI Design", "Conversion"],
    copy: "Understand your audience and shape intuitive digital experiences that help visitors take the next step.",
    image: `${CDN}/2025/06/mobile-app.webp`,
  },
  {
    title: "SEO & Organic Growth",
    titleTop: "SEO",
    titleBottom: "& Organic Growth",
    tags: ["Technical SEO", "On-page SEO", "Search Visibility", "Content Strategy"],
    copy: "Strengthen your search presence with technical foundations, relevant content, and pages built around customer intent.",
    image: `${CDN}/2025/06/webflow-development.webp`,
  },
  {
    title: "Paid Advertising & Customer Acquisition",
    titleTop: "Paid Advertising",
    titleBottom: "& Acquisition",
    tags: ["Google Ads", "Meta Ads", "Campaign Strategy", "Conversion Tracking"],
    copy: "Reach the right audience with focused campaigns, relevant creative, and tracking that informs your next decision.",
    image: `${CDN}/2025/02/motion-graphic.png`,
  },
  {
    title: "Content & Creative Strategy",
    titleTop: "Content",
    titleBottom: "& Creative Strategy",
    tags: ["Brand Messaging", "Creative Direction", "Campaign Content"],
    copy: "Connect your brand story to customer needs with clear messaging and purposeful creative across digital channels.",
    image: `${CDN}/2025/02/brand-identity-service-feature.webp`,
  },
  {
    title: "Lead Generation & Conversion Optimization",
    titleTop: "Lead Generation",
    titleBottom: "& Conversion",
    tags: ["Lead Capture", "Landing Pages", "Qualification", "Funnels"],
    copy: "Connect landing pages, lead capture, and qualification into a clearer journey from first visit to enquiry.",
    image: `${CDN}/2025/06/ui-ux-service.webp`,
  },
  {
    title: "Web Development",
    titleTop: "Web",
    titleBottom: "Development",
    tags: ["Business Websites", "E-commerce", "Web Applications", "Landing Pages"],
    copy: "Build fast, reliable websites and custom applications that support your business goals and day-to-day operations.",
    image: `${CDN}/2025/06/web-developement.webp`,
  },
  {
    title: "Performance Optimization",
    titleTop: "Performance",
    titleBottom: "Optimization",
    tags: ["Website Audits", "User Journeys", "Conversion Testing"],
    copy: "Identify friction in your website and refine key journeys using performance data and customer feedback.",
    image: `${CDN}/2025/02/web_design_service_image.webp`,
  },
  {
    title: "AI Automation & CRM",
    titleTop: "AI Automation",
    titleBottom: "& CRM",
    tags: ["AI Support", "Workflows", "CRM Integration", "Process Automation"],
    copy: "Connect your tools, automate repetitive workflows, and support customer enquiries with practical AI and CRM systems.",
    image: `${CDN}/2025/02/wordpress-service-cards.webp`,
  },
];

export type ClientLogo = { name: string; slug: string };

/** Brand marks served from cdn.simpleicons.org (official SVG brand icons). */
export const clientLogos: ClientLogo[] = [
  { name: "Shopify", slug: "shopify" },
  { name: "Webflow", slug: "webflow" },
  { name: "Figma", slug: "figma" },
  { name: "Stripe", slug: "stripe" },
  { name: "Notion", slug: "notion" },
  { name: "Airbnb", slug: "airbnb" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Intercom", slug: "intercom" },
  { name: "Atlassian", slug: "atlassian" },
  { name: "Dropbox", slug: "dropbox" },
  { name: "Zoom", slug: "zoom" },
  { name: "Spotify", slug: "spotify" },
  { name: "Uber", slug: "uber" },
  { name: "Klarna", slug: "klarna" },
  { name: "Revolut", slug: "revolut" },
  { name: "Asana", slug: "asana" },
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "Coinbase", slug: "coinbase" },
  { name: "DoorDash", slug: "doordash" },
  { name: "Duolingo", slug: "duolingo" },
  { name: "Grammarly", slug: "grammarly" },
  { name: "Wise", slug: "wise" },
  { name: "Monzo", slug: "monzo" },
  { name: "Squarespace", slug: "squarespace" },
  { name: "WordPress", slug: "wordpress" },
  { name: "PayPal", slug: "paypal" },
  { name: "Trustpilot", slug: "trustpilot" },
  { name: "Upwork", slug: "upwork" },
  { name: "Framer", slug: "framer" },
  { name: "Linear", slug: "linear" },
];

export const portfolioFilters = [
  "All",
  "Web Development",
  "E-commerce",
  "Branding",
  "Digital Marketing",
  "AI Automation",
  "Web Applications",
];

export type Project = {
  name: string;
  copy: string;
  image: string;
  tools: string[];
  categories: string[];
  year: string;
  metric: string;
  metricLabel: string;
  featured?: boolean;
};

/** 4K-ready imagery (3840px wide source, auto-format + responsive srcset in the UI). */
const shot = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=90&w=3840`;

export const projects: Project[] = [
  {
    name: "Clothivore",
    copy: "Premium kids clothing and lifestyle digital storefront with seamless catalog discovery and conversion-optimized checkout.",
    image: "/assets/aistudio/6r3e5mCKqUAiw9qid5DGOEfkmuuXt60h7Z2usv1F_9d8f4512.webp",
    tools: ["Shopify", "Tailwind CSS", "React"],
    categories: ["E-commerce", "Web Development", "Branding"],
    year: "2026",
    metric: "4.8x",
    metricLabel: "Sales Growth",
    featured: true,
  },
  {
    name: "Harley Aesthetic Clinic",
    copy: "Luxury clinical aesthetic & medical wellness consultation portal with interactive doctor profiles and VIP booking.",
    image: "/assets/aistudio/M2pVke9n4dopwlBtUWhzsskIbknjCSn5cyWBQrIM_9f6690e4.webp",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Web Applications", "Web Development", "Branding"],
    year: "2026",
    metric: "+260%",
    metricLabel: "Bookings",
    featured: true,
  },
  {
    name: "Property Point",
    copy: "Corporate estate & architectural builders platform showcasing prime commercial properties, residential plots, and investment consultancy.",
    image: "/assets/aistudio/WbyV4mpz09NgUcFkbm1Op9uKH4BrLS8l1TLob5Pv_1cee4d43.webp",
    tools: ["React", "Figma", "Tailwind CSS"],
    categories: ["Web Development", "Digital Marketing", "Web Applications"],
    year: "2026",
    metric: "98%",
    metricLabel: "Lead Quality",
  },
  {
    name: "Hiba Downtown",
    copy: "Prestigious urban high-rise development featuring luxury multi-tower residences, retail promenades, and virtual floorplans.",
    image: "/assets/aistudio/BhiqS7sCf7M6Ecm8A5N5UCQ4bqsKGaf6IZ6918EG_77386ddb.webp",
    tools: ["Three.js", "React", "Tailwind CSS"],
    categories: ["Web Development", "Branding", "Web Applications"],
    year: "2026",
    metric: "120M+",
    metricLabel: "Inquiries",
  },
  {
    name: "Otel Residence",
    copy: "Iconic twin luxury residential towers with landscaped garden terraces, smart home features, and private resident concierge portal.",
    image: "/assets/aistudio/4KYQtjarr9DSlQyppohioRfS9wigsDuaXCXSc5fY_559aaa1b.webp",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    categories: ["Web Applications", "Web Development"],
    year: "2026",
    metric: "100%",
    metricLabel: "Units Reserved",
  },
  {
    name: "AR Aesthetics Clinic",
    copy: "Specialized skin, laser, and hair transplant clinic digital platform with patient intake workflows and consultation funnels.",
    image: "/assets/aistudio/AJo940XgwOtE4hXrWEesdzxU6uhIg82A8MkcYd5d_e2a81a7e.webp",
    tools: ["React", "Tailwind CSS", "CRM"],
    categories: ["Digital Marketing", "Web Development", "AI Automation"],
    year: "2026",
    metric: "3.5x",
    metricLabel: "Patient Inflow",
  },
  {
    name: "Sky Tower Commercial",
    copy: "Premier commercial skyscraper architectural showcase featuring grade-A corporate suites and interactive lease management.",
    image: "/assets/aistudio/e8v4LeD2xv0ZxeOZuIOXi3YTOS5cxBkp6vbvtalL_d936d18e.webp",
    tools: ["React", "Figma", "Node.js"],
    categories: ["Web Applications", "Web Development"],
    year: "2026",
    metric: "450K+",
    metricLabel: "Sq Ft Leased",
  },
  {
    name: "Grand Avenue Heights",
    copy: "Master-planned urban residential sanctuary with panoramic skywalks, elevated sky gardens, and digital community amenity booking.",
    image: "/assets/aistudio/qiIUEKnmftIFGAF752zbJ3c1EU5NyAK4JL7asSMf_b0a0a818.webp",
    tools: ["Next.js", "Tailwind CSS"],
    categories: ["Web Development", "AI Automation", "Web Applications"],
    year: "2026",
    metric: "94%",
    metricLabel: "Satisfaction",
  },
  {
    name: "Royal Palm Enclave",
    copy: "Palatial estate living and luxury apartment complex immersed in private woodlands, recreation courtyards, and concierge services.",
    image: "/assets/aistudio/iXUtWtWYuJWau1P5GiQ3CvsFZZZduAZZGWsWaelL_4ac54701.webp",
    tools: ["Figma", "React", "Tailwind CSS"],
    categories: ["Branding", "E-commerce", "Web Development"],
    year: "2026",
    metric: "09",
    metricLabel: "Estate Project",
  },
];

export const testimonials = [
  {
    name: "Strategy feedback",
    quote:
      "Testimonial placeholder — verified client feedback on business discovery and strategic direction will appear here.",
  },
  {
    name: "Brand feedback",
    quote:
      "Testimonial placeholder — verified client feedback on brand positioning and creative collaboration will appear here.",
  },
  {
    name: "Website feedback",
    quote:
      "Testimonial placeholder — verified client feedback on website development and digital experiences will appear here.",
  },
  {
    name: "Marketing feedback",
    quote:
      "Testimonial placeholder — verified client feedback on customer acquisition and campaign collaboration will appear here.",
  },
  {
    name: "Automation feedback",
    quote:
      "Testimonial placeholder — verified client feedback on workflows and CRM integration will appear here.",
  },
  {
    name: "Support feedback",
    quote:
      "Testimonial placeholder — verified client feedback on ongoing optimization and support will appear here.",
  },
];

export const stats = [
  {
    value: "—",
    label: "Projects Delivered",
    copy: "Verified project totals will be published when confirmed.",
  },
  {
    value: "—",
    label: "Digital Solutions Built",
    copy: "Verified delivery figures will be published when confirmed.",
  },
  {
    value: "—",
    label: "Client Satisfaction",
    copy: "Verified satisfaction data will be published when confirmed.",
  },
  {
    value: "—",
    label: "Industries Served",
    copy: "Verified industry coverage will be published when confirmed.",
  },
  {
    value: "—",
    label: "Automation Workflows",
    copy: "Verified workflow totals will be published when confirmed.",
  },
  {
    value: "—",
    label: "Growth Partnerships",
    copy: "Verified partnership figures will be published when confirmed.",
  },
];

export const processSteps = [
  {
    name: "Discover",
    image: `${CDN}/2025/06/hero-6.webp`,
    alt: "Project discovery phase and initial UX strategy mapping workshop",
    copy: "Understand your business, audience, objectives, and challenges.",
  },
  {
    name: "Strategize",
    image: `${CDN}/2025/06/hero-4.webp`,
    alt: "User research, competitive analysis, and tech stack development strategy",
    copy: "Identify opportunities and create a focused digital growth roadmap.",
  },
  {
    name: "Design",
    image: `${CDN}/2025/06/hero-7.webp`,
    alt: "Custom mobile app and web UI UX design wireframes and visual interface prototype",
    copy: "Develop clear brand experiences and conversion-focused interfaces.",
  },
  {
    name: "Build",
    image: `${CDN}/2025/06/hero-2.webp`,
    alt: "Custom full-stack web application development and responsive frontend coding",
    copy: "Implement fast, reliable, and scalable digital solutions.",
  },
  {
    name: "Launch",
    image: `${CDN}/2025/06/hero-9.webp`,
    alt: "Cross-browser QA testing, usability verification, and performance optimization",
    copy: "Deploy the solution, test functionality, and prepare for real users.",
  },
  {
    name: "Optimize",
    image: `${CDN}/2025/06/hero-10.webp`,
    alt: "Secure web application deployment, site launch, and post-launch performance monitoring",
    copy: "Use performance data and feedback to identify opportunities for improvement.",
  },
];

export const faqs = [
  {
    q: "What services does six2eight offer?",
    a: "We bring together branding, strategy, UI/UX, web development, SEO, paid advertising, lead generation, and AI automation. The right mix depends on your business goals.",
  },
  {
    q: "How do we start a project?",
    a: "Tell us about your business, objectives, and current challenges through the consultation link. We can discuss priorities and define a suitable scope before work begins.",
  },
  {
    q: "How long will my project take?",
    a: "Timing depends on scope, complexity, integrations, and feedback. Milestones and an estimated schedule are agreed during planning, rather than promised before discovery.",
  },
  {
    q: "How are projects priced?",
    a: "Quotes reflect the scope, deliverables, and support required. Share your goals and budget so we can discuss an appropriate approach and provide a custom proposal.",
  },
  {
    q: "Do you build websites and e-commerce stores?",
    a: "Our web services cover business websites, online stores, custom applications, and landing pages. We consider usability, performance, and your operational needs together.",
  },
  {
    q: "Can you help with SEO and digital marketing?",
    a: "SEO, content strategy, Google Ads, and Meta advertising can form part of a connected acquisition plan. Priorities and tracking are defined around your audience and goals; results are not guaranteed.",
  },
  {
    q: "How can AI automation and CRM help my business?",
    a: "Automation can support customer enquiries, lead qualification, and repetitive workflows. We assess your processes and tools before recommending suitable AI features or CRM integrations.",
  },
  {
    q: "How do revisions and ongoing maintenance work?",
    a: "Revision rounds, maintenance, and post-launch optimization are defined in the agreed scope. We discuss feedback, support needs, and responsibilities before the project begins.",
  },
];

export const greetings = [
  "Hello",
  "你好",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "مرحبا",
  "হ্যালো",
  "Olá",
  "ہیلو",
  "Hallo",
];

export const CALENDLY = "https://calendly.com/six2eight-sales/web-discovery-call";

export type ClientTestimonial = {
  company: string;
  avatar: string;
  quote: string;
};

export const clientTestimonials: ClientTestimonial[] = [
  {
    company: "Vizerto",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/03/Container-8.webp",
    quote:
      "They made sure the app felt simple to use without losing any of the bells and whistles. Everything just worked better after their touch.",
  },
  {
    company: "Storytime Owls",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/06/Story.webp",
    quote:
      "They actually get how users think, and the onboarding ended up feeling really smooth. We liked it so much we’re already planning the next round of changes.",
  },
  {
    company: "GunMade",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/06/Container-7.webp",
    quote:
      "They explained things in plain English, which made choices easy. Felt like a real collaboration, not a cookie-cutter process.",
  },
  {
    company: "DailyTime",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/03/Container-9.webp",
    quote:
      "Responses were fast, things didn’t get messy, and the process actually made sense. You don’t always get that with designers, so it was refreshing.",
  },
  {
    company: "Core & More",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/12/Container-11.webp",
    quote:
      "Issues were fixed fast, and the work was solid. Will definitely reach out for the next project.",
  },
  {
    company: "Fiction Profits",
    avatar: "https://cms.six2eight.com/wp-content/uploads/2025/12/Container-10.webp",
    quote:
      "Communication was easy and we didn’t have to chase anyone. It’s nice when a project just clicks like that.",
  },
];
