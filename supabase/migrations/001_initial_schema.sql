-- SCISA Senate — Supabase schema (run in SQL Editor or via CLI)

create type public.user_role as enum (
  'student', 'senator', 'clerk', 'speaker', 'admin'
);

create type public.bill_status as enum (
  'Draft', 'Review', 'Debate', 'Voting', 'Passed', 'Rejected'
);

create type public.petition_status as enum (
  'Pending', 'Under Review', 'Resolved', 'Rejected'
);

create type public.vote_choice as enum ('Aye', 'Nay', 'Abstain');

-- Profiles (extends Supabase Auth)
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null default '',
  role public.user_role not null default 'student',
  created_at timestamptz not null default now()
);

create table public.bills (
  id text primary key,
  title text not null,
  status public.bill_status not null default 'Draft',
  sponsor text not null default '',
  summary text,
  updated_at date not null default current_date
);

create table public.senators (
  id text primary key,
  name text not null,
  department text not null default '',
  portfolio text not null default '',
  term text not null default '',
  committees text[] not null default '{}',
  achievements text
);

create table public.petitions (
  id text primary key,
  name text not null,
  index_number text not null,
  category text not null,
  message text not null,
  status public.petition_status not null default 'Pending',
  created_at date not null default current_date
);

create table public.announcements (
  id text primary key,
  title text not null,
  date date not null default current_date,
  urgent boolean not null default false
);

create table public.sessions (
  id text primary key,
  title text not null,
  date date not null,
  type text not null default 'Minutes'
);

create table public.news_items (
  id text primary key,
  title text not null,
  date date not null default current_date,
  category text not null default 'Notice',
  excerpt text
);

create table public.committees (
  id text primary key,
  name text not null,
  chair text not null,
  mandate text not null default ''
);

create table public.sittings (
  id text primary key,
  title text not null,
  date date not null,
  time text not null default '',
  venue text not null default ''
);

create table public.leadership (
  id text primary key,
  name text not null,
  role text not null,
  department text not null default ''
);

create table public.constitution_docs (
  id text primary key,
  title text not null,
  type text not null default 'PDF',
  size text not null default ''
);

create table public.votes (
  id text primary key,
  bill_id text not null references public.bills (id) on delete cascade,
  senator_id text not null,
  choice public.vote_choice not null,
  cast_at timestamptz not null default now(),
  unique (bill_id, senator_id)
);

create table public.audit_log (
  id text primary key,
  action text not null,
  actor text not null,
  at timestamptz not null default now()
);

-- Staff = anyone who can use the dashboard
create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid()
      and role in ('senator', 'clerk', 'speaker', 'admin')
  );
$$;

alter table public.profiles enable row level security;
alter table public.bills enable row level security;
alter table public.senators enable row level security;
alter table public.petitions enable row level security;
alter table public.announcements enable row level security;
alter table public.sessions enable row level security;
alter table public.news_items enable row level security;
alter table public.committees enable row level security;
alter table public.sittings enable row level security;
alter table public.leadership enable row level security;
alter table public.constitution_docs enable row level security;
alter table public.votes enable row level security;
alter table public.audit_log enable row level security;

-- Public read (anon + authenticated)
create policy "public read bills" on public.bills for select using (true);
create policy "public read senators" on public.senators for select using (true);
create policy "public read announcements" on public.announcements for select using (true);
create policy "public read sessions" on public.sessions for select using (true);
create policy "public read news" on public.news_items for select using (true);
create policy "public read committees" on public.committees for select using (true);
create policy "public read sittings" on public.sittings for select using (true);
create policy "public read leadership" on public.leadership for select using (true);
create policy "public read constitution" on public.constitution_docs for select using (true);
create policy "public read votes" on public.votes for select using (true);

-- Anyone can submit a petition
create policy "public insert petitions" on public.petitions for insert with check (true);
create policy "public read petitions" on public.petitions for select using (true);

-- Profiles: users read own; staff read all
create policy "read own profile" on public.profiles for select using (auth.uid() = id);
create policy "staff read profiles" on public.profiles for select using (public.is_staff());

-- Staff write
create policy "staff manage bills" on public.bills for all using (public.is_staff());
create policy "staff manage senators" on public.senators for all using (public.is_staff());
create policy "staff manage petitions" on public.petitions for update using (public.is_staff());
create policy "staff manage announcements" on public.announcements for all using (public.is_staff());
create policy "staff manage sessions" on public.sessions for all using (public.is_staff());
create policy "staff manage news" on public.news_items for all using (public.is_staff());
create policy "staff manage committees" on public.committees for all using (public.is_staff());
create policy "staff manage sittings" on public.sittings for all using (public.is_staff());
create policy "staff manage leadership" on public.leadership for all using (public.is_staff());
create policy "staff manage constitution" on public.constitution_docs for all using (public.is_staff());
create policy "staff manage votes" on public.votes for all using (public.is_staff());
create policy "staff read audit" on public.audit_log for select using (public.is_staff());
create policy "staff insert audit" on public.audit_log for insert with check (public.is_staff());

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    coalesce((new.raw_user_meta_data->>'role')::public.user_role, 'student')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
