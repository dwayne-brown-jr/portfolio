import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IntakeModal from './components/IntakeModal'

export default function App() {
  const [intakeOpen, setIntakeOpen] = useState(false)

  return (
    <div className="bg-[#08080f] text-white min-h-screen font-sans antialiased overflow-x-hidden">
      <Navbar onStartProject={() => setIntakeOpen(true)} />
      <main>
        <Hero onStartProject={() => setIntakeOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <IntakeModal open={intakeOpen} onClose={() => setIntakeOpen(false)} />
    </div>
  )
}
