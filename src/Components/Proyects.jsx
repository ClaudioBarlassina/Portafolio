import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from './ProjectCard'
import { useStore } from '../../Zustand/store'

const Proyects = () => {
  const { t } = useStore()
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  const projects = [
    t.projects[1].cvManager,
    t.projects[2].ecommerce,
    t.projects[3].ferreteriaPorMayor,
    t.projects[4].moduCommerce,
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── 1. Title entry ──
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // ── 2. SECTION PIN: create a visual "chapter" feel ──
      const section = sectionRef.current
      const cards = cardsRef.current?.children
      if (!cards || cards.length === 0) return

      // Set up pin-spacer: the entire section wrapper
      ScrollTrigger.create({
        trigger: section,
        start: 'top 10%',
        end: `bottom bottom`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: 'projects-pin',
      })

      // ── 4. 3D CARD REVEAL with perspective ──
      // Each card gets a dramatic 3D entry: rotates from perspective
      Array.from(cards).forEach((card, i) => {
        // Random 3D entry direction
        const rotateY = i % 2 === 0 ? -60 : 60
        const rotateX = 20

        gsap.fromTo(
          card,
          {
            opacity: 0,
            rotateY: rotateY,
            rotateX: rotateX,
            z: -200,
            scale: 0.85,
            filter: 'blur(4px)',
          },
          {
            opacity: 1,
            rotateY: 0,
            rotateX: 0,
            z: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: `top+=${i * 60} 75%`,
              end: `top+=${i * 60 + 100} 25%`,
              scrub: 1.2,
              toggleActions: 'play none none none',
            },
          }
        )

        // Add a subtle float after entry
        gsap.to(card, {
          y: -4,
          duration: 2 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        })
      })

      // ── 5. Section entry reveal ──
      gsap.fromTo(
        section,
        { opacity: 0.4 },
        {
          opacity: 1,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id="projects" className="projects-wrapper" ref={sectionRef}>
      <section className="projects">
        <h2 ref={titleRef}>{t.projects.title}</h2>
        <div className="projects-card" ref={cardsRef}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Proyects
