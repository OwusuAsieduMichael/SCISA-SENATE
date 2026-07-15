/**
 * Public About copy distilled from the SCISA Senate Standing Orders.
 * Rewritten for the web, not verbatim legal text.
 */

export const ABOUT_HERO = {
  title: "About the Senate",
  description:
    "The parliamentary body of the Science Students' Association of KNUST. We legislate for science students, represent every constituency in the College, and hold executive action to account under the Constitution and Standing Orders.",
} as const;

export const SENATE_INTRO = {
  eyebrow: "The Chamber",
  title: "What is the Senate?",
  body: "SCISA Senate is where science students shape association policy. It exists so representation is real, rules are made with care, and power is exercised openly.",
} as const;

export const SENATE_PILLARS = [
  {
    id: "authority",
    title: "Legislative authority",
    description:
      "Considers motions, passes resolutions, and sets the rules that guide association governance.",
  },
  {
    id: "representation",
    title: "Representation",
    description:
      "Members speak for departments, year groups, and international students in the Chamber.",
  },
  {
    id: "oversight",
    title: "Oversight",
    description:
      "Reviews executive performance through sittings and committees so decisions serve students.",
  },
  {
    id: "accountability",
    title: "Accountability",
    description:
      "Proceedings are recorded and bound by Standing Orders, with power exercised in good order.",
  },
] as const;

export const COMPOSITION_GROUPS = [
  {
    id: "leadership",
    title: "Senate Leadership",
    description: "Speaker, Deputy Speaker, Clerk, Deputy Clerk, Marshal, and Protocol Head",
  },
  {
    id: "presidents",
    title: "Departmental Presidents",
    description: "Heads of departmental societies sitting as Senators",
  },
  {
    id: "secretaries",
    title: "Departmental General Secretaries",
    description: "Society secretaries representing their departments",
  },
  {
    id: "year-reps",
    title: "Year Representatives",
    description: "Elected voices for Years 1 to 6 across the College of Science",
  },
  {
    id: "international",
    title: "International Students' Representative",
    description: "A dedicated seat for international science students",
  },
] as const;

export const LEADERSHIP_CHAIN = [
  {
    role: "Speaker",
    summary: "Presides over sittings, keeps order, and stewards the dignity of the House.",
  },
  {
    role: "Deputy Speaker",
    summary: "Supports the Speaker and assumes the Chair when required.",
  },
  {
    role: "Clerk",
    summary: "Keeps the official record, manages notices, and advises on procedure.",
  },
  {
    role: "Deputy Clerk",
    summary: "Assists the Clerk in documentation and Chamber business.",
  },
  {
    role: "Marshal",
    summary: "Upholds order, ceremony, and the security of Senate proceedings.",
  },
  {
    role: "Protocol Head",
    summary: "Coordinates formal protocol and ceremonial standards.",
  },
] as const;

export const SITTING_PROCESS = [
  {
    title: "Notice",
    description: "Members receive official notice with date, venue, time, and agenda.",
  },
  {
    title: "Sitting",
    description: "The House convenes under the Speaker with quorum confirmed.",
  },
  {
    title: "Debate",
    description: "Motions are moved, seconded, and examined on the floor.",
  },
  {
    title: "Committee review",
    description: "Specialised committees scrutinise detail before the House decides.",
  },
  {
    title: "Voting",
    description: "The Chamber divides and records the will of Senators.",
  },
  {
    title: "Resolution",
    description: "Adopted decisions become binding resolutions of the Senate.",
  },
] as const;

export const SESSION_FACTS = [
  {
    label: "Minimum sessions",
    value: "2+",
    detail: "Per tenure of the Senate",
  },
  {
    label: "Major sittings",
    value: "2",
    detail: "Required each session",
  },
  {
    label: "Emergency sittings",
    value: "As needed",
    detail: "By the Speaker, or on requisition of 40% of members",
  },
  {
    label: "Official notice",
    value: "Required",
    detail: "Date, venue, time, and agenda before every sitting",
  },
  {
    label: "Quorum",
    value: "⅓",
    detail: "One-third of members must be present",
  },
] as const;

/** Core values affirmed in the Standing Orders (student-facing labels). */
export const CORE_VALUES = [
  { id: "integrity", label: "Integrity" },
  { id: "accountability", label: "Accountability" },
  { id: "professionalism", label: "Professionalism" },
  { id: "transparency", label: "Transparency" },
  { id: "teamwork", label: "Teamwork" },
  { id: "responsiveness", label: "Responsiveness" },
  { id: "representation", label: "Representation" },
  { id: "patriotism", label: "Patriotism" },
] as const;

export const MISSION_VISION = {
  mission: {
    title: "Mission",
    body: "To legislate, represent, and oversee with fairness, advancing the welfare of science students through orderly debate, credible records, and decisions grounded in the Constitution and Standing Orders.",
  },
  vision: {
    title: "Vision",
    body: "A Senate recognised for integrity, clarity, and student-centred leadership: the trusted parliamentary voice of science students at KNUST.",
  },
} as const;

export const DECISION_FLOW = [
  {
    title: "Student concern",
    description: "An issue affecting science students is raised through a Senator or petition.",
  },
  {
    title: "Motion",
    description: "The matter is formally placed before the House for consideration.",
  },
  {
    title: "Debate",
    description: "Senators examine arguments for and against on the floor.",
  },
  {
    title: "Committee review",
    description: "Where needed, a committee studies evidence and reports back.",
  },
  {
    title: "Vote",
    description: "The Senate decides by the votes of its members.",
  },
  {
    title: "Resolution",
    description: "The decision is recorded as an official resolution of the House.",
  },
  {
    title: "Implementation",
    description: "Responsible officers and bodies carry the resolution into effect.",
  },
] as const;

export const CLOSING_STATEMENT =
  "Every resolution begins with dialogue, every decision is guided by the Constitution, and every action is taken in the interest of science students." as const;

export const VISIT_SENATE = {
  title: "Visit the Senate",
  paragraphs: [
    "The SCISA Senate of KNUST is open to visitors on days of Senate sittings.",
    "Visitors are welcome to watch proceedings from the public gallery. The gallery is usually open to the public when the House sits. On most sitting days, individuals may turn up and wait for entry to the public gallery. Advance written permission is not required for individuals who wish only to observe proceedings.",
    "Those who wish to visit the Senate in groups, or to embark on educational tours, must put their request in writing to the Clerk of the Senate.",
  ],
  rulesTitle: "Rules for observing debates",
  rules: [
    "Visitors are only allowed to observe the proceedings in the gallery. They are not to involve themselves in the business of the Chamber by means of loud commentary, clapping, demonstrations, or unruly behaviour.",
    "Photographs may not be taken without permission.",
    "Visitors are to refrain from any actions which may interrupt the proceedings in the Chamber, and to abide by any instructions to the gallery uttered by the Speaker. Visitors must also comply with any instructions given by security attendants.",
    "Failure to observe these conditions may result in the removal of the visitor(s) from the gallery and referral of the incident to security agents for investigation.",
    "Visitors are required to dress formally and in a manner befitting the dignity of the House.",
    "Visitors in the galleries are required to rise to their feet each time the Speaker's procession enters or leaves the Chamber.",
  ],
} as const;
