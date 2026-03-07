import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t dark:border-white/[0.06] border-gray-200 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="text-sm font-black text-gradient-accent">DL</span>
          <span className="dark:text-white/25 text-gray-300 text-sm">|</span>
          <span className="dark:text-white/30 text-gray-400 text-sm">
            &copy; {year} Dwayne Leon. All rights reserved.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-5"
        >
          {[
            { label: 'GitHub', href: 'https://github.com/yourusername' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
            { label: 'X', href: 'https://x.com/yourusername' },
            { label: 'Email', href: 'mailto:hello@youremail.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="text-sm dark:text-white/35 text-gray-400 dark:hover:text-white hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
