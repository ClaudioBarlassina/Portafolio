import React  from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'
import StarAccesorios from './Proyectos/StarAccesorios.jsx'
import Burger from './Proyectos/Burger.jsx'
import { useEffect } from 'react'

const Details = () => {
  const { id } = useParams()
   

  useEffect(()=> {
    window.scrollTo(0,0)
  }, [])
  const componentMap = {
    1: <StarAccesorios></StarAccesorios>,
    2: <Burger></Burger>,
  }

  return componentMap[Number(id)]
}

export default Details
