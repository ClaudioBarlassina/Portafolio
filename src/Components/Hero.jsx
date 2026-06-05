import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Typewriter } from 'react-simple-typewriter'
import { useStore } from '../../Zustand/store'

const Hero = () => {
  const { t } = useStore()
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── 1. SPLIT TEXT: Title word-by-word ──
      const titleEl = titleRef.current
      if (titleEl) {
        const words = titleEl.textContent.split(' ')
        titleEl.innerHTML = ''
        const wordSpans = words.map((word, i) => {
          const span = document.createElement('span')
          span.textContent = word
          span.style.display = 'inline-block'
          span.style.marginRight = '0.35em'
          span.style.willChange = 'transform, opacity'
          titleEl.appendChild(span)
          if (i < words.length - 1) {
            titleEl.appendChild(document.createTextNode('\u00A0'))
          }
          return span
        })

        gsap.fromTo(
          wordSpans,
          { y: 80, opacity: 0, rotateX: -30, scale: 0.85 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: 'back.out(1.7)',
          }
        )
      }

      // ── 2. Subtitle container fade-in ──
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.8, ease: 'power3.out' }
        )
      }

      // ── 3. Description fade-in ──
      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 1.0, ease: 'power2.out' }
        )
      }

      // ── 4. Button entry ──
      gsap.fromTo(
        btnRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 1.2, ease: 'power3.out' }
      )

      // ── 5. CTA gentle pulse ──
      gsap.to(btnRef.current, {
        scale: 1.04,
        boxShadow: '0 0 30px rgba(100, 255, 218, 0.25)',
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.0,
      })
    }, heroRef)

    // ── Floating decorative particles (unchanged) ──
    const particles = []
    const heroEl = heroRef.current
    if (!heroEl) return

    for (let i = 0; i < 10; i++) {
      const p = document.createElement('div')
      p.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(100, 255, 218, ${Math.random() * 0.25 + 0.08});
        border-radius: 50%;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        z-index: 0;
      `
      heroEl.appendChild(p)
      particles.push(p)

      gsap.to(p, {
        y: `-=${Math.random() * 50 + 30}`,
        x: `+=${(Math.random() - 0.5) * 40}`,
        opacity: Math.random() * 0.3 + 0.15,
        duration: Math.random() * 4 + 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 3,
      })
    }

    return () => {
      particles.forEach((p) => p.remove())
      ctx.revert()
    }
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="cont-pri">
          <h2 ref={titleRef}>{t.home.title}</h2>
          <h1 ref={subtitleRef}>
            <Typewriter
              words={[t.home.subtitle]}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={0}
              delaySpeed={10000}
            />
          </h1>
          <p ref={descriptionRef}>{t.home.description}</p>
          <a href="#projects" className="enlases" ref={btnRef}>
            {t.home.button}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
