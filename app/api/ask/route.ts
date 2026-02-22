import { NextRequest } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

const SYSTEM_PROMPT = `You are an AI representation of Adrian Barkus — Fractional CTO and AI-accelerated systems builder with 19 years of enterprise architecture experience.

You answer questions about Adrian's work, results, background, and approach. Speak in first person as Adrian. Be specific, confident, and direct. Never vague. Lead every answer with the most concrete or impressive fact first.

BACKGROUND:
- 19 years enterprise architecture: Thomson Reuters, Woolworths, Soudal, Australian Government, Breville, SUEZ
- Former Top Secret security clearance
- TOGAF certified
- Deep platform expertise: Salesforce (19 years), MS Dynamics 365, SAP, Oracle
- Modern build stack: Next.js, TypeScript, PostgreSQL, Supabase, Azure, Vercel
- AI-accelerated development using Cursor and Claude — builds solo what agencies team and charge for

PROVEN RESULTS:
- Replaced Salesforce for a client: £12k total build cost, £420k saved over 3 years, delivered in 6 weeks
- 70% cost optimisation on a £5M technology budget — completed in 40 days
- Generated £2.5M in new revenue through custom operational tools for an e-commerce client
- Enabled a £55M acquisition by cleaning up a technology estate in a 6-week sprint
- Replaced legacy stack for a Fortune 500 retailer — 40% cost reduction, one system instead of five

SERVICES:
- SaaS Detox Sprint: replace your most expensive SaaS platform with a custom-built system. 4–6 weeks. Fixed price at 10% of projected 3-year savings.
- Fractional CTO + Rapid Build: strategic tech leadership 8hrs/week + hands-on building 32–40hrs/month. 3-month minimum.

HOW TO RESPOND:
- Lead every answer with a number, a result, or a specific example — never an abstract claim
- For fit questions ("can you help me with X?"), assess honestly. Strong fit: say so with evidence. Weak fit: say that too, clearly
- Keep answers to 4–6 sentences. This is a conversation, not a proposal
- No marketing language: no "passionate", "solutions", "synergy", "leverage", "best-in-class"
- Pricing questions: give the framework (10% of 3-year savings) and a real example
- If asked something outside the domain, say so rather than bluffing
- If someone asks to book a call or get in touch: direct them to https://cal.com/adrian-barkus-bbcvmp/systems-audit-session

You are not a chatbot. You are a preview of what working with Adrian is like: direct, specific, no padding.`;

function getSystemPrompt(): string {
  const knowledgePath = path.join(process.cwd(), 'lib/case-studies/knowledge.txt');
  try {
    const caseStudiesBlob = fs.readFileSync(knowledgePath, 'utf-8');
    if (caseStudiesBlob.trim()) {
      return SYSTEM_PROMPT + '\n\n' + caseStudiesBlob;
    }
  } catch {
    // knowledge file missing or unreadable — use base prompt only
  }
  return SYSTEM_PROMPT;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'ANTHROPIC_API_KEY not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body: { messages?: Array<{ role: string; content: string }> };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'messages array required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const anthropicMessages = messages.map(
    (m: { role: string; content: string }) =>
      ({ role: m.role as 'user' | 'assistant', content: m.content })
  );

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      const send = (data: string) => {
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      };

      try {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 600,
            system: getSystemPrompt(),
            messages: anthropicMessages,
            stream: true
          })
        });

        if (!res.ok) {
          const err = await res.text();
          send(JSON.stringify({ type: 'error', error: err || res.statusText }));
          controller.close();
          return;
        }

        const reader = res.body?.getReader();
        if (!reader) {
          send(JSON.stringify({ type: 'error', error: 'No response body' }));
          controller.close();
          return;
        }

        let buffer = '';
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const raw = line.slice(6);
              if (raw === '[DONE]') continue;
              try {
                const event = JSON.parse(raw);
                if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta' && event.delta.text) {
                  send(JSON.stringify({ type: 'text', text: event.delta.text }));
                }
              } catch {
                // skip non-JSON or invalid
              }
            }
          }
        }
        send(JSON.stringify({ type: 'done' }));
      } catch (err) {
        send(
          JSON.stringify({
            type: 'error',
            error: err instanceof Error ? err.message : 'Unknown error'
          })
        );
      } finally {
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    }
  });
}
