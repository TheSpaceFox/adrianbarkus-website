'use client';

import { motion } from 'framer-motion';

/** Maps to chat: listening (idle/complete/error), thinking (submitted), speaking (streaming). */
export type OrbState = 'listening' | 'thinking' | 'speaking';

export interface ChatAuraProps {
  state: OrbState;
  /** Empty state: 280px desktop / 220px mobile. Active: 160px. */
  size: 'empty' | 'active';
  className?: string;
}

/**
 * Animated orb (AgentAudioVisualizerAura-style). Brand colour #C9A962 via bg-primary.
 * Listening: gentle pulse. Thinking: stronger pulse. Speaking: active pulse.
 */
export function ChatAura({ state, size, className = '' }: ChatAuraProps) {
  const isThinking = state === 'thinking';
  const isSpeaking = state === 'speaking';
  const intensity = isThinking ? 'high' : isSpeaking ? 'medium' : 'low';

  return (
    <motion.div
      layout
      className={`relative flex shrink-0 items-center justify-center ${
        size === 'empty' ? 'w-[220px] h-[220px] md:w-[280px] md:h-[280px]' : 'w-[160px] h-[160px]'
      } ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full overflow-hidden">
        {/* Outer glow - brand primary */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary"
          style={{ filter: 'blur(50px)', opacity: 0.35 }}
          animate={{
            scale: intensity === 'high' ? [1, 1.12, 1] : intensity === 'medium' ? [1, 1.08, 1] : [1, 1.05, 1],
            opacity: intensity === 'high' ? [0.35, 0.5, 0.35] : intensity === 'medium' ? [0.35, 0.45, 0.35] : [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: intensity === 'high' ? 1.2 : intensity === 'medium' ? 1.4 : 2.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute w-[80%] h-[80%] left-[10%] top-[10%] rounded-full bg-primary"
          style={{ filter: 'blur(28px)', opacity: 0.4 }}
          animate={{
            scale: intensity === 'high' ? [1, 1.08, 1] : intensity === 'medium' ? [1, 1.05, 1] : [1, 1.03, 1],
            opacity: intensity === 'high' ? [0.4, 0.6, 0.4] : intensity === 'medium' ? [0.4, 0.5, 0.4] : [0.35, 0.45, 0.35]
          }}
          transition={{
            duration: intensity === 'high' ? 1.5 : intensity === 'medium' ? 1.6 : 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute w-[55%] h-[55%] left-[22.5%] top-[22.5%] rounded-full bg-primary"
          style={{ filter: 'blur(22px)', opacity: 0.5 }}
          animate={{
            scale: intensity === 'high' ? [1, 1.1, 1] : intensity === 'medium' ? [1, 1.06, 1] : [1, 1.04, 1],
            opacity: intensity === 'high' ? [0.5, 0.75, 0.5] : intensity === 'medium' ? [0.5, 0.65, 0.5] : [0.45, 0.55, 0.45]
          }}
          transition={{
            duration: intensity === 'high' ? 1 : intensity === 'medium' ? 1.2 : 2.8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
    </motion.div>
  );
}
