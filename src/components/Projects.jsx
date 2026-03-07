import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const FILTERS = ['All', 'SaaS Platform', 'iOS / macOS App', 'AI Tool', 'Marketing Site', 'Portfolio / CMS', 'Photography']

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-10"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-orange-500 mb-4 tracking-wide">
            Projects
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-black dark:text-white text-gray-900 leading-tight"
            >
              Things I've shipped.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm dark:text-white/35 text-gray-400 sm:text-right max-w-xs shrink-0">
              Built end-to-end. Deployed to production.
            </motion.p>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all duration-150 ${
                active === cat
                  ? 'bg-orange-600 text-white'
                  : 'dark:text-white/45 text-gray-500 dark:hover:text-white hover:text-gray-900 dark:bg-white/[0.04] bg-gray-100 hover:dark:bg-white/[0.08] hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 dark:text-white/30 text-gray-400 text-sm">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  )
}
