import React from 'react'
import Slider from 'react-slick'
import { div } from 'three/tsl'

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
  }

  const imagenes = import.meta.glob('../assets/*.png', { eager: true })
  const listado = Object.values(imagenes).map((mod) => mod.default)

  return (
    <div className="slider-container" data-aos="flip-up">
      <Slider {...settings}>
        {listado.map((src, index) => (
          <div>
            <img src={src} key={index} alt="" />
          </div>
        ))}

        {/* <div>
         <img src={React} alt="" />
         <h1>ReactJs</h1>
        </div>
        <div>
          <img src={Redux.png} alt="" />
         <h1>ReduxJs</h1>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  )
}

export default AutoPlay
