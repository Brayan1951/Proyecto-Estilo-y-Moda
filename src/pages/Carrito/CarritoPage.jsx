import React, { useState } from 'react'

import './carrito.css'

export function CarritoPage({ carrito = [], setCarrito }) {

  const deleteCarrito = (index) => {

    const newCarrito = carrito.filter((item, indx) => indx !== index)
    setCarrito(newCarrito)


  }



  return (
    <section className='carrito-detalle'>

      <div className="carrito-datos">
        <h2>datos</h2>
      </div>

      <div className="carrito-total">
        <h2>Total</h2>
      </div>
      <div className="carrito-lista">
        <h3>Carrito de Compras (cantidad de productos: {carrito.length}) </h3>
        <ul>
          {
            carrito.map(({ nombre, cantidad, precio }, index) => (
              <li key={index}>{nombre} - {cantidad} - {precio} <button onClick={() => deleteCarrito(index)}>delete</button> </li>
            ))
          }
        </ul>
      </div>



    </section>
  )
}
