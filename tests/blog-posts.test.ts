import { describe, expect, it } from 'vitest';
import { featureGuides } from '@/lib/blog/feature-guides';
import { blogPosts } from '@/lib/blog/posts';

function articleWordCount(post: (typeof featureGuides)[number]) {
  return post.content
    .flatMap((section) => section.paragraphs)
    .join(' ')
    .trim()
    .split(/\s+/).length;
}

describe('blog content library', () => {
  it('adds exactly 20 feature-grounded guides', () => {
    expect(featureGuides).toHaveLength(20);
  });

  it('keeps every article slug and title unique', () => {
    expect(new Set(blogPosts.map((post) => post.slug)).size).toBe(blogPosts.length);
    expect(new Set(blogPosts.map((post) => post.title)).size).toBe(blogPosts.length);
  });

  it('keeps every new guide substantive', () => {
    const shortGuides = featureGuides
      .map((post) => ({ slug: post.slug, words: articleWordCount(post) }))
      .filter((post) => post.words < 325);

    expect(shortGuides).toEqual([]);
    expect(featureGuides.every((post) => post.content.length >= 5)).toBe(true);
  });
});
