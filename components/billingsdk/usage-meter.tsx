'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type UsageMeterItem = {
  name: string;
  usage: number;
  limit: number;
};

export type UsageMeterProps = {
  usage: number | UsageMeterItem[];
  limit?: number;
  title?: string;
  description?: string;
  variant?: 'linear' | 'circle';
  size?: 'sm' | 'md' | 'lg';
  progressColor?: 'default' | 'usage';
  className?: string;
};

const sizeClasses = {
  sm: 'w-24 h-24',
  md: 'w-32 h-32',
  lg: 'w-40 h-40'
};

const strokeWidth = {
  sm: 6,
  md: 8,
  lg: 10
};

function getStatus(used: number, limit: number): string | null {
  const left = limit - used;
  const pctLeft = (left / limit) * 100;
  if (pctLeft <= 10) return 'Critical';
  if (pctLeft <= 25) return 'High';
  return null;
}

function UsageMeterCircle({
  items,
  title,
  description,
  size = 'md',
  progressColor = 'default',
  className
}: {
  items: UsageMeterItem[];
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  progressColor?: 'default' | 'usage';
  className?: string;
}) {
  return (
    <div className={cn('flex w-full flex-col gap-4', className)}>
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <p className="text-sm font-semibold text-foreground">{title}</p>
          )}
          {description && (
            <p className="text-xs text-foreground-secondary">{description}</p>
          )}
        </div>
      )}
      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          const percent = item.limit > 0 ? (item.usage / item.limit) * 100 : 0;
          const left = item.limit - item.usage;
          const status = getStatus(item.usage, item.limit);
          const r = 45;
          const circumference = 2 * Math.PI * r;
          const strokeDashoffset = circumference - (percent / 100) * circumference;

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className={cn('relative shrink-0', sizeClasses[size])}>
                <svg
                  className="h-full w-full -rotate-90"
                  viewBox="0 0 100 100"
                  aria-hidden
                >
                  <circle
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    className="stroke-border"
                    strokeWidth={strokeWidth[size]}
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    className="stroke-primary transition-all duration-700 ease-out"
                    strokeWidth={strokeWidth[size]}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-foreground sm:text-xl">
                    {Math.round(percent)}%
                  </span>
                  <span className="text-xs text-foreground-tertiary">used</span>
                </div>
              </div>
              <div className="min-w-0 flex-1 space-y-1 text-center sm:text-left">
                <p className="text-sm font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-foreground-secondary">
                  {left} / {item.limit} left
                </p>
                {status && (
                  <span
                    className={cn(
                      'inline-flex rounded-full border px-2 py-0.5 text-xs font-medium',
                      status === 'Critical'
                        ? 'border-primary/50 bg-primary/10 text-primary'
                        : 'border-border bg-surface-elevated text-foreground-secondary'
                    )}
                  >
                    {status}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function UsageMeter({
  usage,
  limit = 100,
  title,
  description,
  variant = 'linear',
  size = 'md',
  progressColor = 'default',
  className
}: UsageMeterProps) {
  const items: UsageMeterItem[] = Array.isArray(usage)
    ? usage
    : [{ name: 'Usage', usage, limit }];

  if (variant === 'circle') {
    return (
      <UsageMeterCircle
        items={items}
        title={title}
        description={description}
        size={size}
        progressColor={progressColor}
        className={className}
      />
    );
  }

  return (
    <div className={cn('flex w-full flex-col gap-4', className)}>
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <p className="text-sm font-semibold text-foreground">{title}</p>
          )}
          {description && (
            <p className="text-xs text-foreground-secondary">{description}</p>
          )}
        </div>
      )}
      {items.map((item, index) => {
        const percent = item.limit > 0 ? (item.usage / item.limit) * 100 : 0;
        const left = item.limit - item.usage;
        return (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-xs text-foreground-secondary">
              <span>{item.name}</span>
              <span>
                {left} / {item.limit} left
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-surface-elevated">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
