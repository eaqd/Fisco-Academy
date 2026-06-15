# Wiring up Supabase (optional)

The app runs fully without a backend — progress, quiz results and certificates live in
the browser. Connect Supabase when you want **shared accounts across devices**, a
**real cross-staff admin dashboard**, and **PDF/SOP/certificate storage**.

## 1. Create the project & schema

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run `supabase/schema.sql`. This creates the tables
   (`profiles`, `modules`, `lessons`, `quizzes`, `quiz_questions`, `progress`,
   `quiz_results`, `certificates`), the enums, **Row Level Security** policies and a
   trigger that auto-creates a profile on sign-up.

## 2. Environment variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...   # server-only, for seeding/admin tasks
```

## 3. Seed the content

The content in `src/data/` (`foundations.ts`, `sites.ts`) is the single source of truth
and maps 1:1 onto the `modules` / `lessons` / `quizzes` / `quiz_questions` tables.
Insert it via the service-role key (a small Node script that walks `modules` from
`src/data/content.ts` and inserts rows), or paste it into the Supabase dashboard so
non-developers can edit copy.

## 4. Swap the storage layer

`src/lib/progress.ts` is the only file that touches storage. Replace its
`localStorage` reads/writes with Supabase client calls (Auth for the profile;
`progress` / `quiz_results` / `certificates` tables for the rest). The component API
stays the same, so the UI does not change.

RLS summary:
- All signed-in users can **read published content**.
- Users **read/write only their own** progress, results and certificates.
- **Supervisors/admins read all** progress, results and certificates (for the dashboard).
