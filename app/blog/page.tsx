import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog/posts';

export const metadata: Metadata = {
  title: 'Christian Relationship Guides',
  description:
    'Practical guides for Christian couples on prayer, dating boundaries, premarital questions, faith-centered dates, and shared rhythms.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <main className="article-page">
      <div className="article-shell">
        <Link href="/" className="back-link">
          <ArrowLeft aria-hidden="true" />
          Bexhearts
        </Link>
        <header className="article-hero">
          <p className="section-kicker">Bexhearts Blog</p>
          <h1>Christian relationship guides for couples building better rhythms.</h1>
          <p>
            Search-ready, practical writing for dating, engaged, and newlywed couples. No fake
            certainty, no shame-heavy advice, and no claims that an app replaces real support.
          </p>
        </header>
        <div className="blog-index">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} className="blog-index-card" key={post.slug}>
              <span>{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div>
                Read guide <ArrowRight aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

