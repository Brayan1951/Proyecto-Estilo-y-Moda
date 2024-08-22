import React, { useState } from 'react'

export function CarritoPage({ carrito = [], setCarrito }) {

  const deleteCarrito = (index) => {

    const newCarrito = carrito.filter((item,indx) =>  indx!==index)
    setCarrito(newCarrito)
    

  }



  return (
    <section>



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
