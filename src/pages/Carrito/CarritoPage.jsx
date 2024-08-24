import React, { useState } from 'react'

import './carrito.css'
import DatosCliente from './DatosCliente'
import DetalleTotal from './DetalleTotal'
import CarritoLista from './CarritoLista'

export function CarritoPage({ carrito = [], setCarrito }) {

  const deleteCarrito = (index) => {

    const newCarrito = carrito.filter((item, indx) => indx !== index)
    setCarrito(newCarrito)


  }



  return (
    <section className='carrito-detalle'>

      <DatosCliente />



      <DetalleTotal />
      <CarritoLista carrito={carrito} deleteCarrito={deleteCarrito} />


    </section>
  )
}
