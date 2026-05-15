"use client";

import { FileText, Gavel, Megaphone, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/providers/data-provider";

export default function DashboardOverviewPage() {
  const { data } = useData();

  const stats = [
    { label: "Senators", value: data.senators.length, icon: Users },
    { label: "Active Bills", value: data.bills.length, icon: Gavel },
    { label: "Petitions", value: data.petitions.length, icon: FileText },
    { label: "Announcements", value: data.announcements.length, icon: Megaphone },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Overview</h1>
      <p className="mt-1 text-muted-foreground">
        Senate operations at a glance — all data lives in your browser.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {s.label}
              </CardTitle>
              <s.icon className="size-4 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent audit activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {data.auditLog.slice(0, 8).map((entry) => (
              <li key={entry.id} className="flex justify-between gap-4 border-b border-border py-2 last:border-0">
                <span>{entry.action}</span>
                <span className="shrink-0 text-muted-foreground">
                  {entry.actor} · {new Date(entry.at).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
