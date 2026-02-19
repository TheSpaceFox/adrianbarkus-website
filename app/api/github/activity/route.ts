import { NextResponse } from 'next/server';

const GITHUB_USER = 'TheSpaceFox';
const CACHE_SECONDS = 3600; // 1 hour

export interface WeeklyCommit {
  weekStart: string;
  label: string;
  commits: number;
}

function toISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function formatMonthLabel(date: Date): string {
  return date.toLocaleDateString('en-GB', { month: 'short', year: '2-digit' });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') ?? GITHUB_USER;

  const token = process.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json'
  };
  if (token) {
    (headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }

  const to = new Date();
  const from = new Date();
  from.setFullYear(to.getFullYear() - 1);

  const query = `
    query ($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables: {
          login: username,
          from: from.toISOString(),
          to: to.toISOString()
        }
      }),
      next: { revalidate: CACHE_SECONDS }
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json(
        { error: `GitHub GraphQL error: ${res.status}`, details: err },
        { status: res.status }
      );
    }

    const json = await res.json();
    const calendar =
      json?.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return NextResponse.json(
        { error: 'No contribution data returned from GitHub.' },
        { status: 500 }
      );
    }

    const weeks: { contributionDays: { date: string; contributionCount: number }[] }[] =
      calendar.weeks ?? [];

    // Flatten to daily contributions
    const byMonth = new Map<
      string,
      {
        date: Date;
        contributions: number;
      }
    >();

    for (const week of weeks) {
      for (const day of week.contributionDays) {
        const dt = new Date(day.date);
        const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}`;
        const existing = byMonth.get(key);
        if (existing) {
          existing.contributions += day.contributionCount;
        } else {
          byMonth.set(key, { date: dt, contributions: day.contributionCount });
        }
      }
    }

    const months = Array.from(byMonth.values()).sort(
      (a, b) => a.date.getTime() - b.date.getTime()
    );

    const result: WeeklyCommit[] = months.map((m) => ({
      weekStart: toISO(m.date),
      label: formatMonthLabel(m.date),
      commits: m.contributions
    }));

    return NextResponse.json(
      { data: result, totalContributions: calendar.totalContributions },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate`
        }
      }
    );
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
