import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logoCB from "../../public/logoCB1.png"
const Navbar = () => {

  const [isOpen, setOpen ] = useState(false)


function handlerOpen () {
  
  setOpen(!isOpen)
  console.log(isOpen)
}
 


  return (
    <div>
      <nav className="navbar" data-aos="flip-up">
        <div className="navbar-logo"><img src={logoCB} alt="" className='logoCB' /></div>
        <div className='icono-hambur'>

        <GiHamburgerMenu onClick={handlerOpen}/>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#hero">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <div className={`navbar-cont-desplegable ${isOpen ? "open" : " "}`}>
        <ul className="navbar-desplegable">
          <li>
            <a href="#hero">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>

        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
