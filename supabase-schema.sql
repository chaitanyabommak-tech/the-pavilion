-- ============================================================
-- The Pavilion — Supabase Schema
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. LEADS — enquiry form submissions
create table if not exists leads (
  id          bigint generated always as identity primary key,
  created_at  timestamptz default now() not null,
  name        text not null,
  phone       text not null,
  email       text,
  message     text,
  source      text default 'contact_form'  -- contact_form | modal_enquire | modal_visit | modal_brochure
);

-- 2. BROCHURE DOWNLOADS — gate before PDF download
create table if not exists brochure_downloads (
  id          bigint generated always as identity primary key,
  created_at  timestamptz default now() not null,
  name        text not null,
  phone       text not null,
  email       text
);

-- 3. SITE VISITS — booking requests
create table if not exists site_visits (
  id              bigint generated always as identity primary key,
  created_at      timestamptz default now() not null,
  name            text not null,
  phone           text not null,
  email           text,
  preferred_date  text,
  preferred_time  text,
  message         text
);

-- 4. INTERACTIONS — WhatsApp / call click tracking
create table if not exists interactions (
  id          bigint generated always as identity primary key,
  created_at  timestamptz default now() not null,
  type        text not null,   -- whatsapp | call
  source      text not null    -- floating_cta | contact | pricing | project_overview | progress | final_cta
);

-- ============================================================
-- Row Level Security — allow anonymous inserts, block reads
-- ============================================================

alter table leads               enable row level security;
alter table brochure_downloads  enable row level security;
alter table site_visits         enable row level security;
alter table interactions        enable row level security;

-- Anyone can insert (your website visitors)
create policy "Allow anonymous inserts" on leads
  for insert to anon with check (true);

create policy "Allow anonymous inserts" on brochure_downloads
  for insert to anon with check (true);

create policy "Allow anonymous inserts" on site_visits
  for insert to anon with check (true);

create policy "Allow anonymous inserts" on interactions
  for insert to anon with check (true);

-- Only authenticated users (you) can read the data
create policy "Allow authenticated reads" on leads
  for select to authenticated using (true);

create policy "Allow authenticated reads" on brochure_downloads
  for select to authenticated using (true);

create policy "Allow authenticated reads" on site_visits
  for select to authenticated using (true);

create policy "Allow authenticated reads" on interactions
  for select to authenticated using (true);
