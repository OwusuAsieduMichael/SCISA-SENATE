/** Official Senate media releases and constituency engagement briefings. */

export type PressBriefing = {
  id: string;
  /** Series label shown as an institutional eyebrow (e.g. Know Your Senator). */
  series: string;
  title: string;
  summary: string;
  date: string;
  constituency: string;
  senators: string[];
  imageSrc: string;
  imageAlt: string;
};

export const KNOW_YOUR_SENATOR_SERIES = "#KnowYourSenator";

export const PRESS_BRIEFINGS: PressBriefing[] = [
  {
    id: "pb-kys-cs",
    series: KNOW_YOUR_SENATOR_SERIES,
    title: "Computer Science Constituency Engagement",
    summary:
      "Hon. Isaac Nana Sam Mensah and Hon. Michael Owusu Asiedu met Computer Science constituents for discussions on ongoing issues within the constituency.",
    date: "2026-03-15",
    constituency: "Computer Science",
    senators: ["Hon. Isaac Nana Sam Mensah", "Hon. Michael Owusu Asiedu"],
    imageSrc: "/news/know-your-senator-computer-science.png",
    imageAlt:
      "Official SCISA Senate briefing: Computer Science senators meet their constituents",
  },
  {
    id: "pb-kys-stats",
    series: KNOW_YOUR_SENATOR_SERIES,
    title: "Statistics Constituency Engagement",
    summary:
      "Hon. Herbert Boadu Ayisi and Hon. Bernice Forson met Statistics constituents for discussions on ongoing issues within the constituency.",
    date: "2026-03-15",
    constituency: "Statistics",
    senators: ["Hon. Herbert Boadu Ayisi", "Hon. Bernice Forson"],
    imageSrc: "/news/know-your-senator-statistics.png",
    imageAlt:
      "Official SCISA Senate briefing: Statistics senators meet their constituents",
  },
];

export function formatPressDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
