import React from 'react'
import {Link} from "react-router-dom"
import "./Card.css"
import web from "../assets/web.png"
import github from "../assets/GitHub.png"

const Card = ( {id, img, nombre, descripcion, url, git }) => {
  return (
    <div className='card-conteiner'  data-aos="fade-up"  data-aos-delay="800">
        <div >
<Link to={`/Details/${id}`}>

      <img src={img} alt="" className='img-card' />
</Link>
        </div>
    <div className='info' data-aos="fade-left"  data-aos-delay="800">
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <div className='iconos'>

        <a href={url}><img src={web} alt="" /></a>
        <a href={git}><img src={github} alt="" /></a>
        </div> 
        </div>
      
    </div>
  )
}

export default Card;
