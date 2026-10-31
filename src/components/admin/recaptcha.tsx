// Google reCAPTCHA v3 (invisible, score-based). Token is fetched on submit.
type Grecaptcha = {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, opts: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

let loadPromise: Promise<string> | null = null;

function loadRecaptcha(): Promise<string> {
  if (loadPromise) return loadPromise;
  loadPromise = (async () => {
    const res = await fetch("/api/admin/recaptcha-config");
    const { siteKey } = (await res.json()) as { siteKey?: string };
    if (!siteKey) throw new Error("reCAPTCHA is not configured yet.");
    await new Promise<void>((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
      s.async = true;
      s.onload = () => window.grecaptcha!.ready(() => resolve());
      s.onerror = () => reject(new Error("reCAPTCHA failed to load."));
      document.head.appendChild(s);
    });
    return siteKey;
  })();
  loadPromise.catch(() => {
    loadPromise = null;
  });
  return loadPromise;
}

/** Start loading early (e.g. when the sign-in page opens). */
export function preloadRecaptcha() {
  void loadRecaptcha().catch(() => {});
}

/** Get a fresh token for the given action. */
export async function getRecaptchaToken(action: string): Promise<string> {
  const siteKey = await loadRecaptcha();
  return window.grecaptcha!.execute(siteKey, { action });
}
