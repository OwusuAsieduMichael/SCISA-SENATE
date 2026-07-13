-- Run after 001_initial_schema.sql and 002_committee_members.sql
-- Auto-generated from apps/web/src/lib/governance-data.ts

delete from public.committees;
delete from public.leadership;
delete from public.senators;

insert into public.leadership (id, name, role, department) values
  ('l1', 'Rt. Hon. Henry Oduro Ntiamoah', 'Speaker of the Senate', ''),
  ('l2', 'Hon. Nathaniel Bannor Amponsah', 'Deputy Speaker', ''),
  ('l3', 'Hon. Eunice Deladem Sosoo', 'Clerk of the Senate', ''),
  ('l4', 'Hon. Emmanuella Owusu Addo', 'Deputy Clerk of the Senate', ''),
  ('l5', 'To be announced', 'Marshal of the Senate', ''),
  ('l6', 'To be announced', 'Director of Protocol', '')
on conflict (id) do update set
  name = excluded.name,
  role = excluded.role,
  department = excluded.department;

insert into public.committees (id, name, chair, mandate, members) values
  ('c-business', 'Committee on Business', 'Rt. Hon. Henry Oduro Ntiamoah', 'Oversees the legislative calendar, coordination of sittings, and the orderly conduct of Senate business.', '[{"name":"Rt. Hon. Henry Oduro Ntiamoah","role":"Speaker (Chairperson)"},{"name":"Hon. Nathaniel Bannor Amponsah","role":"Deputy Speaker (Vice Chairperson)"},{"name":"Hon. Eunice Deladem Sosoo","role":"Clerk"},{"name":"Hon. Emmanuella Owusu Addo","role":"Deputy Clerk"},{"name":"Hon. Oppong Palmer-Buckle Charles","role":"Faculty of Biosciences Caucus Head"},{"name":"Hon. Ezekiel Kocraft","role":"Faculty of Physical and Computational Sciences Caucus Head"},{"name":"Hon. Evans Kyeremanteng","role":"Presidential Caucus Head"},{"name":"Hon. Genevieve Owusuwaa Karikari","role":"Secretary Caucus Head"},{"name":"Hon. Jeffrey Owusu Acheaw","role":"Year Rep Caucus Head"}]'::jsonb),
  ('c-appointment', 'Committee on Appointment', 'Hon. Jeffrey Owusu Acheaw', 'Reviews and recommends appointments to Senate offices, committees, and other governance positions.', '[{"name":"Hon. Jeffrey Owusu Acheaw","role":"Chairperson"},{"name":"Hon. Palmer-Buckle Charles","role":"Vice Chairperson"},{"name":"Hon. Genevieve Owusuwaa Karikari","role":"Clerk to the Committee"},{"name":"Hon. Herbert Boadu Ayisi","role":"Member"},{"name":"Hon. Dorian Esi Fynn","role":"Member"}]'::jsonb),
  ('c-budget', 'Committee on Budget and Finance', 'Hon. Nana Kwame Appiah Owusu', 'Scrutinises the association budget, financial reports, and fiscal policy proposals laid before the Senate.', '[{"name":"Hon. Nana Kwame Appiah Owusu","role":"Chairperson"},{"name":"Hon. Appiah Derrick","role":"Vice Chairperson"},{"name":"Hon. Sawudatu Ibrahim","role":"Clerk to the Committee"},{"name":"Hon. Benedicta Akosua Gyebuah Cobbina","role":"Ranking Member"},{"name":"Hon. Genevieve Owusuwaa Karikari","role":"Ranking Member"},{"name":"Hon. Kindly Osei Bediako","role":"Member"}]'::jsonb),
  ('c-privileges', 'Committee on Privileges', 'Hon. Nathaniel Bannor Amponsah', 'Adjudicates matters of senator conduct, privileges, and disciplinary proceedings under Senate rules.', '[{"name":"Hon. Nathaniel Bannor Amponsah","role":"Chairperson"},{"name":"Hon. Jeffrey Owusu Acheaw","role":"Vice Chairperson"},{"name":"Hon. Eunice Deladem Sosoo","role":"Clerk to the Committee"},{"name":"Hon. Patience Amevor Mensah","role":"Member"},{"name":"Hon. Isaac Nana Sam Mensah","role":"Ranking Member"}]'::jsonb),
  ('c-welfare', 'Committee on Welfare and Health', 'Hon. Cecilia Kponkpori Jinche', 'Addresses student welfare, health services, accommodation concerns, and related support programmes.', '[{"name":"Hon. Cecilia Kponkpori Jinche","role":"Chairperson"},{"name":"Hon. Erica Bofah Boateng","role":"Vice Chairperson"},{"name":"Hon. Kindly Osei Bediako","role":"Clerk to the Committee"},{"name":"Hon. Sawudatu Ibrahim","role":"Member"},{"name":"Hon. Herbert Boadu Ayisi","role":"Member"},{"name":"Hon. Kofi Ewusi Acquah","role":"Member"},{"name":"Hon. Jevillin Gyedu Owusuaa","role":"Member"},{"name":"Hon. Simeona Abena Serwaa Asibey","role":"Member"}]'::jsonb),
  ('c-constitution', 'Committee on Constitution, Legal, and Senate Affairs', 'Hon. Nathaniel Bannor Amponsah', 'Oversees constitutional interpretation, legal review of motions, and the governance framework of the Senate.', '[{"name":"Hon. Nathaniel Bannor Amponsah","role":"Chairperson"},{"name":"Hon. Ezekiel Kocraft","role":"Vice Chairperson"},{"name":"Hon. Benedicta Akosua Gyebuah Cobbina","role":"Clerk to the Committee"},{"name":"Hon. Jeffery Oteng Afriyie","role":"Member"},{"name":"Hon. Isaac Nana Sam Mensah","role":"Ranking Member"},{"name":"Hon. Patience Amevor Mensah","role":"Member"},{"name":"Hon. Ohene Blessing Yeboah","role":"Ranking Member"}]'::jsonb),
  ('c-media', 'Committee on Media and Publicity', 'Hon. Duvor Felix', 'Manages Senate communications, public relations, and publicity for legislative activities and notices.', '[{"name":"Hon. Duvor Felix","role":"Chairperson"},{"name":"Hon. Nana Kwame Appiah Owusu","role":"Vice Chairperson"},{"name":"Hon. Jevillin Gyedu Owusuaa","role":"Clerk to the Committee"},{"name":"Hon. Kofi Ewusi Acquah","role":"Member"},{"name":"Hon. Jeffery Oteng Afriyie","role":"Member"},{"name":"Hon. Priscilla Esimah Mbeah","role":"Member"},{"name":"Hon. Woli Richard Kwabena","role":"Member"}]'::jsonb),
  ('c-standing-orders', 'Committee on Standing Orders', 'Rt. Hon. Henry Oduro Ntiamoah', 'Maintains and reviews the Senate Standing Orders and procedural rules governing deliberations.', '[{"name":"Rt. Hon. Henry Oduro Ntiamoah","role":"Speaker (Chairperson)"},{"name":"Hon. Nathaniel Bannor Amponsah","role":"Deputy Speaker (Vice Chairperson)"},{"name":"Hon. Eunice Deladem Sosoo","role":"Clerk"},{"name":"Hon. Emmanuella Owusu Addo","role":"Deputy Clerk"},{"name":"Hon. Bright Edem Amlalo","role":"Member"},{"name":"Hon. Elyon Winnore Ayariga","role":"Member"},{"name":"Hon. Evans Kyeremanteng","role":"Ranking Member"},{"name":"Hon. Derrick Appiah","role":"Member"},{"name":"Hon. Palmer-Buckle Charles","role":"Ranking Member"}]'::jsonb),
  ('c-science', 'Committee on Science and Innovation', 'Hon. Jeffery Oteng Afriyie', 'Promotes science policy, research initiatives, and innovation programmes relevant to science students.', '[{"name":"Hon. Jeffery Oteng Afriyie","role":"Chairperson"},{"name":"Hon. Abraham Appiah","role":"Vice Chairperson"},{"name":"Hon. Michael Owusu Asiedu","role":"Clerk to the Committee"},{"name":"Hon. Reginald Nyarko","role":"Member"},{"name":"Hon. Sam Jerry Joshua","role":"Member"},{"name":"Hon. Priscilla Esimah Mbeah","role":"Member"},{"name":"Hon. Ohene Blessing Yeboah","role":"Ranking Member"}]'::jsonb),
  ('c-academics', 'Committee on Academics', 'Hon. Herbert Boadu Ayisi', 'Handles academic policy, curriculum concerns, and liaison between the Senate and faculty stakeholders.', '[{"name":"Hon. Herbert Boadu Ayisi","role":"Chairperson"},{"name":"Hon. Evans Kyeremanteng","role":"Vice Chairperson"},{"name":"Hon. Bernice Forson","role":"Clerk to the Committee"},{"name":"Hon. Simeona Abena Serwaa Asibey","role":"Member"},{"name":"Hon. Woli Richard Kwabena","role":"Member"}]'::jsonb)
