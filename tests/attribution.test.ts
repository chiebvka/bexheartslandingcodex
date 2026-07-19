import { beforeEach, describe, expect, it } from 'vitest';
import {
  buildFirstTouchAttribution,
  captureFirstTouchAttribution,
  FIRST_TOUCH_STORAGE_KEY,
  sanitizeAttribution,
} from '@/lib/analytics/attribution';

describe('first-touch attribution', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
  });

  it('captures a complete tagged landing URL', () => {
    const result = buildFirstTouchAttribution({
      url: new URL(
        'https://bexhearts.com/blog?utm_source=tiktok&utm_medium=organic_social&utm_campaign=bexhearts_waitlist&utm_content=heartsyncdaily_bio&utm_term=couples',
      ),
      referrer: 'https://www.tiktok.com/@heartsyncdaily/video/123?private=value',
      visitedAt: new Date('2026-07-19T12:00:00.000Z'),
    });

    expect(result).toEqual({
      source: 'referral',
      referrer: 'tiktok.com',
      utm_source: 'tiktok',
      utm_medium: 'organic_social',
      utm_campaign: 'bexhearts_waitlist',
      utm_content: 'heartsyncdaily_bio',
      utm_term: 'couples',
      landing_path: '/blog',
      first_visited_at: '2026-07-19T12:00:00.000Z',
    });
  });

  it('keeps valid partial tags and represents missing tags as null', () => {
    const result = buildFirstTouchAttribution({
      url: new URL('https://bexhearts.com/?utm_source=instagram&utm_campaign=bexhearts_waitlist'),
    });

    expect(result.utm_source).toBe('instagram');
    expect(result.utm_campaign).toBe('bexhearts_waitlist');
    expect(result.utm_medium).toBeNull();
    expect(result.utm_content).toBeNull();
  });

  it('records an untagged visit as direct', () => {
    const result = buildFirstTouchAttribution({ url: new URL('https://bexhearts.com/privacy') });

    expect(result.source).toBe('direct');
    expect(result.referrer).toBeNull();
    expect(result.utm_source).toBeNull();
    expect(result.landing_path).toBe('/privacy');
  });

  it('rejects malformed and oversized campaign values', () => {
    const oversized = 'a'.repeat(129);
    const result = buildFirstTouchAttribution({
      url: new URL(
        `https://bexhearts.com/?utm_source=%3Cscript%3E&utm_campaign=${oversized}&utm_medium=organic_social`,
      ),
    });

    expect(result.utm_source).toBeNull();
    expect(result.utm_campaign).toBeNull();
    expect(result.utm_medium).toBe('organic_social');
  });

  it('ignores same-site referrers and strips external referrers to a hostname', () => {
    const sameSite = buildFirstTouchAttribution({
      url: new URL('https://www.bexhearts.com/blog'),
      referrer: 'https://bexhearts.com/?secret=1',
    });
    const external = buildFirstTouchAttribution({
      url: new URL('https://bexhearts.com/'),
      referrer: 'https://m.facebook.com/post/123?secret=1',
    });

    expect(sameSite).toMatchObject({ source: 'direct', referrer: null });
    expect(external).toMatchObject({ source: 'referral', referrer: 'm.facebook.com' });
  });

  it('does not overwrite the first touch after navigation in the same session', () => {
    window.history.replaceState(
      {},
      '',
      '/?utm_source=tiktok&utm_medium=organic_social&utm_campaign=bexhearts_waitlist&utm_content=heartsyncdaily_bio',
    );
    const first = captureFirstTouchAttribution();

    window.history.replaceState({}, '', '/blog?utm_source=facebook&utm_content=official_bexhearts_post_001');
    const second = captureFirstTouchAttribution();

    expect(second).toEqual(first);
    expect(second.utm_source).toBe('tiktok');
    expect(second.landing_path).toBe('/');
    expect(window.sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEY)).toContain('heartsyncdaily_bio');
  });

  it('sanitizes attribution again on the server boundary', () => {
    expect(
      sanitizeAttribution({
        source: 'anything',
        referrer: 'javascript:alert(1)',
        utm_source: '<bad>',
        utm_medium: 'organic_social',
        landing_path: 'not-a-path',
        first_visited_at: 'not-a-date',
      }),
    ).toMatchObject({
      source: 'direct',
      referrer: null,
      utm_source: null,
      utm_medium: 'organic_social',
      landing_path: null,
      first_visited_at: null,
    });
  });

  it('preserves only a validated referral hostname at the server boundary', () => {
    expect(
      sanitizeAttribution({
        source: 'referral',
        referrer: 'tiktok.com',
      }),
    ).toMatchObject({
      source: 'referral',
      referrer: 'tiktok.com',
    });
  });
});
