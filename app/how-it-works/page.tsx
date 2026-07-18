import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Flame, Gift, HeartHandshake, Star } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'How Bexhearts works — streaks, points, and rewards',
  description:
    'The whole game, no fine print: how the couple streak grows, how grace days work, what earns points, and where rewards fit in.',
  alternates: {
    canonical: '/how-it-works',
  },
};

const streakRules = [
  {
    step: '01',
    title: 'Both of you finish the day, together',
    copy: 'Your streak grows on days you both complete the daily devotional. It is one shared flame, not two separate scores.',
  },
  {
    step: '02',
    title: 'Grace covers a missed day',
    copy: 'Life happens. If you miss a single day, one grace day per week keeps the flame lit. Miss two in a row and the streak resets, and you simply start again.',
  },
  {
    step: '03',
    title: 'Your day, your timezone',
    copy: 'The app counts "today" in your couple\'s own timezone, so the day never flips on you at some odd hour.',
  },
  {
    step: '04',
    title: 'Solo days count',
    copy: 'Started before your partner joined? The days you showed up on your own carry over the moment you link accounts.',
  },
];

const pointsTable = [
  {
    step: '+25',
    title: 'Complete a date',
    copy: 'Do a date from the library (or one of your own) and mark it done.',
  },
  {
    step: '+20',
    title: 'Weekly check-in',
    copy: 'Rate how connected you feel and share what you choose to share.',
  },
  {
    step: '+15',
    title: 'Prayer session',
    copy: 'Sit down for a focused prayer session and finish with an Amen.',
  },
  {
    step: '+10',
    title: 'Daily devotional',
    copy: 'Read the day\'s scripture and reflection.',
  },
  {
    step: '+10',
    title: 'Journal moment',
    copy: 'Add a moment or milestone to your couple journal.',
  },
  {
    step: '+5',
    title: 'Rate a date idea',
    copy: 'Leave stars on a date you completed so other couples can find the good ones.',
  },
];

export default function HowItWorksPage() {
  return (
    <main className="article-page">
      <section className="article-shell">
        <Link href="/" className="back-link">
          <ArrowLeft aria-hidden="true" />
          Bexhearts
        </Link>

        <div className="section-heading">
          <p className="section-kicker">How Bexhearts works</p>
          <h1 className="section-title">One flame. Two hearts. No fine print.</h1>
          <p className="section-copy">
            Bexhearts turns growing together into a small daily habit, and the streak and points
            are how the app keeps score of the habit, not of your relationship. Here is exactly
            how all of it works.
          </p>
        </div>

        <div className="section-heading" style={{ marginTop: '3rem' }}>
          <p className="section-kicker">
            <Flame aria-hidden="true" style={{ width: 16, height: 16, verticalAlign: '-2px' }} />{' '}
            The streak
          </p>
          <h2 className="section-title">A shared flame you keep lit together.</h2>
        </div>
        <div className="rhythm-list">
          {streakRules.map((rule) => (
            <article className="rhythm-item" key={rule.step}>
              <span>{rule.step}</span>
              <div>
                <h3>{rule.title}</h3>
                <p>{rule.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-heading" style={{ marginTop: '3rem' }}>
          <p className="section-kicker">
            <HeartHandshake aria-hidden="true" style={{ width: 16, height: 16, verticalAlign: '-2px' }} />{' '}
            You&apos;re a team
          </p>
          <h2 className="section-title">One subscription, one couple space, one score.</h2>
          <p className="section-copy">
            When your partner accepts your invite, they join everything you&apos;ve started: the
            same streak, the same points, the same journal. One of you subscribes and the other
            joins free, and nothing in the app is scored one against the other. The streak needs
            both of you on purpose. It is the app&apos;s way of asking, gently, every day:
            did you show up for each other?
          </p>
        </div>

        <div className="section-heading" style={{ marginTop: '3rem' }}>
          <p className="section-kicker">
            <Star aria-hidden="true" style={{ width: 16, height: 16, verticalAlign: '-2px' }} />{' '}
            Points
          </p>
          <h2 className="section-title">The things you already do are the things that count.</h2>
          <p className="section-copy">
            Each activity earns points once per person per day, and everything lands in one shared
            couple total. There is no way to buy points and no penalty for a quiet day.
          </p>
        </div>
        <div className="rhythm-list">
          {pointsTable.map((row) => (
            <article className="rhythm-item" key={row.title}>
              <span>{row.step}</span>
              <div>
                <h3>{row.title}</h3>
                <p>{row.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-heading" style={{ marginTop: '3rem' }}>
          <p className="section-kicker">
            <Gift aria-hidden="true" style={{ width: 16, height: 16, verticalAlign: '-2px' }} />{' '}
            Rewards
          </p>
          <h2 className="section-title">Points are building toward something real.</h2>
          <p className="section-copy">
            We&apos;re honest about this part: couple rewards are planned but not live yet, and we
            won&apos;t promise specifics until they are. In the meantime your points climb an
            optional leaderboard where couples appear masked (something like &quot;t**y &amp;
            b****i · #1042&quot;) unless you choose to show your names. Your stars on date ideas
            also help every other couple: they roll up into the library&apos;s community ratings,
            so the best ideas rise to the top.
          </p>
        </div>

        <div className="section-heading" style={{ marginTop: '3rem' }}>
          <Link className="text-link" href="/#waitlist">
            Join the waitlist <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <p className="microcopy" style={{ marginTop: '2rem' }}>
          Questions about any of this? Email{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </section>
    </main>
  );
}
