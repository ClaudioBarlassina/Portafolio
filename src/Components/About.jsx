import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import css3 from '../assets/css3.png'
import git from '../assets/git.png'
import html5 from '../assets/html5.png'
import github from '../assets/GitHub.png'
import nodejs from '../assets/Node.js.png'
import reactjs from '../assets/React.png'
import supabase from '../assets/Supabase.png'
import vercel from '../assets/vercel.png'
import mongoDB from '../assets/mongo.png'
import firebase from '../assets/firebase.png'
import stripe from '../assets/Stripe.png'
import { useStore } from '../../Zustand/store'

const skills = [
  { src: reactjs, name: 'React' },
  { src: html5, name: 'HTML5' },
  { src: css3, name: 'CSS3' },
  { src: nodejs, name: 'Node.js' },
  { src: supabase, name: 'Supabase' },
  { src: vercel, name: 'Vercel' },
  { src: github, name: 'GitHub' },
  { src: git, name: 'Git' },
  { src: mongoDB, name: 'MongoDB' },
  { src: firebase, name: 'Firebase' },
  { src: stripe, name: 'Stripe' },
]

const About = () => {
  const { t } = useStore()
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const skillsRef = useRef(null)
  const parallaxRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── 1. PARAGRAPHS: fade-up with stagger ──
      const paragraphs = textRef.current?.querySelectorAll('p, h3, .about-ctas')
      if (paragraphs) {
        gsap.fromTo(
          paragraphs,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // ── 2. SKILLS: random direction stagger ──
      const skillItems = skillsRef.current?.children
      if (skillItems) {
        Array.from(skillItems).forEach((item) => {
          const directions = [
            { x: -60, y: 0 },   // left
            { x: 60, y: 0 },    // right
            { x: 0, y: -50 },   // top
            { x: 0, y: 50 },    // bottom
            { x: -40, y: -40 }, // top-left
            { x: 40, y: -40 },  // top-right
            { x: -40, y: 40 },  // bottom-left
            { x: 40, y: 40 },   // bottom-right
          ]
          const dir = directions[Math.floor(Math.random() * directions.length)]
          const rot = (Math.random() - 0.5) * 40

          gsap.fromTo(
            item,
            {
              x: dir.x,
              y: dir.y,
              opacity: 0,
              scale: 0.6,
              rotate: rot,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.7,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: skillsRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
        })
      }

      // ── 3. Subtle parallax on the background layer ──
      if (parallaxRef.current) {
        gsap.to(parallaxRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      }

      // ── 4. Section entry reveal (scene change gradient) ──
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.6 },
        {
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    // ── GSAP hover effects for skill items ──
    const skillItems = skillsRef.current?.children
    const hoverCleanups = []

    if (skillItems) {
      Array.from(skillItems).forEach((item) => {
        const img = item.querySelector('img')

        const onEnter = () => {
          gsap.to(item, {
            boxShadow: '0 14px 36px rgba(100, 255, 218, 0.18)',
            duration: 0.3,
            ease: 'power2.out',
          })
          if (img) {
            gsap.to(img, {
              rotate: '10deg',
              scale: 1.2,
              duration: 0.35,
              ease: 'back.out(2)',
            })
          }
        }

        const onLeave = () => {
          gsap.to(item, {
            boxShadow: '0 0 0 rgba(100, 255, 218, 0)',
            duration: 0.3,
            ease: 'power2.out',
          })
          if (img) {
            gsap.to(img, {
              rotate: '0deg',
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            })
          }
        }

        item.addEventListener('mouseenter', onEnter)
        item.addEventListener('mouseleave', onLeave)
        hoverCleanups.push(() => {
          item.removeEventListener('mouseenter', onEnter)
          item.removeEventListener('mouseleave', onLeave)
        })
      })
    }

    return () => {
      ctx.revert()
      hoverCleanups.forEach((fn) => fn())
    }
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div ref={parallaxRef} className="about-parallax-bg" />
      <div className="about-header">
        <h2>{t.about.title}</h2>
        <p className="about-intro">{t.about.intro}</p>
      </div>
      <div className="secc-about">
        <div className="about-sec1" ref={textRef}>
          <h3>{t.about.subtitle}</h3>
          <p>{t.about.description1}</p>
          <p>{t.about.description2}</p>
          <p>{t.about.description3}</p>
          <p>{t.about.opportunities}</p>
          <div className="about-ctas">
            <a href="#contact" className="enlases">{t.about.ctaContact}</a>
            <a href="#projects" className="enlases enlases-outline">{t.about.ctaProjects}</a>
          </div>
        </div>
        <div className="about-sec2" ref={skillsRef}>
          {skills.map((skill, i) => (
            <div className="skill-item" key={i}>
              <img src={skill.src} alt={skill.name} />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
