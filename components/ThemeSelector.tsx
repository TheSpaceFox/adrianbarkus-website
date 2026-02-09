'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

export function ThemeSelector() {
  const pathname = usePathname();

  const themes = [
    {
      name: 'Tech Electric',
      path: '/tech-electric',
      description: 'Professional & Modern - Electric Blue',
      color: '#1E90FF'
    },
    {
      name: 'Nordic Consulting',
      path: '/nordic-consulting',
      description: 'Sophisticated & Clean - Emerald Green',
      color: '#01c16a'
    },
    {
      name: 'Monochromatic Precision',
      path: '/monochromatic-precision',
      description: 'Minimalist & Timeless - Pure Contrast',
      color: '#FFFFFF'
    },
    {
      name: 'Original (Current)',
      path: '/',
      description: 'Current default theme',
      color: '#3b82f6'
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="group relative">
        <Button
          size="sm"
          className="rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-slate-200 hover:bg-slate-800"
        >
          <Palette className="h-4 w-4 mr-2" />
          View Themes
        </Button>
        <div className="absolute bottom-full right-0 mb-2 w-64 rounded-lg border border-slate-700 bg-slate-900/95 backdrop-blur-sm p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400 px-2">
            Color Scheme Options
          </p>
          {themes.map((theme) => {
            const isActive = pathname === theme.path;
            return (
              <Link
                key={theme.path}
                href={theme.path}
                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full border border-slate-600"
                    style={{ backgroundColor: theme.color }}
                  />
                  <div className="flex-1">
                    <p className="font-medium">{theme.name}</p>
                    <p className="text-xs text-slate-400">{theme.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
