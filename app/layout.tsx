import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'Fractional CTO | Adrian Barkus',
    template: '%s | Adrian Barkus'
  },
  description:
    'Strategic Fractional CTO consulting for founders who need senior technical leadership without the full-time overhead. Advisory, architecture, and execution support for high-velocity startups.',
  keywords: [
    'fractional CTO',
    'CTO consulting',
    'technical leadership',
    'startup CTO',
    'technology advisor',
    'software architecture',
    'technical strategy',
    'engineering leadership'
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
      'Strategic Fractional CTO consulting for founders who need senior technical leadership without the full-time overhead.',
    siteName: 'Adrian Barkus - Fractional CTO'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CTO | Adrian Barkus',
    description:
      'Strategic Fractional CTO consulting for founders who need senior technical leadership without the full-time overhead.'
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
      'Strategic Fractional CTO consulting for founders who need senior technical leadership without the full-time overhead.',
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
    description: 'Senior technical leader providing fractional CTO services to high-velocity startups.',
    url: siteUrl
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
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
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

