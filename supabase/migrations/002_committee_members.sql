-- Add structured membership rosters to standing committees

alter table public.committees
  add column if not exists members jsonb not null default '[]'::jsonb;
