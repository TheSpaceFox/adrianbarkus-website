'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export interface SocialProofProps {
  className?: string;
}

const testimonials = [
  { name: 'David Freke', handleOrRole: 'Solution Architect', quote: 'Superb knowledge of Salesforce Architecture—develops strategies all stakeholders understand.', avatarUrl: undefined as string | undefined, verified: false },
  { name: 'Andrew Fragias', handleOrRole: 'Principal Product Manager, Lumary', quote: 'Clear understanding of Salesforce CRM and architecture to implement and enhance business processes.', avatarUrl: undefined, verified: false },
  { name: 'Tony Fitzgibbon', handleOrRole: 'Head of Technology, Woolworths', quote: 'Exemplary platform knowledge with dynamic, thought-provoking approaches. Exactly what large enterprises need early in their Salesforce journey.', avatarUrl: undefined, verified: false },
  { name: 'Jason Keith', handleOrRole: 'Woolworths Head of Technology', quote: 'Highly professional architect—strong in technical and business engagement. Breaks down complexity, builds relationships.', avatarUrl: undefined, verified: false },
  { name: 'Peter Jeans', handleOrRole: 'Solution Architect', quote: 'In-depth architectural knowledge that bolstered the growing Salesforce practice. Key role developing architecture through the Salesforce guild.', avatarUrl: undefined, verified: false },
  { name: 'Sally Montgomery', handleOrRole: 'Product Manager, Woolworths', quote: 'Instrumental in setup and running the Salesforce CoE during growth stage. People person who built strong relationships.', avatarUrl: undefined, verified: false },
  { name: 'Anil Kumar', handleOrRole: 'CRM, AI, Digital Transformation', quote: 'Instrumental in setting up Salesforce COE at Woolworths. Easy to work with, keeps people informed, great sense of humour.', avatarUrl: undefined, verified: false },
  { name: 'Henri Fanda', handleOrRole: 'Senior Data Analyst (direct report)', quote: 'One of the best project managers—calm, assuring, keeps team on track. Goes extra distance to remove roadblocks.', avatarUrl: undefined, verified: false },
  { name: 'Andrew Zybenko', handleOrRole: 'Fire Safety / Business Operations', quote: 'Determined optimal roadmap for new Salesforce instance in complex corporate IT. Expertise imperative for viable, robust architecture.', avatarUrl: undefined, verified: false },
  { name: 'Priyanka Das', handleOrRole: 'Senior Business Analyst (direct report)', quote: 'Standout Enterprise Architect—vision and expertise invaluable for transforming software infrastructure. Meticulous diagrams gave crystal-clear roadmap.', avatarUrl: undefined, verified: false },
  { name: 'Kristoffer Ferrer', handleOrRole: 'Complex Project Management (direct report)', quote: 'Key to our transformation. Architecture diagrams gave clarity and roadmap. Strategic leadership brought executives together around common goal.', avatarUrl: undefined, verified: false },
  { name: 'Mike Dudarenok', handleOrRole: 'Chief Information and Digital Officer', quote: 'Tight-knit team delivered on tight timelines under pressure. Focused on getting right things done right—project shipped, users happy.', avatarUrl: undefined, verified: false },
  { name: 'Walter Nguyen', handleOrRole: 'Integration Solution Engineer (direct report)', quote: 'Incredible leader and mentor—brings positive energy and motivation. Delivered project successfully on time with very positive client feedback.', avatarUrl: undefined, verified: false },
  { name: 'Dinny Evans', handleOrRole: 'CFO, New Horizons (recent client)', quote: 'Exceptional professional—expertise in enterprise architecture, Salesforce, PMO leadership. Remarkable ability to simplify complex projects. Transformed our PMO.', avatarUrl: undefined, verified: true },
  { name: 'Yarlini Aravindan', handleOrRole: 'Managing business/applications (direct manager)', quote: 'Exceptional professional—excels at big picture architecture and right tech solutions. Charismatic leadership elevates entire team.', avatarUrl: undefined, verified: false },
  { name: 'Tony Harrison', handleOrRole: 'CPTO Digital Transformer (recent client)', quote: 'Calm, structured, highly methodical. Deep technical knowledge and stakeholder collaboration. Bridges gap between business needs and technology solutions.', avatarUrl: undefined, verified: true },
  { name: 'Nikesh Lalchandani', handleOrRole: 'Payments / Fintech Author', quote: 'Highly knowledgeable, exceptionally positive. Combines technical depth with collaborative approach—pleasure to work with.', avatarUrl: undefined, verified: false },
  { name: 'Rachel de los Santos', handleOrRole: 'Senior Test Analyst', quote: 'Truly valuable asset—immense energy, positive atmosphere. Vast Salesforce knowledge huge advantage to entire project.', avatarUrl: undefined, verified: false },
  { name: 'Anthony Soulsby', handleOrRole: 'Project Management, Major Events', quote: 'First class approach to enterprise and architectural component on Salesforce. Professional, adaptable—delivering detailed, insightful solutions.', avatarUrl: undefined, verified: false },
  { name: 'Robert Hatton', handleOrRole: 'Owner, Intellibase', quote: 'Architectural perspective brought exemplary business and technical capabilities. Flexible, pragmatic—builds trusted relationships. Great cultural fit.', avatarUrl: undefined, verified: false },
  { name: 'Graham Dix', handleOrRole: 'Distinguished Solution Engineer', quote: 'Creative thinking inspires technical and business people. Supports design review and system management processes effectively.', avatarUrl: undefined, verified: false }
];

