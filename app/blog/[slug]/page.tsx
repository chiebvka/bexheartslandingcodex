import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getPost, blogPosts } from '@/lib/blog/posts';
import { WaitlistForm } from '@/components/WaitlistForm';
import { siteConfig } from '@/lib/site';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = [
    ...blogPosts.filter((candidate) => candidate.slug !== post.slug && candidate.category === post.category),
    ...blogPosts.filter((candidate) => candidate.slug !== post.slug && candidate.category !== post.category),
  ].slice(0, 3);

  const articleUrl = `${siteConfig.url.replace(/\/$/, '')}/blog/${post.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    mainEntityOfPage: articleUrl,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <article className="article-shell">
        <Link href="/blog" className="back-link">
          <ArrowLeft aria-hidden="true" />
          Blog
        </Link>
        <header className="article-hero">
          <p className="section-kicker">{post.category}</p>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="article-meta">
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <span>{post.readingMinutes} min read</span>
          </div>
        </header>

        <div className="article-content">
          {post.content.map((section, index) => (
            <section key={section.heading || index}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <aside className="related-guides" aria-labelledby="related-guides-title">
          <p className="section-kicker">Keep reading</p>
          <h2 id="related-guides-title">More Christian relationship guides</h2>
          <div className="blog-grid">
            {relatedPosts.map((relatedPost) => (
              <Link href={`/blog/${relatedPost.slug}`} className="blog-card" key={relatedPost.slug}>
                <span>{relatedPost.category}</span>
                <h3>{relatedPost.title}</h3>
                <p>{relatedPost.description}</p>
              </Link>
            ))}
          </div>
        </aside>

        <aside className="article-cta">
          <h2>Get Bexhearts when the App Store approves it</h2>
          <p>Join the waitlist and we will email you the iPhone download link as soon as it is live.</p>
          <WaitlistForm compact />
        </aside>
      </article>
    </main>
  );
}
