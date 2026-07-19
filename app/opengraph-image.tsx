import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 72,
          background: '#F8F4EC',
          color: '#1A1A17',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            marginBottom: 48,
            fontSize: 34,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background: '#9849FA',
            }}
          />
          Bexhearts
        </div>
        <div
          style={{
            fontSize: 76,
            lineHeight: 0.98,
            letterSpacing: 0,
            maxWidth: 900,
            fontFamily: 'serif',
          }}
        >
          Grow closer to God and each other.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: '#5C5C54',
            maxWidth: 830,
          }}
        >
          Daily devotionals, shared prayer, check-ins, dates, and your story together.
        </div>
      </div>
    ),
    size,
  );
}
