import type { CaseStudy } from './types';

const PLACEHOLDER_HERO = 'https://placehold.co/1200x600/373737/ECECEC?text=Case+Study';

export const caseStudies: CaseStudy[] = [
  // 1. Salesforce £420k Replacement
  {
    slug: 'salesforce-replacement-crm-420k',
    title: "£420,000. That's What Salesforce Was Going to Cost. We Replaced It in 6 Weeks.",
    subtitle:
      "340 licences. 90 active users. 14 custom objects nobody used. A custom CRM built for how the business actually works — delivered in 6 weeks for £38k total.",
    industry: 'Professional Services',
    serviceType: 'Software Detox Sprint',
    duration: '6 weeks',
    publishedAt: '2025-06-01',
    metaDescription:
      'Salesforce replacement: £420k 3-year spend eliminated. Custom CRM built in 6 weeks for £38k. Year 1 saving £102k. 100% team adoption within 2 weeks.',
    heroImage: PLACEHOLDER_HERO,
    problem: `The client was running Salesforce with 340 licences — 90 of which were active users. The rest were ghost accounts, auto-renewed year after year. 14 custom objects sat unused, built by a consultant three years earlier for requirements that had since changed. Three external consultants were on retainer just to manage the implementation. The annual cost was tracking toward £420,000 over three years — for a CRM the sales team had worked around rather than with.`,
    solution: `Full audit of the Salesforce estate: active users, workflows, integrations, and data dependencies. Mapped exactly what the business needed versus what it had been paying for. Built a custom CRM on Next.js, TypeScript, and Supabase — designed around their real sales process, not Salesforce's assumptions about it. Lead pipeline management, email integration, custom reporting dashboard, mobile-responsive interface. Migrated 15,000 contacts and four years of deal history. Delivered in 6 weeks. Total build cost: £38,000.`,
    outcome: `Year 1 saving: £102,000. Three-year cumulative saving: £420,000. Consultant retainers eliminated on day one. Sales team adoption hit 100% within two weeks — compared to 60% Salesforce usage before. Lead response time improved by 40%. The business owns the system outright with no vendor to negotiate with at renewal.`,
    results: [
      { label: '3-Year Saving', value: '£420,000', highlight: true },
      { label: 'Year 1 Saving', value: '£102,000', highlight: true },
      { label: 'Build Cost', value: '£38,000' },
      { label: 'Delivery', value: '6 Weeks' },
      { label: 'Team Adoption', value: '100%' },
      { label: 'Contacts Migrated', value: '15,000' },
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Vercel'],
  },
  // 2. 70% Cost Reduction £5M Budget
  {
    slug: '70-percent-cost-reduction-5m-budget',
    title: '70% Cost Reduction on a £5M Technology Budget. 40 Days.',
    subtitle:
      "Four CRMs. Two marketing platforms. £800k in consultants managing tools they shouldn't own. Rationalised in 40 days — £3.5M annualised saving.",
    industry: 'Enterprise / Mid-Market',
    serviceType: 'Fractional CTO',
    duration: '40 days',
    publishedAt: '2025-01-01',
    metaDescription:
      '70% tech cost reduction on a £5M annual budget in 40 days. £1.2M overlapping SaaS, £800k external consultants, £600k integration workarounds — identified and eliminated. £3.5M annualised saving.',
    heroImage: PLACEHOLDER_HERO,
    problem: `A mid-market business spending £5,000,000 a year on technology. Margins under pressure. The board was asking why. When the full audit began, the answer became clear: £1,200,000 in overlapping SaaS platforms — four CRMs running simultaneously, two marketing platforms doing the same job. £800,000 in external consultants retained to manage platforms the business shouldn't have owned. £600,000 in integration costs solving problems the platforms were supposed to solve natively but didn't. Nobody had reviewed the estate with commercial rigour since the tools were originally purchased.`,
    solution: `Full technology estate audit — days 1 through 5. No assumptions, no vendor briefings. Every subscription mapped, every integration documented, every consultant contract examined. Produced a rationalisation plan with immediate actions and a phased execution roadmap. Led phase one execution directly — decommissioning overlapping platforms, terminating consultant contracts, consolidating the integration layer. Engaged as Fractional CTO to provide the senior technical authority the restructure required.`,
    outcome: `£3,500,000 annualised saving. 70% reduction in total technology spend. Delivered in 40 days. The clean technology estate subsequently supported a successful acquisition process — the acquirer cited technical clarity as a key factor in deal confidence, enabling a £55M transaction.`,
    results: [
      { label: 'Cost Reduction', value: '70%', highlight: true },
      { label: 'Annual Saving', value: '£3.5M', highlight: true },
      { label: 'Engagement', value: '40 Days' },
      { label: 'Budget Audited', value: '£5M' },
      { label: 'Acquisition Enabled', value: '£55M', highlight: true },
    ],
  },
  // 3. Moneyspot Two Manual Steps
  {
    slug: 'moneyspot-automated-microloan-system',
    title: 'A Fully Automated Loan Business. Two Manual Steps Left.',
    subtitle:
      'End-to-end automated microloan platform — application, credit check, approval, and funds transfer — with only two touchpoints left for staff.',
    industry: 'FinTech',
    serviceType: 'AI Process Sprint',
    duration: '6 months',
    publishedAt: '2018-01-01',
    metaDescription:
      'Moneyspot: fully automated online microloan business. Application through to funds transfer with only 2 manual steps remaining. Architecture, Equifax integration, digital signing, full delivery.',
    heroImage: PLACEHOLDER_HERO,
    problem: `Moneyspot needed a fully online microloan business where the entire process from application to approval to funds transfer ran without a processing team handling each step. The commercial logic was clear: microloans require low operational cost per transaction to be viable. Every manual step was a cost multiplier and a speed bottleneck.`,
    solution: `Led architecture design and technical build. Integrated Equifax credit checking for real-time decisioning. Salesforce Commerce Portal for the customer-facing journey. CongaSign for automated digital agreement execution. Heroku as the integration platform. Designed the approval logic so that credit-approved applications moved through to funds transfer preparation without manual intervention — the system made the decision, prepared the transfer, and flagged only edge cases for human review.`,
    outcome: `A fully automated loan business with only two steps handled by staff: customer support queries and a single approval button for releasing funds to auto-approved applications. 12 users running a loan operation that could scale without adding headcount.`,
    results: [
      { label: 'Manual Steps Remaining', value: '2', highlight: true },
      { label: 'Process Automated', value: 'Application → Funds', highlight: true },
      { label: 'Staff Required', value: '12 (Fully Scalable)' },
      { label: 'Decisions Automated', value: 'Credit Approval Logic' },
    ],
    techStack: ['Salesforce Commerce Portal', 'Equifax credit system', 'CongaSign', 'Heroku'],
  },
  // 4. Dynamics 365 9:1 ROI
  {
    slug: 'dynamics-365-replacement-operations-platform',
    title: '£94k a Year. Three Staff to Run It. Replaced in 6 Weeks.',
    subtitle:
      'A Dynamics 365 setup that required three internal staff to manage was replaced with a custom operations platform — £87k annual saving, 9:1 ROI in year one.',
    industry: 'Professional Services / Operations',
    serviceType: 'Software Detox Sprint',
    duration: '6 weeks',
    publishedAt: '2025-03-01',
    metaDescription:
      'Dynamics 365 replacement: £94k annual cost eliminated. Custom workflow, job management and client portal built in 6 weeks. £87k year 1 saving. 9:1 ROI. 12 hours manual reporting eliminated weekly.',
    heroImage: PLACEHOLDER_HERO,
    problem: `The client was paying £94,000 a year for a Dynamics 365 setup that required three internal staff members to manage. Configured for a version of the business that no longer existed. Reporting required 12 hours of manual work per week — exporting, cleaning, and reformatting data that the platform couldn't surface automatically. The client portal was a shared inbox. Status updates went out by email.`,
    solution: `Full audit of the Dynamics 365 estate. Built a custom operations platform: job and workflow management system, a real-time client portal showing live project status, and automated reporting that replaced the 12 weekly manual hours entirely. Integrated with existing accounting software. Delivered in 6 weeks — solo, using AI-accelerated development.`,
    outcome: `£87,000 annual saving. ROI on the project fee: 9:1 in year one. The three internal staff managing Dynamics 365 were redeployed to revenue-generating work. Twelve hours of manual reporting per week eliminated from day one. The client portal replaced the shared inbox. The system is owned outright with no ongoing platform fee.`,
    results: [
      { label: 'Annual Saving', value: '£87,000', highlight: true },
      { label: 'Year 1 ROI', value: '9:1', highlight: true },
      { label: 'Delivery', value: '6 Weeks' },
      { label: 'Manual Hours Eliminated', value: '12/week' },
      { label: 'Staff Redeployed', value: '3 People' },
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Vercel'],
    testimonial: {
      quote:
        "We thought we needed 6 months and a team of 5. Adrian delivered in 6 weeks, solo.",
      author: 'Operations Director',
      role: 'Operations Director',
      company: 'Professional Services Client',
    },
  },
  // 5. Fairfax Media 24,971 Improvements
  {
    slug: 'fairfax-media-crm-rescue',
    title: 'Stalled CRM. 800+ Brands. 9,600 Users. 24,971 Improvements in 9 Months.',
    subtitle:
      "Australia's largest media company had a failing customer contact systems project. A development team was built from nothing. 100% user adoption achieved.",
    industry: 'Media / Enterprise',
    serviceType: 'Fractional CTO',
    duration: '9 months',
    publishedAt: '2015-06-01',
    metaDescription:
      'Fairfax Media CRM rescue: stalled implementation across 800+ brands and 9,600 users. 24,971 improvements in 9 months. 100% user adoption. Development team built from zero.',
    heroImage: PLACEHOLDER_HERO,
    problem: `Fairfax Media — Australia's largest media company, with 800+ brands across Australia, New Zealand, and the Philippines — had a stalled CRM and customer contact systems project. No functioning development team, no consistent delivery cadence, no executive alignment across major business units. 9,600 users dependent on a system that wasn't moving.`,
    solution: `Took over the project with a mandate to rescue it. Set strategic direction for all customer contact systems at enterprise level. Established a dedicated Build team from scratch. Created a parallel Business as Usual team to handle administration separately from project delivery. Ran the development team as Scrum Master with a consistent cadence. Held three innovation sessions with key executives to align major business units and clear the organisational blockers that had stalled delivery.`,
    outcome: `24,971 system improvements delivered in 9 months. 100% user adoption across 9,600 Salesforce users. Development team built from zero and operating at full velocity within the first quarter. The system became the operational backbone for customer contact across the entire Fairfax estate.`,
    results: [
      { label: 'Improvements Delivered', value: '24,971', highlight: true },
      { label: 'User Adoption', value: '100%', highlight: true },
      { label: 'Users', value: '9,600' },
      { label: 'Brands Covered', value: '800+' },
      { label: 'Timeline', value: '9 Months' },
      { label: 'Team Built From', value: 'Zero' },
    ],
    techStack: [
      'Salesforce Sales Cloud',
      'Service Cloud',
      'ExactTarget Marketing Cloud',
      'Mulesoft',
      'SAP',
      'JIRA',
      'Confluence',
    ],
  },
  // 6. IndiFind 4 Months Solo
  {
    slug: 'indifind-pan-european-marketplace',
    title: 'Production Platform. 9 Countries. 4 Months. Solo.',
    subtitle:
      "Europe's first B2B marketplace for industrial real estate — built from zero to production in 4 months. What a traditional team would take 12–18 months to deliver.",
    industry: 'PropTech',
    serviceType: 'Fractional CTO',
    duration: '4 months (build) + ongoing',
    publishedAt: '2025-09-01',
    metaDescription:
      'IndiFind: pan-European B2B marketplace for industrial real estate. Built solo in 4 months using Cursor AI and Claude. Tech costs reduced from £360k to £135k. Sub-200ms page loads. Positioned for Series A.',
    heroImage: PLACEHOLDER_HERO,
    problem: `Companies searching for warehouse and logistics space across European borders face a fragmented landscape — national portals with no cross-border coverage, language barriers, and search filters built for office space, not industrial requirements. Clearance height, loading dock configuration, floor load capacity, and rail access aren't afterthoughts in industrial property — they're the decision. No platform existed that understood this. The founding team had the market insight and commercial model. They needed technical execution fast enough to matter.`,
    solution: `Built IndiFind from zero to production in 4 months — solo — using AI-accelerated development with Cursor AI and Claude. Multi-tenant architecture supporting 9 languages and multiple currencies from launch. Industrial-specific search filters. Supply chain route planning integrated directly into the property search. Two-sided marketplace: Property Seekers (free) connect with Property Listers (subscription from £199/month). Appointed as Fractional CTO post-launch to lead technical strategy and Series A preparation.`,
    outcome: `Live and operational at indifind.com. Sub-200ms page loads across Europe. 99.9% uptime. Technology costs architected at £135,000 — against an equivalent traditional build cost of £360,000. Platform positioned for Series A. What a traditional development team would take 12–18 months to deliver was live in 4 months.`,
    results: [
      { label: 'Build Time', value: '4 Months', highlight: true },
      { label: 'Traditional Equivalent', value: '12–18 Months' },
      { label: 'Tech Cost Saving', value: '£225,000', highlight: true },
      { label: 'Page Load', value: 'Sub-200ms' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Countries', value: '9' },
    ],
    techStack: [
      'Next.js 14',
      'TypeScript',
      'Supabase (PostgreSQL)',
      'Vercel Edge Network',
      'React Leaflet',
      'CI/CD',
    ],
  },
  // 7. WGEA Government Portal Rescue
  {
    slug: 'wgea-government-portal-rescue',
    title: 'Over Budget. Behind Schedule. Delivered On Time Anyway.',
    subtitle:
      "An Australian government compliance portal — inherited in project crisis, restructured, and shipped on time and on budget.",
    industry: 'Government / Public Sector',
    serviceType: 'Fractional CTO',
    duration: '5 months',
    publishedAt: '2021-06-01',
    metaDescription:
      'WGEA government compliance portal: rescued from failure. Over budget and behind schedule — restructured with full stakeholder sign-off and delivered on time and on budget.',
    heroImage: PLACEHOLDER_HERO,
    problem: `The Workplace Gender Equality Agency runs compliance reviews on every Australian company with more than 100 employees. A project to digitise their manual document processing had been commissioned and had since gone off the rails: over budget, behind schedule, without a credible delivery plan.`,
    solution: `Took over the project. Rebuilt the project plan from scratch: clear scope, defined deliverables, realistic timelines. Secured stakeholder signatures on the revised plan — establishing the accountability that had been missing. Rebuilt and led the development team with a structured Scrum cadence. The new portal automated document intake and processing, freeing the agency's staff from administration and into the customer support role they should have been in.`,
    outcome: `Delivered on time and on budget. A project that had been visibly failing became one that shipped. The department's operational capacity shifted from processing paperwork to supporting the employers they regulate.`,
    results: [
      { label: 'Delivery', value: 'On Time & Budget', highlight: true },
      { label: 'Previous Status', value: 'Over Budget & Late' },
      { label: 'Process', value: 'Fully Automated' },
      { label: 'Staff', value: 'Redeployed to Value Work' },
      { label: 'System Users', value: '60' },
    ],
    techStack: [
      'Salesforce Service Cloud',
      'Mulesoft',
      'Alteryx',
      'Tableau',
      'SQL Database',
      'JIRA',
      'Confluence',
    ],
  },
  // 8. Woolworths Centre of Excellence
  {
    slug: 'woolworths-centre-of-excellence',
    title: 'A $1 Billion Technology Estate. One Centre of Excellence to Run It.',
    subtitle:
      "Contracted to implement enterprise-wide best practices across Woolworths' entire technology organisation — serving hundreds of enterprise architects and developers across a $1B AUD annual budget.",
    industry: 'Retail / Enterprise',
    serviceType: 'Fractional CTO',
    duration: '14 months',
    publishedAt: '2020-11-01',
    metaDescription:
      'Woolworths Centre of Excellence: governing a $1B AUD annual technology budget. Enterprise-wide best practices, Scrum of Scrums, and executive-level Salesforce representation.',
    heroImage: PLACEHOLDER_HERO,
    problem: `Woolworths operates one of Australia's largest technology estates — $1,000,000,000 AUD annual budget. Enterprise architects and software developers across the organisation were operating without a unified framework or central coordinating body. Salesforce implementations across multiple business units were running independently with no alignment. No mechanism for cross-functional best practice at enterprise scale — every team solving the same problems separately.`,
    solution: `Established and operated a Centre of Excellence (COE) for the entire corporation. Implemented a Scrum of Scrums across business units to coordinate delivery across fragmented teams. Represented Woolworths to Salesforce at an executive level. Provided executive advisory on roadmap, priorities, and architectural direction. Delivered training and mentoring to embed capability, not just framework.`,
    outcome: `A functioning Centre of Excellence embedded across the enterprise. Salesforce practice standardised, coordinated, and represented at executive level for the first time. Cross-functional delivery alignment established where there had previously been silos.`,
    results: [
      { label: 'Tech Budget Governed', value: '$1B AUD', highlight: true },
      { label: 'Engagement', value: '14 Months' },
      { label: 'Structure', value: 'Centre of Excellence' },
      { label: 'Scope', value: 'Enterprise-Wide' },
    ],
    techStack: ['Salesforce platform', 'Mulesoft', 'Google Cloud Platform', 'Tableau', 'SAP'],
    testimonial: {
      quote:
        'Exemplary platform knowledge with dynamic, thought-provoking approaches. Exactly what large enterprises need early in their Salesforce journey.',
      author: 'Tony Fitzgibbon',
      role: 'Head of Technology',
      company: 'Woolworths',
    },
    testimonialSecondary: {
      quote:
        'Highly professional architect — strong in technical and business engagement. Breaks down complexity, builds relationships.',
      author: 'Jason Keith',
      role: 'Head of Technology',
      company: 'Woolworths',
    },
  },
  // 9. SUEZ Five Integrations
  {
    slug: 'suez-mobile-sales-field-service',
    title: 'Five Enterprise Integrations. Legacy Architecture. Delivered On Time — With Extra Features.',
    subtitle:
      'Mobile sales management with multi-template contract signing, real-time data enrichment, and management reporting to Paris HQ — delivered inside a legacy enterprise architecture on time and on budget.',
    industry: 'Infrastructure / Utilities',
    serviceType: 'Fractional CTO',
    duration: '15 months',
    publishedAt: '2019-08-01',
    metaDescription:
      'SUEZ Australia: mobile sales management with five enterprise integrations. Delivered on time, on budget, with additional automation beyond original scope. 150 field sales users.',
    heroImage: PLACEHOLDER_HERO,
    problem: `SUEZ's Australian sales team needed mobile management — but this wasn't a standard field service implementation. Requirements included multi-template contract sign-on-glass, progressive data enrichment through external APIs, real-time address validation, automated company name correction, and management reporting to Paris headquarters. The existing architecture contained SAP, Oracle, and multiple legacy systems.`,
    solution: `Designed and delivered a Salesforce Field Service implementation with custom API integrations across five systems: in-house finance, BVD external data providers, Google Address APIs, CongaSign for contract execution, and the Paris HQ reporting pipeline. Progressive data enrichment built directly into the sales workflow. Full delivery lifecycle run with structured Scrum cadence.`,
    outcome: `Delivered on time and on budget — with additional features and automation beyond the original specification. 150 field sales users operational on mobile from go-live. Full integration with a legacy enterprise architecture. Paris management reporting was live from day one.`,
    results: [
      { label: 'Delivery', value: 'On Time & Budget', highlight: true },
      { label: 'Additional Scope', value: 'Extra Features Delivered' },
      { label: 'Users', value: '150 Field Sales' },
      { label: 'Integrations', value: '5 Enterprise Systems' },
      { label: 'Reporting', value: 'Live to Paris HQ' },
    ],
    techStack: [
      'Salesforce Field Service',
      'Service Cloud',
      'Mulesoft',
      'SAP',
      'Oracle',
      'CongaSign',
      'Google Address APIs',
      'Custom Finance API',
      'JIRA',
      'Confluence',
    ],
  },
  // 10. SiteMinder Salesforce Rescue
  {
    slug: 'siteminder-salesforce-stabilisation',
    title: 'Unstable Salesforce. No Dev Team. Full Executive Reporting Delivered.',
    subtitle:
      'Took over a failing Salesforce implementation, built a 5-person team from nothing, and delivered stable end-to-end reporting for 180 users.',
    industry: 'SaaS / Hospitality Tech',
    serviceType: 'Fractional CTO',
    duration: '2 years',
    publishedAt: '2017-07-01',
    metaDescription:
      'SiteMinder Salesforce rescue: built 5-person team from scratch, integrated with custom in-house platform, delivered stable end-to-end executive reporting for 180 users.',
    heroImage: PLACEHOLDER_HERO,
    problem: `SiteMinder — a hotel booking platform with 180 users — had an unstable Salesforce implementation that wasn't doing what the business needed. User growth wasn't tracked. Sales performance wasn't visible. Financial data wasn't connected. The system wasn't integrated with SiteMinder's custom in-house software. No development team in place to fix it.`,
    solution: `Took over the implementation. Established a 5-person Salesforce development team from scratch. Integrated Salesforce with the custom in-house software to create a single view of user growth and sales performance. Built financial tracking to enable full end-to-end executive reporting. Stabilised the implementation and ran structured delivery across the two-year engagement.`,
    outcome: `Stable Salesforce system managing marketing, sales, and financial tracking — fully integrated with the in-house platform. End-to-end executive reporting operational. 180 users on a system that could be relied upon. A development team built from zero, operating consistently.`,
    results: [
      { label: 'Team Built', value: '5-Person Dev Team', highlight: true },
      { label: 'Users', value: '180' },
      { label: 'Reporting', value: 'End-to-End Executive' },
      { label: 'Duration', value: '2 Years' },
      { label: 'Status on Arrival', value: 'Unstable & Unintegrated' },
    ],
    techStack: [
      'Salesforce Sales Cloud',
      'Service Cloud',
      'Zuora',
      'Mulesoft',
      'Custom API integrations',
      'JIRA',
      'Confluence',
    ],
  },
  // 11. New Horizons Architecture
  {
    slug: 'new-horizons-enterprise-architecture',
    title: 'Enterprise Architecture That Gets Implemented. Not Filed Away.',
    subtitle:
      'Practical tech stack consolidation design — plus stepping into IT General Manager and GM of Projects and Programs roles when leadership gaps opened.',
    industry: 'Professional Services / Education',
    serviceType: 'Fractional CTO',
    duration: 'Ongoing (Nov 2022 – Present)',
    publishedAt: '2023-01-01',
    metaDescription:
      'New Horizons: ongoing Enterprise Architect engagement. Practical tech stack consolidation design plus interim IT General Manager and GM Projects and Programs coverage during leadership transitions.',
    heroImage: PLACEHOLDER_HERO,
    problem: `New Horizons needed enterprise architecture that translated into working systems, not theoretical frameworks. They also faced a recurring challenge common to mid-market organisations: leadership gaps. When the IT General Manager role became vacant, and later the GM for Projects and Programs, the business needed someone who could step in without a six-month handover.`,
    solution: `Embedded as Enterprise Architect with a brief to design solutions the organisation could actually build and operate — commercial constraints built in from the start. When senior roles became vacant, stepped in as interim IT General Manager and interim GM for Projects and Programs — maintaining strategic continuity and delivery momentum during transitions.`,
    outcome: `Ongoing engagement. Tech stack consolidation progressing with designs that get implemented. Three senior leadership roles covered without business disruption.`,
    results: [
      { label: 'Engagement', value: 'Ongoing' },
      { label: 'Roles Covered', value: '3 Senior Positions' },
      { label: 'Approach', value: 'Practical Over Theoretical' },
      { label: 'Disruption', value: 'Zero During Transitions' },
    ],
    techStack: [
      'Enterprise Architecture',
      'Tech Stack Consolidation',
      'Salesforce',
      'Strategic Advisory',
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  return caseStudies.find((cs) => cs.slug === slug) ?? null;
}
