import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// -------------------------------------------------------------
// Security Utilities & Types
// -------------------------------------------------------------

export type LiveInquiryRecord = {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  services?: string[];
  budget?: string;
  timeline?: string;
  message?: string;
  hearAbout?: string;
  source: string;
  createdAt: string;
  status: "new" | "contacted" | "archived";
  [key: string]: unknown;
};

// Admin authentication credentials (configurable via environment variables)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "sixtoeight@talha";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "madebyAI";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

// Active in-memory admin sessions
type AdminSession = {
  token: string;
  username: string;
  expiresAt: number;
};
const adminSessions = new Map<string, AdminSession>();

// In-memory client inquiries store (max 500 recent records to prevent heap exhaustion)
const MAX_STORED_INQUIRIES = 500;
const liveServerInquiries: LiveInquiryRecord[] = [];

// Rate limiter: Failed login attempts per IP
type LoginAttemptRecord = { count: number; lockedUntil: number };
const loginAttempts = new Map<string, LoginAttemptRecord>();

// Rate limiter: Public form submissions per IP (max 20 per 10 minutes)
type SubmissionLimitRecord = { count: number; windowStart: number };
const submissionLimits = new Map<string, SubmissionLimitRecord>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "127.0.0.1";
}

/**
 * Sanitize untrusted user input string to prevent XSS and script injection
 */
function sanitizeInput(val: unknown, maxLen = 1000): string {
  if (typeof val !== "string") return "";
  let clean = val.trim();
  if (clean.length > maxLen) {
    clean = clean.slice(0, maxLen);
  }
  // Strip null bytes and control chars safely without regex control characters
  clean = Array.from(clean)
    .filter((ch) => ch.charCodeAt(0) >= 32 || ch === "\n" || ch === "\t")
    .join("");
  // Replace HTML special characters
  clean = clean
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
  return clean;
}

/**
 * Verify administrator session token from Authorization: Bearer <token>
 */
function verifyAdminToken(request: Request): { valid: boolean; username?: string } {
  const authHeader = request.headers.get("authorization") || "";
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  if (!match) return { valid: false };

  const token = match[1]!.trim();
  const session = adminSessions.get(token);
  if (!session) return { valid: false };

  if (Date.now() > session.expiresAt) {
    adminSessions.delete(token);
    return { valid: false };
  }

  return { valid: true, username: session.username };
}

/**
 * Append standard HTTP security headers to all outbound responses
 */
function attachSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("X-XSS-Protection", "1; mode=block");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function jsonResponse(data: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      ...extraHeaders,
    },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown): Promise<Response> {
    const url = new URL(request.url);
    const clientIp = getClientIp(request);

    // -------------------------------------------------------------
    // API: Admin Authentication Endpoint (/api/admin/auth)
    // -------------------------------------------------------------
    if (url.pathname === "/api/admin/auth") {
      const corsHeaders = {
        "access-control-allow-origin": url.origin || "*",
        "access-control-allow-methods": "GET, POST, DELETE, OPTIONS",
        "access-control-allow-headers": "Content-Type, Authorization",
      };

      if (request.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders });
      }

      // Check current session validity
      if (request.method === "GET") {
        const { valid, username } = verifyAdminToken(request);
        if (!valid) {
          return jsonResponse({ authenticated: false }, 401, corsHeaders);
        }
        return jsonResponse({ authenticated: true, username }, 200, corsHeaders);
      }

      // Log in
      if (request.method === "POST") {
        // Check rate limiting on failed attempts
        const now = Date.now();
        const record = loginAttempts.get(clientIp);
        if (record && record.lockedUntil > now) {
          const waitMinutes = Math.ceil((record.lockedUntil - now) / 60000);
          return jsonResponse(
            { error: `Too many failed attempts. Try again in ${waitMinutes} minute(s).` },
            429,
            corsHeaders,
          );
        }

        try {
          const body = (await request.json()) as { username?: string; password?: string };
          const userStr = typeof body?.username === "string" ? body.username.trim() : "";
          const passStr = typeof body?.password === "string" ? body.password.trim() : "";

          const isValidUser =
            userStr === ADMIN_USERNAME ||
            userStr === "sixtoeight@talha" ||
            userStr === "sixtoeight" ||
            userStr === "ozyrah@talha";

          if (isValidUser && passStr === ADMIN_PASSWORD) {
            // Success: clear failed attempts
            loginAttempts.delete(clientIp);

            // Generate secure random token
            const token =
              typeof crypto?.randomUUID === "function"
                ? crypto.randomUUID()
                : `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

            const session: AdminSession = {
              token,
              username: userStr,
              expiresAt: now + SESSION_TTL_MS,
            };
            adminSessions.set(token, session);

            return jsonResponse(
              {
                success: true,
                token,
                expiresAt: session.expiresAt,
                username: userStr,
              },
              200,
              corsHeaders,
            );
          } else {
            // Increment failed attempt counter
            const current = record || { count: 0, lockedUntil: 0 };
            const newCount = current.count + 1;
            const lockedUntil = newCount >= 5 ? now + 5 * 60 * 1000 : 0;
            loginAttempts.set(clientIp, { count: newCount, lockedUntil });

            return jsonResponse(
              { error: "Invalid username or password. Access denied." },
              401,
              corsHeaders,
            );
          }
        } catch {
          return jsonResponse({ error: "Malformed login request." }, 400, corsHeaders);
        }
      }

      // Log out
      if (request.method === "DELETE") {
        const authHeader = request.headers.get("authorization") || "";
        const match = authHeader.match(/^Bearer\s+(.+)$/i);
        if (match) {
          adminSessions.delete(match[1]!.trim());
        }
        return jsonResponse({ success: true, message: "Logged out." }, 200, corsHeaders);
      }
    }

    // -------------------------------------------------------------
    // API: Send email to a client via connected Gmail (ADMIN ONLY)
    // -------------------------------------------------------------
    if (url.pathname === "/api/admin/send-email") {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method not allowed" }, 405);
      }
      const auth = verifyAdminToken(request);
      if (!auth.valid) {
        return jsonResponse(
          { error: "Unauthorized: please log in to the admin portal again." },
          401,
        );
      }
      let body: Record<string, unknown>;
      try {
        body = (await request.json()) as Record<string, unknown>;
      } catch {
        return jsonResponse({ error: "Invalid request body" }, 400);
      }
      const to = String(body["to"] ?? "").trim();
      const subject = String(body["subject"] ?? "")
        .trim()
        .slice(0, 300);
      const message = String(body["message"] ?? "").slice(0, 20000);
      if (!/^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/.test(to) || to.length > 200) {
        return jsonResponse({ error: "Please enter a valid client email address." }, 400);
      }
      if (!subject || /[\r\n]/.test(subject)) {
        return jsonResponse({ error: "Please enter a subject." }, 400);
      }
      if (!message.trim()) {
        return jsonResponse({ error: "Please write a message." }, 400);
      }
      const lovableKey = process.env["LOVABLE_API_KEY"];
      const gmailKey = process.env["GOOGLE_MAIL_API_KEY"];
      if (!lovableKey || !gmailKey) {
        return jsonResponse({ error: "Gmail is not connected." }, 500);
      }
      const b64 = (s: string) =>
        btoa(Array.from(new TextEncoder().encode(s), (b) => String.fromCharCode(b)).join(""));
      const isAscii = (s: string) => [...s].every((c) => (c.codePointAt(0) ?? 0) <= 0x7f);
      const header = (v: string) => (isAscii(v) ? v : `=?UTF-8?B?${b64(v)}?=`);
      const mime = [
        `To: ${to}`,
        `Subject: ${header(subject)}`,
        "MIME-Version: 1.0",
        'Content-Type: text/plain; charset="UTF-8"',
        "Content-Transfer-Encoding: base64",
        "",
        b64(message),
      ].join("\r\n");
      const raw = b64(mime).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      const res = await fetch(
        "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": gmailKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ raw }),
        },
      );
      if (!res.ok) {
        const errText = await res.text();
        console.error(`Gmail send failed [${res.status}]: ${errText}`);
        return jsonResponse({ error: `Gmail could not send the email (${res.status}).` }, 502);
      }
      const sent = (await res.json()) as { id?: string };
      return jsonResponse({ ok: true, id: sent.id ?? null });
    }

    // -------------------------------------------------------------
    // API: Client Inquiries API (/api/inquiries)
    // -------------------------------------------------------------
    if (url.pathname === "/api/inquiries") {
      const corsHeaders = {
        "access-control-allow-origin": url.origin || "*",
        "access-control-allow-methods": "GET, POST, PATCH, DELETE, OPTIONS",
        "access-control-allow-headers": "Content-Type, Authorization",
      };

      if (request.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders });
      }

      // 1. GET: Read all inquiries (STRICTLY ADMIN ONLY)
      if (request.method === "GET") {
        const { valid } = verifyAdminToken(request);
        if (!valid) {
          return jsonResponse(
            {
              error:
                "Unauthorized: Administrator authentication token required to view client records.",
            },
            401,
            corsHeaders,
          );
        }
        return jsonResponse(liveServerInquiries, 200, corsHeaders);
      }

      // 2. POST: Submit inquiry from contact form (PUBLIC with rate limiting & sanitization)
      if (request.method === "POST") {
        // Enforce rate limiter (max 20 requests per 10 minutes per IP)
        const now = Date.now();
        const limit = submissionLimits.get(clientIp);
        if (limit) {
          if (now - limit.windowStart > 10 * 60 * 1000) {
            submissionLimits.set(clientIp, { count: 1, windowStart: now });
          } else if (limit.count >= 20) {
            return jsonResponse(
              { error: "Submission rate limit exceeded. Please wait a few minutes." },
              429,
              corsHeaders,
            );
          } else {
            limit.count += 1;
          }
        } else {
          submissionLimits.set(clientIp, { count: 1, windowStart: now });
        }

        try {
          const body = (await request.json()) as Record<string, unknown>;

          const rawName = String(body.fullName || "").trim();
          const rawEmail = String(body.email || "").trim();

          // Validation
          if (!rawName || !rawEmail) {
            return jsonResponse(
              { error: "Missing required fields: fullName and email are required." },
              400,
              corsHeaders,
            );
          }

          // Email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(rawEmail) || rawEmail.length > 150) {
            return jsonResponse({ error: "Invalid email address format." }, 400, corsHeaders);
          }

          // Sanitize all fields
          const cleanRecord: LiveInquiryRecord = {
            id:
              typeof body.id === "string" && body.id.trim()
                ? sanitizeInput(body.id, 50)
                : `INQ-${new Date().getFullYear()}-${Date.now().toString().slice(-4)}`,
            fullName: sanitizeInput(rawName, 120),
            email: sanitizeInput(rawEmail, 150),
            phone: body.phone ? sanitizeInput(String(body.phone), 50) : undefined,
            company: body.company ? sanitizeInput(body.company, 150) : undefined,
            website: body.website ? sanitizeInput(body.website, 200) : undefined,
            services: Array.isArray(body.services)
              ? body.services.slice(0, 15).map((s) => sanitizeInput(s, 80))
              : ["General Inquiry"],
            budget: body.budget ? sanitizeInput(body.budget, 60) : "Undisclosed",
            timeline: body.timeline ? sanitizeInput(body.timeline, 80) : undefined,
            message: body.message ? sanitizeInput(body.message, 3000) : undefined,
            hearAbout: body.hearAbout ? sanitizeInput(body.hearAbout, 100) : undefined,
            source: sanitizeInput(body.source || "/contact", 100),
            createdAt:
              typeof body.createdAt === "string" ? body.createdAt : new Date().toISOString(),
            status: "new",
          };

          // Store in server list (enforce maximum capacity to prevent memory bloat)
          liveServerInquiries.unshift(cleanRecord);
          if (liveServerInquiries.length > MAX_STORED_INQUIRIES) {
            liveServerInquiries.pop();
          }

          return jsonResponse(cleanRecord, 201, corsHeaders);
        } catch {
          return jsonResponse({ error: "Invalid JSON payload." }, 400, corsHeaders);
        }
      }

      // 3. PATCH: Update inquiry status (STRICTLY ADMIN ONLY)
      if (request.method === "PATCH") {
        const { valid } = verifyAdminToken(request);
        if (!valid) {
          return jsonResponse(
            { error: "Unauthorized: Administrator token required to modify client records." },
            401,
            corsHeaders,
          );
        }

        try {
          const body = (await request.json()) as { id?: string; status?: string };
          if (!body.id) {
            return jsonResponse({ error: "Missing inquiry ID." }, 400, corsHeaders);
          }

          const targetIndex = liveServerInquiries.findIndex((i) => i.id === body.id);
          if (targetIndex !== -1) {
            const allowedStatuses = ["new", "contacted", "archived"];
            const newStatus =
              body.status && allowedStatuses.includes(body.status)
                ? (body.status as "new" | "contacted" | "archived")
                : liveServerInquiries[targetIndex]!.status;

            liveServerInquiries[targetIndex] = {
              ...liveServerInquiries[targetIndex]!,
              status: newStatus,
            };
          }

          return jsonResponse(liveServerInquiries, 200, corsHeaders);
        } catch {
          return jsonResponse({ error: "Invalid payload." }, 400, corsHeaders);
        }
      }

      // 4. DELETE: Remove inquiry (STRICTLY ADMIN ONLY)
      if (request.method === "DELETE") {
        const { valid } = verifyAdminToken(request);
        if (!valid) {
          return jsonResponse(
            { error: "Unauthorized: Administrator token required to delete client records." },
            401,
            corsHeaders,
          );
        }

        try {
          const body = (await request.json()) as { id?: string };
          if (!body.id) {
            return jsonResponse({ error: "Missing inquiry ID." }, 400, corsHeaders);
          }

          const index = liveServerInquiries.findIndex((i) => i.id === body.id);
          if (index !== -1) {
            liveServerInquiries.splice(index, 1);
          }

          return jsonResponse(liveServerInquiries, 200, corsHeaders);
        } catch {
          return jsonResponse({ error: "Invalid payload." }, 400, corsHeaders);
        }
      }
    }

    // -------------------------------------------------------------
    // TanStack Start Application SSR Handler with Security Headers
    // -------------------------------------------------------------
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      return attachSecurityHeaders(normalized);
    } catch (error) {
      console.error(error);
      const errorResponse = new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return attachSecurityHeaders(errorResponse);
    }
  },
};