on conflict (id) do update set
  name = excluded.name,
  chair = excluded.chair,
  mandate = excluded.mandate,
  members = excluded.members;

insert into public.senators (id, name, department, portfolio, term, committees) values
  ('sen-abraham-appiah', 'Hon. Abraham Appiah', '', 'Vice Chairperson, Science and Innovation', '2025 to 2026', array['Science and Innovation']),
  ('sen-appiah-derrick', 'Hon. Appiah Derrick', '', 'Vice Chairperson, Budget and Finance', '2025 to 2026', array['Budget and Finance']),
  ('sen-benedicta-akosua-gyebuah-cobbina', 'Hon. Benedicta Akosua Gyebuah Cobbina', '', 'Clerk to the Committee, Constitution, Legal, and Senate Affairs', '2025 to 2026', array['Budget and Finance','Constitution, Legal, and Senate Affairs']),
  ('sen-bernice-forson', 'Hon. Bernice Forson', '', 'Clerk to the Committee, Academics', '2025 to 2026', array['Academics']),
  ('sen-bright-edem-amlalo', 'Hon. Bright Edem Amlalo', '', 'Member, Standing Orders', '2025 to 2026', array['Standing Orders']),
  ('sen-cecilia-kponkpori-jinche', 'Hon. Cecilia Kponkpori Jinche', '', 'Chairperson, Welfare and Health', '2025 to 2026', array['Welfare and Health']),
  ('sen-derrick-appiah', 'Hon. Derrick Appiah', '', 'Member, Standing Orders', '2025 to 2026', array['Standing Orders']),
  ('sen-dorian-esi-fynn', 'Hon. Dorian Esi Fynn', '', 'Member, Appointment', '2025 to 2026', array['Appointment']),
  ('sen-duvor-felix', 'Hon. Duvor Felix', '', 'Chairperson, Media and Publicity', '2025 to 2026', array['Media and Publicity']),
  ('sen-elyon-winnore-ayariga', 'Hon. Elyon Winnore Ayariga', '', 'Member, Standing Orders', '2025 to 2026', array['Standing Orders']),
  ('sen-emmanuella-owusu-addo', 'Hon. Emmanuella Owusu Addo', '', 'Deputy Clerk, Business', '2025 to 2026', array['Business','Standing Orders']),
  ('sen-erica-bofah-boateng', 'Hon. Erica Bofah Boateng', '', 'Vice Chairperson, Welfare and Health', '2025 to 2026', array['Welfare and Health']),
  ('sen-eunice-deladem-sosoo', 'Hon. Eunice Deladem Sosoo', '', 'Clerk, Business', '2025 to 2026', array['Business','Privileges','Standing Orders']),
  ('sen-evans-kyeremanteng', 'Hon. Evans Kyeremanteng', '', 'Vice Chairperson, Academics', '2025 to 2026', array['Academics','Business','Standing Orders']),
  ('sen-ezekiel-kocraft', 'Hon. Ezekiel Kocraft', '', 'Vice Chairperson, Constitution, Legal, and Senate Affairs', '2025 to 2026', array['Business','Constitution, Legal, and Senate Affairs']),
  ('sen-genevieve-owusuwaa-karikari', 'Hon. Genevieve Owusuwaa Karikari', '', 'Clerk to the Committee, Appointment', '2025 to 2026', array['Appointment','Budget and Finance','Business']),
  ('sen-herbert-boadu-ayisi', 'Hon. Herbert Boadu Ayisi', '', 'Chairperson, Academics', '2025 to 2026', array['Academics','Appointment','Welfare and Health']),
  ('sen-isaac-nana-sam-mensah', 'Hon. Isaac Nana Sam Mensah', '', 'Ranking Member, Privileges', '2025 to 2026', array['Constitution, Legal, and Senate Affairs','Privileges']),
  ('sen-jeffery-oteng-afriyie', 'Hon. Jeffery Oteng Afriyie', '', 'Chairperson, Science and Innovation', '2025 to 2026', array['Constitution, Legal, and Senate Affairs','Media and Publicity','Science and Innovation']),
  ('sen-jeffrey-owusu-acheaw', 'Hon. Jeffrey Owusu Acheaw', '', 'Chairperson, Appointment', '2025 to 2026', array['Appointment','Business','Privileges']),
  ('sen-jevillin-gyedu-owusuaa', 'Hon. Jevillin Gyedu Owusuaa', '', 'Clerk to the Committee, Media and Publicity', '2025 to 2026', array['Media and Publicity','Welfare and Health']),
  ('sen-kindly-osei-bediako', 'Hon. Kindly Osei Bediako', '', 'Clerk to the Committee, Welfare and Health', '2025 to 2026', array['Budget and Finance','Welfare and Health']),
  ('sen-kofi-ewusi-acquah', 'Hon. Kofi Ewusi Acquah', '', 'Member, Welfare and Health', '2025 to 2026', array['Media and Publicity','Welfare and Health']),
  ('sen-michael-owusu-asiedu', 'Hon. Michael Owusu Asiedu', '', 'Clerk to the Committee, Science and Innovation', '2025 to 2026', array['Science and Innovation']),
  ('sen-nana-kwame-appiah-owusu', 'Hon. Nana Kwame Appiah Owusu', '', 'Chairperson, Budget and Finance', '2025 to 2026', array['Budget and Finance','Media and Publicity']),
  ('sen-nathaniel-bannor-amponsah', 'Hon. Nathaniel Bannor Amponsah', '', 'Chairperson, Privileges', '2025 to 2026', array['Business','Constitution, Legal, and Senate Affairs','Privileges','Standing Orders']),
  ('sen-ohene-blessing-yeboah', 'Hon. Ohene Blessing Yeboah', '', 'Ranking Member, Constitution, Legal, and Senate Affairs', '2025 to 2026', array['Constitution, Legal, and Senate Affairs','Science and Innovation']),
  ('sen-oppong-palmer-buckle-charles', 'Hon. Oppong Palmer-Buckle Charles', '', 'Faculty of Biosciences Caucus Head, Business', '2025 to 2026', array['Business']),
  ('sen-palmer-buckle-charles', 'Hon. Palmer-Buckle Charles', '', 'Vice Chairperson, Appointment', '2025 to 2026', array['Appointment','Standing Orders']),
  ('sen-patience-amevor-mensah', 'Hon. Patience Amevor Mensah', '', 'Member, Privileges', '2025 to 2026', array['Constitution, Legal, and Senate Affairs','Privileges']),
  ('sen-priscilla-esimah-mbeah', 'Hon. Priscilla Esimah Mbeah', '', 'Member, Media and Publicity', '2025 to 2026', array['Media and Publicity','Science and Innovation']),
  ('sen-reginald-nyarko', 'Hon. Reginald Nyarko', '', 'Member, Science and Innovation', '2025 to 2026', array['Science and Innovation']),
  ('sen-sam-jerry-joshua', 'Hon. Sam Jerry Joshua', '', 'Member, Science and Innovation', '2025 to 2026', array['Science and Innovation']),
  ('sen-sawudatu-ibrahim', 'Hon. Sawudatu Ibrahim', '', 'Clerk to the Committee, Budget and Finance', '2025 to 2026', array['Budget and Finance','Welfare and Health']),
  ('sen-simeona-abena-serwaa-asibey', 'Hon. Simeona Abena Serwaa Asibey', '', 'Member, Welfare and Health', '2025 to 2026', array['Academics','Welfare and Health']),
  ('sen-woli-richard-kwabena', 'Hon. Woli Richard Kwabena', '', 'Member, Media and Publicity', '2025 to 2026', array['Academics','Media and Publicity']),
  ('sen-henry-oduro-ntiamoah', 'Rt. Hon. Henry Oduro Ntiamoah', '', 'Speaker (Chairperson), Business', '2025 to 2026', array['Business','Standing Orders'])
