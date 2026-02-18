import { NextResponse } from 'next/server';

const GITHUB_USER = 'TheSpaceFox';
const WEEKS_TO_RETURN = 12;
const CACHE_SECONDS = 3600; // 1 hour

export interface WeeklyCommit {
  weekStart: string;
  label: string;
  commits: number;
}

/** Get the Monday (start of week) for the most recently completed week, in local date. */
function getLastMonday(): Date {
  const d = new Date();
  const day = d.getDay();
  // Sunday = 0, Monday = 1, ... Saturday = 6. Days since last Monday (or today if Monday).
  const daysSinceMonday = day === 0 ? 6 : day - 1;
  const lastMonday = new Date(d);
  lastMonday.setDate(d.getDate() - daysSinceMonday - 7);
  lastMonday.setHours(0, 0, 0, 0);
  return lastMonday;
}

function formatWeekLabel(date: Date): string {
  return date.toLocaleDateString('en-GB', { month: 'short', day: 'numeric' });
}

function toISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** GitHub participation: 52 weeks, oldest to newest. Week starts Monday. */
async function fetchParticipation(
  owner: string,
  repo: string,
  headers: HeadersInit
): Promise<number[] | null> {
  const url = `https://api.github.com/repos/${owner}/${repo}/stats/participation`;
  const res = await fetch(url, { headers, next: { revalidate: CACHE_SECONDS } });
  if (res.status === 202) return null; // not cached yet
  if (!res.ok) return null;
  const data = (await res.json()) as { all?: number[]; owner?: number[] };
  return data.owner ?? data.all ?? null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') ?? GITHUB_USER;

  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28'
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  try {
    // 1. List all public repos for the user (paginated)
    const repos: { name: string }[] = [];
    let page = 1;
    let hasMore = true;
    while (hasMore) {
      const listRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=pushed`,
        { headers, next: { revalidate: CACHE_SECONDS } }
      );
      if (!listRes.ok) {
        const err = await listRes.text();
        return NextResponse.json(
          { error: `GitHub API error: ${listRes.status}`, details: err },
          { status: listRes.status }
        );
      }
      const list = (await listRes.json()) as { name: string }[];
      repos.push(...list);
      hasMore = list.length === 100;
      page++;
      if (page > 10) break; // cap at 1000 repos to avoid runaway
    }

    // 2. Aggregate owner commits per week across all repos (52 weeks)
    const lastMonday = getLastMonday();
    const aggregated = new Array<number>(52).fill(0);

    for (const repo of repos) {
      const ownerCounts = await fetchParticipation(username, repo.name, headers);
      if (ownerCounts && Array.isArray(ownerCounts) && ownerCounts.length === 52) {
        for (let i = 0; i < 52; i++) {
          aggregated[i] += ownerCounts[i] ?? 0;
        }
      }
      // Small delay to avoid hammering GitHub when no token (rate limit)
      if (!token) await new Promise((r) => setTimeout(r, 100));
    }

    // 3. Build last N weeks with labels (GitHub order: 0 = oldest, 51 = newest)
    const result: WeeklyCommit[] = [];
    const startIndex = Math.max(0, 52 - WEEKS_TO_RETURN);
    for (let i = startIndex; i < 52; i++) {
      const weekStart = new Date(lastMonday);
      weekStart.setDate(weekStart.getDate() - (51 - i) * 7);
      result.push({
        weekStart: toISO(weekStart),
        label: formatWeekLabel(weekStart),
        commits: aggregated[i] ?? 0
      });
    }

    return NextResponse.json({ data: result }, { headers: { 'Cache-Control': `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate` } });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
