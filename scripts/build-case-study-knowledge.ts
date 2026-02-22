/**
 * Builds a plain-text knowledge blob from case studies for the Ask AI system prompt.
 * Run: npm run build:knowledge   (or npx tsx scripts/build-case-study-knowledge.ts)
 * Output: lib/case-studies/knowledge.txt
 */
import * as fs from 'fs';
import * as path from 'path';
import { caseStudies } from '../lib/case-studies/data';
import type { CaseStudy } from '../lib/case-studies/types';

const outPath = path.join(process.cwd(), 'lib/case-studies/knowledge.txt');

function formatCaseStudy(cs: CaseStudy): string {
  const sections: string[] = [];
  sections.push(`# ${cs.title}`);
  sections.push(`Industry: ${cs.industry} | Service: ${cs.serviceType} | Duration: ${cs.duration}`);
  sections.push('');
  sections.push('## Problem');
  sections.push(cs.problem);
  sections.push('');
  sections.push('## Solution');
  sections.push(cs.solution);
  sections.push('');
  sections.push('## Outcome');
  sections.push(cs.outcome);
  sections.push('');
  sections.push('## Results');
  cs.results.forEach((r) => sections.push(`- ${r.label}: ${r.value}`));
  if (cs.techStack && cs.techStack.length > 0) {
    sections.push('');
    sections.push('Tech stack: ' + cs.techStack.join(', '));
  }
  if (cs.testimonial) {
    sections.push('');
    sections.push(`Testimonial (${cs.testimonial.author}, ${cs.testimonial.role}, ${cs.testimonial.company}): "${cs.testimonial.quote}"`);
  }
  if (cs.testimonialSecondary) {
    sections.push('');
    sections.push(`Testimonial (${cs.testimonialSecondary.author}, ${cs.testimonialSecondary.role}, ${cs.testimonialSecondary.company}): "${cs.testimonialSecondary.quote}"`);
  }
  sections.push('');
  sections.push('---');
  sections.push('');
  return sections.join('\n');
}

const blob = [
  'CASE STUDIES — Use these for detailed examples when asked about specific results, sectors, or engagements.',
  'Each case study below has problem, solution, outcome, and key metrics.',
  '',
  ...caseStudies.map(formatCaseStudy),
].join('\n');

fs.writeFileSync(outPath, blob, 'utf-8');
console.log('Wrote', outPath);
