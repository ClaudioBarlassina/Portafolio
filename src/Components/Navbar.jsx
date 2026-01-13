import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logoCB from "../../public/logoCB1.png"
import { useStore } from '../../Zustand/store';
import españa from "../assets/espana.png"
import Usa from "../assets/usa.png"

const Navbar = () => {
const {setlang, t} = useStore()
console.log(t)
  const [isOpen, setOpen ] = useState(false)
  

function handlerOpen () {
  
  setOpen(!isOpen)
  console.log(isOpen)
}
 


  return (
    <div>
      <nav className="navbar" data-aos="flip-up">
        
        <div className="navbar-logo"><img src={logoCB} alt="" className='logoCB' /></div>
          <button className="navbar-button-lang"onClick={()=> setlang("es")}><img src={españa}  ></img></button>
          <button   className="navbar-button-lang" onClick={()=> setlang("en")}><img src={Usa} ></img></button>
        <div className='icono-hambur'>

        <GiHamburgerMenu onClick={handlerOpen}/>
        </div>
       
        <ul className="navbar-links">
          <li>
            <a href="#hero">{t.navbar.home}</a>
          </li>
          <li>
            <a href="#about">{t.navbar.about}</a>
          </li>
          <li>
            <a href="#projects">{t.navbar.projects}</a>
          </li>
          <li>
            <a href="#contact">{t.navbar.contact}</a>
          </li>
        </ul>
        <div className={`navbar-cont-desplegable ${isOpen ? "open" : " "}`}>
        <ul className="navbar-desplegable">
          <li>
            <a href="#hero">{t.navbar.home}</a>
          </li>
          <li>
            <a href="#about">{t.navbar.about}</a>
          </li>
          <li>
            <a href="#projects">{t.navbar.projects}</a>
          </li>
          <li>
            <a href="#contact">{t.navbar.contact}</a>
          </li>
        </ul>

        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
