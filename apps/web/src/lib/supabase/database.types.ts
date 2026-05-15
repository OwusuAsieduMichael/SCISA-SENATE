export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string;
          role: string;
          created_at: string;
        };
        Insert: {
          id: string;
          full_name?: string;
          role?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      bills: {
        Row: {
          id: string;
          title: string;
          status: string;
          sponsor: string;
          summary: string | null;
          updated_at: string;
        };
        Insert: {
          id: string;
          title: string;
          status?: string;
          sponsor?: string;
          summary?: string | null;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["bills"]["Insert"]>;
      };
      senators: {
        Row: {
          id: string;
          name: string;
          department: string;
          portfolio: string;
          term: string;
          committees: string[];
          achievements: string | null;
        };
        Insert: {
          id: string;
          name: string;
          department?: string;
          portfolio?: string;
          term?: string;
          committees?: string[];
          achievements?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["senators"]["Insert"]>;
      };
      petitions: {
        Row: {
          id: string;
          name: string;
          index_number: string;
          category: string;
          message: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id: string;
          name: string;
          index_number: string;
          category: string;
          message: string;
          status?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["petitions"]["Insert"]>;
      };
      announcements: {
        Row: {
          id: string;
          title: string;
          date: string;
          urgent: boolean;
        };
        Insert: {
          id: string;
          title: string;
          date?: string;
          urgent?: boolean;
        };
        Update: Partial<Database["public"]["Tables"]["announcements"]["Insert"]>;
      };
      sessions: {
        Row: {
          id: string;
          title: string;
          date: string;
          type: string;
        };
        Insert: {
          id: string;
          title: string;
          date: string;
          type?: string;
        };
        Update: Partial<Database["public"]["Tables"]["sessions"]["Insert"]>;
      };
      news_items: {
        Row: {
          id: string;
          title: string;
          date: string;
          category: string;
          excerpt: string | null;
        };
        Insert: {
          id: string;
          title: string;
          date?: string;
          category?: string;
          excerpt?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["news_items"]["Insert"]>;
      };
      committees: {
        Row: {
          id: string;
          name: string;
          chair: string;
          mandate: string;
        };
        Insert: {
          id: string;
          name: string;
          chair: string;
          mandate?: string;
        };
        Update: Partial<Database["public"]["Tables"]["committees"]["Insert"]>;
      };
      sittings: {
        Row: {
          id: string;
          title: string;
          date: string;
          time: string;
          venue: string;
        };
        Insert: {
          id: string;
          title: string;
          date: string;
          time?: string;
          venue?: string;
        };
        Update: Partial<Database["public"]["Tables"]["sittings"]["Insert"]>;
      };
      leadership: {
        Row: {
          id: string;
          name: string;
          role: string;
          department: string;
        };
        Insert: {
          id: string;
          name: string;
          role: string;
          department?: string;
        };
        Update: Partial<Database["public"]["Tables"]["leadership"]["Insert"]>;
      };
      constitution_docs: {
        Row: {
          id: string;
          title: string;
          type: string;
          size: string;
        };
        Insert: {
          id: string;
          title: string;
          type?: string;
          size?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["constitution_docs"]["Insert"]
        >;
      };
      votes: {
        Row: {
          id: string;
          bill_id: string;
          senator_id: string;
          choice: string;
          cast_at: string;
        };
        Insert: {
          id: string;
          bill_id: string;
          senator_id: string;
          choice: string;
          cast_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["votes"]["Insert"]>;
      };
      audit_log: {
        Row: {
          id: string;
          action: string;
          actor: string;
          at: string;
        };
        Insert: {
          id: string;
          action: string;
          actor: string;
          at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["audit_log"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      user_role: "student" | "senator" | "clerk" | "speaker" | "admin";
      bill_status: "Draft" | "Review" | "Debate" | "Voting" | "Passed" | "Rejected";
      petition_status: "Pending" | "Under Review" | "Resolved" | "Rejected";
      vote_choice: "Aye" | "Nay" | "Abstain";
    };
    CompositeTypes: Record<string, never>;
  };
};
