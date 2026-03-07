// --- Update links.live and links.github with your real URLs ---
export const projects = [
  {
    id: 1,
    name: 'OnboardFlow',
    tagline: 'Client onboarding pipelines that close deals',
    description:
      'A full-stack SaaS platform for service businesses to manage their client onboarding from lead capture to project kickoff. Drag-and-drop Kanban board, automated email sequences, branded client portals, and pipeline analytics.',
    tech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Prisma',
      'LibSQL / Turso',
      'NextAuth.js',
      'Tailwind CSS',
      'Recharts',
      'Resend',
      'dnd-kit',
    ],
    features: [
      'Drag-and-drop Kanban board with real-time stage tracking',
      'Automated email sequences triggered by client stage changes',
      'Branded client portal with checklist progress and document uploads',
      'Pipeline analytics with conversion funnels and bottleneck alerts',
    ],
    links: { live: 'https://onboard-flow-prod.netlify.app/dashboard', github: '' },
    screenshot: '/screenshots/onboardflow.png',
    accent: '#ea580c',
    category: 'SaaS Platform',
  },
  {
    id: 2,
    name: 'OnboardFlow Landing',
    tagline: 'High-converting SaaS marketing site',
    description:
      'A polished marketing site for OnboardFlow featuring scroll-driven animations, an interactive product demo, competitor comparison, tiered pricing, and social proof sections. Built to convert visitors into beta signups.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Animated hero with 3D perspective product mockup',
      'Interactive demo section showcasing the Kanban workflow',
      'Tiered pricing cards with Starter / Professional / Business plans',
      'FAQ, testimonials, and trust/social proof sections',
    ],
    links: { live: 'https://onboardflow-site.netlify.app', github: '' },
    accent: '#d97706',
    category: 'Marketing Site',
  },
  {
    id: 3,
    name: 'Flourish Finance',
    tagline: 'AI-powered personal finance for iOS/Mac OS',
    description:
      'A premium personal finance app for Apple platforms. Combines automatic bank syncing via Plaid, AI-powered financial coaching via Claude, and a beautiful design system. Supports budgeting, net worth tracking, debt payoff planning, and household/couple mode.',
    tech: [
      'Swift',
      'SwiftUI',
      'Firebase',
      'Plaid API',
      'Anthropic Claude API',
      'Google Gemini API',
      'Next.js',
    ],
    features: [
      'Automatic bank account syncing with smart transaction categorization',
      'AI financial coach powered by Claude with actionable recommendations',
      'Net worth tracking, budgeting, and debt payoff calculator',
      'Household/couple mode with shared goals and consolidated views',
    ],
    links: { live: 'https://flourishfinance.netlify.app', github: '' },
    screenshot: '/screenshots/flourish.png',
    accent: '#16a34a',
    category: 'iOS / macOS App',
  },
  {
    id: 4,
    name: 'Canvas AI',
    tagline: 'AI-powered visual workspace for research and creation',
    description:
      'A visual canvas where users create interconnected content nodes — text, images, videos, code, PDFs, web pages — and use AI to analyze, generate insights, and create content from the full canvas context. Miro meets Claude.',
    tech: [
      'React 18',
      'Vite',
      'ReactFlow',
      'TipTap',
      'Express',
      'Anthropic Claude API',
      'OpenAI API',
      'Supabase',
      'Tailwind CSS',
    ],
    features: [
      'Node-based canvas with 10+ content types and drag-and-drop connections',
      'AI chat sidebar that understands the full canvas context',
      'Web scraping, YouTube transcript extraction, and PDF parsing',
      'Auto-layout algorithms (grid, tree, radial) and presentation mode',
    ],
    links: { live: 'https://canvas-ai-workspace.netlify.app', github: '' },
    accent: '#7c3aed',
    category: 'AI Tool',
  },
  {
    id: 5,
    name: 'Samantha — Consultant Portfolio',
    tagline: 'Portfolio site with a built-in visual CMS',
    description:
      'A portfolio website for a business systems consultant with a fully custom in-browser CMS. Admins edit all text, images, colors, and layouts directly on the live site — with live/draft publishing, undo/redo, and Supabase-backed persistence.',
    tech: ['React 19', 'Vite', 'Supabase', 'CSS Animations'],
    features: [
      'In-browser visual CMS — edit content directly on the live site',
      'Live/draft workflow with publish and discard controls',
      'Animated hero with typewriter effect and scroll-triggered counters',
      'Editable card groups, block lists, and section-level content management',
    ],
    links: { live: 'https://bysamanthabrown.netlify.app', github: '' },
    accent: '#0891b2',
    category: 'Portfolio / CMS',
  },
  {
    id: 6,
    name: 'Photo Portfolio',
    tagline: 'Photography showcase with inline admin editing',
    description:
      'A responsive photography portfolio with masonry grid layout, category filtering, lightbox viewing, and a full admin system. Photographers can add, reorder, and edit photos with drag-and-drop — all powered by Supabase.',
    tech: ['React 19', 'Vite', 'Supabase', 'Framer Motion', 'Sharp'],
    features: [
      'Responsive masonry grid with category filtering and smooth transitions',
      'Full-screen lightbox with keyboard navigation',
      'Admin mode: drag-and-drop reorder, inline metadata editing, uploads',
      'Editable about page, site content, and categories — all database-backed',
    ],
    links: { live: 'https://oneframeandgrain.netlify.app', github: '' },
    accent: '#be185d',
    category: 'Photography',
  },
]

export const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Swift / SwiftUI',
  'Tailwind CSS',
  'Node.js',
  'Supabase',
  'Firebase',
  'Prisma',
  'PostgreSQL',
  'Anthropic Claude API',
  'OpenAI API',
  'Plaid API',
  'Framer Motion',
  'Vite',
  'Netlify',
]

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Swift / SwiftUI', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Prisma', 'Firebase', 'Supabase'],
  },
  {
    category: 'AI & APIs',
    items: ['Anthropic Claude', 'OpenAI', 'Plaid API', 'Resend', 'Uploadthing'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'LibSQL / Turso', 'Firestore', 'SQLite'],
  },
  {
    category: 'Tools & Infra',
    items: ['Vite', 'Git', 'Netlify', 'Vercel', 'Xcode', 'Figma'],
  },
]
