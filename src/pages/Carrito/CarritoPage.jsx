import React, { useState } from 'react'

import './carrito.css'
import DatosCliente from './DatosCliente'
import DetalleTotal from './DetalleTotal'
import CarritoLista from './CarritoLista'

export function CarritoPage({ carrito = [], setCarrito,setPagina }) {

  const deleteCarrito = (index) => {

    const newCarrito = carrito.filter((item, indx) => indx !== index)
    setCarrito(newCarrito)


  }

  const [validar, setValidar] = useState(false)

  return (
    <section className='carrito-detalle'>

      <DatosCliente validar={validar} setValidar={setValidar}  />



      <DetalleTotal setCarrito={setCarrito}  carrito={carrito} validar={validar} setPagina={setPagina}/>
      <CarritoLista carrito={carrito} deleteCarrito={deleteCarrito} />


    </section>
  )
}
