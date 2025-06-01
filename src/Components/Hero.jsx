import React from 'react'
import fondo from '../assets/fondo.jpg'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div>
      <section id="hero" className="hero">
        <div className="cont-pri">
          <h2 data-aos="zoom-in" data-aos-delay="400">
            Hola, Soy Claudio Barlassina
          </h2>
          <h1>
            <Typewriter
              words={['Desarrollador Web']}
              // loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={0}
              delaySpeed={10000}
            ></Typewriter>
          </h1>

          <p data-aos="zoom-in" data-aos-delay="800">
            Un desarrollador web orientado a resultados que crea y administra
            sitios web y aplicaciones web que conducen al éxito del producto
            general.
          </p>
          <a href="#projects" className="enlases" data-aos="zoom-in"
          data-aos-delay="900">
            PROYECTOS
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
