import React, { useState } from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { CarritoPage, ContactoPage, InicioPage, NosotrosPage, SedesPage, TiendaPage } from '../pages'

export default function RouterApp() {

  // uso es state para controlar la navegacion
  const [paginaActual, setPaginaActual] = useState('inicio')


  const [carrito, setCarrito] = useState([])

  const changePagina=(pagina='')=>{
    setPaginaActual(pagina)
  }



  const mostartPagina=()=>{

    switch (paginaActual) {
      case 'inicio':
        return <InicioPage/>
      case 'nosotros':
        return <NosotrosPage/>
    
        case 'tienda':
          return <TiendaPage setPagina={changePagina} carrito={carrito} setCarrito={setCarrito} />

        case 'sedes':
          return <SedesPage/>

      case 'contacto':
        return <ContactoPage/>
    
      case 'carrito':
        return <CarritoPage carrito={carrito} setCarrito={setCarrito} setPagina={changePagina} />
    
    
      default:
        return <InicioPage/> 
    }



  }


  return (
    <div>

        <Navbar paginaActual={paginaActual} setPagina={changePagina}/>
        {
          mostartPagina()
        }

    </div>
  )
}
