import { motion } from 'framer-motion'

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default function ProjectCard({ project, index }) {
  const hasLive = project.links.live && project.links.live !== '#'
  const hasGithub = project.links.github && project.links.github !== '#'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group card card-hover rounded-xl overflow-hidden flex flex-col h-full"
    >
      {/* Top accent stripe */}
      <div className="h-[3px] w-full flex-shrink-0" style={{ background: project.accent }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="min-w-0">
            <span
              className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded mb-2"
              style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30`, color: project.accent }}
            >
              {project.category}
            </span>
            <h3 className="text-lg font-bold dark:text-white text-gray-900 leading-snug">
              {project.name}
            </h3>
            <p className="text-xs dark:text-white/45 text-gray-500 mt-0.5 font-medium leading-snug">
              {project.tagline}
            </p>
          </div>
          <span
            className="text-3xl font-black tabular-nums flex-shrink-0 leading-none"
            style={{ color: `${project.accent}25` }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Mockup placeholder */}
        <div
          className="w-full h-44 rounded-lg mb-5 flex items-center justify-center overflow-hidden relative flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${project.accent}0d 0%, ${project.accent}06 100%)`,
            border: `1px solid ${project.accent}1a`,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(${project.accent} 1px, transparent 1px), linear-gradient(90deg, ${project.accent} 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
          <p className="relative text-2xl font-black opacity-20 tracking-tight" style={{ color: project.accent }}>
            {project.name}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm dark:text-white/50 text-gray-600 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Features — flex-1 so it fills space and pins footer to bottom */}
        <ul className="space-y-2 mb-5 flex-1">
          {project.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm dark:text-white/60 text-gray-600">
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: project.accent }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>

        {/* Links — always pinned to bottom */}
        <div className="flex items-center gap-2 pt-5 border-t dark:border-white/[0.06] border-gray-100 mt-auto">
          {hasLive ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-150"
              style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30`, color: project.accent }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${project.accent}28` }}
              onMouseLeave={(e) => { e.currentTarget.style.background = `${project.accent}18` }}
            >
              <ExternalIcon />
              Live demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg dark:text-white/20 text-gray-300 dark:bg-white/[0.03] bg-gray-50 border dark:border-white/[0.05] border-gray-100 cursor-not-allowed">
              <ExternalIcon />
              Coming soon
            </span>
          )}

          {hasGithub ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg dark:text-white/50 text-gray-500 dark:hover:text-white hover:text-gray-900 dark:bg-white/[0.04] bg-gray-100 hover:dark:bg-white/[0.08] hover:bg-gray-200 transition-all duration-150"
            >
              <GithubIcon />
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg dark:text-white/20 text-gray-300 dark:bg-white/[0.03] bg-gray-50 border dark:border-white/[0.05] border-gray-100 cursor-not-allowed">
              <GithubIcon />
              Private
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
