import type { Metadata } from 'next';
import { AskPage } from '@/components/ask/AskPage';

export const metadata: Metadata = {
  title: 'Ask Adrian',
  description:
    'Chat with an AI trained on Adrian Barkus — Fractional CTO, 19 years enterprise architecture. Ask about his work, results, and approach.'
};

export default function AskRoute() {
  return <AskPage />;
}
