// Core content types for FISCO Academy.
// These mirror the Supabase schema in /supabase/schema.sql so seed content can be
// migrated to Postgres later without changing the app's data shape.

export type Category = "foundational" | "offices" | "schools" | "nurseries";

export type Role = "operative" | "supervisor" | "admin";

export interface Video {
  /** YouTube video id (embedded via youtube-nocookie.com, lazy-loaded). */
  youtubeId: string;
  title: string;
  /** Who produced it — shown for credibility. */
  source: string;
  /** Short note, e.g. paywall caveat. */
  note?: string;
}

export interface Lesson {
  slug: string;
  title: string;
  summary: string;
  estimatedMinutes: number;
  learningObjectives: string[];
  intro: string;
  /** Numbered step-by-step method. */
  method: string[];
  dos: string[];
  donts: string[];
  safetyNotes: string[];
  videos: Video[];
  /** UK standards / sources this lesson is grounded in. */
  references: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  /** Pass mark as a percentage. */
  passMark: number;
  questions: QuizQuestion[];
}

export interface Module {
  slug: string;
  title: string;
  description: string;
  category: Category;
  /** Emoji icon (placeholder until brand assets supplied). */
  icon: string;
  estimatedMinutes: number;
  orderIndex: number;
  lessons: Lesson[];
  quiz: Quiz;
  /** When true, all foundational modules must be passed before this unlocks. */
  requiresFoundations?: boolean;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  foundational: "Foundations",
  offices: "Offices",
  schools: "Schools",
  nurseries: "Nurseries",
};

export const CATEGORY_BLURB: Record<Category, string> = {
  foundational:
    "Start here. The core skills every operative needs — colour coding, COSHH, two-stage cleaning and safety.",
  offices: "Cleaning commercial offices: touch points, breakout kitchens, washrooms and out-of-hours security.",
  schools: "Cleaning schools: classrooms, toilets, dining halls, labs and safeguarding around children.",
  nurseries: "Cleaning nurseries and early years settings to extra-stringent UKHSA and EYFS hygiene standards.",
};
