'use client';

import * as React from 'react';

const STATUS_URL = 'https://www.vercel-status.com/';

export function VercelStatusIndicator() {
  const [state, setState] = React.useState<
    'loading' | { ok: boolean; description?: string } | 'error'
  >('loading');

  React.useEffect(() => {
    let cancelled = false;
    fetch('/api/vercel-status')
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && typeof data?.ok === 'boolean') {
          setState({ ok: data.ok, description: data.description });
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

  return (
    <a
      href={STATUS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        isOk
          ? 'inline-flex items-center gap-2 text-xs sm:text-sm text-primary hover:underline transition-colors'
          : 'inline-flex items-center gap-2 text-xs sm:text-sm text-destructive hover:underline transition-colors'
      }
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
          isOk ? 'bg-primary' : 'bg-destructive'
        }`}
        aria-hidden
      />
      {label}
    </a>
  );
}
