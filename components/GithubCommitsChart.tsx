'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

interface WeeklyCommit {
  weekStart: string; // ISO date string
  label: string;
  commits: number;
}

const mockWeeklyCommits: WeeklyCommit[] = [
  { weekStart: '2026-01-05', label: 'Jan 5', commits: 18 },
  { weekStart: '2026-01-12', label: 'Jan 12', commits: 26 },
  { weekStart: '2026-01-19', label: 'Jan 19', commits: 22 },
  { weekStart: '2026-01-26', label: 'Jan 26', commits: 35 },
  { weekStart: '2026-02-02', label: 'Feb 2', commits: 41 },
  { weekStart: '2026-02-09', label: 'Feb 9', commits: 33 }
];

const VIEWBOX_WIDTH = 800;
const VIEWBOX_HEIGHT = 240;
const PADDING_LEFT = 48;
const PADDING_RIGHT = 16;
const PADDING_TOP = 16;
const PADDING_BOTTOM = 32;

export function GithubCommitsChart({ className }: { className?: string }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const { points, maxCommits, positions } = useMemo(() => {
    if (mockWeeklyCommits.length === 0) {
      return { points: '', maxCommits: 0, positions: [] as { x: number; y: number }[] };
    }

    const max = Math.max(...mockWeeklyCommits.map((d) => d.commits));
    const usableWidth = VIEWBOX_WIDTH - PADDING_LEFT - PADDING_RIGHT;
    const usableHeight = VIEWBOX_HEIGHT - PADDING_TOP - PADDING_BOTTOM;

    const pos = mockWeeklyCommits.map((d, index) => {
      const x =
        PADDING_LEFT +
        (mockWeeklyCommits.length === 1
          ? usableWidth / 2
          : (index / (mockWeeklyCommits.length - 1)) * usableWidth);
      const y =
        VIEWBOX_HEIGHT - PADDING_BOTTOM - (d.commits / max) * (usableHeight || 1);
      return { x, y };
    });

    const pts = pos.map((p) => `${p.x},${p.y}`).join(' ');
    return { points: pts, maxCommits: max, positions: pos };
  }, []);

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
  const activeData = mockWeeklyCommits[activeIndex];

  return (
    <section className={cn('w-full', className)}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-tertiary">
              GitHub Activity
            </p>
            <p className="text-sm text-foreground-secondary">
              Weekly commits for <span className="font-medium text-foreground">TheSpaceFox</span>{' '}
              (mock data).
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl border border-[#404040] bg-surface-elevated px-4 py-4 md:px-6 md:py-5">
        <svg
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          className="w-full h-48 md:h-56"
          role="img"
          aria-label="Weekly GitHub commits for user TheSpaceFox"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* X axis */}
          <line
            x1={PADDING_LEFT}
            y1={VIEWBOX_HEIGHT - PADDING_BOTTOM}
            x2={VIEWBOX_WIDTH - PADDING_RIGHT}
            y2={VIEWBOX_HEIGHT - PADDING_BOTTOM}
            stroke="#404040"
            strokeWidth={1}
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
                  stroke="#333333"
                  strokeWidth={0.5}
                  strokeDasharray="4 4"
                />
                <text
                  x={PADDING_LEFT - 8}
                  y={y + 4}
                  textAnchor="end"
                  fontSize={10}
                  fill="#6B6B6B"
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
              stroke="#C9A962"
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          )}

          {/* X axis labels */}
          {positions.map((p, index) => (
            <text
              key={mockWeeklyCommits[index].weekStart}
              x={p.x}
              y={VIEWBOX_HEIGHT - PADDING_BOTTOM + 16}
              textAnchor="middle"
              fontSize={10}
              fill="#6B6B6B"
            >
              {mockWeeklyCommits[index].label}
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
                stroke="rgba(201,169,98,0.4)"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
              <circle
                cx={activePoint.x}
                cy={activePoint.y}
                r={4}
                fill="#C9A962"
                stroke="#2D2D2D"
                strokeWidth={2}
              />
            </>
          )}
        </svg>

          {/* Tooltip */}
          {activeData && (
            <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-[#404040] bg-background/80 px-4 py-2 text-xs text-foreground-secondary">
              <span className="text-foreground-tertiary uppercase tracking-[0.16em]">
                {activeData.label}
              </span>
              <span className="h-4 w-px bg-[#404040]" />
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

