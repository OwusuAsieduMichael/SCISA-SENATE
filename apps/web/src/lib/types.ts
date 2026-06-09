export type BillStatus =
  | "Draft"
  | "Review"
  | "Debate"
  | "Voting"
  | "Passed"
  | "Rejected";

export type UserRole = "student" | "senator" | "clerk" | "speaker" | "admin";

export type PetitionStatus = "Pending" | "Under Review" | "Resolved" | "Rejected";

export type Bill = {
  id: string;
  title: string;
  status: BillStatus;
  sponsor: string;
  updatedAt: string;
  summary?: string;
};

export type Senator = {
  id: string;
  name: string;
  department: string;
  portfolio: string;
  term: string;
  committees: string[];
  achievements?: string;
  /** Public path under /senators for constituency portrait. */
  imageSrc?: string;
};

export type Petition = {
  id: string;
  name: string;
  indexNumber: string;
  category: string;
  message: string;
  status: PetitionStatus;
  createdAt: string;
};

export type Announcement = {
  id: string;
  title: string;
  date: string;
  urgent: boolean;
};

export type Session = {
  id: string;
  title: string;
  date: string;
  type: string;
};

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt?: string;
};

export type CommitteeMember = {
  name: string;
  role: string;
};

export type Committee = {
  id: string;
  name: string;
  chair: string;
  mandate: string;
  members: CommitteeMember[];
};

export type Sitting = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
};

export type Leadership = {
  id: string;
  name: string;
  role: string;
  department: string;
  /** Public path under /brand for officer portrait (e.g. /brand/speaker.jpeg). */
  imageSrc?: string;
};

export type ConstitutionDoc = {
  id: string;
  title: string;
  type: string;
  size: string;
};

export type Vote = {
  id: string;
  billId: string;
  senatorId: string;
  choice: "Aye" | "Nay" | "Abstain";
  castAt: string;
};

export type AuditEntry = {
  id: string;
  action: string;
  actor: string;
  at: string;
};

export type AppData = {
  bills: Bill[];
  senators: Senator[];
  petitions: Petition[];
  announcements: Announcement[];
  sessions: Session[];
  news: NewsItem[];
  committees: Committee[];
  sittings: Sitting[];
  leadership: Leadership[];
  constitutionDocs: ConstitutionDoc[];
  votes: Vote[];
  auditLog: AuditEntry[];
};

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export type AuthSession = {
  user: AuthUser;
  loggedInAt: string;
};
