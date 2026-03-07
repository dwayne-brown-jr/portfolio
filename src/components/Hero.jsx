import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
}

function ArrowDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
            bottom: '5%',
            right: '-10%',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
            top: '40%',
            left: '-5%',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Status badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium dark:bg-white/[0.05] bg-indigo-50 dark:border dark:border-white/[0.08] border border-indigo-200 dark:text-indigo-300 text-indigo-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6"
        >
          <span className="text-gradient">Dwayne</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl lg:text-3xl font-medium dark:text-white/75 text-gray-600 mb-4 leading-snug max-w-2xl mx-auto"
        >
          I design and build software
          <br />
          <span className="text-gradient-accent font-semibold">people love using.</span>
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg dark:text-white/40 text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Full-stack developer & designer specializing in React, Next.js, Swift/SwiftUI,
          and AI-integrated products. I ship end-to-end — from design to deployment.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={scrollToProjects} className="btn-primary text-base px-8 py-3.5 gap-2">
            View my work
            <ArrowRightIcon />
          </button>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-secondary text-base px-8 py-3.5"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Tech quick-hits */}
        <motion.div variants={item} className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {['React', 'Next.js', 'TypeScript', 'Swift', 'AI / Claude', 'Tailwind'].map((t) => (
            <span key={t} className="tech-badge opacity-70 hover:opacity-100 transition-opacity cursor-default">
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 dark:text-white/25 text-gray-400 hover:dark:text-white/60 hover:text-gray-600 transition-colors flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDownIcon />
        </motion.div>
      </motion.button>
    </section>
  )
}