// Duplicate for longer strip when dragging
const testimonialsRow = [...testimonials, ...testimonials];

function TestimonialCard({
  name,
  handleOrRole,
  quote,
  avatarUrl,
  verified
}: {
  name: string;
  handleOrRole?: string;
  quote: string;
  avatarUrl?: string;
  verified?: boolean;
}) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="flex-shrink-0 w-[320px] max-w-[85vw] rounded-xl border border-border bg-surface-elevated p-6 md:p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-3 mb-4">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={name}
            width={40}
            height={40}
            className="rounded-full shrink-0 object-cover"
          />
        ) : (
          <div
            className="h-10 w-10 shrink-0 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-foreground text-sm font-semibold"
            aria-hidden
          >
            {initial}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground truncate">{name}</span>
            {verified && (
              <Check className="h-4 w-4 shrink-0 text-foreground-tertiary" aria-label="Verified" />
            )}
          </div>
          {handleOrRole && (
            <p className="text-xs text-foreground-tertiary truncate">{handleOrRole}</p>
          )}
        </div>
      </div>
      <p className="text-base text-foreground-secondary leading-relaxed">{quote}</p>
    </div>
  );
}

export function SocialProof({ className }: SocialProofProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const isDraggingRef = useRef(false);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!scrollRef.current) return;
      isDraggingRef.current = true;
      setIsDragging(true);
      dragStartX.current = e.clientX;
      dragScrollLeft.current = scrollRef.current.scrollLeft;
      scrollRef.current.setPointerCapture(e.pointerId);
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current || !scrollRef.current) return;
      e.preventDefault();
      const deltaX = e.clientX - dragStartX.current;
      scrollRef.current.scrollLeft = dragScrollLeft.current - deltaX;
    },
    []
  );

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    scrollRef.current?.releasePointerCapture(e.pointerId);
  }, []);

  const handlePointerLeave = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  return (
    <section
      id="social-proof"
      className={`min-h-screen-dynamic snap-start flex flex-col justify-center bg-background relative overflow-hidden ${className ?? ''}`}
    >
      {/* Subtle theme-aware background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201, 169, 98, 0.04), transparent 70%)'
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-8 md:px-12 py-20 md:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16 md:space-y-24"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              Loved by leaders
            </h2>
            <p className="text-base md:text-lg text-foreground-secondary max-w-2xl mx-auto">
              Hear from enterprise architects, CTOs, CFOs, and product leaders who trust Adrian to deliver.
            </p>
          </div>

          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden flex gap-6 md:gap-8 pb-4 -mx-8 md:-mx-12 px-8 md:px-12 scrollbar-hide select-none cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
            onPointerCancel={handlePointerUp}
            tabIndex={0}
            role="region"
            aria-label="Testimonials carousel"
          >
            {testimonialsRow.map((t, index) => (
              <TestimonialCard
                key={`${t.name}-${index}`}
                name={t.name}
                handleOrRole={t.handleOrRole}
                quote={t.quote}
                avatarUrl={t.avatarUrl}
                verified={t.verified}
              />
            ))}
          </div>

          <p className="text-center">
            <a
              href="#social-proof"
              className="text-sm font-medium text-foreground-tertiary hover:text-foreground transition-colors"
            >
              Read more from clients
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
