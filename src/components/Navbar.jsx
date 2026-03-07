import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: 'about' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      let current = ''
      for (const { href } of navLinks) {
        const el = document.getElementById(href)
        if (el && window.scrollY >= el.offsetTop - 130) current = href
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'dark:bg-[#0a0806]/90 bg-white/90 backdrop-blur-xl border-b dark:border-white/[0.05] border-gray-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-black tracking-tight text-orange-500 hover:text-orange-400 transition-colors"
          >
            DL
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => go(href)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-150 ${
                  active === href
                    ? 'dark:text-white text-gray-900 font-medium dark:bg-white/[0.06] bg-gray-100'
                    : 'dark:text-white/50 text-gray-400 hover:dark:text-white hover:text-gray-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go('contact')}
              className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
            >
              Hire me
            </button>

            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center dark:text-white/50 text-gray-500 dark:hover:bg-white/[0.05] hover:bg-gray-100 transition-all"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 inset-x-0 z-40 dark:bg-[#100d09]/96 bg-white/96 backdrop-blur-xl border-b dark:border-white/[0.05] border-gray-200"
          >
            <div className="px-6 py-3 flex flex-col gap-1">
              {navLinks.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(href)}
                  className="text-left px-4 py-3 rounded-lg dark:text-white/75 text-gray-700 hover:dark:bg-white/[0.05] hover:bg-gray-100 text-sm font-medium transition-all"
                >
                  {label}
                </motion.button>
              ))}
              <div className="pt-2 pb-1 border-t dark:border-white/[0.05] border-gray-200 mt-1">
                <button onClick={() => go('contact')} className="w-full btn-primary justify-center text-sm mt-2">
                  Hire me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
