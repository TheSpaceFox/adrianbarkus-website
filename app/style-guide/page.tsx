import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Style Guide',
  description:
    'Design system and project reference for Adrian Barkus — Monochromatic Precision with Leica Brass. Colors, typography, spacing, and components.'
};

function Section({
  id,
  label,
  title,
  children
}: {
  id: string;
  label?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      {label && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary mb-2">
          {label}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl mb-6">
        {title}
      </h2>
      <div className="space-y-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function ColorSwatch({ name, value, className }: { name: string; value: string; className: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-10 w-10 rounded-lg border border-border shrink-0 ${className}`} />
      <div>
        <p className="font-medium text-foreground">{name}</p>
        <p className="text-sm text-foreground-tertiary font-mono">{value}</p>
      </div>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="rounded-xl border border-border bg-surface-elevated p-4 overflow-x-auto text-sm font-mono text-foreground-secondary">
      <code>{children}</code>
    </pre>
  );
}

export default function StyleGuidePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Hero */}
          <header className="mb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Project reference
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Style Guide
            </h1>
            <p className="text-xl text-foreground-secondary max-w-2xl">
              Monochromatic Precision with Leica Brass. Design philosophy, colors, typography, and
              components for this site.
            </p>
          </header>

          <div className="space-y-20">
            <Section
              id="philosophy"
              label="Design"
              title="Design Philosophy"
            >
              <p>
                <strong className="text-foreground">Monochromatic base</strong> — Grayscale
                foundation with a single accent. <strong className="text-foreground">Leica Brass</strong> (
                <span className="text-primary">#C9A962</span>) is used sparingly for CTAs, hero
                elements, and key metrics. Soft dark default (#2D2D2D), readable contrast (soft white
                #ECECEC), generous white space, and bold typography. No blues, greens, or pure
                black/white in dark mode.
              </p>
            </Section>

            <Section id="colors" label="Palette" title="Color Palette">
              <p className="text-foreground">
                Dark mode (default) and light mode are defined in <code className="rounded bg-surface-elevated px-1.5 py-0.5 text-sm font-mono">app/globals.css</code>.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <ColorSwatch name="Background" value="#2D2D2D" className="bg-[#2D2D2D]" />
                <ColorSwatch name="Surface" value="#373737" className="bg-[#373737]" />
                <ColorSwatch name="Primary (Brass)" value="#C9A962" className="bg-primary" />
                <ColorSwatch name="Foreground" value="#ECECEC" className="bg-[#ECECEC]" />
                <ColorSwatch name="Secondary" value="#A0A0A0" className="bg-[#A0A0A0]" />
                <ColorSwatch name="Tertiary" value="#6B6B6B" className="bg-[#6B6B6B]" />
              </div>
            </Section>

            <Section id="typography" label="Type" title="Typography">
              <p>
                <strong className="text-foreground">Inter</strong> for body and headings,{' '}
                <strong className="text-foreground">JetBrains Mono</strong> for code. Section
                headlines use <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">text-3xl sm:text-4xl md:text-5xl lg:text-6xl</code>, with{' '}
                <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">line-clamp-2</code> for
                two-line max. Body: <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">text-base md:text-lg</code>,{' '}
                <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">leading-relaxed</code>.
                Section labels: <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary</code>.
              </p>
            </Section>

            <Section id="spacing" label="Layout" title="Spacing & Layout">
              <p>
                Section padding: <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">py-20 md:py-32</code>.
                Container: <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">max-w-6xl</code> (or{' '}
                <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">max-w-4xl</code> for hero
                text). Card padding: <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">p-10 md:p-12</code>, gaps{' '}
                <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">gap-12 md:gap-16</code>.
                Generous space between sections and cards.
              </p>
            </Section>

            <Section id="components" label="UI" title="Component Styles">
              <p className="text-foreground font-medium">Primary CTA (Brass)</p>
              <CodeBlock>{`className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover"`}</CodeBlock>
              <p className="text-foreground font-medium pt-2">Standard card</p>
              <CodeBlock>{`className="rounded-xl border border-border bg-surface-elevated p-4"`}</CodeBlock>
              <p className="text-foreground font-medium pt-2">Section label</p>
              <CodeBlock>{`className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary"`}</CodeBlock>
            </Section>

            <Section id="brass" label="Accent" title="Brass Usage">
              <p>
                Use brass for: primary CTAs, hero accent text, hero badge, key metrics, hover/focus
                on primary actions. Do not use for: body text, secondary buttons, borders (except
                brass buttons), backgrounds, or multiple elements in one view.
              </p>
            </Section>

            <Section id="accessibility" label="A11y" title="Accessibility">
              <p>
                Text/background contrast minimum 4.5:1 (WCAG AA). All interactive elements have
                visible focus: <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2</code>.
                Semantic HTML (heading hierarchy, section/article/nav), ARIA where needed, keyboard
                navigation. Body text at least 16px desktop, line-height 1.6.
              </p>
            </Section>

            <Section id="quick-ref" label="Reference" title="Quick reference">
              <ul className="list-disc list-inside space-y-2 text-foreground-secondary">
                <li><code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">bg-background</code>, <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">bg-surface</code>, <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">bg-surface-elevated</code></li>
                <li><code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">text-foreground</code>, <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">text-foreground-secondary</code>, <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">text-foreground-tertiary</code></li>
                <li><code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">text-primary</code>, <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">bg-primary</code> (use sparingly)</li>
                <li><code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">border-border</code></li>
              </ul>
            </Section>

            {/* Project reference link */}
            <section className="pt-8 border-t border-border">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary mb-3">
                Full project reference
              </p>
              <p className="text-foreground-secondary mb-4">
                The complete style guide (messaging, animation, checklist, string formatting) is
                maintained in the repo as <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm">STYLE_GUIDE.md</code>.
              </p>
              <Link
                href="/"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Back to home
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
