-- waitlist_rls_fix.sql — run AFTER waitlist.sql (safe to run even if you
-- never created the policy; DROP POLICY IF EXISTS is a no-op then).
--
-- WHY: waitlist.sql originally created an anon INSERT policy with
-- `with check (true)`. With that policy in place, anyone holding the public
-- anon key can insert rows DIRECTLY into waitlist_signups, bypassing the
-- /api/waitlist route's IP + email rate limiting entirely (spam at will).
--
-- The API route now uses SUPABASE_SERVICE_ROLE_KEY only (service role
-- bypasses RLS), so no anon policy is needed. After this fix the table is:
--   - INSERT: server route only (service role)
--   - SELECT/UPDATE/DELETE: nobody but service role (no policies exist)

drop policy if exists "Allow anon waitlist inserts" on public.waitlist_signups;
