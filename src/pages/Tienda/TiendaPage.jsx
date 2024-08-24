import React, { useEffect, useState } from 'react'
import { TodosProductos } from '../../assets/data'
import { Card } from '../../components'

import './tienda.css'
// import s from './img/productos/C1.jpeg' 
// import imagen from './../../assets/img/productos/C1.jpeg'


export function TiendaPage({ setPagina,carrito,setCarrito }) {



  const [productos, setProductos] = useState([])

  // const [carrito, setCarrito] = useState([])



  useEffect(() => {

    setProductos(TodosProductos())

  }, [])

  const agregarCarrito = (producto) => {
    setCarrito((prevValue) => {
      return [...prevValue, { ...producto }]
    })
    // console.log(producto);

  }
  const cantidadCarrito = () => {
    
    let cantidadTotal = 0
    carrito.forEach(({ cantidad }) => {
      cantidadTotal += cantidad
    })
    return cantidadTotal
  }


  return (
    <main className='main-lista'>

      <aside className='filtro-lista'>
        <div className="categoria">
          <h3>Categoria</h3>
          <div className="check-categoria">

            <input type='checkbox' />
            <label htmlFor="Hombre">Hombre</label>
          </div>
          <div className="check-categoria">
            <input type='checkbox' />
            <label htmlFor="Mujer">Mujer</label>
          </div>
          <div className="check-categoria">
            <input type='checkbox' />
            <label htmlFor="Niño">Niño/Niña</label>
          </div>
        </div>
        <hr />
        <div className="carrito-state">
          <h4>Cantidad carrito: {cantidadCarrito()}</h4>
          <button onClick={() => setPagina('carrito')}>Carrito</button>
        </div>

      </aside>




      <section className='lista-productos'>

        {
          productos.map((producto, index) => {
            return <Card producto={producto} key={index} agregarCarrito={agregarCarrito} />

          })
        }
      </section>




    </main>
  )
}
