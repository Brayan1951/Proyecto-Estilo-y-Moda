import React from 'react'

export default function DatosCliente() {
  return (
    <div className="carrito-datos">
      <div action="">
        <div className="form-group-all">

          <label>Correo Electronico</label>
          <input type="email" />

        </div>
        <div className="form-group">
          <div className="form-half">
            <label>Nro DNI/Pasaporte/Cedula</label>
            <input type="text" />
          </div>
          <div className="form-half">
            <label>Nro Celular</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-half">
            <label>Nombre</label>
            <input type="text" />
          </div>
          <div className="form-half">
            <label>Apellido</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-selects">
          <label>Puntos de Entrega</label>
          <select className="select-box">
            <option value="" disabled selected hidden>Seleccionar punto de entrega</option>

            <option>1 entrega</option>
          </select>
        </div>

      </div>
      <div>

        <div className="form-group-all">

          <label>Nro de Tarjeta</label>
          <input type="text" />

        </div>
        <div className="form-group">
          <div className="form-half">
            <label>Nombre</label>
            <input type="text" />
          </div>
          <div className="form-half">
            <label>Apellido</label>
            <input type="text" />
          </div>
        </div>





        <div className="form-group">
          <div className="form-half">
            <label>Fecha de vencimiento de la tarjeta</label>
            <input type="text" />
          </div>
          <div className="form-half">
            <label>(MM/YY)</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-half">
            <label>Codigo de seguridad</label>
            <input type="text" />
          </div>
        </div>

      </div>


      <button className='submit-button'>Agregar</button>


    </div>
  )
}
