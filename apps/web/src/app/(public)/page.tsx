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
          description="The presiding officers, clerk, marshal, and protocol steward legislative proceedings, chamber order, and institutional records."
        />
        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
        <div className="rounded-xl institutional-gradient px-5 py-8 text-center text-white sm:rounded-2xl sm:px-8 sm:py-10 lg:px-12">
          <Gavel className="mx-auto size-8 text-[var(--institutional-gold)] sm:size-10" />
          <h2 className="mt-3 text-xl font-bold text-white sm:mt-4 sm:text-2xl lg:text-3xl">
            Your voice in governance
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/80 sm:mt-3 sm:text-base">
            Submit petitions, explore the gallery, and access constitutional
            documents. Transparency is the foundation of student representation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-4">
            <Link
              href="/petitions"
              className="rounded-lg bg-destructive px-4 py-2 text-xs font-semibold text-white hover:bg-destructive/90 sm:px-6 sm:py-3 sm:text-sm"
            >
              Submit a Petition
            </Link>
            <Link
              href="/constitution"
              className="rounded-lg border border-white/30 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
            >
              Read the Constitution
            </Link>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
