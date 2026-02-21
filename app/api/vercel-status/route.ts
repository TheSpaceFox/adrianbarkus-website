import { NextResponse } from 'next/server';

const VERCEL_STATUS_URL = 'https://www.vercel-status.com/api/v2/summary.json';
const REVALIDATE_SECONDS = 60;

export async function GET() {
  try {
    const res = await fetch(VERCEL_STATUS_URL, {
      next: { revalidate: REVALIDATE_SECONDS }
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, description: 'Status unavailable' },
        {
          status: 200,
          headers: {
            'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate`
          }
        }
      );
    }

    const data = await res.json();
    const indicator = data?.status?.indicator ?? 'unknown';
    const description = data?.status?.description ?? '';

    const ok = indicator === 'none';

    return NextResponse.json(
      { ok, description },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate`
        }
      }
    );
  } catch {
    return NextResponse.json(
      { ok: false, description: 'Status unavailable' },
      {
        status: 200,
        headers: {
          'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate`
        }
      }
    );
  }
}
