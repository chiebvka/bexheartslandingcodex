import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getPost, blogPosts } from '@/lib/blog/posts';
import { WaitlistForm } from '@/components/WaitlistForm';

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

  return (
    <main className="article-page">
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

        <aside className="article-cta">
          <h2>Join the Bexhearts waitlist</h2>
          <p>Get early access updates for the Christian couples app being built around shared rhythms.</p>
          <WaitlistForm compact />
        </aside>
      </article>
    </main>
  );
}
