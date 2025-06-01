
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Details from './Components/Details'
import {  Routes, Router, Route } from 'react-router-dom'
import Home from './Components/Home'




function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])




  return (
    <>

    
      {/* <Navbar></Navbar>
      <Hero></Hero>
      {/* <AutoPlay></AutoPlay> */}
      {/* <About></About>
      <Proyects></Proyects> 
      <Contacts></Contacts> */} 

   
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/Details/:id' element={<Details></Details>}></Route>
      </Routes>

 



    </>
  )
}

export default App
