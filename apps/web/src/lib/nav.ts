import { COMMITTEE_NAV_LINKS } from "@/lib/governance-data";

export type NavLink = {
  label: string;
  href: string;
};

export type NavDropdown = {
  type: "dropdown";
  label: string;
  href: string;
  children: NavLink[];
};

export type NavEntry = NavLink | NavDropdown;

export function isNavDropdown(entry: NavEntry): entry is NavDropdown {
  return "type" in entry && entry.type === "dropdown";
}

export const committeeNav: NavDropdown = {
  type: "dropdown",
  label: "Committees",
  href: "/committees",
  children: COMMITTEE_NAV_LINKS,
};

export const mainNav: NavEntry[] = [
  { label: "About Senate", href: "/about" },
  { label: "Senators", href: "/senators" },
  { label: "Bills & Motions", href: "/bills" },
  committeeNav,
  { label: "Sessions", href: "/sessions" },
  { label: "Constitution", href: "/constitution" },
  { label: "Petitions", href: "/petitions" },
  { label: "News", href: "/news" },
];

/** Flat links for footer and simple menus. */
export const mainNavFlat: NavLink[] = [
  { label: "About Senate", href: "/about" },
  { label: "Senators", href: "/senators" },
  { label: "Bills & Motions", href: "/bills" },
  { label: "Committees", href: "/committees" },
  { label: "Sessions", href: "/sessions" },
  { label: "Constitution", href: "/constitution" },
  { label: "Petitions", href: "/petitions" },
  { label: "News", href: "/news" },
];
