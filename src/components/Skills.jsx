import { motion } from 'framer-motion'
import { skills } from '../data/projects'

const categoryIcons = {
  Frontend: '🖥',
  Backend: '⚙️',
  'AI & APIs': '🤖',
  Databases: '🗄',
  'Tools & Infra': '🛠',
}

const categoryColors = {
  Frontend: { bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)', text: '#818cf8' },
  Backend: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', text: '#34d399' },
  'AI & APIs': { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', text: '#fbbf24' },
  Databases: { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', text: '#60a5fa' },
  'Tools & Infra': { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)', text: '#c084fc' },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #6366f1, transparent)',
            bottom: '-10%',
            right: '-10%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            Skills
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold dark:text-white text-gray-900 leading-tight"
          >
            The full toolkit.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg dark:text-white/50 text-gray-500 max-w-xl">
            From native mobile to cloud infrastructure — I work across the entire product stack.
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((group) => {
            const colors = categoryColors[group.category]
            return (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className="glass-card glass-card-hover rounded-2xl p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                  >
                    {categoryIcons[group.category]}
                  </div>
                  <h3 className="text-sm font-semibold dark:text-white text-gray-800">
                    {group.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 cursor-default"
                      style={{
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        color: colors.text,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* Process card */}
          <motion.div
            variants={fadeUp}
            className="sm:col-span-2 lg:col-span-2 glass-card glass-card-hover rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                style={{ background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.2)' }}
              >
                ✨
              </div>
              <h3 className="text-sm font-semibold dark:text-white text-gray-800">How I work</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { step: '01', title: 'Design first', desc: 'Every product starts with a clear UX vision. I design before I build.' },
                { step: '02', title: 'Ship fast', desc: 'Working software in production beats perfect software on paper.' },
                { step: '03', title: 'Iterate', desc: 'Real users surface real problems. I stay close to feedback loops.' },
              ].map((p) => (
                <div key={p.step}>
                  <div className="text-xs font-bold text-indigo-400 mb-1.5">{p.step}</div>
                  <div className="text-sm font-semibold dark:text-white text-gray-800 mb-1">{p.title}</div>
                  <div className="text-xs dark:text-white/45 text-gray-500 leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
