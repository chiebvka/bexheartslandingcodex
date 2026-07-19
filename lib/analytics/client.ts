import type { FirstTouchAttribution } from './attribution';

export const ANALYTICS_CONSENT_KEY = 'bexhearts:analytics-consent:v1';
const ENGAGED_STORAGE_KEY = 'bexhearts:waitlist-engaged:v1';

type AnalyticsPropertyKey =
  | 'source'
  | 'utm_source'
  | 'utm_medium'
  | 'utm_campaign'
  | 'utm_content'
  | 'landing_path';

function propertiesFromAttribution(attribution: FirstTouchAttribution) {
  const keys: AnalyticsPropertyKey[] = [
    'source',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'landing_path',
  ];
  const properties: Record<string, string> = {};

  for (const key of keys) {
    const value = attribution[key];
    if (typeof value === 'string' && value) properties[key] = value.slice(0, 255);
  }

  return properties;
}

export function hasGoogleAnalyticsConsent() {
  if (typeof window === 'undefined') return false;

  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === 'granted';
  } catch {
    return false;
  }
}

function sendEvent(
  dataFastEvent: 'waitlist_form_engaged' | 'waitlist_signup',
  ga4Event: 'waitlist_form_engaged' | 'generate_lead',
  attribution: FirstTouchAttribution,
) {
  const properties = propertiesFromAttribution(attribution);

  try {
    window.datafast?.(dataFastEvent, properties);
  } catch {
    // Analytics must never interrupt the waitlist experience.
  }

  if (!hasGoogleAnalyticsConsent()) return;

  try {
    window.gtag?.('event', ga4Event, properties);
  } catch {
    // Analytics must never interrupt the waitlist experience.
  }
}

export function trackWaitlistFormEngaged(attribution: FirstTouchAttribution) {
  if (typeof window === 'undefined') return;

  try {
    if (window.sessionStorage.getItem(ENGAGED_STORAGE_KEY)) return;
    window.sessionStorage.setItem(ENGAGED_STORAGE_KEY, '1');
  } catch {
    // If session storage is unavailable, sending one extra engagement event is acceptable.
  }

  sendEvent('waitlist_form_engaged', 'waitlist_form_engaged', attribution);
}

export function trackWaitlistSignup(attribution: FirstTouchAttribution) {
  if (typeof window === 'undefined') return;
  sendEvent('waitlist_signup', 'generate_lead', attribution);
}
