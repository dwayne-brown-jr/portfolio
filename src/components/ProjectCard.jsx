import { useState } from 'react'
import { motion } from 'framer-motion'

function ArrowUpRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

function Screenshot({ url, staticSrc, name, accent }) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  const src = staticSrc || `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

  if (errored) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${accent}0d, ${accent}06)` }}
      >
        <p className="text-2xl font-black opacity-20 tracking-tight" style={{ color: accent }}>
          {name}
        </p>
      </div>
    )
  }

  return (
    <>
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${accent}0d, ${accent}06)` }}
        >
          <div className="w-6 h-6 rounded-full border-2 animate-spin" style={{ borderColor: `${accent}40`, borderTopColor: accent }} />
        </div>
      )}
      <img
        src={src}
        alt={`${name} screenshot`}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className={`w-full h-full object-cover object-top transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  )
}

export default function ProjectCard({ project, index }) {
  const hasLive = project.links.live && project.links.live !== '#'

  const imageArea = (
    <div className="w-full h-48 rounded-lg mb-5 overflow-hidden relative flex-shrink-0 group/img"
      style={{ border: `1px solid ${project.accent}20` }}
    >
      {hasLive ? (
        <>
          <Screenshot url={project.links.live} staticSrc={project.screenshot} name={project.name} accent={project.accent} />
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200"
            style={{ background: 'rgba(0,0,0,0.55)' }}
          >
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2 rounded-lg"
              style={{ background: project.accent }}
            >
              View project <ArrowUpRightIcon />
            </span>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${project.accent}0d, ${project.accent}06)` }}
        >
          <p className="text-2xl font-black opacity-20 tracking-tight" style={{ color: project.accent }}>
            {project.name}
          </p>
        </div>
      )}
    </div>
  )

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

        {/* Screenshot — clickable if live URL exists */}
        {hasLive ? (
          <a href={project.links.live} target="_blank" rel="noreferrer">
            {imageArea}
          </a>
        ) : imageArea}

        {/* Description */}
        <p className="text-sm dark:text-white/50 text-gray-600 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-5 flex-1">
          {project.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm dark:text-white/60 text-gray-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accent }} />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
