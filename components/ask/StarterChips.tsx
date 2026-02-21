'use client';

import { motion } from 'framer-motion';

const CHIPS = [
  'Have you replaced Salesforce before?',
  "What's a typical project cost?",
  'What kind of companies do you work with?',
  "What's your background?"
];

export interface StarterChipsProps {
  onSelect: (prompt: string) => void;
}

export function StarterChips({ onSelect }: StarterChipsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
      {CHIPS.map((label, i) => (
        <motion.button
          key={label}
          type="button"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
          onClick={() => onSelect(label)}
          className="bg-surface border border-border rounded-2xl px-5 py-3 text-sm text-foreground-secondary hover:border-primary/40 hover:text-foreground cursor-pointer transition-all text-left focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
}
