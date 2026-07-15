"use client";

import { ChamberSection } from "@/components/about/chamber-section";
import { ClosingStatement } from "@/components/about/closing-statement";
import { DecisionJourney } from "@/components/about/decision-journey";
import { MissionVision } from "@/components/about/mission-vision";
import { OperationsSection } from "@/components/about/operations-section";
import { PillarsBand } from "@/components/about/pillars-band";
import { ValuesStrip } from "@/components/about/values-strip";
import { VisitSenate } from "@/components/about/visit-senate";
import { ContentSection } from "@/components/shared/content-section";

/**
 * Narrative About journey:
 * What → Who → How → Values → Purpose → Decisions → Visit → Closing
 */
export function AboutExperience() {
  return (
    <>
      <ContentSection>
        <PillarsBand />
      </ContentSection>

      <ContentSection alt>
        <ChamberSection />
      </ContentSection>

      <ContentSection>
        <OperationsSection />
      </ContentSection>

      <ContentSection alt>
        <ValuesStrip />
      </ContentSection>

      <ContentSection>
        <MissionVision />
      </ContentSection>

      <ContentSection alt>
        <DecisionJourney />
      </ContentSection>

      <VisitSenate />

      <ClosingStatement />
    </>
  );
}
