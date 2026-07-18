import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog/posts';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/blog', '/how-it-works', '/privacy', '/terms', '/support'];
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}

