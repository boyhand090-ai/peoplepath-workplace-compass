import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches all 12 dedicated service routes without falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const servicePaths = [
      "/services/web-development",
      "/services/ui-ux-design",
      "/services/web-design",
      "/services/mobile-app-design",
      "/services/branding-identity",
      "/services/wordpress-development",
      "/services/shopify-development",
      "/services/webflow-development",
      "/services/digital-marketing",
      "/services/paid-ads",
      "/services/seo-marketing",
      "/services/content-marketing",
    ];

    for (const path of servicePaths) {
      const matches = router.matchRoutes(path);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });

  it("matches /contact and /admin portal routes", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    expect(router.matchRoutes("/contact").at(-1)?.routeId).not.toBe(rootRouteId);
    expect(router.matchRoutes("/admin").at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("sanitizes intake form submissions to prevent XSS injection", async () => {
    const { saveInquiry, getInquiries } = await import("@/lib/inbox");

    const record = await saveInquiry({
      fullName: "<script>alert('xss')</script>John Doe",
      email: "secure.client@example.com",
      services: ["Web Development", "<img src=x onerror=alert(1)>Design"],
      budget: "$10k to 20k",
      message: "<p>Hello <b>World</b></p>",
      source: "/test",
    });

    expect(record.fullName).not.toContain("<script>");
    expect(record.fullName).toContain("alert('xss')John Doe");
    expect(record.services[1]).not.toContain("<img");
    expect(record.message).not.toContain("<p>");

    const all = getInquiries();
    expect(all.some((i) => i.id === record.id)).toBe(true);
  });

  it("safely handles admin authentication token storage and logout", async () => {
    const { getAdminToken, setAdminToken, logoutAdmin } = await import("@/lib/inbox");

    setAdminToken("test-secure-token-12345");
    expect(getAdminToken()).toBe("test-secure-token-12345");

    await logoutAdmin();
    expect(getAdminToken()).toBeNull();
  });
});
