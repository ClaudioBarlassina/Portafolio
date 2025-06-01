import data from '../Data/Data.js'
import Card from './Card'
import fondo5 from "../assets/fondo5.png"

const Proyects = () => {


  {console.log(data)}
  return (
    <div id="projects">
      <section className="projects" data-aos="fade-up">
        <img src={fondo5} alt="" className='fondo5' data-aos="zoom-up"  data-aos-delay="800"/>
        <h2  data-aos="fade-up"  data-aos-delay="100">Proyectos</h2>
        <div className='projects-card' data-aos="fade-up"  data-aos-delay="400" >

        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            img={item.img}
            nombre={item.nombre}
            descripcion={item.descripcion}
            git={item.git}
            url={item.url}
          ></Card>
        ))}
        </div>
      </section>
    </div>
  )
}

export default Proyects
