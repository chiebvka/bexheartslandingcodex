# Bexhearts Landing

Next.js landing site for the Bexhearts pre-launch waitlist.

## Stack

- Next.js App Router
- TypeScript
- Plain CSS with Bexhearts design tokens
- Supabase waitlist capture
- File-backed blog content with slug routes

## Environment

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://bexhearts.com
NEXT_PUBLIC_DATAFAST_WEBSITE_ID=
NEXT_PUBLIC_DATAFAST_DOMAIN=bexhearts.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

`SUPABASE_SERVICE_ROLE_KEY` is required by the server-side waitlist route. Never expose it in the browser or prefix it with `NEXT_PUBLIC_`.

The DataFast website ID, DataFast domain, and GA4 measurement ID are public browser configuration values, not secret API keys.

## Waitlist Table

Run `supabase/waitlist.sql` in the Supabase instance you plan to use for the app.

For an existing table, run the additive `supabase/waitlist_attribution.sql` migration instead.

## Analytics and campaign links

Use the beginner guide in `docs/analytics/utm-attribution-setup.md`. Copy-ready social links are in `docs/analytics/utm-link-guide.md`, and safe read-only reporting queries are in `docs/analytics/waitlist-attribution-queries.sql`.

## Local Development

```bash
npm install
npm run dev
```

## Production

Coolify can run this as a normal Node/Next.js app:

```bash
npm install
npm run build
npm run start
```
