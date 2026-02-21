'use client';

import { motion } from 'framer-motion';

export interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
  isError?: boolean;
}

export function ChatMessage({ role, content, isStreaming, isError }: ChatMessageProps) {
  if (role === 'user') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-end"
      >
        <div className="bg-surface rounded-2xl rounded-tr-sm px-4 py-3 text-foreground text-sm max-w-[75%]">
          {content}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex gap-3 max-w-[80%]"
    >
      <div
        className="shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-semibold flex items-center justify-center"
        aria-hidden
      >
        AB
      </div>
      <div
        className={`text-sm leading-relaxed ${
          isError ? 'text-foreground-tertiary' : 'text-foreground-secondary'
        }`}
      >
        {content}
        {isStreaming && (
          <span className="inline-flex gap-0.5 ml-0.5 text-primary">
            <span className="animate-bounce" style={{ animationDelay: '0ms' }}>
              ●
            </span>
            <span className="animate-bounce" style={{ animationDelay: '150ms' }}>
              ●
            </span>
            <span className="animate-bounce" style={{ animationDelay: '300ms' }}>
              ●
            </span>
          </span>
        )}
      </div>
    </motion.div>
  );
}
