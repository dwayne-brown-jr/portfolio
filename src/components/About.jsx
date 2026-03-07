import { motion } from 'framer-motion'
import { techStack } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mb-16"
        >
          <span className="section-label">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Bio */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold leading-tight dark:text-white text-gray-900 mb-8"
            >
              Building things from
              <span className="text-gradient-accent"> the ground up.</span>
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
              className="space-y-5"
            >
              {[
                "I'm a full-stack developer and designer who builds polished, production-grade software — not proofs of concept. Every product I ship is designed with intention, built to scale, and tested against real-world use.",
                "My work spans the full stack: pixel-perfect UIs with React and SwiftUI, robust APIs and data layers with Node.js and Prisma, and AI-integrated experiences powered by Claude and OpenAI. I handle design, frontend, backend, and deployment — so nothing falls through the cracks.",
                "I care most about the intersection of engineering and design. Software that works flawlessly and looks like someone thought deeply about every interaction is what I'm always aiming for.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-base sm:text-lg dark:text-white/60 text-gray-600 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { value: '6+', label: 'Products shipped' },
                { value: '5+', label: 'Years building' },
                { value: '∞', label: 'Coffee consumed' },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <div className="text-3xl font-black text-gradient-accent mb-1">{stat.value}</div>
                  <div className="text-xs dark:text-white/40 text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Tech stack */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
            }}
          >
            <p className="text-sm font-semibold dark:text-white/30 text-gray-400 uppercase tracking-widest mb-6">
              Technologies I work with
            </p>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  variants={fadeUp}
                  className="tech-badge cursor-default hover:scale-105 transition-transform"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Decorative card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 glass-card rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}>
                  🧠
                </div>
                <div>
                  <p className="text-sm font-semibold dark:text-white text-gray-800 mb-1">
                    AI-native from the start
                  </p>
                  <p className="text-sm dark:text-white/50 text-gray-500 leading-relaxed">
                    I've been building with the Anthropic and OpenAI APIs since they launched —
                    not as a novelty, but as a genuine layer of product intelligence.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
