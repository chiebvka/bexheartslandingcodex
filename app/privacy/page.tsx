import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Bexhearts collects, uses, shares, and protects data for accounts, couples, prayers, journals, photos, AI features, purchases, and the waitlist.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="article-page legal-page">
      <article className="article-shell">
        <Link href="/" className="back-link">
          <ArrowLeft aria-hidden="true" />
          Bexhearts
        </Link>
        <header className="article-hero">
          <p className="section-kicker">Draft for attorney review</p>
          <h1>Privacy Policy</h1>
          <p>
            Effective date: to be set at launch. Contact:{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </header>

        <div className="article-content">
          <section>
            <h2>1. What Bexhearts is</h2>
            <p>
              Bexhearts is a mobile app for Christian couples: shared devotionals, prayers,
              check-ins, boundaries, dates, a couple journal, and progress features. Because of the
              app&rsquo;s nature, some of what you share is religious in nature — sensitive personal
              data in many jurisdictions (for example under GDPR Article 9). We treat everything in
              this policy with that in mind.
            </p>
          </section>

          <section>
            <h2>2. Data we collect</h2>
            <h3>Account and profile</h3>
            <p>
              Email address, full name, and hashed authentication credentials. Optionally: an avatar
              (an illustrated preset or a photo you upload), denomination, relationship stage,
              growth-focus selections, and timezone. With Sign in with Apple we receive your name
              and email (or Apple&rsquo;s private relay email) and a token proving your identity —
              never your Apple password. With Sign in with Google we receive your name, email, and
              profile picture reference via Google&rsquo;s ID token — never your Google password.
            </p>
            <h3>Couple data (shared between you and your partner)</h3>
            <p>
              Your couple link, relationship stage, streaks, grace days, and invite codes. Shared
              prayers, weekly check-ins, boundaries and temptation plans, saved, planned, and
              completed dates (with ratings and notes), journal moments and milestones, and
              reactions and notes on them.
            </p>
            <p>
              Weekly check-in notes: your ratings and your &ldquo;something you appreciated&rdquo;
              note are revealed to your partner only after you have both checked in that week. Your
              &ldquo;area to grow&rdquo; note and prayer request stay private to you unless you turn
              on that field&rsquo;s share-with-partner toggle. Sharing is enforced in the
              app&rsquo;s display logic; both partners&rsquo; entries live in the couple&rsquo;s
              shared database space.
            </p>
            <p>
              Personal prayers are visible only to you — your partner cannot access them (enforced
              at the database level).
            </p>
            <h3>Photos</h3>
            <p>
              Photos you attach to moments or your avatar are uploaded to our storage provider
              (Cloudflare R2). Image URLs are unguessable but technically public links; do not
              upload photos you wouldn&rsquo;t want accessible by link. Signed, expiring links are
              on our roadmap.
            </p>
            <h3>AI-composed prayers (optional)</h3>
            <p>
              Tapping &ldquo;Compose a prayer&rdquo; sends the text of that prayer request (title
              and details) to Anthropic (Claude) to compose a prayer and select a Bible verse — the
              tap is your consent, recorded the first time you use it. The composed result is stored
              with the prayer. We do not send your name, email, or other profile data with the
              request. Requests flagged as crisis content are never sent. The feature is entirely
              optional; the app works fully without it.
            </p>
            <h3>Activity, points, and leaderboard</h3>
            <p>
              We record daily activity events (for example &ldquo;completed a devotional&rdquo;,
              &ldquo;prayer session&rdquo;, &ldquo;check-in&rdquo;, &ldquo;journal entry&rdquo;,
              &ldquo;completed a date&rdquo;) to power streaks, the progress heatmap, and the points
              ledger. We also keep a couple-private event history (for example a grace day covering
              a missed streak day, a streak reset, a boundary retired, a plan resolved) so we can
              show you a transparent points and streak breakdown and, in the future, occasional
              recap cards (year-end and anniversaries — never weekly digests). This history is
              visible only to your couple and is deleted with the account.
            </p>
            <p>
              Global leaderboard: your couple appears pseudonymously by default — masked names, a
              couple number, and a country flag. Showing your real first names is opt-in, and either
              partner can turn it off. Country is approximated from your device&rsquo;s region
              setting.
            </p>
            <h3>Date-idea ratings</h3>
            <p>
              When you rate a date idea, your star rating contributes to a global, anonymous
              aggregate other couples can see (for example &ldquo;4.6 · 212 couples&rdquo;) —
              computed at the couple level with no names attached. Any written review stays visible
              only to your couple.
            </p>
            <h3>Purchases</h3>
            <p>
              Subscriptions are processed by Apple or Google and managed via RevenueCat. We receive
              subscription status and pseudonymous transaction identifiers — never your card number.
              Billing is per couple.
            </p>
            <h3>Analytics and diagnostics</h3>
            <p>
              We use PostHog for product analytics and Superwall for paywall display. We purge
              identity from these SDKs when you sign out or delete your account. Device data
              includes your push token (when notifications ship), device timezone, and app version.
            </p>
            <h3>Website waitlist</h3>
            <p>
              If you join the waitlist on this site, we collect your email address, optional name
              and relationship stage, referral source, campaign fields, user agent, and submission
              time — used only to send launch and early-access updates you requested.
            </p>
          </section>

          <section>
            <h2>3. How we use data</h2>
            <p>
              To provide the product (sync between partners, streaks, journal, prayers); compose AI
              prayers (only with consent, as above); process subscriptions and restore purchases;
              compute points and pseudonymous-by-default leaderboard standings, and run any future
              rewards program under its own terms; send notifications you&rsquo;ve enabled once the
              notification system ships (partner activity, reminders and digests, and account or
              security messages — categories will be individually controllable); and improve the app
              via aggregate analytics.
            </p>
            <p>
              We do not sell personal data, and we do not use prayer or journal content for
              advertising or model training.
            </p>
          </section>

          <section>
            <h2>4. Sharing</h2>
            <p>
              Your partner: shared spaces are shared — see section 2; unlinking and deletion effects
              are in section 6. Processors: Supabase (database, auth, and storage backend),
              Cloudflare (photo storage), Anthropic (AI prayer composition, consent-gated),
              RevenueCat (subscriptions), Superwall (paywalls), PostHog (analytics), and Apple and
              Google (sign-in, payments, push). Each receives only what its function requires. We
              disclose data where required by law, or to protect users from imminent harm. There are
              no third-party advertising SDKs.
            </p>
          </section>

          <section>
            <h2>5. Retention</h2>
            <p>
              Account data is kept for the life of the account. Requesting account deletion starts a
              7-day grace period (sign back in to cancel). After it lapses, your profile and
              authored content are permanently deleted. Content your partner co-owns (the couple
              record and their own entries) survives with them — see section 6. The AI prayer cache
              is deleted with the prayer or account. Points and activity are deleted with the
              account; anonymized aggregates may be retained. Backups purge on their rotation
              schedule.
            </p>
          </section>

          <section>
            <h2>6. Your partner and your data</h2>
            <p>
              Unlinking or deleting your account is non-destructive to your partner: they keep the
              couple space and their own content, and your authored rows are removed with you. A
              banned or deleted partner does not delete your content.
            </p>
          </section>

          <section>
            <h2>7. Your rights</h2>
            <p>
              You may request access, correction, export, deletion, and consent withdrawal (AI
              prayers can be disabled at any time; withdrawal stops future processing). EU/UK: GDPR
              rights, including complaint to a supervisory authority; explicit consent is our basis
              for processing religious content you choose to enter. California: CCPA rights; we do
              not sell personal information. Contact{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </section>

          <section>
            <h2>8. Children</h2>
            <p>Bexhearts is for adults (17+). We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2>9. Security</h2>
            <p>
              Data is encrypted in transit (TLS) and at rest; session tokens are stored encrypted on
              device; row-level security separates couples; AI and storage keys live server-side
              only. No system is perfectly secure; we&rsquo;ll notify you of breaches as required by
              law.
            </p>
          </section>

          <section>
            <h2>10. Changes</h2>
            <p>
              We&rsquo;ll post changes here and, for material changes, notify you in-app before they
              take effect.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
