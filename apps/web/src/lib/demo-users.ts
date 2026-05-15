import type { AuthUser, UserRole } from "@/lib/types";

/** Demo accounts for Vercel testing — no server required */
export const DEMO_USERS: Array<AuthUser & { password: string }> = [
  {
    id: "u-admin",
    name: "Super Admin",
    email: "admin@scisa.knust.edu.gh",
    role: "admin",
    password: "admin123",
  },
  {
    id: "u-speaker",
    name: "Rt. Hon. Speaker",
    email: "speaker@scisa.knust.edu.gh",
    role: "speaker",
    password: "speaker123",
  },
  {
    id: "u-clerk",
    name: "Clerk of Senate",
    email: "clerk@scisa.knust.edu.gh",
    role: "clerk",
    password: "clerk123",
  },
  {
    id: "u-senator",
    name: "Sen. Kwame Asante",
    email: "senator@scisa.knust.edu.gh",
    role: "senator",
    password: "senator123",
  },
];

export function roleLabel(role: UserRole) {
  const labels: Record<UserRole, string> = {
    student: "Student",
    senator: "Senator",
    clerk: "Clerk",
    speaker: "Speaker",
    admin: "Super Admin",
  };
  return labels[role];
}

export function canAccessDashboard(role: UserRole) {
  return role !== "student";
}
