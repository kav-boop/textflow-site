# Text Flow — Starter Website

A lightweight starter landing page for Text Flow — a SaaS product that automates email and SMS for real estate teams and provides a 24/7 Smart Concierge.

This repo contains:
- `index.html` — responsive homepage with hero, features, pricing, and contact form
- `styles.css` — minimal styling

Quick start
1. Clone or download these files.
2. Open `index.html` in your browser, or run a local static server:
   - Python 3: `python -m http.server 8000`
   - Node: `npx serve .`
3. Replace the Formspree action URL in the contact form with your form endpoint or hook it to your backend.

Suggested next steps
- Convert to a modern framework:
  - Next.js / Vercel for SSR, deployment, and API routes (signup, webhooks).
  - Or use SSG / static hosting on Netlify/Vercel.
- Add authentication and billing:
  - Use Stripe for subscriptions and metered messaging.
- Build the backend:
  - Create REST/GraphQL API for campaigns, contacts, integrations, and message logs.
  - Add connectors for CRMs (followups, syncing).
- Implement Smart Concierge:
  - Integrate chat/AI/automation flows (LLM or rule-based) with fallback to agents.
- Integrate SMS provider:
  - Twilio or other SMS gateway for two-way messaging and number management.
- Add analytics & reporting dashboards for agents.

Want me to:
- Convert this to a Next.js app with API routes and a signup flow?
- Create a demo "campaign" page to show how automations work?
- Draft copy for emails/SMS templates tailored to buyers, sellers, and open houses?

Reply with which direction you'd like and I will scaffold the next pieces.
