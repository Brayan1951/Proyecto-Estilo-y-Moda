import React from 'react'
import './sedes.css'
import Sedes from './Sedes';

export function SedesPage() {
  return (

    <section className='sedes-container'>
      <h1>Sedes</h1>
      <p className="sedes-description">
        Ubícanos en las siguientes sedes, además de contar con una alta gama de productos también son puntos de recojo para los productos adquiridos de manera online.
      </p>
      <div className="sedes">

        <div className="sede">
          <img src="/img/sedes/Sedes_1.jpg" alt="Imagen de la sede 1" className="sede-imagen" />
          <p className="sede-direccion">
            Av. Paseo de la República S/N Urb Matellini<br />
            Chorrillos, Lima<br />
            Perú
          </p>
        </div>

        <div className="sede">
          <p className="sede-direccion">
            Av. Paseo de la República S/N Urb Matellini<br />
            Chorrillos, Lima<br />
            Perú
          </p>
          <img src="/img/sedes/Sedes_2.jpg" alt="Imagen de la sede 2" className="sede-imagen" />
        </div>

        <div className="sede">
          <img src="/img/sedes/Sedes_3.jpg" alt="Imagen de la sede 3" className="sede-imagen" />
          <p className="sede-direccion">
            Panamericana Norte Av. Tomas Valle<br />
            Los Olivos, Lima<br />
            Perú
          </p>
        </div>
      </div>

    </section>
  );
}
