export type ConstitutionCategoryId =
  | "standing-orders"
  | "src"
  | "scisa"
  | "departmental";

export type ConstitutionFileType = "pdf" | "docx";

export type ConstitutionDocument = {
  id: string;
  slug: string;
  title: string;
  society?: string;
  category: ConstitutionCategoryId;
  /** Filename as stored in public/CONSTITUTIONS */
  filename?: string;
  fileType: ConstitutionFileType;
  description?: string;
};

export type ConstitutionCategory = {
  id: ConstitutionCategoryId;
  label: string;
  href: string;
  description: string;
};

const CONSTITUTIONS_BASE = "/CONSTITUTIONS";

/** Build a public URL for a file in public/CONSTITUTIONS (handles spaces and brackets). */
export function constitutionFileUrl(filename: string): string {
  return `${CONSTITUTIONS_BASE}/${encodeURIComponent(filename).replace(/%2F/g, "/")}`;
}

export const CONSTITUTION_CATEGORIES: ConstitutionCategory[] = [
  {
    id: "standing-orders",
    label: "Standing Orders",
    href: "/constitution/standing-orders",
    description: "Procedural rules governing Senate sittings and deliberations.",
  },
  {
    id: "src",
    label: "SRC Constitution",
    href: "/constitution/src",
    description: "Constitution of the Students' Representative Council, KNUST.",
  },
  {
    id: "scisa",
    label: "SCISA Constitution",
    href: "/constitution/scisa",
    description: "Governing instrument of the Science Students' Association.",
  },
  {
    id: "departmental",
    label: "Departmental Constitutions",
    href: "/constitution/departmental",
    description: "Constitutions of science department and faculty student societies.",
  },
];

export const CONSTITUTION_NAV_LINKS = CONSTITUTION_CATEGORIES.map((category) => ({
  label: category.label,
  href: category.href,
}));

const STANDING_ORDERS: ConstitutionDocument = {
  id: "standing-orders",
  slug: "standing-orders",
  title: "Senate Standing Orders",
  category: "standing-orders",
  fileType: "pdf",
  description:
    "Rules of procedure for the Senate of the Science Students' Association. Upload the PDF to public/CONSTITUTIONS to enable download and in-browser reading.",
};

const SRC_CONSTITUTION: ConstitutionDocument = {
  id: "src",
  slug: "src",
  title: "SRC Constitution 2021",
  category: "src",
  filename: "SRC CONSTITUTION 2021.pdf",
  fileType: "pdf",
  description: "Students' Representative Council constitution (2021).",
};

const SCISA_CONSTITUTION: ConstitutionDocument = {
  id: "scisa",
  slug: "scisa",
  title: "SCISA Constitution (Amended 2020)",
  category: "scisa",
  filename: "AMENDED_SCISA_CONSTITUTION_2020[1].pdf",
  fileType: "pdf",
  description: "Amended constitution of the Science Students' Association.",
};

export const DEPARTMENTAL_CONSTITUTIONS: ConstitutionDocument[] = [
  {
    id: "dept-afsts",
    slug: "afsts",
    title: "AFSTS Constitution (Amended 2025)",
    society: "AFSTS",
    category: "departmental",
    filename: "AFSTS CONSTITUITION AS AMENDED 2025 (Official Document).pdf",
    fileType: "pdf",
  },
  {
    id: "dept-assa",
    slug: "assa",
    title: "ASSA Constitution",
    society: "ASSA",
    category: "departmental",
    filename: "ASSA CONSTITUTION DRAFT3(1)(2)-1.pdf",
    fileType: "pdf",
  },
  {
    id: "dept-biossa",
    slug: "biossa",
    title: "BIOSSA Constitution (Amended 2021)",
    society: "BIOSSA",
    category: "departmental",
    filename: "BIOSSA AMENDED CONSTITUTION 2021-1.pdf",
    fileType: "pdf",
  },
  {
    id: "dept-css",
    slug: "css",
    title: "CSS Constitution",
    society: "CSS",
    category: "departmental",
    filename: "CSS_Constitution.pdf",
    fileType: "pdf",
  },
  {
    id: "dept-enssa",
    slug: "enssa",
    title: "ENSSA Constitution",
    society: "ENSSA",
    category: "departmental",
    filename: "ENSSA CONSTITUTION.docx",
    fileType: "docx",
  },
  {
    id: "dept-gass",
    slug: "gass",
    title: "GASS Constitution (Amended)",
    society: "GASS",
    category: "departmental",
    filename: "FINAL GASS CONSTITUTION AMENDMENT (1).pdf",
    fileType: "pdf",
  },
  {
    id: "dept-ghabsa",
    slug: "ghabsa",
    title: "GHABSA Constitution (Amended 2023)",
    society: "GHABSA",
    category: "departmental",
    filename: "GHABSA CONSTITUTION (AMMENDED) 2023-1.pdf",
    fileType: "pdf",
  },
  {
    id: "dept-mecssa",
    slug: "mecssa",
    title: "MECSSA Constitution (Amended 2024)",
    society: "MECSSA",
    category: "departmental",
    filename: "MECSSA AMENDED CONSTITUTION 2024.pdf",
    fileType: "pdf",
  },
];

export const SINGLE_CATEGORY_DOCUMENTS: Record<
  Exclude<ConstitutionCategoryId, "departmental">,
  ConstitutionDocument
> = {
  "standing-orders": STANDING_ORDERS,
  src: SRC_CONSTITUTION,
  scisa: SCISA_CONSTITUTION,
};

export function getConstitutionCategory(
  id: string,
): ConstitutionCategory | undefined {
  return CONSTITUTION_CATEGORIES.find((category) => category.id === id);
}

export function getSingleCategoryDocument(
  categoryId: string,
): ConstitutionDocument | undefined {
  if (categoryId === "departmental") return undefined;
  return SINGLE_CATEGORY_DOCUMENTS[categoryId as Exclude<ConstitutionCategoryId, "departmental">];
}

export function getDepartmentalConstitution(
  slug: string,
): ConstitutionDocument | undefined {
  return DEPARTMENTAL_CONSTITUTIONS.find((doc) => doc.slug === slug);
}

export function getDocumentFileUrl(doc: ConstitutionDocument): string | undefined {
  if (!doc.filename) return undefined;
  return constitutionFileUrl(doc.filename);
}

export function canReadInBrowser(doc: ConstitutionDocument): boolean {
  return doc.fileType === "pdf" && Boolean(doc.filename);
}
