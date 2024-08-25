import React, { useState } from 'react'


import './contacto.css'
import { useForm } from '../../hooks';

export function ContactoPage() {



  const [errors, setErrors] = useState({})

  const { changeForm, ...datos } = useForm({
    nombres: '',
    apellidos: '',
    correo: '',
    ciudad: '',
    distrito: '',
    descripcion: ''

  })

  const ValidarForm = (e) => {
    e.preventDefault()
    let formError = {}

    const { nombres, apellidos, correo,ciudad,distrito,descripcion } = datos


    if (!correo
    ) {
      formError.datos = "Por favor completar todos los datos"
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    const documentoRegex = /^\d{8,10}$/;
    const celularRegex = /^\d{9}$/;
    const tarjetaRegex = /^\d{16}$/;

    const nombre_apellidp = /[a-zA-Z]/;
    if (!nombre_apellidp.test(nombres)) {
      formError.nombres = "El nombre es incorrecto"

    }
    if (!nombre_apellidp.test(apellidos)) {
      formError.apellidos = "Los apellidos son incorrectos"

    }
    if (!emailRegex.test(correo)) {
      formError.email = "El correo electrónico no es válido";
    }
    if (!ciudad) {
      formError.ciudad = "Debe completarse este campo";
    }
    if (!distrito) {
      formError.distrito = "Debe completarse este campo";
    }
    if (!descripcion) {
      formError.descripcion = "Debe completarse este campo";
    }







    setErrors(formError)
    return Object.keys(formError).length === 0;

  }

  return (
    <div className="contacto-container">
      <h2>Contáctanos</h2>
      <div className="contacto-content">
        <form className="contacto-form" onSubmit={(e) => ValidarForm(e)}>
          <div className="form-group">
            <label>Nombres</label>
            <input type="text" name='nombres' value={datos.nombres} onChange={changeForm} placeholder="Nombres" />
          </div>
          {errors.nombres && <span className="error-message">{errors.nombres}</span>}
          <div className="form-group">
            <label>Apellidos</label>
            <input type="text" name='apellidos' value={datos.apellidos} onChange={changeForm} placeholder="Apellidos" />
          </div>
          {errors.apellidos && <span className="error-message">{errors.apellidos}</span>}
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" name='correo' value={datos.correo} onChange={changeForm} placeholder="Correo Electrónico" />

          </div>
          {errors.email && <span className="error-message">{errors.email}</span>}
          <div className="form-group">
            <label>Ciudad</label>
            <input type="text" name='ciudad' value={datos.ciudad} onChange={changeForm} placeholder="Ciudad" />
          </div>
            {errors.ciudad && <span className="error-message">{errors.ciudad}</span>}
          <div className="form-group">
            <label>Distrito</label>
            <input type="text" name='distrito' value={datos.distrito} onChange={changeForm} placeholder="Distrito" />
          </div>
            {errors.distrito && <span className="error-message">{errors.distrito}</span>}
          <div className="form-group">
            <label>Descripción</label>
            <textarea name='descripcion' value={datos.descripcion} onChange={changeForm} placeholder="Describa su problema"></textarea>
          </div>
          <div>
            {errors.descripcion && <span className="error-message">{errors.descripcion}</span>}

          </div>
          {/* <div className="form-group terms">
            <input type="checkbox" />
            <label>Aceptar los términos y condiciones</label>
          </div> */}
          <button type="submit" className="btn-submit">Enviar</button>
        </form>
        <div className="contacto-image">
          <img src="/img/contactanos/Servicio_cliente.jpg" alt="Contact" />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="social-media">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
          <div className="footer-links">
            <a href="#terms">Términos y Condiciones</a>
            <a href="#privacy">Política de Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
