import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ANALYTICS_CONSENT_KEY, trackWaitlistSignup } from '@/lib/analytics/client';
import type { FirstTouchAttribution } from '@/lib/analytics/attribution';

const attribution: FirstTouchAttribution = {
  source: 'direct',
  referrer: null,
  utm_source: 'tiktok',
  utm_medium: 'organic_social',
  utm_campaign: 'bexhearts_waitlist',
  utm_content: 'heartsyncdaily_bio',
  utm_term: null,
  landing_path: '/',
  first_visited_at: '2026-07-19T12:00:00.000Z',
};

describe('website analytics events', () => {
  beforeEach(() => {
    window.datafast = vi.fn();
    window.gtag = vi.fn();
  });

  it('sends the cookieless DataFast goal without requiring GA consent', () => {
    trackWaitlistSignup(attribution);

    expect(window.datafast).toHaveBeenCalledWith('waitlist_signup', {
      source: 'direct',
      utm_source: 'tiktok',
      utm_medium: 'organic_social',
      utm_campaign: 'bexhearts_waitlist',
      utm_content: 'heartsyncdaily_bio',
      landing_path: '/',
    });
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it('sends generate_lead to GA4 only after consent', () => {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted');

    trackWaitlistSignup(attribution);

    expect(window.gtag).toHaveBeenCalledWith('event', 'generate_lead', expect.any(Object));
  });

  it('never includes waitlist PII in analytics properties', () => {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, 'granted');

    trackWaitlistSignup(attribution);

    const dataFastProperties = vi.mocked(window.datafast!).mock.calls[0][1];
    const gaProperties = vi.mocked(window.gtag!).mock.calls[0][2];
    expect(dataFastProperties).not.toHaveProperty('email');
    expect(dataFastProperties).not.toHaveProperty('name');
    expect(gaProperties).not.toHaveProperty('email');
    expect(gaProperties).not.toHaveProperty('name');
  });
});
