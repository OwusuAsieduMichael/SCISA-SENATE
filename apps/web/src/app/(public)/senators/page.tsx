import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpeakerWelcome } from "@/components/home/speaker-welcome";
import { OfficerCard } from "@/components/senate/officer-card";
import { SenatorCard } from "@/components/senate/senator-card";
import {
  ACADEMIC_TERM,
  getSenatePresidingOfficers,
  getSenatorsExcludingOfficers,
} from "@/lib/governance-data";

export const metadata = { title: "Senators" };

export default function SenatorsPage() {
  const officers = getSenatePresidingOfficers();
  const senators = getSenatorsExcludingOfficers();
  const speaker = officers.find((o) => o.role.includes("Speaker of"));
  const deputy = officers.find((o) => o.role === "Deputy Speaker");
  const clerk = officers.find((o) => o.role === "Clerk of the Senate");
  const deputyClerk = officers.find((o) => o.role.includes("Deputy Clerk"));
  const otherOfficers = officers.filter(
    (o) => o !== speaker && o !== deputy && o !== clerk && o !== deputyClerk,
  );

  return (
    <>
      <PageHeader
        title="Meet the Senators"
        description="The presiding officers of the Senate and elected representatives of science students: portfolios, committees, and terms of office."
      />
      <SpeakerWelcome />
      <ContentSection>
        <div className="space-y-14">
        <section>
          <SectionHeading
            title="Officers of the Senate"
            description="The Speaker, Deputy Speaker, Clerk, and Deputy Clerk preside over sittings and steward the records of the House."
          />
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {speaker ? <OfficerCard officer={speaker} highlight /> : null}
            {deputy ? <OfficerCard officer={deputy} /> : null}
            {clerk ? <OfficerCard officer={clerk} /> : null}
            {deputyClerk ? <OfficerCard officer={deputyClerk} /> : null}
            {otherOfficers.map((officer) => (
              <OfficerCard key={officer.id} officer={officer} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            title="Members of the Senate"
            description={`Standing senators for the ${ACADEMIC_TERM} term (${senators.length} members).`}
          />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {senators.map((senator) => (
              <li key={senator.id}>
                <SenatorCard senator={senator} />
              </li>
            ))}
          </ul>
        </section>
        </div>
      </ContentSection>
    </>
  );
}
