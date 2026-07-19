'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ANALYTICS_CONSENT_KEY } from '@/lib/analytics/client';

type ConsentChoice = 'granted' | 'denied';

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
}

function setGoogleConsent(choice: ConsentChoice) {
  ensureGtag();
  window.gtag?.('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });
  window.gtag?.('consent', 'update', {
    analytics_storage: choice,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

function deleteGoogleAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith('_ga')));

  const hostname = window.location.hostname;
  const rootDomain = hostname.split('.').slice(-2).join('.');

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${hostname}; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${rootDomain}; SameSite=Lax`;
  }
}

export function AnalyticsConsent() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pathname = usePathname();
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const configured = useRef(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
      if (stored === 'granted' || stored === 'denied') {
        setChoice(stored);
        if (stored === 'granted') setGoogleConsent('granted');
        return;
      }
    } catch {
      // A blocked localStorage behaves like no saved choice.
    }

    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isLoaded || choice !== 'granted' || !measurementId || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_location: `${window.location.origin}${pathname}`,
      page_path: pathname,
      page_title: document.title,
    });
  }, [choice, isLoaded, measurementId, pathname]);

  function configureGoogleAnalytics() {
    if (!measurementId || configured.current) return;
    configured.current = true;
    ensureGtag();
    setGoogleConsent('granted');
    window.gtag?.('js', new Date());
    window.gtag?.('config', measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    setIsLoaded(true);
  }

  function saveChoice(nextChoice: ConsentChoice) {
    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_KEY, nextChoice);
    } catch {
      // The current page still honors the choice when storage is unavailable.
    }

    setChoice(nextChoice);
    setIsOpen(false);

    if (nextChoice === 'granted') {
      setGoogleConsent('granted');
    } else {
      setGoogleConsent('denied');
      setIsLoaded(false);
      configured.current = false;
      deleteGoogleAnalyticsCookies();
    }
  }

  if (!measurementId) return null;

  return (
    <>
      {measurementId && choice === 'granted' && (
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
          onLoad={configureGoogleAnalytics}
          onReady={configureGoogleAnalytics}
        />
      )}

      {isOpen && (
        <section className="analytics-consent" aria-label="Analytics privacy choices">
          <div>
            <strong>Your analytics privacy choice</strong>
            <p>
              Bexhearts uses cookieless DataFast to understand website visits. With your permission,
              we also use Google Analytics cookies. We never send your name or email to either
              analytics service. <Link href="/privacy">Read the privacy policy</Link>.
            </p>
          </div>
          <div className="analytics-consent-actions">
            <button type="button" className="privacy-secondary-button" onClick={() => saveChoice('denied')}>
              No thanks
            </button>
            <button type="button" className="privacy-primary-button" onClick={() => saveChoice('granted')}>
              Allow analytics
            </button>
          </div>
        </section>
      )}

      {!isOpen && choice && (
        <button
          type="button"
          className="privacy-choices-button"
          onClick={() => setIsOpen(true)}
          aria-label="Change analytics privacy choices"
        >
          Privacy choices
        </button>
      )}
    </>
  );
}
