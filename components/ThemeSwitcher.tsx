'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export interface ThemeSwitcherProps {
  variant?: 'floating' | 'footer';
}

export function ThemeSwitcher({ variant = 'floating' }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    if (variant === 'footer') {
      return (
        <span className="text-xs sm:text-sm text-foreground-tertiary">
          System · Light · Dark
        </span>
      );
    }
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50 h-9 w-9 rounded-full border-border bg-background/80 backdrop-blur-sm"
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  if (variant === 'footer') {
    const options: Array<{ value: 'system' | 'light' | 'dark'; label: string }> = [
      { value: 'system', label: 'System' },
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' }
    ];
    return (
      <span className="inline-flex flex-wrap items-center gap-1 text-xs sm:text-sm text-foreground-secondary">
        {options.map((opt, i) => (
          <React.Fragment key={opt.value}>
            {i > 0 && <span className="text-foreground-tertiary">·</span>}
            <button
              type="button"
              onClick={() => setTheme(opt.value)}
              className={
                theme === opt.value
                  ? 'text-primary font-medium hover:underline'
                  : 'hover:text-primary transition-colors'
              }
              aria-pressed={theme === opt.value}
              aria-label={`Set theme to ${opt.label}`}
            >
              {opt.label}
            </button>
          </React.Fragment>
        ))}
      </span>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 z-50 h-9 w-9 rounded-full border-border bg-background/80 backdrop-blur-sm hover:bg-muted"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border-border">
        <DropdownMenuItem onClick={() => setTheme('light')} className="cursor-pointer">
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')} className="cursor-pointer">
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')} className="cursor-pointer">
          <span className="mr-2 h-4 w-4 text-center">💻</span>
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
