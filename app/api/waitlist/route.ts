import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { getWaitlistClient, type WaitlistInsert } from '@/lib/supabase/waitlist';
import { sanitizeAttribution } from '@/lib/analytics/attribution';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedStages = new Set(['dating', 'engaged', 'newlywed', 'married', '']);
const ipLimit = { limit: 8, windowMs: 10 * 60 * 1000 };
const emailLimit = { limit: 3, windowMs: 60 * 60 * 1000 };

export const runtime = 'nodejs';

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 500) : '';
}

function rateLimitResponse(retryAfter: number) {
  return NextResponse.json(
    { ok: false, message: 'Too many waitlist attempts. Please wait a few minutes and try again.' },
    { status: 429, headers: { 'Retry-After': String(retryAfter) } },
  );
}

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);
  const ipCheck = checkRateLimit({
    key: `waitlist:ip:${clientIp}`,
    ...ipLimit,
  });

  if (ipCheck.limited) {
    return rateLimitResponse(ipCheck.retryAfter);
  }
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!body) {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  if (clean(body.company)) {
    return NextResponse.json({ ok: true, created: false });
  }

  const email = clean(body.email).toLowerCase();
  const stage = clean(body.stage).toLowerCase();

  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, message: 'Enter a valid email address.' }, { status: 400 });
  }

  const emailCheck = checkRateLimit({
    key: `waitlist:email:${email}`,
    ...emailLimit,
  });

  if (emailCheck.limited) {
    return rateLimitResponse(emailCheck.retryAfter);
  }

  if (!allowedStages.has(stage)) {
    return NextResponse.json({ ok: false, message: 'Choose a valid relationship stage.' }, { status: 400 });
  }

  const supabase = getWaitlistClient();
  if (!supabase) {
    return NextResponse.json(
      {
        ok: false,
        message: 'The waitlist is not connected yet. Add Supabase env vars and try again.',
      },
      { status: 503 },
    );
  }

  const attribution = sanitizeAttribution(body);

  const signup: WaitlistInsert = {
    email,
    name: clean(body.name) || null,
    stage: stage || null,
    ...attribution,
    user_agent: request.headers.get('user-agent')?.slice(0, 500) || null,
  };

  const { error } = await supabase.from('waitlist_signups').insert(signup);

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({
        ok: true,
        created: false,
        message: "You're already on the waitlist. I'll send launch updates there.",
      });
    }

    return NextResponse.json(
      { ok: false, message: 'The waitlist could not save your email. Please try again.' },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    created: true,
    message: "You're on the list. I'll send early access when Bexhearts is ready.",
  });
}
