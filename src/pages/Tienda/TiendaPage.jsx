import React, { useEffect, useState } from 'react'
import { TodosProductos } from '../../assets/data'
import { Card } from '../../components'

import './tienda.css'
// import s from './img/productos/C1.jpeg' 
// import imagen from './../../assets/img/productos/C1.jpeg'


export function TiendaPage({ setPagina, carrito, setCarrito }) {



  const [productos, setProductos] = useState([])

  const [selectCategories, setSetselectCategories] = useState([])


  useEffect(() => {

    setProductos(TodosProductos())

  }, [])

  const agregarCarrito = (producto) => {
    setCarrito((prevValue) => {
      return [...prevValue, { ...producto }]
    })

  }





  const cantidadCarrito = () => {

    let cantidadTotal = 0
    carrito.forEach(({ cantidad }) => {
      cantidadTotal += cantidad
    })
    return cantidadTotal
  }


  const handleCheckBox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSetselectCategories([...selectCategories, value])
    } else {

      setSetselectCategories(selectCategories.filter((categoria) => categoria != value))
    }

  }



  useEffect(() => {
    if (selectCategories.length == 0) {
      setProductos(TodosProductos())

    } else {


      const productosFiltrados = TodosProductos().filter((producto) =>
        selectCategories.some((category) => producto.categoria.includes(category))
      );
      setProductos(productosFiltrados)
    }

    // console.log(selectCategories);
    // console.log(productosFiltrados);
    console.log("cambio cate");

  }, [selectCategories])


  return (
    <main className='main-lista'>

      <aside className='filtro-lista'>

        <div className="categoria">
          <h3>Categoria</h3>
          <div className="check-categoria">

            <input value={'hombre'} onChange={handleCheckBox} type='checkbox' />
            <h5 htmlFor="Hombre">Hombre</h5>
          </div>
          <div className="check-categoria">
            <input value={"mujer"} onChange={handleCheckBox} type='checkbox' />
            <h5 htmlFor="Mujer">Mujer</h5>
          </div>
          <div className="check-categoria">
            <input value={"niño"} onChange={handleCheckBox} type='checkbox' />
            <h5 htmlFor="Niño">Niño/Niña</h5>
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
