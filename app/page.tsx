import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Heart,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { WaitlistForm } from '@/components/WaitlistForm';
import { blogPosts } from '@/lib/blog/posts';
import { productRhythm, siteConfig, stageCards } from '@/lib/site';

const features = [
  {
    icon: BookOpen,
    title: 'Daily devotionals',
    copy: 'Scripture, reflection, and a practical couple action you can return to together.',
  },
  {
    icon: HeartHandshake,
    title: 'Shared prayer',
    copy: 'Keep personal and shared prayers visible, including answered-prayer moments.',
  },
  {
    icon: MessageCircle,
    title: 'Weekly check-ins',
    copy: 'Talk about connection, faith, and communication before distance builds.',
  },
  {
    icon: CalendarDays,
    title: 'Intentional dates',
    copy: 'Browse date ideas with faith ties, save plans, and remember the ones that mattered.',
  },
];

const faqs = [
  {
    question: 'Is Bexhearts only for married couples?',
    answer:
      'No. Bexhearts serves Christian dating, engaged, newlywed, and married couples, with focused guidance for the dating-to-newlywed seasons.',
  },
  {
    question: 'Is this counseling or pastoral advice?',
    answer:
      'No. Bexhearts is a devotional and relationship-practice tool. Serious relationship, safety, legal, medical, or crisis issues should be handled with trusted professional or pastoral support.',
  },
  {
    question: 'Will both partners need to pay?',
    answer:
      'No. Bexhearts is billed per couple: one partner subscribes ($6.99/week, $12.99/month, or $79.99/year after a 3-day free trial) and the linked partner joins the same couple space at no extra cost.',
  },
  {
    question: 'What is actually in the app?',
    answer:
      'Daily devotionals you complete together, shared and personal prayer journals with an optional AI-composed prayer for focused prayer sessions, weekly check-ins with a partner reveal, boundaries and temptation plans, a library of 350+ date ideas rated by other couples, and a couple journal of photos, moments, and milestones — held together by a couple streak.',
  },
  {
    question: 'How does the couple streak work?',
    answer:
      'Your streak grows on days you both finish the daily devotional — it is one shared flame, not two scores. Miss a single day and a weekly grace day keeps it alive; the day boundary follows your own timezone. Points come from things you already do (devotionals, prayer, check-ins, dates, journal moments) and land in one shared couple total. The full breakdown lives on the How it works page.',
  },
  {
    question: 'When can I download Bexhearts?',
    answer:
      'Bexhearts is ready, and the iPhone release is awaiting App Store review. Join the waitlist and we will email you as soon as the approved download link is available.',
  },
];

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, Android',
    description: siteConfig.description,
    offers: [
      { '@type': 'Offer', price: '6.99', priceCurrency: 'USD', name: 'Bexhearts Premium – Weekly' },
      { '@type': 'Offer', price: '12.99', priceCurrency: 'USD', name: 'Bexhearts Premium – Monthly' },
      { '@type': 'Offer', price: '79.99', priceCurrency: 'USD', name: 'Bexhearts Premium – Annual' },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Christian couples',
    },
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Bexhearts home">
          <span className="brand-mark" aria-hidden="true" />
          <span>Bexhearts</span>
        </Link>
        <nav className="header-nav" aria-label="Main navigation">
          <Link href="#how-it-works">How it works</Link>
          <Link href="#stages">Stages</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#waitlist" className="nav-cta">
            Join waitlist
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero-section section-shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              For Christian dating, engaged, and newlywed couples
            </div>
            <h1>Grow closer to God and each other.</h1>
            <p className="hero-subcopy">
              Bexhearts is a Christian couples app for daily devotionals, shared prayer, honest
              weekly check-ins, intentional dates, and a private journal you create together.
            </p>
            <div id="waitlist" className="hero-form" aria-label="Join the Bexhearts waitlist">
              <WaitlistForm />
            </div>
            <p className="microcopy">
              The iPhone app is awaiting App Store approval. Join for the download link — no spam.
            </p>
          </div>

          <div className="hero-visual" aria-label="Bexhearts app preview">
            <div className="phone-stack">
              <div className="phone phone-left" aria-hidden="true">
                <div className="phone-topline">
                  <span>Home</span>
                  <span>14</span>
                </div>
                <div className="phone-title">Good evening, Bex</div>
                <div className="streak-card">
                  <strong>14</strong>
                  <span>Day Streak</span>
                  <div className="week-dots">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i className="soft" />
                  </div>
                </div>
                <div className="mini-screen-card">
                  <BookOpen aria-hidden="true" />
                  <div>
                    <strong>Today's Devotional</strong>
                    <span>Read together tonight</span>
                  </div>
                </div>
                <div className="mini-screen-card">
                  <Heart aria-hidden="true" />
                  <div>
                    <strong>Shared prayer</strong>
                    <span>2 answered this month</span>
                  </div>
                </div>
              </div>

              <div className="phone phone-right" aria-hidden="true">
                <div className="phone-topline">
                  <span>Grow</span>
                  <span>Today</span>
                </div>
                <div className="scripture-card">
                  <span>Romans 12:10</span>
                  <strong>Love one another warmly as Christian family.</strong>
                </div>
                <div className="reflection-block">
                  <span>Reflection</span>
                  <p>What would it look like to honor your partner in one small way today?</p>
                </div>
                <div className="couple-action">
                  <CheckCircle2 aria-hidden="true" />
                  Ask one honest question before bed.
                </div>
              </div>
            </div>

            <div className="devotional-note">
              <strong>A calm habit you can return to together.</strong>
              <span>Faith-led, couple-centered, and practical enough for ordinary weeks.</span>
            </div>
          </div>
        </section>

        <section className="feature-band section-shell" aria-label="Product features">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <div className="icon-chip">
                  <Icon aria-hidden="true" />
                </div>
                <h2>{feature.title}</h2>
                <p>{feature.copy}</p>
              </article>
            );
          })}
        </section>

        <section id="how-it-works" className="split-section">
          <div className="section-shell split-grid">
            <div>
              <p className="section-kicker">A daily practice</p>
              <h2 className="section-title">Not another chat app. A place to follow through together.</h2>
              <p className="section-copy">
                Read the same scripture, pray for what is happening now, answer the weekly
                check-in, and choose a small action that keeps you connected beyond the screen.
              </p>
              <Link className="text-link" href="/how-it-works">
                See how streaks, points, and rewards work <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className="rhythm-list">
              {productRhythm.map((item) => (
                <article className="rhythm-item" key={item.step}>
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stages" className="stage-section section-shell">
          <div className="section-heading">
            <p className="section-kicker">For your season</p>
            <h2 className="section-title">Dating, engaged, and newlywed couples need different prompts.</h2>
            <p className="section-copy">
              Bexhearts adapts to couples putting faith at the center, preparing for marriage, or
              learning how to stay connected in the first years at home.
            </p>
          </div>
          <div className="stage-grid">
            {stageCards.map((stage) => (
              <article className="stage-card" key={stage.label}>
                <span>{stage.label}</span>
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-section" id="pricing">
          <div className="section-shell dark-grid">
            <div>
              <p className="section-kicker">One plan covers both of you</p>
              <h2 className="section-title">Billed per couple, never per person.</h2>
              <p className="section-copy">
                One partner subscribes; the other joins the same couple space free. Every plan
                starts with a 3-day free trial — $6.99/week, $12.99/month, or $79.99/year
                (about $1.54 a week for both of you). Cancel anytime before the trial ends.
              </p>
            </div>
            <div className="proof-grid">
              <div className="proof-card">
                <Users aria-hidden="true" />
                <h3>Your partner joins free</h3>
                <p>One subscription unlocks the whole couple space — no second paywall, ever.</p>
              </div>
              <div className="proof-card">
                <ShieldCheck aria-hidden="true" />
                <h3>Private by design</h3>
                <p>Personal prayers stay yours. Check-in reflections reveal only when you both share.</p>
              </div>
              <div className="proof-card">
                <Sparkles aria-hidden="true" />
                <h3>Keep the history you are making</h3>
                <p>Your journal brings dates, milestones, photos, and answered prayers together.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-preview section-shell">
          <div className="section-heading horizontal">
            <div>
              <p className="section-kicker">Relationship guides</p>
              <h2 className="section-title">Clear help for faith, dating, prayer, and marriage.</h2>
            </div>
            <Link className="text-link" href="/blog">
              Read the blog <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="blog-grid">
            {blogPosts.slice(0, 3).map((post) => (
              <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="faq-section section-shell">
          <div className="section-heading">
            <p className="section-kicker">Questions and answers</p>
            <h2 className="section-title">What to know about Bexhearts.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta section-shell">
          <div>
            <p className="section-kicker">App Store review in progress</p>
            <h2 className="section-title">Get the download link as soon as Apple approves it.</h2>
          </div>
          <WaitlistForm compact />
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span>Bexhearts</span>
        </div>
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
        </div>
      </footer>
    </>
  );
}
