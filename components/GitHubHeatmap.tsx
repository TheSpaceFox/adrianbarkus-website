'use client';

import { useEffect, useState, useMemo } from 'react';
import { cn } from '@/lib/utils';

const GITHUB_USER = 'TheSpaceFox';
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USER}`;

const EMPTY_COLOR = '#1e1e1e';
const LOW_COLOR = '#5a4a1a';
const HIGH_COLOR = '#C9A84C';

interface ContributionDay {
  date: string;
  contributionCount: number;
  color?: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

function getIntensityColor(count: number, maxCount: number): string {
  if (count <= 0) return EMPTY_COLOR;
  if (maxCount <= 0) return LOW_COLOR;
  const t = Math.min(1, count / maxCount);
  // Interpolate from LOW_COLOR to HIGH_COLOR
  const hex = (r: number, g: number, b: number) =>
    [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, '0')).join('');
  const parse = (s: string) => ({
    r: parseInt(s.slice(1, 3), 16),
    g: parseInt(s.slice(3, 5), 16),
    b: parseInt(s.slice(5, 7), 16)
  });
  const low = parse(LOW_COLOR);
  const high = parse(HIGH_COLOR);
  const r = low.r + (high.r - low.r) * t;
  const g = low.g + (high.g - low.g) * t;
  const b = low.b + (high.b - low.b) * t;
  return `#${hex(r, g, b)}`;
}

function formatDateLabel(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00Z');
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export function GitHubHeatmap({ className }: { className?: string }) {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [totalContributions, setTotalContributions] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch('/api/github-contributions')
      .then(async (res) => {
        const body = await res.json().catch(() => null);
        if (!res.ok) {
          const msg = body?.error ?? (res.status === 401 ? 'GitHub auth error' : `HTTP ${res.status}`);
          throw new Error(msg);
        }
        return body;
      })
      .then((body) => {
        if (cancelled) return;
        setWeeks(Array.isArray(body.weeks) ? body.weeks : []);
        setTotalContributions(
          typeof body.totalContributions === 'number' ? body.totalContributions : null
        );
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load contributions');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Build 7 x numWeeks grid (rows = Sun–Sat, cols = weeks). On mobile use last ~13 weeks.
  const { grid, maxCount, monthLabels } = useMemo(() => {
    const allWeeks = weeks;
    let maxCount = 0;
    const grid: ({ date: string; count: number } | null)[][] = [];
    for (let r = 0; r < 7; r++) {
      grid[r] = [];
      for (let c = 0; c < allWeeks.length; c++) {
        const day = allWeeks[c].contributionDays[r] ?? null;
        const count = day?.contributionCount ?? 0;
        if (count > maxCount) maxCount = count;
        grid[r].push(day ? { date: day.date, count } : null);
      }
    }
    // Month labels: first week index where month appears (by first day of week)
    const monthLabels: { col: number; label: string }[] = [];
    let lastMonth = '';
    for (let c = 0; c < allWeeks.length; c++) {
      const firstDay = allWeeks[c].contributionDays[0];
      const month = firstDay ? firstDay.date.slice(0, 7) : '';
      if (month && month !== lastMonth) {
        const d = new Date(firstDay.date + 'T12:00:00Z');
        monthLabels.push({
          col: c,
          label: d.toLocaleDateString('en-GB', { month: 'short' })
        });
        lastMonth = month;
      }
    }
      return { grid, maxCount, monthLabels };
  }, [weeks]);

  const [showWeeks, setShowWeeks] = useState(999);
  useEffect(() => {
    const update = () => {
      setShowWeeks(typeof window !== 'undefined' && window.innerWidth < 640 ? 13 : 999);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const numCols = Math.min(showWeeks, weeks.length) || 0;
  const startCol = Math.max(0, weeks.length - numCols);
  const visibleGrid = grid.map((row) => row.slice(startCol));
  const visibleMonthLabels = monthLabels
    .filter((m) => m.col >= startCol)
    .map((m) => ({ ...m, col: m.col - startCol }));
  const numColsVisible = visibleGrid[0]?.length ?? 0;

  if (error) {
    return (
      <section className={cn('w-full', className)} aria-label="My coding activity">
        <p className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary mb-2">
          My coding activity
        </p>
        <p className="text-sm text-foreground-secondary">{error}</p>
      </section>
    );
  }

  return (
<section className={cn('w-full', className)} aria-label="My coding activity">
      <p className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary mb-2">
          My coding activity
        </p>
      <a
        href={GITHUB_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        {loading ? (
          <p className="text-sm text-foreground-secondary py-8">Loading GitHub contributions…</p>
        ) : (
          <>
            {totalContributions != null && (
              <p className="text-sm text-foreground-secondary mb-3">
                {totalContributions.toLocaleString()} contributions in the last year — commits, pull requests, and reviews across my projects.
              </p>
            )}
            <div className="relative rounded-lg bg-[#373737] p-4 border border-border overflow-x-auto">
              {/* Month labels row: one cell per column, label text only where month starts */}
              <div
                className="grid gap-[3px] w-full mb-1 min-h-[14px]"
                style={{
                  gridTemplateColumns: `repeat(${numColsVisible}, minmax(10px, 1fr))`,
                  gridTemplateRows: '1fr'
                }}
              >
                {Array.from({ length: numColsVisible }, (_, c) => {
                  const m = visibleMonthLabels.find((x) => x.col === c);
                  return (
                    <span key={c} className="text-[10px] text-foreground-tertiary whitespace-nowrap">
                      {m ? m.label : ''}
                    </span>
                  );
                })}
              </div>
              {/* Grid: 7 rows (Sun–Sat), columns = weeks */}
              <div
                className="grid gap-[3px] w-full"
                style={{
                  gridTemplateRows: 'repeat(7, 1fr)',
                  gridTemplateColumns: `repeat(${numColsVisible}, minmax(10px, 1fr))`,
                  maxWidth: '100%'
                }}
              >
                {visibleGrid.flatMap((row, r) =>
                  row.map((cell, c) => {
                    const count = cell?.count ?? 0;
                    const bg = getIntensityColor(count, Math.max(1, maxCount));
                    return (
                      <div
                        key={`${r}-${c}`}
                        className="aspect-square max-w-[14px] max-h-[14px] w-full rounded-sm transition-colors"
                        style={{ backgroundColor: bg, minWidth: 10, minHeight: 10 }}
                        onMouseEnter={(e) => {
                          if (!cell) return;
                          const rect = e.currentTarget.getBoundingClientRect();
                          setTooltip({
                            date: cell.date,
                            count: cell.count,
                            x: rect.left + rect.width / 2,
                            y: rect.top
                          });
                        }}
                        onMouseLeave={() => setTooltip(null)}
                        aria-hidden
                      />
                    );
                  })
                )}
              </div>
              {tooltip && (
                <div
                  className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full -mt-1 px-2 py-1 rounded text-xs bg-surface-elevated border border-border text-foreground shadow-lg"
                  style={{ left: tooltip.x, top: tooltip.y }}
                >
                  {formatDateLabel(tooltip.date)}: {tooltip.count} contribution{tooltip.count !== 1 ? 's' : ''}
                </div>
              )}
            </div>
          </>
        )}
      </a>
    </section>
  );
}
