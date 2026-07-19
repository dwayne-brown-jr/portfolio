import { motion } from 'framer-motion'
import { skills } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-line bg-paper-raised">
      <div className="max-w-site mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-7"
            >
              End-to-end, every time.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-ink-secondary leading-relaxed mb-4">
              I build production-grade software across the full stack — design, frontend,
              backend, AI integration, and deployment. No handoffs, no gaps.
            </motion.p>
            <motion.p variants={fadeUp} className="text-ink-secondary leading-relaxed">
              That ranges from SaaS platforms in Next.js and native Apple apps in SwiftUI
              to a regime-adaptive trading system in Python. I&apos;ve been building with the
              Claude and OpenAI APIs since they launched — as a real layer of product
              intelligence, not a novelty.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted mb-5">
              Toolkit
            </motion.p>
            <div className="divide-y divide-line border-y border-line">
              {skills.map((group) => (
                <motion.div key={group.category} variants={fadeUp} className="py-4 grid grid-cols-[110px_1fr] gap-4 items-baseline">
                  <span className="font-mono text-xs font-medium text-ink">{group.category}</span>
                  <span className="text-sm text-ink-secondary leading-relaxed">{group.items}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
