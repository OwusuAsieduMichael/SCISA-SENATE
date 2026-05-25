/** Strip honorifics for display initials and sorting. */
export function stripHonorifics(name: string): string {
  return name
    .replace(/^rt\.?\s*hon\.?\s*/i, "")
    .replace(/^hon\.?\s*/i, "")
    .trim();
}

/** Two-letter initials from surname and given name (e.g. Henry Oduro Ntiamoah → HN). */
export function formatPersonInitials(name: string): string {
  const parts = stripHonorifics(name).split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  const first = parts[0][0] ?? "";
  const last = parts[parts.length - 1][0] ?? "";
  return `${first}${last}`.toUpperCase();
}

export function isCommitteeLeadershipRole(role: string): boolean {
  const r = role.toLowerCase();
  return (
    r.includes("chairperson") ||
    r.includes("vice chairperson") ||
    r.includes("deputy speaker") ||
    r.startsWith("speaker") ||
    r === "clerk" ||
    r.includes("clerk to the committee") ||
    r === "deputy clerk"
  );
}
