/** Senator portrait files in public/senators: portfolio label + name in parentheses. */

export type SenatorPhotoEntry = {
  filename: string;
  portfolioLabel: string;
  displayName: string;
  /** Full name as used in governance rosters, when matched. */
  governanceName?: string;
};

const SENATOR_PHOTO_ENTRIES: SenatorPhotoEntry[] = [
  {
    filename: "2nd Years Rep(Palmer Buckles).jpeg",
    portfolioLabel: "2nd Years Representative",
    displayName: "Palmer Buckles",
    governanceName: "Hon. Oppong Palmer-Buckle Charles",
  },
  {
    filename: "3rd Year Rep & Mathematics Secretary(Sawudatu Ibrahim).png",
    portfolioLabel: "3rd Year Representative & Mathematics Secretary",
    displayName: "Sawudatu Ibrahim",
    governanceName: "Hon. Sawudatu Ibrahim",
  },
  {
    filename: "5th Years Rep(Rginald Nyarko).png",
    portfolioLabel: "5th Years Representative",
    displayName: "Reginald Nyarko",
    governanceName: "Hon. Reginald Nyarko",
  },
  {
    filename: "6th Years Rep(Kofi Owusu Acquah).png",
    portfolioLabel: "6th Years Representative",
    displayName: "Kofi Owusu Acquah",
    governanceName: "Hon. Kofi Ewusi Acquah",
  },
  {
    filename: "Actuarial Sci Secretary(Kindly Osei Bediako).jpeg",
    portfolioLabel: "Actuarial Science Secretary",
    displayName: "Kindly Osei Bediako",
    governanceName: "Hon. Kindly Osei Bediako",
  },
  {
    filename: "Actuarial Science President(Nathaniel Bannor).jpeg",
    portfolioLabel: "Actuarial Science President",
    displayName: "Nathaniel Bannor",
    governanceName: "Hon. Nathaniel Bannor Amponsah",
  },
  {
    filename: "Biochemistry Students President(Nana Kwame Appiah Owusu).jpeg",
    portfolioLabel: "Biochemistry Students President",
    displayName: "Nana Kwame Appiah Owusu",
    governanceName: "Hon. Nana Kwame Appiah Owusu",
  },
  {
    filename: "Biological Science President(Patience Amevor Mensah).png",
    portfolioLabel: "Biological Science President",
    displayName: "Patience Amevor Mensah",
    governanceName: "Hon. Patience Amevor Mensah",
  },
  {
    filename: "Biological Science Secretary(Kponkpori Cecelia Jinche).png",
    portfolioLabel: "Biological Science Secretary",
    displayName: "Kponkpori Cecelia Jinche",
    governanceName: "Hon. Cecilia Kponkpori Jinche",
  },
  {
    filename: "Chemical Societ President(Ezekiel Kocraft).jpeg",
    portfolioLabel: "Chemical Society President",
    displayName: "Ezekiel Kocraft",
    governanceName: "Hon. Ezekiel Kocraft",
  },
  {
    filename: "Chemical Society Secretary(Priscilla Mbeah Esimah).jpeg",
    portfolioLabel: "Chemical Society Secretary",
    displayName: "Priscilla Mbeah Esimah",
    governanceName: "Hon. Priscilla Esimah Mbeah",
  },
  {
    filename: "Computer Science President(Mensah Isaac Nana Sam).jpeg",
    portfolioLabel: "Computer Science President",
    displayName: "Isaac Nana Sam Mensah",
    governanceName: "Hon. Isaac Nana Sam Mensah",
  },
  {
    filename: "Computer Science Secreatry(Michael Owusu Asiedu).jpg",
    portfolioLabel: "Computer Science Secretary",
    displayName: "Michael Owusu Asiedu",
    governanceName: "Hon. Michael Owusu Asiedu",
  },
  {
    filename: "Environmental Science President((Appiah Derrick).png",
    portfolioLabel: "Environmental Science President",
    displayName: "Appiah Derrick",
    governanceName: "Hon. Derrick Appiah",
  },
  {
    filename: "Environmental Science Secretary(Sam Jerry Joshua).jpeg",
    portfolioLabel: "Environmental Science Secretary",
    displayName: "Sam Jerry Joshua",
    governanceName: "Hon. Sam Jerry Joshua",
  },
  {
    filename: "Food Science President(Appiah Abraham Atta Panyin).png",
    portfolioLabel: "Food Science President",
    displayName: "Appiah Abraham Atta Panyin",
    governanceName: "Hon. Abraham Appiah",
  },
  {
    filename: "Food Science Secretary(Benedicta Cobbina).png",
    portfolioLabel: "Food Science Secretary",
    displayName: "Benedicta Cobbina",
    governanceName: "Hon. Benedicta Akosua Gyebuah Cobbina",
  },
  {
    filename: "Mathematics President(Evans Kyeremanteng).png",
    portfolioLabel: "Mathematics President",
    displayName: "Evans Kyeremanteng",
    governanceName: "Hon. Evans Kyeremanteng",
  },
  {
    filename: "Meteorology Science Secretary(Jevillin Owusuaa Gyedu).jpeg",
    portfolioLabel: "Meteorology Science Secretary",
    displayName: "Jevillin Owusuaa Gyedu",
    governanceName: "Hon. Jevillin Gyedu Owusuaa",
  },
  {
    filename: "Optometry President(Ohene Blessing Yeboah).jpeg",
    portfolioLabel: "Optometry President",
    displayName: "Ohene Blessing Yeboah",
    governanceName: "Hon. Ohene Blessing Yeboah",
  },
  {
    filename: "Optometry Secreatry(Genevieve Owusuaa Kakari).png",
    portfolioLabel: "Optometry Secretary",
    displayName: "Genevieve Owusuaa Kakari",
    governanceName: "Hon. Genevieve Owusuwaa Karikari",
  },
  {
    filename: "Physics President(Jeffery Oteng Afriyie).png",
    portfolioLabel: "Physics President",
    displayName: "Jeffery Oteng Afriyie",
    governanceName: "Hon. Jeffery Oteng Afriyie",
  },
  {
    filename: "Physics Secretary(Dorian Esi Fynn).png",
    portfolioLabel: "Physics Secretary",
    displayName: "Dorian Esi Fynn",
    governanceName: "Hon. Dorian Esi Fynn",
  },
  {
    filename: "Statistics President(Herbet Boadu Ayisi).jpeg",
    portfolioLabel: "Statistics President",
    displayName: "Herbert Boadu Ayisi",
    governanceName: "Hon. Herbert Boadu Ayisi",
  },
  {
    filename: "Statistics Secretary(Bernice Forson).png",
    portfolioLabel: "Statistics Secretary",
    displayName: "Bernice Forson",
    governanceName: "Hon. Bernice Forson",
  },
  {
    filename: "Year Rep Caucus Head(Jeffrey Owusu Acheaw).png",
    portfolioLabel: "4th Years Representative & Year Rep Caucus Head",
    displayName: "Jeffrey Owusu Acheaw",
    governanceName: "Hon. Jeffrey Owusu Acheaw",
  },
];

