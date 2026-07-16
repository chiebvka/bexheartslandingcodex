type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  key: string;
  limit: number;
  windowMs: number;
};

const buckets = new Map<string, RateLimitBucket>();
const maxBuckets = 10_000;

function pruneExpiredBuckets(now: number) {
  if (buckets.size <= maxBuckets) {
    return;
  }

  for (const [key, bucket] of buckets.entries()) {
    if (bucket.resetAt <= now) {
      buckets.delete(key);
    }
  }

  while (buckets.size > maxBuckets) {
    const oldestKey = buckets.keys().next().value as string | undefined;
    if (!oldestKey) {
      break;
    }
    buckets.delete(oldestKey);
  }
}

export function checkRateLimit({ key, limit, windowMs }: RateLimitOptions) {
  const now = Date.now();
  pruneExpiredBuckets(now);

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    const resetAt = now + windowMs;
    buckets.set(key, { count: 1, resetAt });

    return {
      limited: false,
      remaining: Math.max(limit - 1, 0),
      retryAfter: Math.ceil(windowMs / 1000),
      resetAt,
    };
  }

  if (bucket.count >= limit) {
    return {
      limited: true,
      remaining: 0,
      retryAfter: Math.max(Math.ceil((bucket.resetAt - now) / 1000), 1),
      resetAt: bucket.resetAt,
    };
  }

  bucket.count += 1;

  return {
    limited: false,
    remaining: Math.max(limit - bucket.count, 0),
    retryAfter: Math.max(Math.ceil((bucket.resetAt - now) / 1000), 1),
    resetAt: bucket.resetAt,
  };
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const [firstIp] = forwardedFor.split(',');
    if (firstIp?.trim()) {
      return firstIp.trim();
    }
  }

  return request.headers.get('x-real-ip') || request.headers.get('cf-connecting-ip') || 'unknown';
}
