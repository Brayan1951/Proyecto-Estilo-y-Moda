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

        <label>Correo Electronico</label>
        <input type="email" />
        <label>Nro Dni / Pasaporte / Cedula</label>
        <input type="text" />
        <label>Nro Celular</label>
        <input type="text" />
        <label>Nombre</label>
        <input type="text" />
        <label>Apellido</label>
        <input type="text" />
        <button>Agregar</button>
      
        <label>Puntos de Entrega</label>
        <select>
          <option>1 entrega</option>
        </select>
      </div>

      <div className="carrito-total">
        <h2>Datos Bancarios</h2>
        <label htmlFor="">Nro de Tarjeta</label>
        <input type='text'/>
        <label htmlFor="">Nombre y Apellido de tarjeta</label>
        <input type='text'/>
        <label htmlFor="">Fecha de Vencimiento</label>
        <input type='text'/>
        <input type='text'/>
        <label htmlFor="">Codigo de verificacion</label>
        <input type='text'/>
        <h2>Total</h2>
        <h4>Sub Total</h4>
        <h4>IGV</h4>
        <h4>Total</h4>
<button>PAgar</button>

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
