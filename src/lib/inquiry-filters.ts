import type { ClientInquiry } from "./inbox";

export type StatusFilter = "all" | ClientInquiry["status"];
export type SortBy = "newest" | "oldest" | "name";

export type InquiryQuery = {
  search: string;
  status: StatusFilter;
  service: string;
  sortBy: SortBy;
};

/** Filter inquiries by search text, status and service, then sort them. */
export function filterAndSortInquiries(
  inquiries: ClientInquiry[],
  { search, status, service, sortBy }: InquiryQuery,
): ClientInquiry[] {
  const q = search.toLowerCase();
  const list = inquiries.filter((inq) => {
    const matchSearch =
      inq.fullName.toLowerCase().includes(q) ||
      inq.email.toLowerCase().includes(q) ||
      (inq.company?.toLowerCase().includes(q) ?? false) ||
      (inq.message?.toLowerCase().includes(q) ?? false) ||
      inq.services.some((s) => s.toLowerCase().includes(q));
    const matchStatus = status === "all" || inq.status === status;
    const matchService = service === "all" || inq.services.includes(service);
    return matchSearch && matchStatus && matchService;
  });
  return [...list].sort((a, b) => {
    if (sortBy === "name") return a.fullName.localeCompare(b.fullName);
    const diff = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    return sortBy === "oldest" ? diff : -diff;
  });
}
