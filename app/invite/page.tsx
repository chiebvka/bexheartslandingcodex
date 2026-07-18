import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { InviteSteps } from './invite-shared';

export const metadata: Metadata = {
  title: 'Join your partner on Bexhearts',
  description: 'How to link accounts with your partner on Bexhearts.',
  robots: { index: false, follow: false },
};

export default function InvitePage() {
  return (
    <main className="article-page">
      <section className="article-shell">
        <Link href="/" className="back-link">
          <ArrowLeft aria-hidden="true" />
          Bexhearts
        </Link>

        <div className="section-heading">
          <p className="section-kicker">Partner invite</p>
          <h1 className="section-title">Joining your partner takes about a minute.</h1>
          <p className="section-copy">
            Your partner has an invite code waiting for you in their app (it looks like
            ABC-123). Here&apos;s all you do — one subscription covers you both, so joining
            costs you nothing.
          </p>
        </div>

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
