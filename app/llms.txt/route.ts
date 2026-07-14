import { blogPosts } from '@/lib/blog/posts';
import { siteConfig } from '@/lib/site';

export function GET() {
  const blogList = blogPosts
    .map((post) => `- ${post.title}: ${siteConfig.url}/blog/${post.slug}`)
    .join('\n');

  return new Response(
    `# Bexhearts

${siteConfig.description}

## Primary Pages
- Homepage: ${siteConfig.url}/
- Blog: ${siteConfig.url}/blog
- Privacy Policy: ${siteConfig.url}/privacy
- Terms of Service: ${siteConfig.url}/terms
- Support: ${siteConfig.url}/support

## Product Summary
Bexhearts is a mobile app for Christian couples — dating, engaged, newlywed, and married. Core features: daily devotionals both partners complete together (with a private reflection revealed once both have reflected), shared and personal prayer journals, an optional AI-composed prayer for focused prayer sessions, weekly check-ins with ratings and notes revealed only after both partners submit, boundaries and temptation plans with grace-first framing, a library of 350+ date ideas with couple-level community ratings, a couple journal of photos, moments, milestones, and answered prayers, and a couple streak with points and an opt-in pseudonymous global leaderboard.

## Pricing
Billed per couple — one partner subscribes and the linked partner joins the same couple space at no extra cost. Plans: $6.99/week, $12.99/month, or $79.99/year (about $1.54/week for both people). Every plan starts with a 3-day free trial; payment is handled by the Apple App Store or Google Play.

## Audience
Christian dating, engaged, newlywed, and married couples who want faith-centered shared rhythms. The first audience is the dating-to-newlywed journey.

## Privacy Highlights
Personal prayers are visible only to their author (enforced at the database level). Weekly check-in notes reveal only after both partners submit, with per-field sharing toggles. Prayer and journal content is never sold, never used for advertising, and never used for AI model training. Account deletion has a 7-day grace period and is non-destructive to the remaining partner.

## Guides
${blogList}

## Contact
${siteConfig.email}
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
