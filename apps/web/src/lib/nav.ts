import { CONSTITUTION_NAV_LINKS } from "@/lib/constitution-data";
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

export function navDropdownHubLabel(item: NavDropdown): string {
  if (item.label === "Committees") return "All committees";
  if (item.label === "Constitution") return "Constitution portal";
  return "View all";
}

export const committeeNav: NavDropdown = {
  type: "dropdown",
  label: "Committees",
  href: "/committees",
  children: COMMITTEE_NAV_LINKS,
};

export const constitutionNav: NavDropdown = {
  type: "dropdown",
  label: "Constitution",
  href: "/constitution",
  children: CONSTITUTION_NAV_LINKS,
};

export const mainNav: NavEntry[] = [
  { label: "About Senate", href: "/about" },
  { label: "Senators", href: "/senators" },
  { label: "Bills & Motions", href: "/bills" },
  committeeNav,
  { label: "Gallery", href: "/gallery" },
  constitutionNav,
  { label: "Petitions", href: "/petitions" },
  { label: "News", href: "/news" },
];

/** Flat links for footer and simple menus. */
export const mainNavFlat: NavLink[] = [
  { label: "About Senate", href: "/about" },
  { label: "Senators", href: "/senators" },
  { label: "Bills & Motions", href: "/bills" },
  { label: "Committees", href: "/committees" },
  { label: "Gallery", href: "/gallery" },
  { label: "Constitution", href: "/constitution" },
  { label: "Petitions", href: "/petitions" },
  { label: "News", href: "/news" },
];
