import React, { useState } from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { ContactoPage, InicioPage, NosotrosPage, NotFoundPage, SedesPage, TiendaPage } from '../pages'

export default function RouterApp() {

  // uso es state para controlar la navegacion
  const [paginaActual, setPaginaActual] = useState('inicio')

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
          return <TiendaPage/>

        case 'sedes':
          return <SedesPage/>

      case 'contacto':
        return <ContactoPage/>
    
    
      default:
        return <NotFoundPage/> 
    }



  }


  return (
    <div>

      {/* Mando  changePagina para que el componente lo pueda utilizar*/}
        <Navbar setPagina={changePagina}/>
        {
          mostartPagina()
        }

    </div>
  )
}
