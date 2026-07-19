import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { WaitlistForm } from '@/components/WaitlistForm';

const trackSignup = vi.fn();
const trackEngaged = vi.fn();

vi.mock('@/lib/analytics/client', () => ({
  trackWaitlistSignup: (...args: unknown[]) => trackSignup(...args),
  trackWaitlistFormEngaged: (...args: unknown[]) => trackEngaged(...args),
}));

describe('WaitlistForm conversion behavior', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.history.replaceState(
      {},
      '',
      '/?utm_source=tiktok&utm_medium=organic_social&utm_campaign=bexhearts_waitlist&utm_content=heartsyncdaily_bio',
    );
  });

  async function submitWithResponse(response: { ok: boolean; created?: boolean; message?: string }, status = 200) {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: status >= 200 && status < 300,
        json: async () => response,
      }),
    );

    render(<WaitlistForm compact />);
    fireEvent.change(screen.getByPlaceholderText('Email address'), {
      target: { value: 'hello@example.com' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /join the waitlist/i }).closest('form')!);
  }

  it('tracks a conversion only after the API confirms a new row', async () => {
    await submitWithResponse({ ok: true, created: true });

    expect(await screen.findByText(/you're on the list/i)).toBeInTheDocument();
    expect(trackSignup).toHaveBeenCalledOnce();
    expect(trackSignup.mock.calls[0][0]).toMatchObject({
      utm_source: 'tiktok',
      utm_content: 'heartsyncdaily_bio',
    });
  });

  it('does not count an already-subscribed email as a new conversion', async () => {
    await submitWithResponse({ ok: true, created: false, message: "You're already on the waitlist." });

    expect(await screen.findByText(/already on the waitlist/i)).toBeInTheDocument();
    expect(trackSignup).not.toHaveBeenCalled();
  });

  it('does not count a failed submission as a conversion', async () => {
    await submitWithResponse({ ok: false, message: 'Please try again.' }, 500);

    expect(await screen.findByRole('alert')).toHaveTextContent('Please try again.');
    expect(trackSignup).not.toHaveBeenCalled();
  });

  it('still displays confirmed success when analytics throws', async () => {
    trackSignup.mockImplementationOnce(() => {
      throw new Error('tracker offline');
    });
    await submitWithResponse({ ok: true, created: true });

    expect(await screen.findByText(/you're on the list/i)).toBeInTheDocument();
  });

  it('keeps untagged links working and sends null campaign fields', async () => {
    window.history.replaceState({}, '', '/');
    await submitWithResponse({ ok: true, created: true });

    await waitFor(() => expect(trackSignup).toHaveBeenCalledOnce());
    expect(trackSignup.mock.calls[0][0]).toMatchObject({
      source: 'direct',
      utm_source: null,
      utm_campaign: null,
    });
  });
});
