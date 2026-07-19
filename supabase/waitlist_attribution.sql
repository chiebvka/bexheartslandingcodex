-- Safe, additive migration for an existing Bexhearts waitlist table.
-- Run this once in Supabase Studio > SQL Editor before deploying the updated site.

alter table public.waitlist_signups
  add column if not exists landing_path text,
  add column if not exists first_visited_at timestamptz;

comment on column public.waitlist_signups.landing_path is
  'Path where this browser session first entered the Bexhearts website.';

comment on column public.waitlist_signups.first_visited_at is
  'Time when the browser session first entered the Bexhearts website.';
