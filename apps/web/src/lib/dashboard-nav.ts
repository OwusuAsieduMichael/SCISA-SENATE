import type { UserRole } from "@/lib/types";

export type DashboardLink = {
  label: string;
  href: string;
  roles: UserRole[];
};

export const dashboardNav: DashboardLink[] = [
  { label: "Overview", href: "/dashboard", roles: ["admin", "speaker", "clerk", "senator"] },
  { label: "Bills & Motions", href: "/dashboard/bills", roles: ["admin", "speaker", "clerk", "senator"] },
  { label: "Digital Voting", href: "/dashboard/voting", roles: ["admin", "speaker", "senator"] },
  { label: "Senators", href: "/dashboard/senators", roles: ["admin", "speaker", "clerk"] },
  { label: "Petitions", href: "/dashboard/petitions", roles: ["admin", "speaker", "clerk"] },
  { label: "Announcements", href: "/dashboard/announcements", roles: ["admin", "speaker", "clerk"] },
  { label: "Sessions", href: "/dashboard/sessions", roles: ["admin", "clerk"] },
  { label: "Committees", href: "/dashboard/committees", roles: ["admin", "clerk"] },
  { label: "News", href: "/dashboard/news", roles: ["admin", "clerk"] },
  { label: "Audit Log", href: "/dashboard/audit", roles: ["admin", "speaker"] },
];

export function navForRole(role: UserRole) {
  return dashboardNav.filter((item) => item.roles.includes(role));
}
