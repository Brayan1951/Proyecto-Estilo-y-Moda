import React, { useEffect, useState } from 'react'
import { TodosProductos } from '../../assets/data'
import { Card } from '../../components'

import './tienda.css'
import { useForm } from '../../hooks'


export function TiendaPage({ setPagina, carrito, setCarrito }) {

 const {search,changeForm,resetForm}=useForm({search:""})

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





  const TotalCarrito = () => {

    let total = 0
    carrito.forEach(({ cantidad,precio }) => {
      total += cantidad*precio
    })
    return total
  }
  const cantidadCarrito = () => {

    let cantidadTotal = 0
    carrito.forEach(({ cantidad }) => {
      cantidadTotal += cantidad
    })
    return cantidadTotal
  }


  const handleCheckBox = (event) => {
    resetForm()
    const { value, checked } = event.target;
    if (checked) {
      setSetselectCategories([...selectCategories, value])
    } else {

      setSetselectCategories(selectCategories.filter((categoria) => categoria !== value))
    }

  }



  useEffect(() => {
    if (selectCategories.length === 0 ) {
      setProductos(TodosProductos())

    } else {


      const productosFiltrados = TodosProductos().filter((producto) =>
        selectCategories.some((category) => producto.categoria.includes(category))
      );
      setProductos(productosFiltrados)
    }


  }, [selectCategories])

const filtarbyName=()=>{
  if (search==="") {
    setProductos(TodosProductos())
  }else{

    const productFilter=TodosProductos().filter((val)=>val.nombre.toUpperCase().startsWith(search.trim().toUpperCase()))
    
    setProductos(productFilter)
  }
}



  return (
    <main className='main-lista'>

      <aside className='filtro-lista'>
        <div className="filtro-find">
          <input type="text" name='search' value={search} onChange={changeForm} />
          <button onClick={()=>filtarbyName()}>
            <img src="/img/productos/search.png" alt="" />
          </button>
        </div>

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
        <div className="categoria">
     
          <div className="check-categoria">
            <input value={"camisa"} onChange={handleCheckBox} type='checkbox' />
            <h5 htmlFor="Camisas">Camisas</h5>
          </div>
          <div className="check-categoria">
            <input value={"vestido"} onChange={handleCheckBox} type='checkbox' />
            <h5 htmlFor="Vesitos">Vestidos</h5>
          </div>
        </div>
        <div className="carrito-state">
          <h4>Cantidad carrito: {cantidadCarrito()}</h4>
          <h4>Total: S/{TotalCarrito()}</h4>
          <button disabled={cantidadCarrito()<=0?true:false} onClick={() => setPagina('carrito')}>Carrito</button>
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
