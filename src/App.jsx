import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'

gsap.registerPlugin(ScrollTrigger)

const SECTIONS = ['hero', 'about', 'projects', 'contact']

function App() {
  const appRef = useRef(null)
  const progressRef = useRef(null)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  // Scroll progress bar — thin indicator at the top
  useEffect(() => {
    if (!progressRef.current) return

    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
  }, [])

  // Active section detection for progress dots
  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      )
      observer.observe(el)
      return observer
    }).filter(Boolean)

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <div ref={appRef}>
      <div ref={progressRef} className="scroll-progress" />

      {/* Section progress dots */}
      <nav className="section-progress" aria-label="Section navigation">
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`section-progress-dot ${activeSection === id ? 'active' : ''}`}
            aria-label={`Go to ${id}`}
          />
        ))}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
