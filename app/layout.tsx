import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { CurrencyProvider } from '@/contexts/CurrencyContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'Fractional CTO | Adrian Barkus',
    template: '%s | Adrian Barkus'
  },
  description:
    'Senior technical leadership for established businesses. Software Detox Sprints that cut SaaS costs, AI Process Sprints that eliminate manual work, and Fractional CTO engagements for businesses that need a tech strategy, not just IT support.',
  keywords: [
    'fractional CTO',
    'software cost reduction',
    'SaaS audit',
    'AI process automation',
    'technology strategy',
    'established business technology',
    'software detox',
    'custom software replacement',
    'business automation'
  ],
  authors: [{ name: 'Adrian Barkus' }],
  creator: 'Adrian Barkus',
  publisher: 'Adrian Barkus',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://adrianbarkus-website.vercel.app'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Fractional CTO | Adrian Barkus',
    description:
      'Senior tech leadership for established businesses. Cut software costs, automate manual processes, and get strategic technology decisions made — without a full-time CTO hire.',
    siteName: 'Adrian Barkus - Fractional CTO'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CTO | Adrian Barkus',
    description:
      'Senior tech leadership for established businesses. Cut software costs, automate manual processes, and get strategic technology decisions made — without a full-time CTO hire.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adrianbarkus-website.vercel.app';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Adrian Barkus - Fractional CTO',
    description:
      'Senior technical leadership for established businesses — Software Detox Sprints, AI Process Sprints, and Fractional CTO engagements to cut costs, automate manual work, and provide strategic technology direction.',
    url: siteUrl,
    serviceType: 'Fractional CTO Consulting',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      category: 'Professional Services',
      serviceType: [
        'Technical Strategy',
        'Software Architecture',
        'Engineering Leadership',
        'Technology Advisory'
      ]
    }
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Adrian Barkus',
    jobTitle: 'Fractional CTO',
    description: 'Senior technical leader providing Software Detox Sprints, AI Process Sprints, and Fractional CTO engagements to established businesses.',
    url: siteUrl
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-background text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CurrencyProvider>
            {children}
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

