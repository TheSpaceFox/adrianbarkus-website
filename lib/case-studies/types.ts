export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  serviceType: 'Software Detox Sprint' | 'AI Process Sprint' | 'Fractional CTO';
  duration: string;
  heroImage: string;
  additionalImages?: string[];
  problem: string;
  solution: string;
  outcome: string;
  results: ResultMetric[];
  techStack?: string[];
  testimonial?: Testimonial;
  testimonialSecondary?: Testimonial;
  publishedAt: string;
  metaDescription: string;
}

export interface ResultMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}
