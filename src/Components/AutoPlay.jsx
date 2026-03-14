import React from 'react'
import Slider from 'react-slick'

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
      </Slider>
    </div>
  )
}

export default AutoPlay
