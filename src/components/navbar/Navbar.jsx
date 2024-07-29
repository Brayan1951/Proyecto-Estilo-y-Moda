import React, { useState } from 'react'
import { InicioPage } from '../../pages/Inicio/InicioPage'

export function Navbar({ setPagina }) {


  return (


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => setPagina('inicio')}>Estilo y Moda</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nosotros
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="Nosotros.html">Historia</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="Nosotros.html#Mision">Mision</a></li>
                <li><a className="dropdown-item" href="Nosotros.html#Vision">Vision</a></li>
              </ul>
            </li> */}
            <li className="nav-item ">
              <a className="nav-link " href="#" role="button" onClick={() => setPagina('nosotros')} >
                Nosotros
              </a>

            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#" role="button" onClick={() => setPagina('tienda')} >
                Tienda
              </a>

            </li>

            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sedes
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="Sedes.html#losolivos">Sede Los Olivos</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="Sedes.html#lince">Sede Lince</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="Sedes.html#chorillos">Sede Chorrillos</a></li>
              </ul>
            </li> */}



            <li className="nav-item">
              <a className="nav-link" role="button" onClick={() => setPagina('sedes')} >Sedes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" role="button" onClick={() => setPagina('contacto')} >Contactanos</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>


  )
}
