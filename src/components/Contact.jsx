import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

const socialLinks = [
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
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xpqywqky', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
            {status === 'success' ? (
              <div className="py-10 flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-semibold text-white">Message sent!</p>
                <p className="text-sm text-white/40">I'll get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="text-xs text-orange-500 hover:text-orange-400 mt-1">Send another</button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium dark:text-white/45 text-gray-500 mb-1.5">Name</label>
                    <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium dark:text-white/45 text-gray-500 mb-1.5">Email</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium dark:text-white/45 text-gray-500 mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} rows={5} placeholder="Tell me about your project..." required className={inputClass + ' resize-none'} />
                </div>
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center py-3 disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                  {status !== 'sending' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>
                {status === 'error' && <p className="text-xs text-red-400 text-center">Something went wrong. Please try again.</p>}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
