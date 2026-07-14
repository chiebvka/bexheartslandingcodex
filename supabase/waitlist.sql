create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  stage text check (stage in ('dating', 'engaged', 'newlywed', 'married')),
  source text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  user_agent text,
  created_at timestamptz not null default now(),
  unique (email)
);

alter table public.waitlist_signups enable row level security;

-- If the landing API uses SUPABASE_SERVICE_ROLE_KEY, no public insert policy is needed.
-- Use this policy only if you intentionally want anon-key inserts from the server route.
create policy "Allow anon waitlist inserts"
  on public.waitlist_signups
  for insert
  to anon
  with check (true);

create index if not exists waitlist_signups_created_at_idx
  on public.waitlist_signups (created_at desc);

create index if not exists waitlist_signups_stage_idx
  on public.waitlist_signups (stage);

create index if not exists waitlist_signups_utm_source_idx
  on public.waitlist_signups (utm_source);
