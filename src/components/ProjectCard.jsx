import { motion } from 'framer-motion'

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group glass-card glass-card-hover rounded-2xl overflow-hidden"
    >
      {/* Top accent line */}
      <div
        className="h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      <div className="p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            {/* Category badge */}
            <span
              className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md mb-3"
              style={{
                background: `${project.accent}18`,
                border: `1px solid ${project.accent}35`,
                color: project.accent,
              }}
            >
              {project.category}
            </span>

            <h3 className="text-xl font-bold dark:text-white text-gray-900 leading-tight">
              {project.name}
            </h3>
            <p className="text-sm dark:text-white/50 text-gray-500 mt-0.5 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Index number */}
          <span
            className="text-4xl font-black tabular-nums flex-shrink-0"
            style={{ color: `${project.accent}30` }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Image placeholder */}
        <div
          className="w-full h-52 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative"
          style={{
            background: `linear-gradient(135deg, ${project.accent}10, ${project.accent}05)`,
            border: `1px solid ${project.accent}20`,
          }}
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `linear-gradient(${project.accent}60 1px, transparent 1px),
                                linear-gradient(90deg, ${project.accent}60 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
          <div className="relative z-10 text-center px-6">
            <div
              className="text-3xl mb-2 font-black tracking-tight opacity-30"
              style={{ color: project.accent }}
            >
              {project.name}
            </div>
            <div className="text-xs dark:text-white/20 text-gray-400">Screenshot coming soon</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm dark:text-white/55 text-gray-600 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-6">
          {project.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm dark:text-white/65 text-gray-600">
              <span
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${project.accent}15`, color: project.accent }}
              >
                <CheckIcon />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge text-xs">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-6 border-t dark:border-white/[0.06] border-gray-100">
          <a
            href={project.links.live}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-150"
            style={{
              background: `${project.accent}15`,
              border: `1px solid ${project.accent}30`,
              color: project.accent,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${project.accent}25`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${project.accent}15`
            }}
          >
            <ExternalLinkIcon />
            Live demo
          </a>
          <a
            href={project.links.github}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg dark:text-white/50 text-gray-500 dark:hover:text-white hover:text-gray-900 dark:bg-white/[0.04] bg-gray-100 dark:hover:bg-white/[0.08] hover:bg-gray-200 transition-all duration-150"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}
