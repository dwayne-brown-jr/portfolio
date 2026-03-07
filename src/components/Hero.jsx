import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Warm glow — subtle, not animated blobs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(234,88,12,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 pt-32 pb-24">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="text-sm font-medium text-orange-500 mb-6 tracking-wide"
          >
            Full-stack developer & designer
          </motion.p>

          {/* Name / headline */}
          <motion.h1
            variants={item}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.9] mb-8"
          >
            <span className="text-gradient">Dwayne</span>
            <br />
            <span className="dark:text-white/90 text-gray-900">Leon.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl dark:text-white/55 text-gray-500 max-w-xl leading-relaxed mb-12 font-normal"
          >
            I build software that feels as good as it works — from pixel-perfect UIs to
            production backends and AI-integrated products.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="btn-primary px-7 py-3.5 text-base"
            >
              See my work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-ghost px-7 py-3.5 text-base"
            >
              Get in touch
            </button>
          </motion.div>

          {/* Horizontal rule with stats */}
          <motion.div
            variants={item}
            className="mt-20 pt-10 border-t dark:border-white/[0.06] border-gray-200 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { n: '6+', label: 'Products shipped' },
              { n: '5+', label: 'Years building' },
              { n: 'Full', label: 'Stack coverage' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-orange-500 mb-1">{s.n}</div>
                <div className="text-xs dark:text-white/35 text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 flex items-center gap-2 dark:text-white/20 text-gray-300"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 dark:bg-white/15 bg-gray-300 mx-auto"
          style={{ display: 'block' }}
        />
      </motion.div>
    </section>
  )
}
