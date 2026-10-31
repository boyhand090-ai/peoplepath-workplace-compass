const designServices = [
  "UI & UX Design",
  "Web Design",
  "Mobile App Design",
  "Branding & Identity",
  "SEO & Growth Marketing",
  "Paid Advertising",
];
const devServices = [
  "Web Development",
  "WordPress Development",
  "Shopify Development",
  "Webflow Development",
  "Digital Marketing",
  "Content Marketing",
];
const company = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Our Work", href: "/work" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "UI & UX Design", href: "/services/ui-ux-design" },
];
import { Instagram, Linkedin, Github, Youtube } from "lucide-react";

// Pixel-perfect SVG paths for brand icons not present in standard lucide sets
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.5 2.5c2.45 4.5 4.1 9.8 4.6 18.7" />
    </svg>
  );
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-5v1.5h5V7zm-2.2 4.6c-.6 0-1.1.2-1.5.5-.4.4-.6.9-.7 1.6h4.5c0-.7-.2-1.2-.6-1.6-.4-.3-1-.5-1.7-.5zm.2 4.4c-.7 0-1.2-.2-1.6-.6-.3-.3-.5-.7-.5-1.2h4.5c0 .6-.2 1.1-.6 1.4-.4.3-1 .4-1.8.4zm-11.8-6.5h-5.2v9h5.3c1.3 0 2.3-.3 3-1 .6-.6.9-1.4.9-2.3 0-.8-.3-1.4-.8-1.9.4-.4.7-1 .7-1.7 0-.8-.3-1.4-.8-1.8-.7-.2-1.6-.3-3.1-.3zm-2.7 3.5v-1.7h2.4c.6 0 1 .1 1.3.3.3.2.4.5.4.9 0 .4-.1.7-.4.9-.3.2-.8.3-1.4.3h-2.3zm0 3.7v-1.9h2.6c.7 0 1.2.1 1.5.3.3.2.4.6.4 1 0 .4-.1.8-.5 1-.3.2-.8.3-1.5.3h-2.5z" />
    </svg>
  );
}

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/six2eight",
    icon: <Instagram className="size-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/six2eight",
    icon: <Linkedin className="size-4" />,
  },
  { name: "X (Twitter)", href: "https://x.com/six2eight", icon: <XIcon className="size-3.5" /> },
  {
    name: "Dribbble",
    href: "https://dribbble.com/six2eight",
    icon: <DribbbleIcon className="size-4" />,
  },
  {
    name: "Behance",
    href: "https://behance.net/six2eight",
    icon: <BehanceIcon className="size-4" />,
  },
  { name: "GitHub", href: "https://github.com/six2eight", icon: <Github className="size-4" /> },
  { name: "YouTube", href: "https://youtube.com/@six2eight", icon: <Youtube className="size-4" /> },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink pt-16 pb-20 lg:pb-6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="flex items-baseline text-2xl font-semibold tracking-tight">
              six<span className="text-primary">2</span>eight
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              A full-service digital growth agency connecting strategy, design, technology, and
              marketing to move businesses forward.
            </p>
            {/* Social Media Platform Icons */}
            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2.5">
                Connect With Us
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`six2eight on ${s.name}`}
                    title={s.name}
                    className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 transition-all duration-200 hover:border-primary hover:bg-white/10 hover:text-primary hover:shadow-[0_0_12px_rgba(154,253,13,0.35)] hover:-translate-y-0.5 cursor-pointer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <FooterCol title="Strategy & Growth" items={designServices} />
          <FooterCol title="Technology & Systems" items={devServices} />
          <FooterCol title="Company" items={company} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026. six2eight. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer transition-colors hover:text-foreground">
              Privacy Policy
            </span>
            <span className="cursor-pointer transition-colors hover:text-foreground">
              Terms of use
            </span>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="text-display select-none px-5 pb-6 text-center text-[15vw] leading-none text-foreground/5"
      >
        six2eight
      </p>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: (string | { name: string; href: string })[];
}) {
  return (
    <div>
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => {
          const isObj = typeof item === "object";
          const label = isObj ? item.name : item;
          const href = isObj ? item.href : undefined;

          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </a>
              ) : (
                <span className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  {label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
