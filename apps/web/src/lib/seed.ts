import type { AppData } from "@/lib/types";

export const SEED_DATA: AppData = {
  leadership: [
    {
      id: "l1",
      name: "Rt. Hon. Speaker",
      role: "Speaker of the Senate",
      department: "Computer Science",
    },
    {
      id: "l2",
      name: "Deputy Speaker",
      role: "Deputy Speaker",
      department: "Biochemistry",
    },
    {
      id: "l3",
      name: "Clerk of Senate",
      role: "Clerk",
      department: "Mathematics",
    },
  ],
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
      sponsor: "Welfare Committee",
      updatedAt: "2026-05-12",
      summary: "Amends welfare disbursement guidelines for science students.",
    },
    {
      id: "bill-2026-03",
      title: "Senate Transparency & Records Act",
      status: "Review",
      sponsor: "Constitutional Committee",
      updatedAt: "2026-05-05",
    },
    {
      id: "bill-2026-01",
      title: "Academic Calendar Consultation Motion",
      status: "Passed",
      sponsor: "Academic Committee",
      updatedAt: "2026-04-18",
    },
  ],
  senators: [
    {
      id: "s1",
      name: "Sen. Kwame Asante",
      department: "Computer Science",
      portfolio: "Finance Chair",
      term: "2025–2026",
      committees: ["Finance", "Academic"],
    },
    {
      id: "s2",
      name: "Sen. Ama Osei",
      department: "Biochemistry",
      portfolio: "Welfare Lead",
      term: "2025–2026",
      committees: ["Welfare"],
    },
    {
      id: "s3",
      name: "Sen. Kofi Mensah",
      department: "Physics",
      portfolio: "Constitutional Affairs",
      term: "2025–2026",
      committees: ["Constitutional", "Academic"],
    },
  ],
  committees: [
    {
      id: "c1",
      name: "Finance Committee",
      chair: "Sen. Kwame Asante",
      mandate: "Oversight of association finances and budget approvals.",
    },
    {
      id: "c2",
      name: "Welfare Committee",
      chair: "Sen. Ama Osei",
      mandate: "Student welfare, accommodation, and support services.",
    },
    {
      id: "c3",
      name: "Academic Committee",
      chair: "Sen. Kofi Mensah",
      mandate: "Academic policy, curriculum concerns, and faculty liaison.",
    },
    {
      id: "c4",
      name: "Constitutional Committee",
      chair: "Sen. Kofi Mensah",
      mandate: "Constitution, standing orders, and governance frameworks.",
    },
  ],
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
