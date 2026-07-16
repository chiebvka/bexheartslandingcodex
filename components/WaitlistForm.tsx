'use client';

import { useEffect, useMemo, useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const stages = [
  { value: 'dating', label: 'Dating' },
  { value: 'engaged', label: 'Engaged' },
  { value: 'newlywed', label: 'Newlywed' },
  { value: 'married', label: 'Married' },
];

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [source, setSource] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSource({
      source: document.referrer ? 'referral' : 'direct',
      referrer: document.referrer,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
    });
  }, []);

  const successText = useMemo(
    () =>
      message ||
      "You're on the list. I'll send early access when Bexhearts is ready for first couples.",
    [message],
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus('loading');
    setMessage('');

    const form = new FormData(formElement);
    const payload = {
      email: String(form.get('email') || '').trim(),
      name: String(form.get('name') || '').trim(),
      stage: String(form.get('stage') || '').trim(),
      company: String(form.get('company') || '').trim(),
      ...source,
    };

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setMessage(data.message || '');
      formElement.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div
        className={compact ? 'waitlist-toast success compact' : 'waitlist-toast success'}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 aria-hidden="true" />
        <span>{successText}</span>
      </div>
    );
  }

  return (
    <form className={compact ? 'waitlist-form compact' : 'waitlist-form'} onSubmit={onSubmit}>
      <input
        className="visually-hidden"
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      {!compact && (
        <input
          className="field"
          type="text"
          name="name"
          placeholder="First name"
          autoComplete="given-name"
        />
      )}
      <input
        className="field email-field"
        type="email"
        name="email"
        placeholder="Email address"
        autoComplete="email"
        required
      />
      {!compact && (
        <select className="field select-field" name="stage" defaultValue="">
          <option value="" disabled>
            Your stage
          </option>
          {stages.map((stage) => (
            <option key={stage.value} value={stage.value}>
              {stage.label}
            </option>
          ))}
        </select>
      )}
      <button className="primary-button" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
        <ArrowRight aria-hidden="true" />
      </button>
      {status === 'error' && (
        <div className="waitlist-toast error" role="alert" aria-live="assertive">
          <AlertCircle aria-hidden="true" />
          <span>{message}</span>
        </div>
      )}
    </form>
  );
}

