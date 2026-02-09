'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Analytics component for tracking page views
 * 
 * To enable:
 * 1. Add your analytics ID to environment variables
 * 2. Uncomment the relevant analytics provider below
 * 3. Add the component to your layout
 */

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined') {
      // Example: Vercel Analytics (automatically enabled if installed)
      // No code needed - Vercel Analytics works automatically

      // Example: Google Analytics 4
      // Uncomment and configure:
      /*
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: pathname
        });
      }
      */

      // Example: Plausible Analytics
      // Uncomment and configure:
      /*
      if (window.plausible) {
        window.plausible('pageview');
      }
      */
    }
  }, [pathname]);

  return null;
}

/**
 * Google Analytics 4 Script Component
 * Add this to your layout.tsx <head> section
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  );
}
