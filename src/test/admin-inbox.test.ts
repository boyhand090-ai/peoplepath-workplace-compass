import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ClientInquiry } from "@/lib/inbox";
import { filterAndSortInquiries, type InquiryQuery } from "@/lib/inquiry-filters";

const STORAGE_KEY = "six2eight_realtime_client_inquiries_v2";

const make = (
  o: Partial<ClientInquiry> & Pick<ClientInquiry, "id" | "fullName">,
): ClientInquiry => ({
  email: `${o.id.toLowerCase()}@client.test`,
  services: ["Web Design"],
  budget: "$5k",
  source: "/contact",
  createdAt: "2026-01-01T00:00:00Z",
  status: "new",
  ...o,
});

const A = make({
  id: "A",
  fullName: "Zara Khan",
  createdAt: "2026-03-01T00:00:00Z",
  services: ["SEO"],
  status: "contacted",
  company: "Acme",
});
const B = make({
  id: "B",
  fullName: "Ali Raza",
  createdAt: "2026-01-01T00:00:00Z",
  services: ["Web Design"],
});
const C = make({
  id: "C",
  fullName: "Mona Lee",
  createdAt: "2026-02-01T00:00:00Z",
  services: ["Web Design", "SEO"],
  status: "archived",
});
const all = [A, B, C];
const base: InquiryQuery = { search: "", status: "all", service: "all", sortBy: "newest" };
const ids = (l: ClientInquiry[]) => l.map((i) => i.id);

describe("admin filtering", () => {
  it("filters by status", () => {
    expect(ids(filterAndSortInquiries(all, { ...base, status: "new" }))).toEqual(["B"]);
  });
  it("filters by service", () => {
    expect(ids(filterAndSortInquiries(all, { ...base, service: "SEO" }))).toEqual(["A", "C"]);
  });
  it("searches name, email and company case-insensitively", () => {
    expect(ids(filterAndSortInquiries(all, { ...base, search: "acme" }))).toEqual(["A"]);
    expect(ids(filterAndSortInquiries(all, { ...base, search: "b@client" }))).toEqual(["B"]);
  });
  it("combines filters", () => {
    expect(
      ids(filterAndSortInquiries(all, { ...base, service: "SEO", status: "archived" })),
    ).toEqual(["C"]);
  });
});

describe("admin sorting", () => {
  it("newest first", () => expect(ids(filterAndSortInquiries(all, base))).toEqual(["A", "C", "B"]));
  it("oldest first", () =>
    expect(ids(filterAndSortInquiries(all, { ...base, sortBy: "oldest" }))).toEqual([
      "B",
      "C",
      "A",
    ]));
  it("name A-Z", () =>
    expect(ids(filterAndSortInquiries(all, { ...base, sortBy: "name" }))).toEqual(["B", "C", "A"]));
});

describe("saving notes and status", () => {
  beforeEach(() => {
    vi.resetModules();
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  });

  it("saves a private note and keeps it after reload", async () => {
    const inbox = await import("@/lib/inbox");
    inbox.updateInquiryNotes("B", "Call back Monday");
    vi.resetModules();
    const fresh = await import("@/lib/inbox");
    expect(fresh.getInquiries().find((i) => i.id === "B")?.notes).toBe("Call back Monday");
    expect(fresh.getInquiries().find((i) => i.id === "A")?.notes).toBeUndefined();
  });

  it("updates an inquiry status and persists it", async () => {
    const inbox = await import("@/lib/inbox");
    const result = await inbox.updateInquiryStatus("B", "contacted");
    expect(result.find((i) => i.id === "B")?.status).toBe("contacted");
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)!) as ClientInquiry[];
    expect(stored.find((i) => i.id === "B")?.status).toBe("contacted");
  });

  it("keeps local notes and status when server data refreshes", async () => {
    sessionStorage.setItem("six2eight_admin_auth_token", "t");
    const inbox = await import("@/lib/inbox");
    inbox.updateInquiryNotes("A", "VIP");
    await inbox.updateInquiryStatus("A", "archived");
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify([{ ...A, status: "new" }]), { status: 200 })),
    );
    const merged = await inbox.fetchServerInquiries("t");
    const a = merged.find((i) => i.id === "A");
    expect(a?.notes).toBe("VIP");
    expect(a?.status).toBe("archived");
    vi.unstubAllGlobals();
  });
});
