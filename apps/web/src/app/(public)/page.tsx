import Link from "next/link";
import { Bell, Gavel } from "lucide-react";

import { HeroSection } from "@/components/home/hero-section";
import { SpeakerWelcome } from "@/components/home/speaker-welcome";
import { OfficerCard } from "@/components/senate/officer-card";
import { ContentSection } from "@/components/shared/content-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { getSenatePresidingOfficers } from "@/lib/governance-data";
import {
  announcements,
  featuredBills,
} from "@/lib/mock-data";

export default function HomePage() {
  const officers = getSenatePresidingOfficers();
  const speaker = officers.find((o) => o.role.includes("Speaker of"));

  return (
    <>
      <HeroSection />
      <SpeakerWelcome />

      <ContentSection>
        <SectionHeading
          title="Leadership of the Senate"
          description="The presiding officers and clerk steward legislative proceedings and institutional records."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {officers.map((officer) => (
            <OfficerCard
              key={officer.id}
              officer={officer}
              highlight={officer.id === speaker?.id}
            />
          ))}
        </div>
      </ContentSection>

      <ContentSection alt>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Featured Legislation"
              description="Track bills and motions through the senate workflow."
            />
            <ul className="space-y-4">
              {featuredBills.map((bill) => (
                <li key={bill.id}>
                  <Card>
                    <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground">{bill.id}</p>
                        <p className="mt-1 font-semibold text-foreground">{bill.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {bill.sponsor} · Updated {bill.updatedAt}
                        </p>
                      </div>
                      <StatusBadge status={bill.status} />
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
            <Link
              href="/bills"
              className="mt-6 inline-flex text-sm font-semibold text-destructive hover:underline"
            >
              View all bills & motions →
            </Link>
          </div>

          <div>
            <SectionHeading
              title="Announcements & Notices"
              description="Official communications from the Senate to students."
            />
            <ul className="space-y-3">
              {announcements.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 rounded-lg border border-border bg-card p-4"
                >
                  <div
                    className={
                      item.urgent
                        ? "mt-0.5 text-destructive"
                        : "mt-0.5 text-primary"
                    }
                  >
                    <Bell className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                    {item.urgent ? (
                      <span className="mt-1 inline-block rounded bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive">
                        Urgent
                      </span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="rounded-2xl institutional-gradient px-8 py-10 text-center text-white sm:px-12">
          <Gavel className="mx-auto size-10 text-[var(--institutional-gold)]" />
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Your voice in governance
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Submit petitions, review session archives, and access constitutional
            documents — transparency is the foundation of student representation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/petitions"
              className="rounded-lg bg-destructive px-6 py-3 text-sm font-semibold text-white hover:bg-destructive/90"
            >
              Submit a Petition
            </Link>
            <Link
              href="/constitution"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Read the Constitution
            </Link>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
