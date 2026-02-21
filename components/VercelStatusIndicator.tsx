'use client';

import * as React from 'react';

const STATUS_URL = 'https://www.vercel-status.com/';

export function VercelStatusIndicator() {
  const [state, setState] = React.useState<
    'loading' | { ok: boolean; description?: string; indicator?: string } | 'error'
  >('loading');

  React.useEffect(() => {
    let cancelled = false;
    fetch('/api/vercel-status')
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && typeof data?.ok === 'boolean') {
          setState({
            ok: data.ok,
            description: data.description,
            indicator: data.indicator
          });
        } else {
          setState('error');
        }
      })
      .catch(() => {
        if (!cancelled) setState('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (state === 'loading') {
    return (
      <a
        href={STATUS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs sm:text-sm text-foreground-tertiary hover:text-primary transition-colors"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-tertiary" aria-hidden />
        Status…
      </a>
    );
  }

  if (state === 'error') {
    return (
      <a
        href={STATUS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs sm:text-sm text-foreground-tertiary hover:text-primary transition-colors"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-tertiary" aria-hidden />
        Status unavailable
      </a>
    );
  }

  const isOk = state.ok;
  const label = isOk ? 'All systems normal.' : 'Incidents reported.';
  const indicator = state.indicator ?? (isOk ? 'none' : 'critical');

  const dotClass =
    isOk || indicator === 'none'
      ? 'bg-primary'
      : indicator === 'minor'
        ? 'bg-orange-500'
        : 'bg-destructive';

  return (
    <a
      href={STATUS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs sm:text-sm text-foreground-secondary hover:text-primary transition-colors"
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`} aria-hidden />
      {label}
    </a>
  );
}
