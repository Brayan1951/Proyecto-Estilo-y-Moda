import React from 'react'
// import { InicioPage } from '../../pages/Inicio/InicioPage'

// aca obtengo la referencia de la funcion para el cambio de pagina
export function Navbar({ paginaActual,setPagina }) {



  return (


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => setPagina('inicio')}>Estilo y Moda</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
            <li className={(paginaActual==="nosotros")?"nav-item nav-item-select":"nav-item "}>
              <a className="nav-link " href="#" role="button" onClick={() => setPagina('nosotros')} >
                Nosotros
              </a>

            </li>
            <li className={(paginaActual==="tienda")?"nav-item nav-item-select":"nav-item "}>
              <a className="nav-link " href="#" role="button" onClick={() => setPagina('tienda')} >
                Tienda
              </a>

            </li>




            <li className={(paginaActual==="sedes")?"nav-item nav-item-select":"nav-item "}>
              <a className="nav-link" href="#" role="button" onClick={() => setPagina('sedes')} >Sedes</a>
            </li>
            <li className={(paginaActual==="contacto")?"nav-item nav-item-select":"nav-item "}>
              <a className="nav-link" href="#" role="button" onClick={() => setPagina('contacto')} >Contactanos</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>


  )
}
