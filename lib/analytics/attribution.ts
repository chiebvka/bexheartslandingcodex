export const FIRST_TOUCH_STORAGE_KEY = 'bexhearts:first-touch:v1';

const MAX_UTM_LENGTH = 128;
const MAX_LANDING_PATH_LENGTH = 500;
const MAX_REFERRER_LENGTH = 253;
const utmPattern = /^[a-zA-Z0-9][a-zA-Z0-9._~:-]*$/;

export type FirstTouchAttribution = {
  source: 'direct' | 'referral';
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  landing_path: string | null;
  first_visited_at: string | null;
};

const utmKeys = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

function cleanUtm(value: unknown) {
  if (typeof value !== 'string') return null;

  const trimmed = value.trim();
  if (!trimmed || trimmed.length > MAX_UTM_LENGTH || !utmPattern.test(trimmed)) {
    return null;
  }

  return trimmed;
}

function hostnameWithoutWww(hostname: string) {
  return hostname.toLowerCase().replace(/^www\./, '');
}

function cleanExternalReferrer(value: unknown, currentHostname?: string) {
  if (typeof value !== 'string' || !value.trim()) return null;

  try {
    const candidate = value.includes('://') ? value : `https://${value}`;
    const url = new URL(candidate);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;

    const referrerHostname = hostnameWithoutWww(url.hostname);
    const siteHostname = currentHostname ? hostnameWithoutWww(currentHostname) : '';
    if (!referrerHostname || referrerHostname === siteHostname) return null;

    return referrerHostname.slice(0, MAX_REFERRER_LENGTH);
  } catch {
    return null;
  }
}

function cleanLandingPath(value: unknown) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();

  if (!trimmed.startsWith('/') || trimmed.length > MAX_LANDING_PATH_LENGTH) {
    return null;
  }

  return trimmed;
}

function cleanTimestamp(value: unknown) {
  if (typeof value !== 'string' || !value.trim()) return null;
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? null : new Date(timestamp).toISOString();
}

export function buildFirstTouchAttribution({
  url,
  referrer,
  visitedAt = new Date(),
}: {
  url: URL;
  referrer?: string;
  visitedAt?: Date;
}): FirstTouchAttribution {
  const externalReferrer = cleanExternalReferrer(referrer, url.hostname);
  const attribution: FirstTouchAttribution = {
    source: externalReferrer ? 'referral' : 'direct',
    referrer: externalReferrer,
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_content: null,
    utm_term: null,
    landing_path: cleanLandingPath(url.pathname),
    first_visited_at: visitedAt.toISOString(),
  };

  for (const key of utmKeys) {
    attribution[key] = cleanUtm(url.searchParams.get(key));
  }

  return attribution;
}

export function sanitizeAttribution(input: unknown): FirstTouchAttribution {
  const value = input && typeof input === 'object' ? (input as Record<string, unknown>) : {};
  const referrer = cleanExternalReferrer(value.referrer);
  const source = value.source === 'referral' && referrer ? 'referral' : 'direct';

  return {
    source,
    referrer: source === 'referral' ? referrer : null,
    utm_source: cleanUtm(value.utm_source),
    utm_medium: cleanUtm(value.utm_medium),
    utm_campaign: cleanUtm(value.utm_campaign),
    utm_content: cleanUtm(value.utm_content),
    utm_term: cleanUtm(value.utm_term),
    landing_path: cleanLandingPath(value.landing_path),
    first_visited_at: cleanTimestamp(value.first_visited_at),
  };
}

export function readFirstTouchAttribution(): FirstTouchAttribution | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = window.sessionStorage.getItem(FIRST_TOUCH_STORAGE_KEY);
    if (!stored) return null;

    const parsed = sanitizeAttribution(JSON.parse(stored));
    if (!parsed.first_visited_at || !parsed.landing_path) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function captureFirstTouchAttribution(): FirstTouchAttribution {
  const existing = readFirstTouchAttribution();
  if (existing) return existing;

  const attribution = buildFirstTouchAttribution({
    url: new URL(window.location.href),
    referrer: document.referrer,
  });

  try {
    window.sessionStorage.setItem(FIRST_TOUCH_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Storage can be unavailable in private browsing or restrictive browsers.
  }

  return attribution;
}
