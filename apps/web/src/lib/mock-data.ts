export type BillStatus =
  | "Draft"
  | "Review"
  | "Debate"
  | "Voting"
  | "Passed"
  | "Rejected";

export const leadership = [
  {
    name: "Rt. Hon. Speaker",
    role: "Speaker of the Senate",
    department: "Computer Science",
    image: null,
  },
  {
    name: "Deputy Speaker",
    role: "Deputy Speaker",
    department: "Biochemistry",
    image: null,
  },
  {
    name: "Clerk of Senate",
    role: "Clerk",
    department: "Mathematics",
    image: null,
  },
];

export const upcomingSittings = [
  {
    title: "Second Ordinary Sitting",
    date: "2026-05-22",
    time: "6:00 PM",
    venue: "SCISA Senate Chamber",
  },
  {
    title: "Committee of the Whole",
    date: "2026-05-29",
    time: "5:30 PM",
    venue: "Faculty of Physical Sciences",
  },
];

export const announcements = [
  {
    id: "1",
    title: "Call for Petitions — Welfare Quarter",
    date: "2026-05-10",
    urgent: true,
  },
  {
    id: "2",
    title: "Senate Sitting Notice — May 2026",
    date: "2026-05-08",
    urgent: false,
  },
  {
    id: "3",
    title: "Constitution Review Committee Report Published",
    date: "2026-05-01",
    urgent: false,
  },
];

export const featuredBills = [
  {
    id: "bill-2026-04",
    title: "Student Welfare Support Amendment Bill",
    status: "Debate" as BillStatus,
    sponsor: "Welfare Committee",
    updatedAt: "2026-05-12",
  },
  {
    id: "bill-2026-03",
    title: "Senate Transparency & Records Act",
    status: "Review" as BillStatus,
    sponsor: "Constitutional Committee",
    updatedAt: "2026-05-05",
  },
  {
    id: "bill-2026-01",
    title: "Academic Calendar Consultation Motion",
    status: "Passed" as BillStatus,
    sponsor: "Academic Committee",
    updatedAt: "2026-04-18",
  },
];

export const senators = [
  {
    id: "1",
    name: "Sen. Kwame Asante",
    department: "Computer Science",
    portfolio: "Finance Chair",
    term: "2025–2026",
    committees: ["Finance", "Academic"],
  },
  {
    id: "2",
    name: "Sen. Ama Osei",
    department: "Biochemistry",
    portfolio: "Welfare Lead",
    term: "2025–2026",
    committees: ["Welfare"],
  },
  {
    id: "3",
    name: "Sen. Kofi Mensah",
    department: "Physics",
    portfolio: "Constitutional Affairs",
    term: "2025–2026",
    committees: ["Constitutional", "Academic"],
  },
];

export const committees = [
  {
    name: "Finance Committee",
    chair: "Sen. Kwame Asante",
    mandate: "Oversight of association finances and budget approvals.",
  },
  {
    name: "Welfare Committee",
    chair: "Sen. Ama Osei",
    mandate: "Student welfare, accommodation, and support services.",
  },
  {
    name: "Academic Committee",
    chair: "Sen. Kofi Mensah",
    mandate: "Academic policy, curriculum concerns, and faculty liaison.",
  },
  {
    name: "Constitutional Committee",
    chair: "Sen. Kofi Mensah",
    mandate: "Constitution, standing orders, and governance frameworks.",
  },
];

export const sessions = [
  {
    id: "s1",
    title: "First Ordinary Sitting — 2026",
    date: "2026-04-15",
    type: "Minutes",
  },
  {
    id: "s2",
    title: "Emergency Sitting — Welfare Motion",
    date: "2026-03-28",
    type: "Resolution",
  },
];

export const constitutionDocs = [
  { title: "SCISA Constitution", type: "PDF", size: "2.4 MB" },
  { title: "Senate Standing Orders", type: "PDF", size: "1.1 MB" },
  { title: "Governance Policy Framework", type: "PDF", size: "890 KB" },
];

export const newsItems = [
  {
    id: "n1",
    title: "Senate Approves Digital Governance Portal Initiative",
    date: "2026-05-12",
    category: "Official Statement",
  },
  {
    id: "n2",
    title: "Committee Reports Published for Q1 2026",
    date: "2026-05-01",
    category: "Notice",
  },
];
