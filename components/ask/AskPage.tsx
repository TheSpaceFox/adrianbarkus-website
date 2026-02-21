'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { InputBar } from '@/components/ask/InputBar';
import { StarterChips } from '@/components/ask/StarterChips';
import { ChatMessage } from '@/components/ask/ChatMessage';
import { ChatAura, type OrbState } from '@/components/ask/ChatAura';

const LOGO_URL =
  'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/AdrianBarkus%20LOGO.png';

export type Message = { role: 'user' | 'assistant'; content: string; isError?: boolean };

export function AskPage() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [orbState, setOrbState] = React.useState<OrbState>('listening');

  const hasStarted = messages.length > 0;

  const sendMessage = React.useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMessage: Message = { role: 'user', content: trimmed };
      const messagesToSend = [...messages, userMessage];
      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);
      setOrbState('thinking');

      const assistantMessage: Message = { role: 'assistant', content: '' };
      setMessages((prev) => [...prev, assistantMessage]);

      try {
        const res = await fetch('/api/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: messagesToSend.map((m) => ({
              role: m.role,
              content: m.content
            }))
          })
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || res.statusText);
        }

        const reader = res.body?.getReader();
        if (!reader) throw new Error('No response body');

        const decoder = new TextDecoder();
        let buffer = '';
        let fullText = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const parts = buffer.split('\n\n');
          buffer = parts.pop() ?? '';
          for (const part of parts) {
            if (part.startsWith('data: ')) {
              const raw = part.slice(6);
              try {
                const data = JSON.parse(raw);
                if (data.type === 'text' && data.text) {
                  if (fullText === '') setOrbState('speaking');
                  fullText += data.text;
                  setMessages((prev) => {
                    const next = [...prev];
                    const last = next[next.length - 1];
                    if (last?.role === 'assistant') {
                      next[next.length - 1] = { ...last, content: fullText };
                    }
                    return next;
                  });
                } else if (data.type === 'done') {
                  setOrbState('listening');
                } else if (data.type === 'error') {
                  throw new Error(data.error || 'Stream error');
                }
              } catch (e) {
                if (e instanceof SyntaxError) continue;
                throw e;
              }
            }
          }
        }
      } catch (err) {
        setOrbState('listening');
        const msg = err instanceof Error ? err.message : 'Something went wrong. Refresh and try again.';
        setMessages((prev) => {
          const next = [...prev];
          const last = next[next.length - 1];
          if (last?.role === 'assistant') {
            next[next.length - 1] = { ...last, content: msg, isError: true };
          }
          return next;
        });
      } finally {
        setIsLoading(false);
        setOrbState('listening');
      }
    },
    [messages, isLoading]
  );

  const handleChipSelect = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <header className="h-14 flex-shrink-0 flex items-center justify-between px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Image
            src={LOGO_URL}
            alt=""
            width={28}
            height={28}
            className="opacity-70"
            unoptimized
          />
          <span className="text-sm font-semibold text-foreground">Adrian Barkus</span>
        </div>
        <Link
          href="/"
          className="text-foreground-tertiary text-sm hover:text-foreground transition-colors flex items-center gap-1"
        >
          <span className="hidden sm:inline">← Back to site</span>
          <span className="sm:hidden" aria-hidden>←</span>
        </Link>
      </header>

      {/* Main: orb + (empty state copy + chips | chat thread) */}
      <main className="flex-1 flex flex-col min-h-0">
        <motion.div
          layout
          className={
            hasStarted
              ? 'flex justify-center pt-6'
              : 'flex-1 flex flex-col items-center justify-center max-w-xl text-center px-4'
          }
        >
          <ChatAura state={orbState} size={hasStarted ? 'active' : 'empty'} />
          {!hasStarted && (
            <>
              <div className="h-4" />
              <p className="text-foreground text-xl font-semibold tracking-tight">
                Adrian Barkus
              </p>
              <div className="h-1" />
              <p className="text-foreground-tertiary text-xs uppercase tracking-[0.12em]">
                Fractional CTO · 19 years enterprise architecture
              </p>
              <div className="h-8" />
              <StarterChips onSelect={handleChipSelect} />
            </>
          )}
        </motion.div>
        {hasStarted && (
          <div className="flex-1 overflow-y-auto min-h-0 px-4 py-6">
            <div className="max-w-2xl mx-auto flex flex-col gap-6">
              {messages.map((msg, i) => (
                <ChatMessage
                  key={i}
                  role={msg.role}
                  content={msg.content}
                  isStreaming={
                    msg.role === 'assistant' &&
                    !msg.isError &&
                    isLoading &&
                    i === messages.length - 1
                  }
                  isError={msg.isError}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Input bar */}
      <InputBar
        value={input}
        onChange={setInput}
        onSubmit={() => sendMessage(input)}
        disabled={isLoading}
      />
    </div>
  );
}
