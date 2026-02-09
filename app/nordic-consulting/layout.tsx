import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../themes/nordic-consulting.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Nordic Consulting Theme | Fractional CTO | Adrian Barkus',
  description:
    'Sophisticated & Clean color scheme - Emerald Green theme for Fractional CTO consulting.'
};

export default function NordicConsultingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