on conflict (id) do update set
  name = excluded.name,
  department = excluded.department,
  portfolio = excluded.portfolio,
  term = excluded.term,
  committees = excluded.committees;

insert into public.bills (id, title, status, sponsor, summary, updated_at) values
  ('bill-2026-04', 'Student Welfare Support Amendment Bill', 'Debate', 'Committee on Welfare and Health', 'Amends welfare disbursement guidelines.', '2026-05-12'),
  ('bill-2026-03', 'Senate Transparency & Records Act', 'Review', 'Committee on Constitution, Legal, and Senate Affairs', null, '2026-05-05'),
  ('bill-2026-01', 'Academic Calendar Consultation Motion', 'Passed', 'Committee on Academics', null, '2026-04-18')
on conflict (id) do update set sponsor = excluded.sponsor;

insert into public.announcements (id, title, date, urgent) values
  ('a1', 'Call for Petitions: Welfare Quarter', '2026-05-10', true),
  ('a2', 'Senate Sitting Notice, May 2026', '2026-05-08', false),
  ('a3', 'Constitution Review Committee Report Published', '2026-05-01', false)
on conflict (id) do nothing;

insert into public.sittings (id, title, date, time, venue) values
  ('sit1', 'Second Ordinary Sitting', '2026-05-22', '6:00 PM', 'SCISA Senate Chamber'),
  ('sit2', 'Committee of the Whole', '2026-05-29', '5:30 PM', 'Faculty of Physical Sciences')
on conflict (id) do nothing;

insert into public.sessions (id, title, date, type) values
  ('sess1', 'First Ordinary Sitting, 2026', '2026-04-15', 'Minutes'),
  ('sess2', 'Emergency Sitting: Welfare Motion', '2026-03-28', 'Resolution')
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
