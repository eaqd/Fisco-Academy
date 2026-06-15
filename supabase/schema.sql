-- ============================================================================
-- FISCO Academy — Supabase / Postgres schema
-- ============================================================================
-- The app currently runs self-contained (progress stored in the browser). Run this
-- schema in your Supabase project's SQL editor when you are ready to move to shared
-- accounts, a cross-device admin dashboard and PDF/SOP storage.
--
-- It mirrors the TypeScript content shape in /src/data and /src/lib so the front end
-- can be pointed at Supabase with minimal change.
-- ============================================================================

-- Enums --------------------------------------------------------------------
create type user_role as enum ('operative', 'supervisor', 'admin');
create type module_category as enum ('foundational', 'offices', 'schools', 'nurseries');
create type lesson_status as enum ('not_started', 'in_progress', 'completed');

-- Profiles -----------------------------------------------------------------
create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null,
  role user_role not null default 'operative',
  site_types text[] not null default '{}',
  preferred_language text not null default 'English',
  created_at timestamptz not null default now()
);

-- Content ------------------------------------------------------------------
create table modules (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null,
  category module_category not null,
  order_index int not null default 0,
  icon text,
  estimated_minutes int not null default 10,
  requires_foundations boolean not null default false
);

create table lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references modules (id) on delete cascade,
  slug text unique not null,
  title text not null,
  summary text,
  body_richtext text,
  intro text,
  youtube_url text,
  sop_pdf_url text,
  order_index int not null default 0,
  estimated_minutes int not null default 10,
  learning_objectives text[] not null default '{}',
  method text[] not null default '{}',
  dos text[] not null default '{}',
  donts text[] not null default '{}',
  safety_notes text[] not null default '{}'
);

create table quizzes (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references modules (id) on delete cascade,
  pass_mark int not null default 80
);

create table quiz_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references quizzes (id) on delete cascade,
  question text not null,
  options jsonb not null,
  correct_index int not null,
  explanation text,
  order_index int not null default 0
);

-- Per-user records ---------------------------------------------------------
create table progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_id uuid not null references lessons (id) on delete cascade,
  status lesson_status not null default 'not_started',
  completed_at timestamptz,
  unique (user_id, lesson_id)
);

create table quiz_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  quiz_id uuid not null references quizzes (id) on delete cascade,
  score int not null,
  passed boolean not null,
  taken_at timestamptz not null default now()
);

create table certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  module_id uuid not null references modules (id) on delete cascade,
  certificate_no text unique not null,
  issued_at timestamptz not null default now(),
  pdf_url text,
  unique (user_id, module_id)
);

-- ============================================================================
-- Row Level Security
-- ============================================================================
alter table profiles enable row level security;
alter table modules enable row level security;
alter table lessons enable row level security;
alter table quizzes enable row level security;
alter table quiz_questions enable row level security;
alter table progress enable row level security;
alter table quiz_results enable row level security;
alter table certificates enable row level security;

-- Helper: is the current user a supervisor or admin?
create or replace function is_manager()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from profiles
    where id = auth.uid() and role in ('supervisor', 'admin')
  );
$$;

-- Published content: everyone signed in can read.
create policy "content readable" on modules for select using (true);
create policy "content readable" on lessons for select using (true);
create policy "content readable" on quizzes for select using (true);
create policy "content readable" on quiz_questions for select using (true);

-- Profiles: read your own; managers read all; update your own.
create policy "own or manager profile read" on profiles
  for select using (id = auth.uid() or is_manager());
create policy "insert own profile" on profiles
  for insert with check (id = auth.uid());
create policy "update own profile" on profiles
  for update using (id = auth.uid());

-- Progress / results / certificates: users read+write only their own; managers read all.
create policy "own progress" on progress
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "manager read progress" on progress
  for select using (is_manager());

create policy "own results" on quiz_results
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "manager read results" on quiz_results
  for select using (is_manager());

create policy "own certificates" on certificates
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "manager read certificates" on certificates
  for select using (is_manager());

-- Auto-create a profile row when a new auth user signs up.
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();
