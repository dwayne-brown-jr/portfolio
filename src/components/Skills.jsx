import { motion } from 'framer-motion'
import { skills } from '../data/projects'

const categoryColors = {
  Frontend:       { bg: 'rgba(234,88,12,0.08)',  border: 'rgba(234,88,12,0.2)',  text: '#fb923c' },
  Backend:        { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', text: '#34d399' },
  'AI & APIs':    { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)', text: '#c084fc' },
  Databases:      { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', text: '#60a5fa' },
  'Tools & Infra':{ bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', text: '#fbbf24' },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-orange-500 mb-4 tracking-wide">
            Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-black dark:text-white text-gray-900 leading-tight"
          >
            The full toolkit.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 dark:text-white/50 text-gray-500 max-w-lg">
            Native mobile to cloud infrastructure — I work across the entire stack.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((group) => {
            const colors = categoryColors[group.category]
            return (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className="card card-hover rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: colors.text }}
                  />
                  <h3 className="text-xs font-semibold dark:text-white/70 text-gray-600 uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2.5 py-1 rounded-md cursor-default"
                      style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* Approach card — spans remaining columns */}
          <motion.div
            variants={fadeUp}
            className="sm:col-span-2 lg:col-span-1 card card-hover rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full flex-shrink-0 bg-orange-500" />
              <h3 className="text-xs font-semibold dark:text-white/70 text-gray-600 uppercase tracking-wider">
                How I work
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Design first', desc: 'UX clarity before a single line of code.' },
                { label: 'Ship early', desc: 'Working software beats perfect software on paper.' },
                { label: 'Iterate on real feedback', desc: 'Users surface what documents never will.' },
              ].map((p) => (
                <div key={p.label}>
                  <div className="text-sm font-semibold dark:text-white text-gray-800 mb-0.5">{p.label}</div>
                  <div className="text-xs dark:text-white/40 text-gray-500">{p.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
