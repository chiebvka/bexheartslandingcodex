import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Contact Bexhearts support.',
  alternates: {
    canonical: '/support',
  },
};

export default function SupportPage() {
  return (
    <main className="article-page">
      <section className="article-shell">
        <Link href="/" className="back-link">
          <ArrowLeft aria-hidden="true" />
          Bexhearts
        </Link>
        <div className="support-card">
          <div className="icon-chip large">
            <Mail aria-hidden="true" />
          </div>
          <p className="section-kicker">Support</p>
          <h1>Need help with Bexhearts?</h1>
          <p>
            For launch access, account, privacy, or product questions, email{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}

