import Link from 'next/link';
import { appLinks } from '@/lib/site';

// Matches the app's 6-character collision-safe code (formatted ABC-DEF).
export function isLikelyInviteCode(cleaned: string): boolean {
  return /^[A-Z0-9]{6}$/.test(cleaned);
}

export function formatInviteCode(cleaned: string): string {
  return cleaned.length === 6 ? `${cleaned.slice(0, 3)}-${cleaned.slice(3)}` : cleaned;
}

const steps = [
  {
    step: '01',
    title: 'Get the app',
    copy: 'Download Bexhearts on your phone.',
  },
  {
    step: '02',
    title: 'Create your account',
    copy: 'Sign up with Apple, Google, or email — it takes about a minute.',
  },
  {
    step: '03',
    title: 'Enter the code when asked',
    copy: 'The app will ask if you’re joining a partner. Type the code in and your two accounts become one couple space.',
  },
];

export function InviteSteps() {
  const hasStoreLinks = Boolean(appLinks.appStore || appLinks.playStore);

  return (
    <>
      <div className="rhythm-list" style={{ marginTop: '2rem' }}>
        {steps.map((item) => (
          <article className="rhythm-item" key={item.step}>
            <span>{item.step}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          </article>
        ))}
      </div>

      {hasStoreLinks ? (
        <div className="store-links">
          {appLinks.appStore ? (
            <a className="primary-button" href={appLinks.appStore}>
              Download on the App Store
            </a>
          ) : null}
          {appLinks.playStore ? (
            <a className="primary-button" href={appLinks.playStore}>
              Get it on Google Play
            </a>
          ) : null}
        </div>
      ) : (
        <p className="microcopy" style={{ marginTop: '1.5rem' }}>
          Bexhearts is in early access, so the public store listing isn&apos;t live yet. If your
          partner sent you this, they can also send you their test invite — or{' '}
          <Link href="/#waitlist">join the waitlist</Link> and we&apos;ll email you the download
          link at launch.
        </p>
      )}
    </>
  );
}
