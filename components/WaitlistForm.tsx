'use client';

import { useMemo, useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  captureFirstTouchAttribution,
  type FirstTouchAttribution,
} from '@/lib/analytics/attribution';
import { trackWaitlistFormEngaged, trackWaitlistSignup } from '@/lib/analytics/client';

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

  const successText = useMemo(
    () =>
      message ||
      "You're on the list. I'll send the download link as soon as App Store approval is complete.",
    [message],
  );

  function onFormEngaged() {
    try {
      trackWaitlistFormEngaged(captureFirstTouchAttribution());
    } catch {
      // Analytics and storage failures must not affect the form.
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus('loading');
    setMessage('');

    const form = new FormData(formElement);
    let attribution: FirstTouchAttribution | null = null;

    try {
      attribution = captureFirstTouchAttribution();
    } catch {
      // The API safely fills missing attribution when the browser blocks it.
    }

    const payload = {
      email: String(form.get('email') || '').trim(),
      name: String(form.get('name') || '').trim(),
      stage: String(form.get('stage') || '').trim(),
      company: String(form.get('company') || '').trim(),
      ...(attribution || {}),
    };

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { ok?: boolean; created?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setMessage(data.message || '');
      formElement.reset();

      if (data.created && attribution) {
        try {
          trackWaitlistSignup(attribution);
        } catch {
          // A conversion beacon can fail without changing the confirmed signup.
        }
      }
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
    <form
      className={compact ? 'waitlist-form compact' : 'waitlist-form'}
      onSubmit={onSubmit}
      onFocusCapture={onFormEngaged}
    >
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
