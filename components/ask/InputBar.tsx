'use client';

import * as React from 'react';
import { ArrowUp } from 'lucide-react';

export interface InputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
  placeholder?: string;
}

export function InputBar({
  value,
  onChange,
  onSubmit,
  disabled = false,
  placeholder = 'Ask me anything about my work...'
}: InputBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled) onSubmit();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 border-t border-border/40 bg-background">
      <div className="flex items-end gap-2 w-full">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className="flex-1 min-h-[44px] max-h-32 resize-none bg-surface border border-border rounded-2xl px-5 py-3.5 text-sm text-foreground placeholder:text-foreground-tertiary focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-60"
          aria-label="Ask a question"
        />
        <button
          type="button"
          onClick={() => value.trim() && !disabled && onSubmit()}
          disabled={disabled || !value.trim()}
          className="shrink-0 bg-primary rounded-xl p-2.5 hover:bg-primary-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Send"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
