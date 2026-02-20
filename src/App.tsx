import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'
import { motion, useScroll, useSpring } from 'framer-motion'
import { portfolioData } from './data/portfolio'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary transition-colors duration-300">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-10 border-t border-border text-center">
        <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-[0.2em]">
          Designed & Built by Jhonatan Zarzuri
        </p>
      </footer>

      {/* Side Email / Socials (Brittany Chiang style) */}
      <div className="hidden lg:block fixed left-10 bottom-0 z-40">
        <div className="flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-border">
          <a href={portfolioData.profile.socials.github} target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 text-xs font-mono uppercase tracking-widest [writing-mode:vertical-rl] mb-4">GitHub</a>
          <a href={portfolioData.profile.socials.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 text-xs font-mono uppercase tracking-widest [writing-mode:vertical-rl]">LinkedIn</a>
        </div>
      </div>

      <div className="hidden lg:block fixed right-10 bottom-0 z-40">
        <div className="flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-border">
          <a href={`mailto:${portfolioData.profile.email}`} className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 font-mono text-xs tracking-widest [writing-mode:vertical-rl]">
            {portfolioData.profile.email}
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
