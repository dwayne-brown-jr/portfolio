import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

const socialLinks = [
  {
    name: 'GitHub',
    handle: '@yourusername',
    href: 'https://github.com/yourusername',
    description: 'Projects & open source',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Dwayne Leon',
    href: 'https://linkedin.com/in/yourusername',
    description: 'Professional network',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'X / Twitter',
    handle: '@yourusername',
    href: 'https://x.com/yourusername',
    description: 'Thoughts & updates',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: 'hello@youremail.com',
    href: 'mailto:hello@youremail.com',
    description: 'Best way to reach me',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

const inputClass =
  'w-full rounded-lg px-4 py-3 text-sm dark:bg-white/[0.04] bg-gray-50 border dark:border-white/[0.07] border-gray-200 dark:text-white text-gray-900 dark:placeholder-white/25 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-orange-500 mb-4 tracking-wide">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black dark:text-white text-gray-900 leading-tight mb-4">
            Let's work together.
          </motion.h2>
          <motion.p variants={fadeUp} className="dark:text-white/50 text-gray-500 max-w-md">
            Have a project in mind or want to talk through an idea? Drop me a line.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Social links */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                variants={fadeUp}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="card card-hover rounded-xl p-4 group flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center dark:text-white/60 text-gray-500 dark:bg-white/[0.05] bg-gray-100">
                    {link.icon}
                  </div>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="dark:text-white/15 text-gray-300 group-hover:dark:text-white/50 group-hover:text-gray-500 transition-colors">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold dark:text-white text-gray-800 mb-0.5">{link.name}</div>
                  <div className="text-xs dark:text-white/40 text-gray-500">{link.description}</div>
                </div>
                <div className="text-xs font-mono dark:text-white/25 text-gray-400">{link.handle}</div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="card rounded-xl p-7"
          >
            <h3 className="text-base font-bold dark:text-white text-gray-800 mb-5">Send a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium dark:text-white/45 text-gray-500 mb-1.5">Name</label>
                  <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-medium dark:text-white/45 text-gray-500 mb-1.5">Email</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium dark:text-white/45 text-gray-500 mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={onChange} rows={5} placeholder="Tell me about your project..." className={inputClass + ' resize-none'} />
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-3">
                Send message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
              <p className="text-xs dark:text-white/20 text-gray-400 text-center">
                Wire up to Resend or Formspree to activate email sending.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
