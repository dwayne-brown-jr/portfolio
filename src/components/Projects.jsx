import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-[0.035]"
          style={{
            background: 'radial-gradient(circle, #6366f1, transparent)',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
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
          className="mb-6"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            Projects
          </motion.span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold dark:text-white text-gray-900 leading-tight"
            >
              Things I've shipped.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm dark:text-white/40 text-gray-500 sm:text-right max-w-xs">
              Real products, deployed to production. Each one built end-to-end.
            </motion.p>
          </div>
        </motion.div>

        {/* Filter strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-2 mb-12 flex-wrap"
        >
          {['All', 'SaaS Platform', 'iOS / macOS App', 'AI Tool', 'Marketing Site', 'Portfolio / CMS', 'Photography'].map((cat) => (
            <span
              key={cat}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg cursor-default transition-all ${
                cat === 'All'
                  ? 'dark:bg-white/[0.08] bg-gray-200 dark:text-white text-gray-900'
                  : 'dark:text-white/40 text-gray-400 dark:hover:text-white hover:text-gray-700'
              }`}
            >
              {cat}
            </span>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="dark:text-white/40 text-gray-400 text-sm mb-4">
            More projects available on request
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex text-sm px-5 py-2.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View GitHub profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
