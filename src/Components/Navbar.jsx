import { useState, useEffect, useRef } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import gsap from 'gsap'
import logoCB from '../../public/logoCB1.png'
import { useStore } from '../../Zustand/store'
import españa from '../assets/espana.png'
import usa from '../assets/usa.png'

const SECTION_IDS = ['hero', 'about', 'projects', 'contact']

const Navbar = () => {
  const { setlang, t } = useStore()
  const [isOpen, setOpen] = useState(false)
  const navbarRef = useRef(null)
  const activeLinkRef = useRef(null)
  const glowAnimRef = useRef(null)

  // ── Entry animation ──
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    )
  }, [])

  // ── Scroll-based opacity & border effect ──
  useEffect(() => {
    const navbar = navbarRef.current
    if (!navbar) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const opacity = Math.min(0.95, 0.85 + scrollY * 0.0008)
      const borderColor =
        scrollY > 50
          ? 'rgba(100, 255, 218, 0.12)'
          : 'rgba(255, 255, 255, 0.06)'

      gsap.to(navbar, {
        backgroundColor: `rgba(15, 12, 41, ${opacity})`,
        borderBottomColor: borderColor,
        duration: 0.3,
        ease: 'power1.out',
        overwrite: 'auto',
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Active section detection with IntersectionObserver ──
  useEffect(() => {
    const linkEls = document.querySelectorAll('.navbar-links a')
    if (!linkEls.length) return

    // Set initial active state
    const setActive = (id) => {
      linkEls.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${id}`
        link.classList.toggle('nav-link-active', isActive)
      })

      // GSAP glow on active link
      const activeLink = document.querySelector('.nav-link-active')
      if (activeLink) {
        if (glowAnimRef.current) glowAnimRef.current.kill()
        glowAnimRef.current = gsap.to(activeLink, {
          color: '#64ffda',
          textShadow: '0 0 12px rgba(100, 255, 218, 0.5), 0 0 30px rgba(100, 255, 218, 0.2)',
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
        })
        // Dim non-active links
        linkEls.forEach((link) => {
          if (!link.classList.contains('nav-link-active')) {
            gsap.to(link, {
              color: '#8888a8',
              textShadow: 'none',
              duration: 0.3,
              ease: 'power2.out',
            })
          }
        })
      }
    }

    // Default to hero
    setActive('hero')

    // IntersectionObserver for each section
    const observers = SECTION_IDS.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id)
            }
          })
        },
        { threshold: 0.3, rootMargin: '-60px 0px 0px 0px' }
      )
      observer.observe(el)
      return observer
    }).filter(Boolean)

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  // ── Close mobile menu on link click ──
  useEffect(() => {
    const links = document.querySelectorAll('.navbar-desplegable a, .navbar-links a')
    links.forEach((link) => {
      link.addEventListener('click', () => setOpen(false))
    })
  }, [])

  function handlerOpen() {
    setOpen(!isOpen)
  }

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <img src={logoCB} alt="Claudio Barlassina" className="logoCB" />
      </div>
      <div className="navbar-lang">
        <button className="navbar-button-lang" onClick={() => setlang('es')}>
          <img src={españa} alt="Español" />
        </button>
        <button className="navbar-button-lang" onClick={() => setlang('en')}>
          <img src={usa} alt="English" />
        </button>
      </div>
      <div className="icono-hambur">
        <GiHamburgerMenu onClick={handlerOpen} />
      </div>
      <ul className="navbar-links">
        <li><a href="#hero">{t.navbar.home}</a></li>
        <li><a href="#about">{t.navbar.about}</a></li>
        <li><a href="#projects">{t.navbar.projects}</a></li>
        <li><a href="#contact">{t.navbar.contact}</a></li>
      </ul>
      <div className={`navbar-cont-desplegable ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-desplegable">
          <li><a href="#hero">{t.navbar.home}</a></li>
          <li><a href="#about">{t.navbar.about}</a></li>
          <li><a href="#projects">{t.navbar.projects}</a></li>
          <li><a href="#contact">{t.navbar.contact}</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
