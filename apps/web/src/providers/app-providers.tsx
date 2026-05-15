"use client";

import { AuthProvider } from "@/providers/auth-provider";
import { DataProvider } from "@/providers/data-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <DataProvider>{children}</DataProvider>
    </AuthProvider>
  );
}
