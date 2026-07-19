// Project order = display order. First project renders as the full-width flagship card.
// Projects without a live link get the "Private build" cover treatment.
export const projects = [
  {
    id: 1,
    name: 'Cadence',
    tagline: 'Client onboarding pipelines that close deals',
    description:
      'A full-stack SaaS platform for service businesses to manage client onboarding from lead capture to project kickoff — drag-and-drop Kanban pipeline, automated email sequences, branded client portals, and conversion analytics.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'Turso', 'Tailwind CSS'],
    links: { live: 'https://cadence-hq.netlify.app/demo', github: '' },
    screenshot: '/screenshots/onboardflow.png',
    accent: '#ea580c',
    category: 'SaaS Platform',
  },
  {
    id: 2,
    name: 'Flourish Finance',
    tagline: 'AI-powered personal finance for iOS & macOS',
    description:
      'A premium personal finance app for Apple platforms — automatic bank syncing via Plaid, an AI financial coach powered by Claude, net worth tracking, debt payoff planning, and a household mode for couples.',
    tech: ['Swift', 'SwiftUI', 'Firebase', 'Plaid API', 'Claude API'],
    links: { live: 'https://flourishfinance.netlify.app', github: '' },
    screenshot: '/screenshots/flourish.png',
    accent: '#16a34a',
    category: 'iOS / macOS App',
  },
  {
    id: 3,
    name: 'Vantage',
    tagline: 'Portfolio tracker, planner & AI strategist',
    description:
      'A local-first investment portfolio tracker with target-allocation planning, an RSU diversification planner, and brokerage CSV import. All math lives in a pure, unit-tested analytics layer — the Claude-powered strategist narrates over computed figures and never does the arithmetic.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Anthropic API', 'SQLite', 'Vitest'],
    links: { live: '', github: '' },
    accent: '#0e7490',
    category: 'AI / Fintech',
  },
  {
    id: 4,
    name: 'Pipeline',
    tagline: 'Job discovery with AI fit-scoring',
    description:
      'A personal job-search engine that pulls listings from multiple sources on a cron, hard-filters them deterministically at zero token cost, then scores each survivor against a master profile with Claude — explaining the fit and drafting tailored resume bullets on demand.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Turso', 'Anthropic API', 'Vercel Cron'],
    links: { live: '', github: '' },
    accent: '#2563eb',
    category: 'AI Tool',
  },
  {
    id: 5,
    name: 'Regime Trader',
    tagline: 'Regime-adaptive algorithmic trading',
    description:
      'An algorithmic trading system that classifies the market into seven regimes with a Gaussian Hidden Markov Model and adapts allocation to each. A risk layer with three-level circuit breakers and a kill switch holds absolute veto over every trade; strategies are validated with walk-forward backtesting.',
    tech: ['Python', 'hmmlearn', 'scikit-learn', 'Alpaca API', 'Streamlit', 'Docker'],
    links: { live: '', github: '' },
    accent: '#6d28d9',
    category: 'Quant / ML',
  },
  {
    id: 6,
    name: 'Switchboard',
    tagline: 'AI front desk for local service businesses',
    description:
      'Marketing and lead-capture site for Switchboard, a done-for-you AI front desk for appointment-based businesses. An animated live dispatch board, missed-revenue ROI calculator, and one job: convert visitors into free missed-call audit requests.',
    tech: ['Astro 5', 'TypeScript', 'Tailwind CSS 4', 'Resend', 'Netlify'],
    links: { live: 'https://switchboard-frontdesk.netlify.app', github: '' },
    accent: '#b45309',
    category: 'Marketing Site',
  },
  {
    id: 7,
    name: 'Canvas AI',
    tagline: 'AI-powered visual workspace for research',
    description:
      'A visual canvas where users create interconnected content nodes — text, images, video, code, PDFs, web pages — and use AI to analyze and generate from the full canvas context. Miro meets Claude.',
    tech: ['React 18', 'ReactFlow', 'Express', 'Claude API', 'Supabase'],
    links: { live: 'https://canvas-ai-workspace.netlify.app', github: '' },
    screenshot: '/screenshots/canvas-ai.png',
    accent: '#7c3aed',
    category: 'AI Tool',
  },
  {
    id: 8,
    name: 'Cadence Landing',
    tagline: 'High-converting SaaS marketing site',
    description:
      'The marketing site for Cadence — scroll-driven animations, an interactive product demo, competitor comparison, tiered pricing, and social proof. Built to convert visitors into beta signups.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: { live: 'https://getcadence.netlify.app', github: '' },
    accent: '#d97706',
    category: 'Marketing Site',
  },
  {
    id: 9,
    name: 'Samantha — Consultant Portfolio',
    tagline: 'Portfolio site with a built-in visual CMS',
    description:
      'A portfolio for a business systems consultant with a fully custom in-browser CMS — admins edit text, images, colors, and layouts directly on the live site, with live/draft publishing and undo/redo.',
    tech: ['React 19', 'Vite', 'Supabase'],
    links: { live: 'https://bysamanthabrown.netlify.app', github: '' },
    accent: '#0891b2',
    category: 'Portfolio / CMS',
  },
  {
    id: 10,
    name: 'Photo Portfolio',
    tagline: 'Photography showcase with inline admin editing',
    description:
      'A responsive photography portfolio with masonry grid, category filtering, lightbox viewing, and a full admin system — drag-and-drop reordering, inline metadata editing, and uploads, all backed by Supabase.',
    tech: ['React 19', 'Vite', 'Supabase', 'Framer Motion'],
    links: { live: 'https://oneframeandgrain.netlify.app', github: '' },
    screenshot: '/screenshots/photo-portfolio.png',
    accent: '#be185d',
    category: 'Photography',
  },
]

export const skills = [
  { category: 'Frontend', items: 'React, Next.js, TypeScript, Swift / SwiftUI, Tailwind CSS, Astro, Framer Motion' },
  { category: 'Backend', items: 'Node.js, Python, Prisma, Express, Firebase, Supabase' },
  { category: 'AI & ML', items: 'Claude API, OpenAI, hmmlearn, scikit-learn, Streamlit' },
  { category: 'Data', items: 'PostgreSQL, SQLite, Turso, Firestore, Plaid API' },
  { category: 'Infra', items: 'Netlify, Vercel, Docker, Fly.io, Vite, Vitest, Xcode' },
]