const photoByGovernanceName = new Map(
  SENATOR_PHOTO_ENTRIES.filter((entry) => entry.governanceName).map((entry) => [
    entry.governanceName!,
    entry,
  ]),
);

export function senatorPhotoUrl(filename: string): string {
  return `/senators/${encodeURIComponent(filename)}`;
}

export function getSenatorPhotoByGovernanceName(name: string): string | undefined {
  const entry = photoByGovernanceName.get(name);
  return entry ? senatorPhotoUrl(entry.filename) : undefined;
}

/** Constituency (department / year group / society) keyed by governance roster name. */
const CONSTITUENCY_BY_GOVERNANCE_NAME: Record<string, string> = {
  "Hon. Oppong Palmer-Buckle Charles": "2nd Years",
  "Hon. Sawudatu Ibrahim": "Mathematics",
  "Hon. Reginald Nyarko": "5th Years",
  "Hon. Kofi Ewusi Acquah": "6th Years",
  "Hon. Kindly Osei Bediako": "Actuarial Science",
  "Hon. Nathaniel Bannor Amponsah": "Actuarial Science",
  "Hon. Nana Kwame Appiah Owusu": "Biochemistry",
  "Hon. Eunice Deladem Sosoo": "Biochemistry",
  "Hon. Patience Amevor Mensah": "Biological Science",
  "Hon. Cecilia Kponkpori Jinche": "Biological Science",
  "Hon. Ezekiel Kocraft": "Chemical Society",
  "Hon. Priscilla Esimah Mbeah": "Chemical Society",
  "Hon. Isaac Nana Sam Mensah": "Computer Science",
  "Hon. Michael Owusu Asiedu": "Computer Science",
  "Hon. Derrick Appiah": "Environmental Science",
  "Hon. Sam Jerry Joshua": "Environmental Science",
  "Hon. Elyon Winnore Ayariga": "Optometry",
  "Hon. Abraham Appiah": "Food Science",
  "Hon. Benedicta Akosua Gyebuah Cobbina": "Food Science",
  "Hon. Evans Kyeremanteng": "Mathematics",
  "Hon. Jevillin Gyedu Owusuaa": "Meteorology Science",
  "Hon. Ohene Blessing Yeboah": "Optometry",
  "Hon. Genevieve Owusuwaa Karikari": "Optometry",
  "Hon. Jeffery Oteng Afriyie": "Physics",
  "Hon. Dorian Esi Fynn": "Physics",
  "Hon. Herbert Boadu Ayisi": "Statistics",
  "Hon. Bernice Forson": "Statistics",
  "Hon. Jeffrey Owusu Acheaw": "4th Years",
};

export function getSenatorConstituencyByGovernanceName(name: string): string | undefined {
  return CONSTITUENCY_BY_GOVERNANCE_NAME[name];
}

export function getSenatorPhotoEntries(): SenatorPhotoEntry[] {
  return SENATOR_PHOTO_ENTRIES;
}
