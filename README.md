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
NEXT_PUBLIC_SITE_URL=https://bexhearts.app
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

`SUPABASE_SERVICE_ROLE_KEY` is optional but recommended on the server so waitlist inserts do not depend on a public insert policy. Never expose it in the browser.

## Waitlist Table

Run `supabase/waitlist.sql` in the Supabase instance you plan to use for the app.

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

