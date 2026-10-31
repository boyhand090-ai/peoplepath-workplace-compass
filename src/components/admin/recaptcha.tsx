import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

type Grecaptcha = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => number;
  reset: (id?: number) => void;
  ready: (cb: () => void) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

export type RecaptchaHandle = { reset: () => void };

let scriptPromise: Promise<void> | null = null;
function loadScript(): Promise<void> {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    s.async = true;
    s.defer = true;
    s.onload = () => window.grecaptcha!.ready(() => resolve());
    s.onerror = () => reject(new Error("reCAPTCHA failed to load"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export const Recaptcha = forwardRef<RecaptchaHandle, { onChange: (token: string) => void }>(
  function Recaptcha({ onChange }, ref) {
    const box = useRef<HTMLDivElement>(null);
    const widgetId = useRef<number | null>(null);
    const [error, setError] = useState("");

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (widgetId.current !== null) window.grecaptcha?.reset(widgetId.current);
      },
    }));

    useEffect(() => {
      let cancelled = false;
      (async () => {
        try {
          const res = await fetch("/api/admin/recaptcha-config");
          const { siteKey } = (await res.json()) as { siteKey?: string };
          if (!siteKey) throw new Error("reCAPTCHA is not configured yet.");
          await loadScript();
          if (cancelled || !box.current || widgetId.current !== null) return;
          widgetId.current = window.grecaptcha!.render(box.current, {
            sitekey: siteKey,
            theme: "dark",
            callback: (t: string) => onChange(t),
            "expired-callback": () => onChange(""),
            "error-callback": () => onChange(""),
          });
        } catch (e) {
          if (!cancelled) setError(e instanceof Error ? e.message : "reCAPTCHA unavailable.");
        }
      })();
      return () => {
        cancelled = true;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div>
        <div ref={box} />
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    );
  },
);
