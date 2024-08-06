import React, { useEffect, useState } from 'react'
import { TodosProductos } from '../../assets/data'
import './tienda.css'
import Card from '../../components/card/Card'
// import s from './img/productos/C1.jpeg' 

// import imagen from './../../assets/img/productos/C1.jpeg'


export function TiendaPage() {

  const [productos, setProductos] = useState([])


  useEffect(() => {

    setProductos(TodosProductos())

  }, [])




  // console.log(

  //   TodosProductos()
  // );


  // console.log(productos[0].getProducto());

  return (
    <main>
      <h1>

        TiendaPage
      </h1>

      <section className='lista-productos'>

        {
          productos.map((producto, index) => {
            return <Card producto={producto} key={index} />

          })
        }
      </section>




    </main>
  )
}
