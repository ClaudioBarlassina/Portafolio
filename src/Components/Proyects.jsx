import ProjectCard from './ProjectCard.jsx'

import fondo5 from "../assets/fondo5.png"
import { useStore } from '../../Zustand/store.js'

const Proyects = () => {

  const {t} = useStore()

  {console.log(t)}
  return (
    <div id="projects">
      <section className="projects" data-aos="fade-up">
        <img src={fondo5} alt="" className='fondo5' data-aos="zoom-up"  data-aos-delay="800"/>
        <h2  data-aos="fade-up"  data-aos-delay="100">{t.projects.title}</h2>
        <div className='projects-card' data-aos="fade-up"  data-aos-delay="400" >

     {console.log(t.projects[1].ecommerce)}
         
      <ProjectCard project={t.projects[1].ecommerce}></ProjectCard>
       <ProjectCard project={t.projects[2].moduCommerce}></ProjectCard>
       <ProjectCard project={t.projects[3].ferreteriaPorMayor}></ProjectCard>
        </div>
      </section>
    </div>
  )
}

export default Proyects
