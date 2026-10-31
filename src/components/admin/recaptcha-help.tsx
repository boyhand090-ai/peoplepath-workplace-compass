import { useEffect, useState } from "react";

/** Base domain to allow in Google reCAPTCHA, e.g. "id-preview--x.lovable.app" -> "lovable.app". */
function baseDomain(host: string): string {
  if (!host || host === "localhost" || /^\d+(\.\d+){3}$/.test(host)) return host;
  const parts = host.split(".");
  return parts.length > 2 ? parts.slice(-2).join(".") : host;
}

export function RecaptchaHelp() {
  const [host, setHost] = useState("");
  useEffect(() => setHost(window.location.hostname), []);
  const base = baseDomain(host);

  return (
    <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-xs leading-relaxed text-amber-100">
      <p className="font-semibold text-amber-200">Is this the site owner?</p>
      <p className="mt-1">
        This usually means Google hasn't approved this web address for your reCAPTCHA keys. Look
        for a small badge in the bottom-right corner saying{" "}
        <em>"Invalid domain for site key"</em>.
      </p>
      <ol className="mt-2 list-decimal space-y-1 pl-4">
        <li>
          Open{" "}
          <a
            href="https://www.google.com/recaptcha/admin"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Google reCAPTCHA admin
          </a>{" "}
          with the account that owns the keys.
        </li>
        <li>Choose this site and click the gear icon (Settings).</li>
        <li>
          Under <strong>Domains</strong>, add{" "}
          <code className="rounded bg-black/30 px-1">{base || "your site's domain"}</code>
          {host && host !== base && (
            <>
              {" "}
              (it covers <code className="rounded bg-black/30 px-1">{host}</code>)
            </>
          )}
          .
        </li>
        <li>Save, wait a minute or two, then refresh this page and sign in again.</li>
      </ol>
      <p className="mt-2 text-amber-200/80">
        For security, sign-in stays locked until the check passes. There is no way around it.
      </p>
    </div>
  );
}
