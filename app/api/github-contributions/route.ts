import { NextResponse } from 'next/server';

const GITHUB_USER = 'TheSpaceFox';
const CACHE_SECONDS = 300; // 5 min so updated token scope is reflected quickly

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json'
  };
  if (token) {
    (headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }

  // Explicit last 365 days so we get the same "last year" as github.com/username (all repos, no filter)
  const to = new Date();
  const from = new Date(to.getTime() - 365 * 24 * 60 * 60 * 1000);
  const fromISO = from.toISOString();
  const toISO = to.toISOString();

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
                color
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
        variables: { login: GITHUB_USER, from: fromISO, to: toISO }
      }),
      next: { revalidate: CACHE_SECONDS }
    });

    if (!res.ok) {
      const errText = await res.text();
      let errMessage = `GitHub GraphQL error: ${res.status}`;
      if (res.status === 403) {
        errMessage =
          'GitHub returned 403. Add GITHUB_TOKEN (classic PAT). For contributions from all repos including private, use a token with "repo" scope.';
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
        { error: 'No contribution calendar returned from GitHub.' },
        { status: 500 }
      );
    }

    const weeks = calendar.weeks ?? [];
    const totalContributions = calendar.totalContributions ?? 0;

    return NextResponse.json(
      { weeks, totalContributions },
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
