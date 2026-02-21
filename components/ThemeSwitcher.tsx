'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
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
        <span
          className="inline-flex rounded-md border border-border bg-surface-elevated p-0.5"
          aria-hidden
        >
          <span className="h-6 w-6" />
          <span className="h-6 w-6" />
          <span className="h-6 w-6" />
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
    const options: Array<{
      value: 'system' | 'light' | 'dark';
      label: string;
      Icon: React.ComponentType<{ className?: string; size?: number }>;
    }> = [
      { value: 'dark', label: 'Dark', Icon: Moon },
      { value: 'light', label: 'Light', Icon: Sun },
      { value: 'system', label: 'System', Icon: Monitor }
    ];
    return (
      <span
        className="inline-flex rounded-md border border-border bg-surface-elevated p-0.5 text-foreground-secondary"
        role="group"
        aria-label="Display theme"
      >
        {options.map((opt) => {
          const isSelected = theme === opt.value;
          const Icon = opt.Icon;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setTheme(opt.value)}
              className={`inline-flex h-7 w-7 items-center justify-center rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface ${
                isSelected
                  ? 'bg-background text-foreground shadow-sm'
                  : 'hover:bg-background/50'
              }`}
              aria-pressed={isSelected}
              aria-label={`Set theme to ${opt.label}`}
              title={opt.label}
            >
              <Icon className="h-4 w-4" />
            </button>
          );
        })}
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
