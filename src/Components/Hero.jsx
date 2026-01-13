import React from 'react'
import fondo from '../assets/fondo.jpg'
import { Typewriter } from 'react-simple-typewriter'
import { useStore } from '../../Zustand/store';

const Hero = () => {
const { t} =useStore()


  return (
    <div> 
      
      <section id="hero" className="hero">
        <div className="cont-pri">
          <h2 data-aos="zoom-in" data-aos-delay="400">
            {/* Hola, Soy Claudio Barlassina */}
            {t.home.title}
          </h2>
          <h1>
            <Typewriter
              words={[t.home.subtitle]}
              // loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={0}
              delaySpeed={10000}
            ></Typewriter>
          </h1>

          <p data-aos="zoom-in" data-aos-delay="800">
            {/* Un desarrollador web orientado a resultados que crea y administra
            sitios web y aplicaciones web que conducen al éxito del producto
            general. */}
            {t.home.description}
          </p>
          <a href="#projects" className="enlases" data-aos="zoom-in"
          data-aos-delay="900">
            {/* PROYECTOS */}
            {t.home.button}
          </a>
        </div>

        <img
          className="imagen-hero"
          src={fondo}
          alt=""
          data-aos="zoom-in"
          data-aos-delay="100"
        />
      </section>
    </div>
  )
}

export default Hero
