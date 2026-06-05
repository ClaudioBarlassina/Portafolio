import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useStore } from '../../Zustand/store'

const Contacts = () => {
  const { t } = useStore()
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const iconsRef = useRef(null)
  const typewriterRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── 1. GSAP Typewriter: "Claudio Barlassina" letter by letter ──
      const twEl = typewriterRef.current
      if (twEl) {
        const fullName = 'Claudio Barlassina'
        twEl.textContent = ''
        // Create a span for each character
        const chars = fullName.split('').map((char) => {
          const span = document.createElement('span')
          span.textContent = char === ' ' ? '\u00A0' : char
          span.style.display = 'inline-block'
          span.style.opacity = '0'
          span.style.willChange = 'opacity, transform'
          twEl.appendChild(span)
          return span
        })

        // Animate each character appearing with a typewriter feel
        gsap.to(chars, {
          opacity: 1,
          duration: 0.05,
          stagger: 0.06,
          ease: 'none',
          scrollTrigger: {
            trigger: typewriterRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })

        // Accent cursor blink after typing completes
        const cursor = document.createElement('span')
        cursor.textContent = '|'
        cursor.style.cssText = `
          display: inline-block;
          color: var(--accent);
          font-weight: 300;
          margin-left: 2px;
          animation: blink-cursor 0.8s step-end infinite;
        `
        twEl.appendChild(cursor)
      }

      // ── 2. Content children stagger ──
      gsap.fromTo(
        contentRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // ── 3. Section scene change reveal ──
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.5 },
        {
          opacity: 1,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    // ── 4. Float/bounce animation for social icons ──
    const iconEls = iconsRef.current?.children
    const iconAnimations = []

    if (iconEls) {
      Array.from(iconEls).forEach((icon, i) => {
        const anim = gsap.to(icon, {
          y: -8,
          duration: 1.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 0.35,
        })
        iconAnimations.push(anim)
      })
    }

    return () => {
      ctx.revert()
      iconAnimations.forEach((anim) => anim.kill())
    }
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <h2>{t.contact.title}</h2>
      <div className="conteiner-contacto" ref={contentRef}>
        <div className="seccion1-contacto">
          <p className="parrafo">{t.contact.description}</p>
        </div>
        <div className="seccion2-contacto">
          <p className="contact-location">{t.contact.location}</p>
          <div className="contact-typewriter-container">
            <span ref={typewriterRef} className="contact-typewriter-name" />
          </div>
          <div className="contact-icons" ref={iconsRef}>
            <a
              href="https://github.com/ClaudioBarlassina"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://linkedin.com/in/claudiobarlassina"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:claudio_barlassina_ar@hotmail.com"
              className="contact-icon-link"
              aria-label="Email"
            >
              <FaEnvelope size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
