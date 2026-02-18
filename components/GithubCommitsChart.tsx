'use client';

import { useMemo, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface WeeklyCommit {
  weekStart: string;
  label: string;
  commits: number;
}

const VIEWBOX_WIDTH = 800;
const VIEWBOX_HEIGHT = 240;
const PADDING_LEFT = 48;
const PADDING_RIGHT = 16;
const PADDING_TOP = 16;
const PADDING_BOTTOM = 32;

const GITHUB_USER = 'TheSpaceFox';

export function GithubCommitsChart({ className }: { className?: string }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [weeklyCommits, setWeeklyCommits] = useState<WeeklyCommit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`/api/github/activity?username=${encodeURIComponent(GITHUB_USER)}`)
      .then((res) => {
        if (!res.ok) throw new Error(res.status === 401 ? 'GitHub token required' : `HTTP ${res.status}`);
        return res.json();
      })
      .then((body: { data?: WeeklyCommit[]; error?: string }) => {
        if (cancelled) return;
        if (body.error) throw new Error(body.error);
        setWeeklyCommits(Array.isArray(body.data) ? body.data : []);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load activity');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const { points, maxCommits, positions } = useMemo(() => {
    if (weeklyCommits.length === 0) {
      return { points: '', maxCommits: 0, positions: [] as { x: number; y: number }[] };
    }

    const max = Math.max(1, ...weeklyCommits.map((d) => d.commits));
    const usableWidth = VIEWBOX_WIDTH - PADDING_LEFT - PADDING_RIGHT;
    const usableHeight = VIEWBOX_HEIGHT - PADDING_TOP - PADDING_BOTTOM;

    const pos = weeklyCommits.map((d, index) => {
      const x =
        PADDING_LEFT +
        (weeklyCommits.length === 1
          ? usableWidth / 2
          : (index / (weeklyCommits.length - 1)) * usableWidth);
      const y =
        VIEWBOX_HEIGHT - PADDING_BOTTOM - (d.commits / max) * (usableHeight || 1);
      return { x, y };
    });

    const pts = pos.map((p) => `${p.x},${p.y}`).join(' ');
    return { points: pts, maxCommits: max, positions: pos };
  }, [weeklyCommits]);

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    let nearestIndex = 0;
    let minDist = Infinity;
    positions.forEach((p, index) => {
      const dist = Math.abs(p.x - x);
      if (dist < minDist) {
        minDist = dist;
        nearestIndex = index;
      }
    });
    setHoverIndex(nearestIndex);
  };

  const handleMouseLeave = () => setHoverIndex(null);

  const activeIndex = hoverIndex ?? positions.length - 1;
  const activePoint = positions[activeIndex];
  const activeData = weeklyCommits[activeIndex];

  return (
    <section className={cn('w-full', className)}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-tertiary">
              GitHub Activity
            </p>
            <p className="text-sm text-foreground-secondary">
              Weekly commits for{' '}
              <span className="font-medium text-foreground">{GITHUB_USER}</span>
              {loading && ' (loading…)'}
              {error && ` (${error})`}
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl border border-border bg-surface-elevated px-4 py-4 md:px-6 md:py-5">
          {loading && weeklyCommits.length === 0 ? (
            <div className="flex h-48 md:h-56 items-center justify-center text-foreground-tertiary text-sm">
              Loading GitHub activity…
            </div>
          ) : error && weeklyCommits.length === 0 ? (
            <div className="flex h-48 md:h-56 items-center justify-center text-foreground-secondary text-sm">
              {error}
            </div>
          ) : (
            <svg
              viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
              className="w-full h-48 md:h-56"
              role="img"
              aria-label={`Weekly GitHub commits for user ${GITHUB_USER}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* X axis */}
              <line
                x1={PADDING_LEFT}
                y1={VIEWBOX_HEIGHT - PADDING_BOTTOM}
                x2={VIEWBOX_WIDTH - PADDING_RIGHT}
                y2={VIEWBOX_HEIGHT - PADDING_BOTTOM}
                stroke="currentColor"
                strokeWidth={1}
                className="text-border"
              />

              {/* Y axis ticks */}
              {Array.from({ length: 3 }).map((_, i) => {
                const value = Math.round((maxCommits * (i + 1)) / 3);
                const y =
                  VIEWBOX_HEIGHT -
                  PADDING_BOTTOM -
                  (value / (maxCommits || 1)) * (VIEWBOX_HEIGHT - PADDING_TOP - PADDING_BOTTOM);
                return (
                  <g key={value}>
                    <line
                      x1={PADDING_LEFT}
                      y1={y}
                      x2={VIEWBOX_WIDTH - PADDING_RIGHT}
                      y2={y}
                      stroke="currentColor"
                      strokeWidth={0.5}
                      strokeDasharray="4 4"
                      className="text-border"
                    />
                    <text
                      x={PADDING_LEFT - 8}
                      y={y + 4}
                      textAnchor="end"
                      fontSize={10}
                      className="fill-foreground-tertiary"
                    >
                      {value}
                    </text>
                  </g>
                );
              })}

              {/* Area under curve */}
              {points && (
                <path
                  d={`M ${PADDING_LEFT},${
                    VIEWBOX_HEIGHT - PADDING_BOTTOM
                  } L ${points} L ${VIEWBOX_WIDTH - PADDING_RIGHT},${
                    VIEWBOX_HEIGHT - PADDING_BOTTOM
                  } Z`}
                  fill="rgba(201,169,98,0.08)"
                  stroke="none"
                />
              )}

              {/* Line */}
              {points && (
                <polyline
                  points={points}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className="text-primary"
                />
              )}

              {/* X axis labels */}
              {positions.map((p, index) => (
                <text
                  key={weeklyCommits[index].weekStart}
                  x={p.x}
                  y={VIEWBOX_HEIGHT - PADDING_BOTTOM + 16}
                  textAnchor="middle"
                  fontSize={10}
                  className="fill-foreground-tertiary"
                >
                  {weeklyCommits[index].label}
                </text>
              ))}

              {/* Active point + guideline */}
              {activePoint && (
                <>
                  <line
                    x1={activePoint.x}
                    y1={PADDING_TOP}
                    x2={activePoint.x}
                    y2={VIEWBOX_HEIGHT - PADDING_BOTTOM}
                    stroke="currentColor"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                    className="text-primary/40"
                  />
                  <circle
                    cx={activePoint.x}
                    cy={activePoint.y}
                    r={4}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="text-primary"
                  />
                </>
              )}
            </svg>
          )}

          {/* Tooltip */}
          {activeData && !loading && (
            <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2 text-xs text-foreground-secondary">
              <span className="text-foreground-tertiary uppercase tracking-[0.16em]">
                {activeData.label}
              </span>
              <span className="h-4 w-px bg-border" />
              <span className="text-foreground">
                {activeData.commits}{' '}
                <span className="text-foreground-tertiary">commits</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
