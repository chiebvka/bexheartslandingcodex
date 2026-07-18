import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { InviteSteps, formatInviteCode, isLikelyInviteCode } from '../invite-shared';

// Invite codes are personal; keep these pages out of search results.
export const metadata: Metadata = {
  title: 'Your partner invited you to Bexhearts',
  description: 'Link accounts with your partner on Bexhearts using their invite code.',
  robots: { index: false, follow: false },
};

export default async function InviteCodePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const cleaned = decodeURIComponent(code ?? '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '');
  const valid = isLikelyInviteCode(cleaned);

  return (
    <main className="article-page">
      <section className="article-shell">
        <Link href="/" className="back-link">
          <ArrowLeft aria-hidden="true" />
          Bexhearts
        </Link>

        <div className="section-heading">
          <p className="section-kicker">Partner invite</p>
          <h1 className="section-title">
            {valid ? 'Someone wants to grow with you.' : 'This invite link looks incomplete.'}
          </h1>
          <p className="section-copy">
            {valid
              ? 'Your partner set up your shared space on Bexhearts. Use their code below to link your accounts — one subscription covers you both, so joining costs you nothing.'
              : 'The code in this link doesn’t look right. Ask your partner to share it again from the app, or type the code they sent you directly into the app when it asks.'}
          </p>
        </div>

        {valid ? (
          <div className="invite-code-card">
            <span className="invite-code-label">Your invite code</span>
            <span className="invite-code">{formatInviteCode(cleaned)}</span>
            <span className="microcopy">Codes expire after 48 hours. If this one has, your partner can generate a fresh one in the app.</span>
          </div>
        ) : null}

        <InviteSteps />

        <div className="section-heading" style={{ marginTop: '2.5rem' }}>
          <Link className="text-link" href="/how-it-works">
            See how Bexhearts works <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
