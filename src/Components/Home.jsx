import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Proyects from '../Components/Proyects'
import Contacts from '../Components/Contacts'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>

      <About></About>
      <Proyects></Proyects>
      <Contacts></Contacts>
    </div>
  )
}

export default Home
