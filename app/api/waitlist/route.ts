import { NextRequest, NextResponse } from 'next/server';
import { getWaitlistClient, type WaitlistInsert } from '@/lib/supabase/waitlist';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedStages = new Set(['dating', 'engaged', 'newlywed', 'married', '']);

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 500) : '';
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!body) {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const email = clean(body.email).toLowerCase();
  const stage = clean(body.stage).toLowerCase();

  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, message: 'Enter a valid email address.' }, { status: 400 });
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

  const signup: WaitlistInsert = {
    email,
    name: clean(body.name) || null,
    stage: stage || null,
    source: clean(body.source) || null,
    referrer: clean(body.referrer) || null,
    utm_source: clean(body.utm_source) || null,
    utm_medium: clean(body.utm_medium) || null,
    utm_campaign: clean(body.utm_campaign) || null,
    utm_content: clean(body.utm_content) || null,
    utm_term: clean(body.utm_term) || null,
    user_agent: request.headers.get('user-agent'),
  };

  const { error } = await supabase.from('waitlist_signups').insert(signup);

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({
        ok: true,
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
    message: "You're on the list. I'll send early access when Bexhearts is ready.",
  });
}

