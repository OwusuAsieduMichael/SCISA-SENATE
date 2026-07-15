/**
 * Legislative process guide for Bills & Motions.
 * Chart reflects the Ghana parliamentary pathway; SCISA applies the same
 * discipline of readings, committee scrutiny, and recorded decisions.
 */

export const BILL_PROCESS_CHART = {
  title: "How a bill becomes law",
  eyebrow: "Legislative pathway",
  imageSrc: "/governance/how-a-bill-becomes-law.png",
  imageAlt:
    "Infographic titled How a Bill Becomes Law, showing fourteen numbered stages from laying a bill at the table of the House through readings, committee work, presidential assent, and Gazette notification.",
  intro:
    "This official-style chart maps the parliamentary journey of a bill, from introduction and committee scrutiny through the three readings, assent, and Gazette notification. SCISA Senate applies the same legislative discipline when it considers bills and motions under its Standing Orders.",
  caption:
    "Parliamentary legislative pathway: readings, committee scrutiny, assent, and Gazette notification.",
  note: "National stages such as presidential assent and Gazette notification illustrate how law is perfected in Ghana’s Parliament. Within SCISA, bills and motions conclude as resolutions of the Senate after debate and vote.",
} as const;

/** Accessible, scannable summary of the chart (not a verbatim legal digest). */
export const BILL_PROCESS_PHASES = [
  {
    id: "introduction",
    label: "Introduction",
    steps: "1 to 2",
    title: "Laid & first reading",
    description:
      "The bill is laid at the table of the House. At first reading it is introduced and the Clerk reads the long title.",
  },
  {
    id: "committee",
    label: "Committee",
    steps: "3 to 5",
    title: "Study & report",
    description:
      "The Speaker refers the bill to the appropriate committee. Sittings may include hearings; the committee report is laid before second reading.",
  },
  {
    id: "house",
    label: "House",
    steps: "6 to 8",
    title: "Second reading to passage",
    description:
      "Principles are debated with the committee report. Amendments are considered, then the bill is read a third time and passed.",
  },
  {
    id: "assent",
    label: "Assent",
    steps: "9 to 13",
    title: "Transmission & decision",
    description:
      "The bill is transmitted for assent. Refusal triggers reconsideration, including possible referral to the Council of State, before assent is given.",
  },
  {
    id: "operation",
    label: "Operation",
    steps: "14",
    title: "Gazette notification",
    description:
      "Once assent is signified, the bill becomes operational after Gazette notification.",
  },
] as const;

export const SCISA_TRACKING_NOTE =
  "On this page, SCISA tracks live bills and motions through: Draft → Review → Debate → Voting → Passed or Rejected." as const;
