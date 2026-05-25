import {
  GOVERNANCE_COMMITTEES,
  GOVERNANCE_LEADERSHIP,
  GOVERNANCE_SENATORS,
} from "@/lib/governance-data";
import type { AppData } from "@/lib/types";

export const SEED_DATA: AppData = {
  leadership: GOVERNANCE_LEADERSHIP,
  sittings: [
    {
      id: "sit1",
      title: "Second Ordinary Sitting",
      date: "2026-05-22",
      time: "6:00 PM",
      venue: "SCISA Senate Chamber",
    },
    {
      id: "sit2",
      title: "Committee of the Whole",
      date: "2026-05-29",
      time: "5:30 PM",
      venue: "Faculty of Physical Sciences",
    },
  ],
  announcements: [
    {
      id: "a1",
      title: "Call for Petitions — Welfare Quarter",
      date: "2026-05-10",
      urgent: true,
    },
    {
      id: "a2",
      title: "Senate Sitting Notice — May 2026",
      date: "2026-05-08",
      urgent: false,
    },
    {
      id: "a3",
      title: "Constitution Review Committee Report Published",
      date: "2026-05-01",
      urgent: false,
    },
  ],
  bills: [
    {
      id: "bill-2026-04",
      title: "Student Welfare Support Amendment Bill",
      status: "Debate",
      sponsor: "Committee on Welfare and Health",
      updatedAt: "2026-05-12",
      summary: "Amends welfare disbursement guidelines for science students.",
    },
    {
      id: "bill-2026-03",
      title: "Senate Transparency & Records Act",
      status: "Review",
      sponsor: "Committee on Constitution, Legal, and Senate Affairs",
      updatedAt: "2026-05-05",
    },
    {
      id: "bill-2026-01",
      title: "Academic Calendar Consultation Motion",
      status: "Passed",
      sponsor: "Committee on Academics",
      updatedAt: "2026-04-18",
    },
  ],
  senators: GOVERNANCE_SENATORS,
  committees: GOVERNANCE_COMMITTEES,
  sessions: [
    {
      id: "sess1",
      title: "First Ordinary Sitting — 2026",
      date: "2026-04-15",
      type: "Minutes",
    },
    {
      id: "sess2",
      title: "Emergency Sitting — Welfare Motion",
      date: "2026-03-28",
      type: "Resolution",
    },
  ],
  constitutionDocs: [
    { id: "doc1", title: "SCISA Constitution", type: "PDF", size: "2.4 MB" },
    { id: "doc2", title: "Senate Standing Orders", type: "PDF", size: "1.1 MB" },
    {
      id: "doc3",
      title: "Governance Policy Framework",
      type: "PDF",
      size: "890 KB",
    },
  ],
  news: [
    {
      id: "n1",
      title: "Senate Approves Digital Governance Portal Initiative",
      date: "2026-05-12",
      category: "Official Statement",
      excerpt: "The Senate ratified the digital governance infrastructure project.",
    },
    {
      id: "n2",
      title: "Committee Reports Published for Q1 2026",
      date: "2026-05-01",
      category: "Notice",
    },
  ],
  petitions: [],
  votes: [],
  auditLog: [
    {
      id: "audit1",
      action: "Platform initialized with seed data",
      actor: "System",
      at: new Date().toISOString(),
    },
  ],
};
