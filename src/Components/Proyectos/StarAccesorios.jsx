import React from 'react'
import web from "../../assets/web.png"
import Github from "../../assets/GitHub.png"
import icoReact from '../../assets/React.png'
import icoRed from '../../assets/Redux.png'
import icoCss from '../../assets/css3.png'
import icoSupa from '../../assets/Supabase.png'
import icover from '../../assets/vercel.png'
import mini1 from '../../assets/miniatura-Star.png'
import mini2 from '../../assets/Star/ingresoProductos.png'
import Fondo from '../../assets/Star/fondoStar.png'
import Stock from '../../assets/Star/manejoStock.png'
import logo from '../../assets/Star/logo2-capa.png'
import Pedidos from '../../assets/Star/Pedidos.png'
import carrito from '../../assets/Star/carrito.png'
import comprob from '../../assets/Star/Comprob.png'
import mini6 from "../../assets/Star/miniatura6.png"
import './StarAccesorios.css'

const StarAccesorios = () => {
  return (
    <div className="conteiner-Star">
      <img src={Fondo} alt="" className="fondo" />

      <div className="datos">
        <h1></h1>
        <div className="titulo2">
          <img src={logo} alt="" className="logo" data-aos="zoom-in" data-aos-delay="100"/>
          <a href="https://star-accesorios.vercel.app/" className="enlaseStar" data-aos="zoom-in" data-aos-delay="200">
            <h1 className="tituloPrincipal">Star Accesorios </h1>
          </a>

          <p className="p1" data-aos="zoom-in" data-aos-delay="300">
            Star-Accesorios es una tienda online desarrollada con React para el
            frontend y Supabase como backend, orientada a la venta de accesorios
            de Acero Quirurgico.
          </p>
          <div className="starIconos">
            <img src={icoReact} alt="" className="ic"  data-aos="fade-up" data-aos-delay="300"/>
            <img src={icoRed} alt="" className="ic" data-aos="fade-up" data-aos-delay="400"/>
            <img src={icoCss} alt="" className="ic" data-aos="fade-up" data-aos-delay="500"/>
            <img src={icoSupa} alt="" className="ic" data-aos="fade-up" data-aos-delay="600"/>
            <img src={icover} alt="" className="ic" data-aos="fade-up" data-aos-delay="700" />
          </div>
       
        </div>
        {/* <img src={mini1} alt="" className='imagenes'/> */}
        <div className="formato">
          <img src={mini2} alt="" className="imagenes" data-aos="fade-right" data-aos-delay="200" />
          <div>

          <h2 data-aos="zoom-in" data-aos-delay="300">INGRESO DE PRODUCTOS</h2>
          <p className="p2" data-aos="zoom-in" data-aos-delay="300">
            Cuenta con un panel de administración que permite agregar productos de forma sencilla, así como gestionar los pedidos
            recibidos.
          </p>
          </div>
        </div>
        <div className="formatoinverso">
          <img src={mini6} alt="" className="imagenes" data-aos="fade-left" data-aos-delay="400"/>
          <div className='dato-inverso'>

          <h2  data-aos="zoom-in" data-aos-delay="400">LISTADO DE PRODUCTOS</h2>
          <p className="p2"  data-aos="zoom-in" data-aos-delay="400">
            Permite gestionar los productos ya ingresados, pudiendo modificar sus nombres, precios y cantidad de stock disponibles 
          </p>
          </div>
        </div>
        <div className="formato">
          <img src={Pedidos} alt="" className="imagenes" data-aos="fade-right" data-aos-delay="600"/>
         <div>

         <h2  data-aos="zoom-in" data-aos-delay="500">PANEL DE PEDIDOS</h2>
          <p className="p2"  data-aos="zoom-in" data-aos-delay="500">
            Cada pedido puede descargarse en formato PDF para facilitar el
            armado y control de entregas
          </p>
         </div>
        </div>
        <div className="formatoinverso">
          <img src={Stock} alt="" className="imagenes" data-aos="fade-left" data-aos-delay="800"/>
          <div  className='dato-inverso'>

         <h2  data-aos="zoom-in" data-aos-delay="600">CONTROL DE STOCK 
           </h2>
          <p className="p2"  data-aos="zoom-in" data-aos-delay="600">
            {' '}
            El sistema incluye control de stock y filtros por categoría para
            mejorar la experiencia de búsqueda.
          </p>
          </div>
        </div>
        <div className="formato">
          <img src={carrito} alt="" className="imagenes" data-aos="fade-right" data-aos-delay="1000"/>
          <div>

          <h2  data-aos="zoom-in" data-aos-delay="700">CARRITO DE COMPRAS</h2>
          <p className="p2"  data-aos="zoom-in" data-aos-delay="700">
            {' '}
            El carrito de compras está gestionado con Redux y sincronizado con
            el almacenamiento local (localStorage), lo que garantiza no solo una
            navegación fluida y eficiente, sino también que los productos
            añadidos se conserven incluso si el usuario actualiza o cierra la
            página. Gracias a esta implementación, la experiencia de compra es
            más confiable y cómoda, ya que el usuario no pierde su selección de
            productos ante una recarga accidental del sitio.
          </p>
          </div>
        </div>
        <div className="formatoinverso">
          <img src={comprob} alt="" className="imagenes" data-aos="fade-left" data-aos-delay="1200"/>
          <div className='dato-inverso'>

          <h2  data-aos="zoom-in" data-aos-delay="800">RECIBO DE COMPRA</h2>
          <p className="p2"  data-aos="zoom-in" data-aos-delay="800">
            {' '}
            Al finalizar la compra, los usuarios también pueden descargar un
            comprobante en PDF con el detalle completo de su pedido, incluyendo
            productos, cantidades y monto total a abonar.
          </p>
          </div>
        </div>
        <div className="formatoCentral">
          <img src={mini1} alt="" className="imagen-final" data-aos="fade-right" data-aos-delay="1000"/>
          <div data-aos="zoom-in" data-aos-delay="1200">
            <h1>Tienda Online</h1>
            <div className="icon-final">
              <img src={logo} alt="" className="logo" />
              <h1 className="tituloPrincipal">Star Accesorios </h1>
            </div>
            <p className="p2-cent">
              {' '}
              Ideal para emprendimientos que buscan una solución completa,
              moderna y fácil de usar para gestionar su tienda online.
            </p>
            <a href="https://star-accesorios.vercel.app/" >
              <img src={web} alt="" className='iconosweb-star'  data-aos="fade-up" data-aos-delay="1300"/>
            </a>
            <a href="https://github.com/ClaudioBarlassina/Star-Accesorios">
              <img src={Github} alt=""  className='iconosweb-star' data-aos="fade-up" data-aos-delay="1400"/>
            </a>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  )
}

export default StarAccesorios
