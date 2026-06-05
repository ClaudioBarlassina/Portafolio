import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const techRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    const image = imageRef.current
    if (!card) return

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        boxShadow: '0 20px 60px rgba(100, 255, 218, 0.15)',
        borderColor: 'rgba(100, 255, 218, 0.25)',
        duration: 0.4,
        ease: 'power2.out',
      })
      if (image) {
        gsap.to(image, {
          scale: 1.08,
          duration: 0.5,
          ease: 'power2.out',
        })
      }
      // Tech badges stagger reappear on hover
      if (techRef.current?.children) {
        gsap.fromTo(
          techRef.current.children,
          { y: 6, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            stagger: 0.03,
            ease: 'power2.out',
          }
        )
      }
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 12px 40px rgba(100, 255, 218, 0.1)',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        duration: 0.4,
        ease: 'power2.out',
      })
      if (image) {
        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
      }
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageOverlay} />
        <img
          ref={imageRef}
          src={`/${project.image}`}
          alt={project.title}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.imageHover}>
          <span>View Project</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.label && (
            <span className={styles.badge}>{project.label}</span>
          )}
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.techList} ref={techRef}>
          {project.tech.map((t, i) => (
            <span key={i} className={styles.techItem}>{t}</span>
          ))}
        </div>

        <div className={styles.featuresList}>
          <h4 className={styles.featuresTitle}>{project.featuresTitle}</h4>
          <ul>
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className={styles.buttons}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoBtn}
            >
              <FaExternalLinkAlt size={12} /> Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
            >
              <FaGithub size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
