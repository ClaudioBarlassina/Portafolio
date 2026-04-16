import React from 'react'
import Github from "../assets/GitHub.png"
import Linkedin from "../assets/linkedin.png"
import Email from "../assets/Email3.webp"

import { Typewriter } from 'react-simple-typewriter'
import { useStore } from '../../Zustand/store'


const Contacts = () => {
  const {t} = useStore()
  console.log(t)
  return (
    <div>
      <section id="contact" className="contact " >
        <h1 data-aos="fade-up" data-aos-delay="100">{[t.contact.title]}</h1>
        <div  className='conteiner-contacto'>


          <div className='seccion1-contacto'>
            <h2 data-aos="zoom-in"> <Typewriter
                          words={['Claudio Barlassina']}
                          loop={true}
                          cursor
                          cursorStyle="|"
                          typeSpeed={200}
                          deleteSpeed={0}
                          delaySpeed={10000}
                        ></Typewriter></h2>
             <p className='parrafo' data-aos="fade-up" data-aos-delay="400">{[t.contact.description]}</p>
          </div>
             <div className='seccion2-contacto'>
               <p data-aos="fade-left" data-aos-delay="500">{[t.contact.location]}</p>
        <ul>
          <li>
            <a href="https://github.com/ClaudioBarlassina" data-aos="fade-up" data-aos-delay="600"><img src={Github} alt="" /></a>
          </li>
          <li>
            <a href="https://linkedin.com/in/claudiobarlassina" data-aos="fade-up" data-aos-delay="700"><img src={Linkedin} alt="" /></a>
          </li>
          <li>
            <a href="mailto:claudio_barlassina_ar@hotmail.com" data-aos="fade-up" data-aos-delay="800"><img src={Email} alt="" /></a>
          </li>
        </ul>
             </div>

        </div>
       
      </section>
    </div>
  )
}

export default Contacts
