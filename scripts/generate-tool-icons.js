import fs from "fs";
import path from "path";

const targetDir = path.resolve(process.cwd(), "public/assets/tools");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const icons = {
  // 1. Google Ads
  "google-ads.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="100%" height="100%">
  <path fill="#4285F4" d="M37.8 154.2c-19.4-33.6-7.9-76.9 25.7-96.3l49.9-28.8c33.6-19.4 76.9-7.9 96.3 25.7 19.4 33.6 7.9 76.9-25.7 96.3l-49.9 28.8c-33.6 19.4-76.9 7.9-96.3-25.7z" transform="rotate(-30 96 96) scale(0.65) translate(25 25)"/>
  <path fill="#FBBC04" d="M125.7 29.8L75.8 116.2c-19.4 33.6-62.7 45.1-96.3 25.7-33.6-19.4-45.1-62.7-25.7-96.3L4.7-40.8C24.1-74.4 67.4-85.9 101-66.5c33.6 19.4 45.1 62.7 25.7 96.3z" transform="scale(0.4) translate(140 160)"/>
  <g transform="translate(16, 16) scale(0.833)">
    <path fill="#FBBC04" d="M68.5 22.8c-12.8-22.1-41.2-29.7-63.3-16.9-22.1 12.8-29.7 41.2-16.9 63.3l57.7 99.9c12.8 22.1 41.2 29.7 63.3 16.9 22.1-12.8 29.7-41.2 16.9-63.3L68.5 22.8z" transform="translate(42, 0)"/>
    <path fill="#4285F4" d="M149.2 142.7L91.5 42.8c-12.8-22.1-41.2-29.7-63.3-16.9-22.1 12.8-29.7 41.2-16.9 63.3l57.7 99.9c12.8 22.1 41.2 29.7 63.3 16.9 22.1-12.8 29.7-41.2 16.9-63.3z" transform="rotate(60 120 120) scale(0.9) translate(-10, -20)"/>
    <circle cx="56" cy="136" r="28" fill="#34A853"/>
  </g>
</svg>`,

  // 2. Meta Ads / Meta
  "meta-ads.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0064E0"/>
      <stop offset="50%" stop-color="#0081FB"/>
      <stop offset="100%" stop-color="#00C6FF"/>
    </linearGradient>
  </defs>
  <path fill="url(#metaGrad)" d="M50 56.4c-4.9-7.5-9.6-13.6-15.1-18.4C29.6 33.5 23.5 31 16.9 31 7.6 31 0 38.6 0 48s7.6 17 16.9 17c6.7 0 12.7-2.6 17.9-7 5.5-4.7 10.3-10.9 15.2-18.6 4.9 7.7 9.7 13.9 15.2 18.6 5.2 4.4 11.2 7 17.9 7 9.3 0 16.9-7.6 16.9-17s-7.6-17-16.9-17c-6.6 0-12.7 2.5-18 7-5.5 4.8-10.2 10.9-15.1 18.4zm-33.1-2.4c-3.3 0-6-2.7-6-6s2.7-6 6-6c3.2 0 6.2 1.8 9.5 5.6-3.3 3.8-6.3 6.4-9.5 6.4zm66.2 0c-3.2 0-6.2-2.6-9.5-6.4 3.3-3.8 6.3-5.6 9.5-5.6 3.3 0 6 2.7 6 6s-2.7 6-6 6z" transform="scale(0.85) translate(9, 10)"/>
</svg>`,

  // 3. LinkedIn
  "linkedin-ads.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="20" fill="#0A66C2"/>
  <path fill="#FFFFFF" d="M28 38H17v36h11V38zm-5.5-17C19 21 16 23.5 16 26.6c0 3 2.9 5.4 6.4 5.4 3.6 0 6.5-2.4 6.5-5.4 0-3.1-2.9-5.6-6.4-5.6zM84 53.5c0-10.2-5.5-16.5-14.8-16.5-6.5 0-9.6 3.6-11.2 6.1V38H47v36h11V54.4c0-5 1.9-8.4 6.6-8.4 4.5 0 5.4 3.8 5.4 8.2V74h11V53.5z"/>
</svg>`,

  // 4. Triple Whale
  "triple-whale.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="twGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#05C5FB"/>
      <stop offset="100%" stop-color="#0055FE"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill="#0C1427"/>
  <g fill="url(#twGrad)">
    <path d="M46 22c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zM53 25c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2s2-.9 2-2v-3c0-1.1-.9-2-2-2zM39 25c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2s2-.9 2-2v-3c0-1.1-.9-2-2-2z"/>
    <path d="M78 52c-3.5-9-12-16-24-16-16 0-28 10-33 22-2 5-1 10 3 13 4 3 10 3 15 1 5-2 11-4 17-4 7 0 12 3 18 3 5 0 9-3 10-7l4-9c.5-1-.2-2.2-1-2.5l-4-.5c.8-1 1-1.7 1-2.5z"/>
    <circle cx="34" cy="52" r="3" fill="#FFFFFF"/>
  </g>
</svg>`,

  // 5. Figma
  "figma.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <path fill="#F24E1E" d="M32 15h18v23H32a11.5 11.5 0 0 1 0-23z"/>
  <path fill="#FF7262" d="M50 15h18a11.5 11.5 0 0 1 0 23H50V15z"/>
  <path fill="#A259FF" d="M32 38h18v24H32a12 12 0 0 1 0-24z"/>
  <path fill="#1ABCFE" d="M50 38h18a12 12 0 1 1-18 10.4V38z"/>
  <path fill="#0ACF83" d="M32 62h18v11.5a11.5 11.5 0 1 1-23 0A11.5 11.5 0 0 1 32 62z"/>
</svg>`,

  // 6. ProtoPie
  "protopie.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#FF2E63"/>
  <path fill="#FFFFFF" d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 10c11 0 20 9 20 20H50V30zm-20 20c0-11 9-20 20-20v20H30zm0 4h36c-1.8 11.5-11.7 20-23.5 20-13.3 0-24-10.7-24-24 0-5.7 2-10.9 5.5-15l6 19z"/>
</svg>`,

  // 7. Framer
  "framer.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#000000"/>
  <path fill="#0055FF" d="M26 18h48L50 42H26zM26 42h24l24 24H50l-24 24V42z"/>
</svg>`,

  // 8. Lottie
  "lottie.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#00DDB3"/>
  <path fill="#15212A" d="M50 22L25 44l20 28 30-14z" opacity="0.9"/>
  <path fill="#FFFFFF" d="M50 22l-18 36 28 16 15-28z"/>
  <path fill="#15212A" d="M32 58l18 16 10-6z"/>
</svg>`,

  // 9. Webflow
  "webflow.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#146EF5"/>
  <path fill="#FFFFFF" d="M78 32c-3.8 0-7.3 2-9.3 5.3-.2-.1-.5-.2-.7-.3l-7-10.4c-.6-.9-1.6-1.5-2.7-1.5H35.4c-1.8 0-3.3 1.5-3.3 3.3v17.4c0 .3.1.6.3.8l8.2 12.2c.6.9 1.6 1.5 2.7 1.5h16.8c1.8 0 3.3-1.5 3.3-3.3v-5.2c2.2 2.1 5.3 3.4 8.7 3.4 6.7 0 12.1-5.4 12.1-12.1S84.7 32 78 32zm-35 8.7V29.5h14.7l6.8 10.1c-1.4 1.1-2.7 2.3-3.9 3.8L54 33.7c-.6-.9-1.6-1.5-2.7-1.5H43v8.5zm11.9 17.5H47l-6-8.9v-7.8h4.5l8.4 12.5v4.2zm23.1-6.9c-4.2 0-7.6-3.4-7.6-7.6s3.4-7.6 7.6-7.6 7.6 3.4 7.6 7.6-3.4 7.6-7.6 7.6z"/>
</svg>`,

  // 10. Spline 3D
  "spline.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <radialGradient id="splineGrad" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FF5E97"/>
      <stop offset="40%" stop-color="#9C44F7"/>
      <stop offset="70%" stop-color="#34C8E8"/>
      <stop offset="100%" stop-color="#080B1E"/>
    </radialGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="#0E1118"/>
  <circle cx="50" cy="50" r="28" fill="url(#splineGrad)"/>
  <ellipse cx="50" cy="50" rx="34" ry="14" fill="none" stroke="#34C8E8" stroke-width="2.5" transform="rotate(-30 50 50)"/>
</svg>`,

  // 11. Adobe Illustrator
  "illustrator.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#261300"/>
  <rect x="3" y="3" width="94" height="94" rx="19" fill="none" stroke="#FF9A00" stroke-width="4"/>
  <text x="50" y="65" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#FF9A00" text-anchor="middle">Ai</text>
</svg>`,

  // 12. Adobe Photoshop
  "photoshop.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#001826"/>
  <rect x="3" y="3" width="94" height="94" rx="19" fill="none" stroke="#31A8FF" stroke-width="4"/>
  <text x="50" y="65" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#31A8FF" text-anchor="middle">Ps</text>
</svg>`,

  // 13. Adobe InDesign
  "indesign.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#240018"/>
  <rect x="3" y="3" width="94" height="94" rx="19" fill="none" stroke="#FF3366" stroke-width="4"/>
  <text x="50" y="65" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#FF3366" text-anchor="middle">Id</text>
</svg>`,

  // 14. Adobe Premiere Pro
  "premiere.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#1C052B"/>
  <rect x="3" y="3" width="94" height="94" rx="19" fill="none" stroke="#EA77FF" stroke-width="4"/>
  <text x="50" y="65" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#EA77FF" text-anchor="middle">Pr</text>
</svg>`,

  // 15. Apple Xcode
  "xcode.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#157EFB"/>
  <path fill="none" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1.5" d="M15 30h70M15 50h70M15 70h70M30 15v70M50 15v70M70 15v70"/>
  <g transform="rotate(45 50 50) translate(0 -5)">
    <rect x="44" y="24" width="12" height="48" rx="4" fill="#DCE7FA"/>
    <path fill="#8A9BB3" d="M34 20h32v12H34z"/>
    <rect x="42" y="16" width="16" height="8" rx="2" fill="#52637A"/>
  </g>
</svg>`,

  // 16. WordPress
  "wordpress.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <circle cx="50" cy="50" r="45" fill="#21759B"/>
  <circle cx="50" cy="50" r="41" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>
  <path fill="#FFFFFF" d="M19 50c0 13.8 9.3 25.5 22.1 29.1L23.4 34.5C20.6 39 19 44.3 19 50zm48.7-2.3c0-4.6-1.6-7.8-3.1-10.4-1.9-3.2-3.8-6-3.8-9.2 0-3.6 2.7-7 6.6-7 .2 0 .3 0 .5.1C61.4 17.5 54.9 15.5 50 15.5c-12.8 0-24 6.7-30.2 16.7 1.1 0 2.2.1 3.2.1 5.3 0 13.5-.7 13.5-.7 2.7-.1 3 3.8.3 4.1 0 0-2.7.3-5.8.5l18.4 54.8 11.1-33.2-7.9-21.6c-2.7-.2-5.3-.5-5.3-.5-2.7-.2-2.4-4.1.3-4.1 0 0 8.3.7 13.3.7 1 0 2.1 0 3.2-.1-.2 1.3-.4 2.6-.4 4.1 0 3.9 1.5 7.6 3.4 10.9 2.2 3.8 4.7 8.2 4.7 13.6 0 3.6-1.4 7.8-3.3 12.3l-10.7 31c9.7-5.7 16.2-16.2 16.2-28.3z"/>
</svg>`,

  // 17. Advanced Custom Fields (ACF Pro)
  "acf.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#00E5A3"/>
  <path fill="#0C1D24" d="M50 20L22 36v32l28 16 28-16V36L50 20zm0 7.8l20.8 11.9-8.4 4.8L41.6 32.6 50 27.8zm-21.6 15l20 11.4v22.8L28.4 65.5V42.8zm23.2 34.2V54.2l20-11.4v22.7L51.6 77z"/>
  <text x="50" y="58" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#00E5A3" text-anchor="middle">ACF</text>
</svg>`,

  // 18. PHP
  "php.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <ellipse cx="50" cy="50" rx="46" ry="28" fill="#777BB4"/>
  <text x="50" y="58" font-family="monospace, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-style="italic">php</text>
</svg>`,

  // 19. MySQL
  "mysql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#00758F"/>
  <path fill="#F29111" d="M52 26c-9 0-18 6-22 14-3 7-2 15 2 22l6-4c-3-5-3-11 0-16 3-6 10-10 16-10 6 0 12 3 15 8l6-4c-5-7-13-10-23-10z"/>
  <path fill="#FFFFFF" d="M30 68h8l3-8h18l3 8h8l-16-36h-8L30 68zm14-15l6-15 6 15h-12z"/>
</svg>`,

  // 20. Shopify
  "shopify.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#95BF47"/>
  <path fill="#5E8E3E" d="M64 26l-10-3c-1-.3-2 .3-2.3 1.2L42 56l17 3.5 12-28.5c.3-1-.2-2-.9-2.3l-6.1-2.7z"/>
  <path fill="#FFFFFF" d="M62 25l-8.5-2.6c-.8-.2-1.7.3-2 1.1L30 76c-.3 1 .3 2 1.2 2.2l20 5.4c.8.2 1.7-.3 2-1.1L71 30c.3-1-.3-2-1.2-2.2L62 25zm-14 36c-4.2-1.1-6-4.5-5.3-7.2.7-2.7 3.6-4.3 7.8-3.2 4.2 1.1 6 4.5 5.3 7.2-.7 2.7-3.6 4.3-7.8 3.2z"/>
  <path fill="#004C3F" d="M51 49c-3-.8-4.5-2.8-4-4.7.5-1.9 2.7-2.9 5.7-2.1 3 .8 4.5 2.8 4 4.7-.5 1.9-2.7 2.9-5.7 2.1z"/>
</svg>`,

  // 21. GraphQL / Storefront API
  "graphql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#171E26"/>
  <g stroke="#E10098" stroke-width="3" fill="none">
    <polygon points="50,18 78,34 78,66 50,82 22,66 22,34"/>
    <polygon points="50,26 71,62 29,62"/>
    <polygon points="50,74 29,38 71,38"/>
  </g>
  <g fill="#E10098">
    <circle cx="50" cy="18" r="5"/><circle cx="78" cy="34" r="5"/><circle cx="78" cy="66" r="5"/>
    <circle cx="50" cy="82" r="5"/><circle cx="22" cy="66" r="5"/><circle cx="22" cy="34" r="5"/>
  </g>
</svg>`,

  // 22. Klaviyo
  "klaviyo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#FF6950"/>
  <path fill="#1A1A1A" d="M26 30h16v40H26zM46 30h28l-14 20 14 20H46l14-20z"/>
</svg>`,

  // 23. Finsweet
  "finsweet.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#181818"/>
  <path fill="#F4B728" d="M28 24h44v13H42v12h25v13H42v14H28V24z"/>
  <circle cx="74" cy="71" r="7" fill="#F4B728"/>
</svg>`,

  // 24. GSAP
  "gsap.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#0AE448"/>
  <text x="50" y="62" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#000000" text-anchor="middle" letter-spacing="-1">GSAP</text>
</svg>`,

  // 25. Zapier
  "zapier.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#FF4F00"/>
  <g fill="#FFFFFF" transform="translate(50 50)">
    <rect x="-6" y="-30" width="12" height="60" rx="6"/>
    <rect x="-6" y="-30" width="12" height="60" rx="6" transform="rotate(72)"/>
    <rect x="-6" y="-30" width="12" height="60" rx="6" transform="rotate(144)"/>
    <rect x="-6" y="-30" width="12" height="60" rx="6" transform="rotate(216)"/>
    <rect x="-6" y="-30" width="12" height="60" rx="6" transform="rotate(288)"/>
  </g>
</svg>`,

  // 26. Google Analytics 4 (GA4)
  "ga4.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#202124"/>
  <path fill="#F9AB00" d="M30 60a12 12 0 1 0 0 24 12 12 0 0 0 0-24z"/>
  <path fill="#E37400" d="M44 38c0-6.6 5.4-12 12-12s12 5.4 12 12v46H44V38z"/>
  <path fill="#F9AB00" d="M72 16c0-6.6 5.4-12 12-12s12 5.4 12 12v68H72V16z" transform="translate(-4 0)"/>
</svg>`,

  // 27. HubSpot
  "hubspot.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#FF7A59"/>
  <g fill="#FFFFFF">
    <circle cx="50" cy="50" r="14"/>
    <circle cx="50" cy="20" r="6"/>
    <circle cx="78" cy="40" r="6"/>
    <circle cx="78" cy="68" r="6"/>
    <rect x="47" y="24" width="6" height="14"/>
    <line x1="60" y1="44" x2="74" y2="40" stroke="#FFFFFF" stroke-width="6"/>
    <line x1="60" y1="56" x2="74" y2="66" stroke="#FFFFFF" stroke-width="6"/>
    <path d="M22 50h16" stroke="#FFFFFF" stroke-width="6"/>
  </g>
</svg>`,

  // 28. Segment
  "segment.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#52BD94"/>
  <g fill="#FFFFFF">
    <circle cx="34" cy="34" r="9"/>
    <circle cx="66" cy="34" r="9"/>
    <circle cx="66" cy="66" r="9"/>
    <circle cx="34" cy="66" r="9"/>
    <path stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" d="M34 34l32 0M66 34l-32 32M34 66l32 0"/>
  </g>
</svg>`,

  // 29. Ahrefs
  "ahrefs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#0058FF"/>
  <g fill="#FF6000">
    <path d="M28 66L46 26h8l18 40h-8l-5-12H41l-5 12h-8zm16-18h12l-6-15-6 15z" fill="#FFFFFF"/>
    <path d="M68 62l12-12-12-12v7H54v10h14v7z"/>
  </g>
</svg>`,

  // 30. SEMrush
  "semrush.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#FF642D"/>
  <path fill="#FFFFFF" d="M72 38c-4-8-12-14-22-14-14 0-26 12-26 26s12 26 26 26c11 0 20-7 24-17l-10-3c-3 6-8 10-14 10-9 0-16-7-16-16s7-16 16-16c6 0 11 3 14 8l8-4z"/>
  <polygon points="56,36 78,42 66,56" fill="#1C1844"/>
</svg>`,

  // 31. Google Search Console
  "gsc.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#202124"/>
  <circle cx="45" cy="45" r="22" fill="none" stroke="#4285F4" stroke-width="6"/>
  <line x1="61" y1="61" x2="80" y2="80" stroke="#EA4335" stroke-width="8" stroke-linecap="round"/>
  <path d="M35 52l6-8 7 6 9-11" fill="none" stroke="#34A853" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // 32. Screaming Frog
  "screaming-frog.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#1E281E"/>
  <ellipse cx="50" cy="56" rx="28" ry="22" fill="#7EC138"/>
  <circle cx="36" cy="36" r="10" fill="#7EC138"/>
  <circle cx="64" cy="36" r="10" fill="#7EC138"/>
  <circle cx="36" cy="36" r="5" fill="#FFFFFF"/>
  <circle cx="64" cy="36" r="5" fill="#FFFFFF"/>
  <circle cx="36" cy="36" r="2.5" fill="#000000"/>
  <circle cx="64" cy="36" r="2.5" fill="#000000"/>
  <path d="M32 60q18 10 36 0" stroke="#1E281E" stroke-width="4" fill="none" stroke-linecap="round"/>
</svg>`,

  // 33. CreatorIQ
  "creatoriq.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#635BFF"/>
  <circle cx="50" cy="50" r="26" fill="none" stroke="#FFFFFF" stroke-width="8"/>
  <rect x="46" y="24" width="8" height="52" fill="#FFFFFF" transform="rotate(45 50 50)"/>
  <circle cx="50" cy="50" r="10" fill="#635BFF"/>
</svg>`,

  // 34. CapCut
  "capcut.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#000000"/>
  <path fill="#FFFFFF" d="M22 36l26 14-26 14V36zm56 0L52 50l26 14V36z"/>
  <rect x="46" y="28" width="8" height="44" rx="4" fill="#FFFFFF"/>
</svg>`,

  // 35. Sprout Social
  "sprout-social.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#28D180"/>
  <path fill="#FFFFFF" d="M50 20C38 32 30 46 30 60c0 11 9 20 20 20s20-9 20-20c0-14-8-28-20-40zm0 46c-4.4 0-8-3.6-8-8 0-6 4-12 8-18 4 6 8 12 8 18 0 4.4-3.6 8-8 8z"/>
</svg>`,

  // 36. React
  "react.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#181818"/>
  <circle cx="50" cy="50" r="7" fill="#61DAFB"/>
  <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="#61DAFB" stroke-width="3" transform="rotate(30 50 50)"/>
  <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="#61DAFB" stroke-width="3" transform="rotate(90 50 50)"/>
  <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="#61DAFB" stroke-width="3" transform="rotate(150 50 50)"/>
</svg>`,

  // 37. Next.js
  "nextjs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <circle cx="50" cy="50" r="46" fill="#000000" stroke="#333333" stroke-width="2"/>
  <path fill="#FFFFFF" d="M38 32h7v36h-7z"/>
  <path fill="url(#nextGrad)" d="M45 32l24 35h-7L42 38z"/>
  <path fill="#FFFFFF" d="M62 32h7v21h-7z"/>
  <defs>
    <linearGradient id="nextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>`,

  // 38. TypeScript
  "typescript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#3178C6"/>
  <text x="64" y="76" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" text-anchor="middle">TS</text>
</svg>`,

  // 39. JavaScript
  "javascript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#F7DF1E"/>
  <text x="64" y="76" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#000000" text-anchor="middle">JS</text>
</svg>`,
};

for (const [filename, content] of Object.entries(icons)) {
  fs.writeFileSync(path.join(targetDir, filename), content.trim());
}

console.log(
  "Successfully generated " + Object.keys(icons).length + " tool SVG icons in public/assets/tools/",
);
