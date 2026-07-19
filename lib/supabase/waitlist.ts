import { createClient } from '@supabase/supabase-js';

type WaitlistInsert = {
  email: string;
  name?: string | null;
  stage?: string | null;
  source?: string | null;
  referrer?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  landing_path?: string | null;
  first_visited_at?: string | null;
  user_agent?: string | null;
};

export function getWaitlistClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  // Service-role only, on purpose: inserts must go through this server route so
  // its rate limiting applies. The table has no anon policies (see
  // supabase/waitlist_rls_fix.sql), so the anon key would not work anyway.
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return null;
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export type { WaitlistInsert };
