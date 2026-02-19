import { NextResponse } from 'next/server';

const GITHUB_USER = 'TheSpaceFox';
const CACHE_SECONDS = 300; // 5 minutes so profile and graph stay in sync

export interface WeeklyCommit {
  weekStart: string;
  label: string;
  commits: number;
}

function formatWeekLabel(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00Z');
  return dateStr.slice(8, 10) + ' ' + d.toLocaleDateString('en-GB', { month: 'short' });
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

  // Last 90 days in UTC
  const now = new Date();
  const to = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 23, 59, 59, 999));
  const from = new Date(to.getTime() - 90 * 24 * 60 * 60 * 1000);
  from.setUTCHours(0, 0, 0, 0);

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
      const errText = await res.text();
      let errMessage = `GitHub GraphQL error: ${res.status}`;
      if (res.status === 403) {
        errMessage =
          'GitHub returned 403. Add GITHUB_TOKEN to your Vercel project (Settings → Environment Variables) with a classic Personal Access Token (no scopes required for public data).';
        try {
          const errJson = JSON.parse(errText);
          if (errJson?.message) errMessage += ` ${errJson.message}`;
        } catch {
          // use default message
        }
      }
      return NextResponse.json(
        { error: errMessage, details: errText },
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

    // Week start = Monday. Get YYYY-MM-DD of Monday for each week (ISO week).
    function getWeekStart(dateStr: string): string {
      const d = new Date(dateStr + 'T12:00:00Z');
      const day = d.getUTCDay();
      const mondayOffset = day === 0 ? -6 : 1 - day;
      d.setUTCDate(d.getUTCDate() + mondayOffset);
      return d.toISOString().slice(0, 10);
    }

    const byWeek = new Map<string, number>();

    for (const week of weeks) {
      for (const day of week.contributionDays) {
        const key = getWeekStart(day.date);
        byWeek.set(key, (byWeek.get(key) ?? 0) + day.contributionCount);
      }
    }

    // Fill missing weeks: from Monday on or before range start, step 7 days to end of range
    const fromStr = from.toISOString().slice(0, 10);
    const toStr = to.toISOString().slice(0, 10);
    const cursor = new Date(fromStr + 'T12:00:00Z');
    const end = new Date(toStr + 'T12:00:00Z');
    const dayOfWeek = cursor.getUTCDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    cursor.setUTCDate(cursor.getUTCDate() + mondayOffset);
    while (cursor <= end) {
      const key = cursor.toISOString().slice(0, 10);
      if (!byWeek.has(key)) byWeek.set(key, 0);
      cursor.setUTCDate(cursor.getUTCDate() + 7);
    }

    const sortedWeeks = Array.from(byWeek.entries()).sort(([a], [b]) =>
      a.localeCompare(b)
    );

    const result: WeeklyCommit[] = sortedWeeks.map(([weekStart]) => ({
      weekStart,
      label: formatWeekLabel(weekStart),
      commits: byWeek.get(weekStart) ?? 0
    }));

    // Use sum of displayed data so the total always matches the graph (avoids cache/API quirks)
    const totalFromData = result.reduce((acc, r) => acc + r.commits, 0);

    return NextResponse.json(
      { data: result, totalContributions: totalFromData },
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
