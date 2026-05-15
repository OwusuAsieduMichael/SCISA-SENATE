-- Run after 001_initial_schema.sql to populate demo content

insert into public.bills (id, title, status, sponsor, summary, updated_at) values
  ('bill-2026-04', 'Student Welfare Support Amendment Bill', 'Debate', 'Welfare Committee', 'Amends welfare disbursement guidelines.', '2026-05-12'),
  ('bill-2026-03', 'Senate Transparency & Records Act', 'Review', 'Constitutional Committee', null, '2026-05-05'),
  ('bill-2026-01', 'Academic Calendar Consultation Motion', 'Passed', 'Academic Committee', null, '2026-04-18')
on conflict (id) do nothing;

insert into public.senators (id, name, department, portfolio, term, committees) values
  ('s1', 'Sen. Kwame Asante', 'Computer Science', 'Finance Chair', '2025–2026', array['Finance','Academic']),
  ('s2', 'Sen. Ama Osei', 'Biochemistry', 'Welfare Lead', '2025–2026', array['Welfare']),
  ('s3', 'Sen. Kofi Mensah', 'Physics', 'Constitutional Affairs', '2025–2026', array['Constitutional','Academic'])
on conflict (id) do nothing;

insert into public.committees (id, name, chair, mandate) values
  ('c1', 'Finance Committee', 'Sen. Kwame Asante', 'Oversight of association finances.'),
  ('c2', 'Welfare Committee', 'Sen. Ama Osei', 'Student welfare and support services.'),
  ('c3', 'Academic Committee', 'Sen. Kofi Mensah', 'Academic policy and faculty liaison.'),
  ('c4', 'Constitutional Committee', 'Sen. Kofi Mensah', 'Constitution and standing orders.')
on conflict (id) do nothing;

insert into public.announcements (id, title, date, urgent) values
  ('a1', 'Call for Petitions — Welfare Quarter', '2026-05-10', true),
  ('a2', 'Senate Sitting Notice — May 2026', '2026-05-08', false),
  ('a3', 'Constitution Review Committee Report Published', '2026-05-01', false)
on conflict (id) do nothing;

insert into public.sittings (id, title, date, time, venue) values
  ('sit1', 'Second Ordinary Sitting', '2026-05-22', '6:00 PM', 'SCISA Senate Chamber'),
  ('sit2', 'Committee of the Whole', '2026-05-29', '5:30 PM', 'Faculty of Physical Sciences')
on conflict (id) do nothing;

insert into public.leadership (id, name, role, department) values
  ('l1', 'Rt. Hon. Speaker', 'Speaker of the Senate', 'Computer Science'),
  ('l2', 'Deputy Speaker', 'Deputy Speaker', 'Biochemistry'),
  ('l3', 'Clerk of Senate', 'Clerk', 'Mathematics')
on conflict (id) do nothing;

insert into public.sessions (id, title, date, type) values
  ('sess1', 'First Ordinary Sitting — 2026', '2026-04-15', 'Minutes'),
  ('sess2', 'Emergency Sitting — Welfare Motion', '2026-03-28', 'Resolution')
on conflict (id) do nothing;

insert into public.news_items (id, title, date, category, excerpt) values
  ('n1', 'Senate Approves Digital Governance Portal Initiative', '2026-05-12', 'Official Statement', 'Ratified digital governance infrastructure.'),
  ('n2', 'Committee Reports Published for Q1 2026', '2026-05-01', 'Notice', null)
on conflict (id) do nothing;

insert into public.constitution_docs (id, title, type, size) values
  ('doc1', 'SCISA Constitution', 'PDF', '2.4 MB'),
  ('doc2', 'Senate Standing Orders', 'PDF', '1.1 MB'),
  ('doc3', 'Governance Policy Framework', 'PDF', '890 KB')
on conflict (id) do nothing;
