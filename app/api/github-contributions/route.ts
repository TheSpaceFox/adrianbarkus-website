import { NextResponse } from 'next/server';

const GITHUB_USER = 'TheSpaceFox';
const CACHE_SECONDS = 3600; // 1 hour

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json'
  };
  if (token) {
    (headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }

  // contributionsCollection with no repo filter = full profile, all repositories (same as github.com/username)
  const query = `
    query ($login: String!) {
      user(login: $login) {
        contributionsCollection {
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
        variables: { login: GITHUB_USER }
      }),
      next: { revalidate: CACHE_SECONDS }
    });

    if (!res.ok) {
      const errText = await res.text();
      let errMessage = `GitHub GraphQL error: ${res.status}`;
      if (res.status === 403) {
        errMessage =
          'GitHub returned 403. Add GITHUB_TOKEN to your Vercel project (Settings → Environment Variables) with a classic Personal Access Token (read:user scope recommended for contribution data).';
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
