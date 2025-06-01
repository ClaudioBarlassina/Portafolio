import React from 'react'
import fondo2 from '../assets/fondo2c.png'

import css3 from '../assets/css3.png'
import git from '../assets/git.png'
import html5 from '../assets/html5.png'
import github from '../assets/GitHub.png'
import Nodejs from '../assets/Node.js.png'
import Reactjs from '../assets/React.png'
import Reduxjs from '../assets/Redux.png'
import Supabase from '../assets/Supabase.png'
import vercel from '../assets/vercel.png'
const About = () => {
  return (
    <div>
      <section id="about" className="about  "data-aos="fade-up">
        <div className="presen">
          <img src={fondo2} alt="" />
          <h2 data-aos="fade-up" data-aos-delay="200">
            Sobre mí
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Aquí encontrarás más información sobre mí, lo que hago y mis
            habilidades actuales principalmente en términos de programación y
            tecnología.
          </p>
        </div>
        <div className="secc-about">
          <div className="about-sec1">
            <h1 data-aos="zoom-in" data-aos-delay="200">Conoceme!</h1>
            <div className="conoceme-about">
              <p data-aos="fade-right" data-aos-delay="200" >
                Soy Desarrollador Web Full-Stack con experiencia en la creación
                y gestión del frontend de sitios y aplicaciones web, enfocado en
                contribuir al éxito del producto final mediante soluciones
                funcionales, accesibles y atractivas.{' '}
              </p>

              <p  data-aos="fade-right" data-aos-delay="300">
                En mis tiempos libres, me dedico a perfeccionar mis habilidades
                aprendiendo las últimas tecnologías y desarrollando aplicaciones
                orientadas a resolver necesidades reales.
              </p>

              <p  data-aos="fade-right" data-aos-delay="400">
                Podés consultar algunos de mis trabajos en la sección Proyectos.
              </p>

              <p  data-aos="fade-right" data-aos-delay="500">
                {' '}
                Estoy abierto a oportunidades laborales donde pueda aportar
                valor, seguir creciendo profesionalmente y formar parte de
                equipos que compartan la pasión por la tecnología y la
                innovación.
              </p>
              <a href="#contact" data-aos="zoom-in" data-aos-delay="700" className='enlases'> CONTACTO</a>
              {/* <button  data-aos="flip-left" data-aos-delay="700" onClick="#contact" className='enlases'>CONTACTO</button> */}
            </div>
          </div>
          <div className="about-sec2">
            <div className="empresa" data-aos="fade-up" data-aos-delay="200">
              <img src={Reactjs} alt="" />
            </div>
            <div className="empresa" data-aos="fade-up" data-aos-delay="300">
              <img src={Reduxjs} alt="" />
            </div>
            <div className="empresa" data-aos="fade-up" data-aos-delay="400">
              <img src={html5} alt="" />
            </div>
            <div className="empresa" data-aos="fade-up" data-aos-delay="500">
              <img src={css3} alt="" />
            </div>
            <div className="empresa" data-aos="fade-up" data-aos-delay="600">
              <img src={Nodejs} alt="" />
            </div>
            <div className="empresa" data-aos="fade-up" data-aos-delay="700">
              <img src={Supabase} alt="" />
            </div>
            <div className="empresa" data-aos="fade-up" data-aos-delay="800">
              <img src={vercel} alt="" />
            </div>
            <div className="empresa" data-aos="fade-up" data-aos-delay="900">
              <img src={github} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
