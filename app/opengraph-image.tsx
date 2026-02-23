import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Adrian Barkus — Fractional CTO';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const HEADSHOT_URL =
  'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/AdrianBarkus-Headshot-400x400.png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#2D2D2D',
          padding: '60px',
          alignItems: 'center',
          gap: '60px'
        }}
      >
        {/* Headshot */}
        <img
          src={HEADSHOT_URL}
          width={260}
          height={260}
          style={{ borderRadius: '50%', flexShrink: 0 }}
        />

        {/* Text block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            flex: 1
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#ECECEC',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            Adrian Barkus
          </div>

          {/* Brass accent line */}
          <div
            style={{
              width: 72,
              height: 4,
              backgroundColor: '#C9A962',
              borderRadius: 2
            }}
          />

          <div
            style={{
              fontSize: 28,
              color: '#C9A962',
              fontWeight: 600,
              letterSpacing: '0.01em'
            }}
          >
            Fractional CTO
          </div>

          <div
            style={{
              fontSize: 22,
              color: '#A0A0A0',
              lineHeight: 1.5,
              maxWidth: 580
            }}
          >
            I help businesses cut software costs, automate with AI, and access senior tech
            leadership.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
