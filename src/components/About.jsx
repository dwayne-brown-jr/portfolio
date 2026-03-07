import { motion } from 'framer-motion'
import { techStack } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-orange-500 mb-4 tracking-wide">
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-black dark:text-white text-gray-900 leading-tight mb-8"
            >
              End-to-end,<br />every time.
            </motion.h2>

            <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="space-y-5">
              <motion.p variants={fadeUp} className="dark:text-white/60 text-gray-600 leading-relaxed">
                I build production-grade software across the full stack — design, frontend, backend, AI integration, and deployment. No handoffs, no gaps.
              </motion.p>
              <motion.p variants={fadeUp} className="dark:text-white/60 text-gray-600 leading-relaxed">
                My work covers web apps built in React and Next.js, native Apple experiences in SwiftUI, and AI-integrated products powered by Claude and OpenAI. Whatever the platform, I care about the same things: clean architecture, thoughtful UX, and software that holds up in the real world.
              </motion.p>
              <motion.p variants={fadeUp} className="dark:text-white/60 text-gray-600 leading-relaxed">
                The best products feel inevitable — like they couldn't have been built any other way. That's what I aim for.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold dark:text-white/25 text-gray-400 uppercase tracking-widest mb-5"
            >
              Technologies
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  variants={fadeUp}
                  className="tech-badge cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Inline note — no decorative card, just a clean callout */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pl-4 border-l-2 border-orange-500/40"
            >
              <p className="text-sm dark:text-white/50 text-gray-500 leading-relaxed">
                I've been building with the Claude and OpenAI APIs since they launched — not as a novelty, but as a real layer of product intelligence that changes what's possible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
