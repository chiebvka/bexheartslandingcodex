import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Bexhearts terms covering accounts, couple spaces, per-couple subscriptions and the free trial, AI-composed prayers, acceptable use, points and rewards, and leaving.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="article-page legal-page">
      <article className="article-shell">
        <Link href="/" className="back-link">
          <ArrowLeft aria-hidden="true" />
          Bexhearts
        </Link>
        <header className="article-hero">
          <p className="section-kicker">Draft for attorney review</p>
          <h1>Terms of Service</h1>
          <p>
            Effective date: to be set at launch. Contact:{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </header>

        <div className="article-content">
          <section>
            <h2>1. The service</h2>
            <p>
              Bexhearts helps couples grow together in faith: devotionals, shared and personal
              prayers, check-ins, boundaries, dates, a shared journal, streaks, and points. It is a
              devotional tool — not professional counseling, therapy, medical, or crisis services,
              and not a substitute for your church community. If you are in danger or crisis,
              contact local emergency services or a crisis line.
            </p>
          </section>

          <section>
            <h2>2. Accounts and eligibility</h2>
            <p>
              You must be 17 or older and provide accurate information. One account per person; you
              are responsible for keeping your credentials secure. Sign-in is via email, Apple, or
              Google; third-party sign-in is also governed by that provider&rsquo;s terms.
            </p>
          </section>

          <section>
            <h2>3. Couples, linking, and shared content</h2>
            <p>
              Bexhearts is built around a two-person couple space created by invite code. Content
              you place in shared spaces (shared prayers, check-ins, journal, dates, boundaries) is
              visible to your partner and remains available to them even if you later leave — see
              section 8. Personal prayers stay private to you. You confirm you have your
              partner&rsquo;s agreement to share couple content (including photos of them) within
              the app.
            </p>
          </section>

          <section>
            <h2>4. Subscriptions and billing</h2>
            <p>
              Bexhearts uses a free trial followed by a paid subscription, billed per couple: one
              partner subscribes and the linked partner inherits access without a second charge.
              Payment runs through the Apple App Store or Google Play; manage or cancel there.
              Trials convert automatically unless cancelled before the trial ends. &ldquo;Restore
              Purchases&rdquo; is available in the app, and refunds follow Apple and Google policy.
            </p>
            <p>
              Deleting your account does not cancel your subscription — cancel in your store
              settings (the app reminds you at deletion). If the subscribing partner leaves the
              couple, premium persists until the current period ends, after which the remaining
              partner is prompted to subscribe.
            </p>
          </section>

          <section>
            <h2>5. AI-composed prayers</h2>
            <p>
              Optional. AI output can be imperfect; review a composed prayer before praying it, and
              treat it as an aid, not doctrine or advice. Attempting to use the composer for content
              other than genuine prayer requests (see section 6) may result in the feature or
              account being restricted.
            </p>
          </section>

          <section>
            <h2>6. Acceptable use — and what gets you banned</h2>
            <p>You may not:</p>
            <ul>
              <li>harass, abuse, threaten, or harm your partner or anyone else through the app;</li>
              <li>
                upload unlawful content, sexual content involving minors (zero tolerance; reported
                to authorities), or content infringing others&rsquo; rights;
              </li>
              <li>
                misuse the AI composer (attempts to generate hateful, sexual, or non-prayer
                content);
              </li>
              <li>
                game the points system — automation, scripted activity, fake accounts, self-linking
                multiple accounts you control, or any scheme to inflate points or leaderboard
                standing;
              </li>
              <li>
                circumvent billing, share accounts, scrape the service, or probe its security;
              </li>
              <li>impersonate others or misrepresent your identity to the rewards program.</li>
            </ul>
            <p>
              Enforcement: we may warn, remove content, freeze points, disqualify from rewards,
              suspend, or permanently ban — at our discretion, with notice where practicable. Effect
              on your partner: enforcement targets the offending account; your partner keeps their
              account and the couple content they own. Where the couple benefited from abuse (for
              example farmed points), couple-level points may be adjusted or reset. A banned
              subscriber&rsquo;s partner retains access until the paid period ends.
            </p>
          </section>

          <section>
            <h2>7. Points, leaderboard, and future rewards</h2>
            <p>
              Points reflect in-app activity (prayer sessions, devotionals, check-ins, journal
              entries, dates). Values may change; points have no cash value, are non-transferable,
              and may be recalculated to correct errors or abuse. The leaderboard shows your couple
              pseudonymously (masked names, couple number, and country flag) unless you opt in to
              show first names; either partner can opt out at any time.
            </p>
            <p>
              Rewards program (announced intent, not yet offered): any future prize draw or reward
              will have its own official rules published before it opens. Baseline eligibility we
              currently anticipate, subject to the official rules and law: an active paid
              subscription in good standing with a minimum tenure; a linked couple with both
              partners genuinely active; no enforcement actions; identity and age verification at
              claim time; geographic eligibility per local law, with a no-purchase-necessary
              alternative entry route where required; one entry per couple; taxes are the
              winner&rsquo;s responsibility. Nothing in this section is an offer of a prize.
            </p>
          </section>

          <section>
            <h2>8. Leaving: unlinking and account deletion</h2>
            <p>
              Account deletion has a 7-day grace period — signing back in cancels it. After it
              lapses, your account and authored content are permanently deleted. Deletion and
              unlinking are non-destructive to your partner: they keep the couple space and their
              own content. We may delete dormant unverified accounts after extended inactivity.
            </p>
          </section>

          <section>
            <h2>9. Your content and our license</h2>
            <p>
              You own what you write and upload. You grant us the limited license needed to operate
              the service (store, display to you and your partner, back up, and process for features
              you invoke — for example sending a prayer request to the AI composer with your
              consent). We don&rsquo;t use your content for advertising or AI training, and we claim
              no ownership.
            </p>
          </section>

          <section>
            <h2>10. Our content</h2>
            <p>
              Devotionals, date ideas, app design, and branding are ours or licensed; Scripture
              quotations use public-domain translations (World English Bible) unless otherwise
              noted. Personal, non-commercial use only.
            </p>
          </section>

          <section>
            <h2>11. Changes to the service and these terms</h2>
            <p>
              We may add, change, or retire features. For material terms changes we&rsquo;ll give
              in-app notice with reasonable lead time; continued use after the effective date is
              acceptance. If you don&rsquo;t agree, stop using the service and (if applicable)
              cancel your subscription.
            </p>
          </section>

          <section>
            <h2>12. Disclaimers and liability</h2>
            <p>
              The service is provided &ldquo;as is&rdquo; to the maximum extent law allows, with no
              warranty of uninterrupted or error-free service. Liability is capped at the amounts
              you paid in the last 12 months, except where liability cannot lawfully be limited.
            </p>
          </section>

          <section>
            <h2>13. Governing law and disputes</h2>
            <p>
              Governing law, venue, and dispute-resolution terms will be finalized with counsel
              before launch and posted here.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
