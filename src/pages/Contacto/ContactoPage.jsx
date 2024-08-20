import React from 'react'


import './contacto.css'

export function ContactoPage() {
  return (
    <div className="contacto-container">
      <h2>Contáctanos</h2>
      <div className="contacto-content">
        <form className="contacto-form">
          <div className="form-group">
            <label>Nombres</label>
            <input type="text" placeholder="Nombres" />
          </div>
          <div className="form-group">
            <label>Apellidos</label>
            <input type="text" placeholder="Apellidos" />
          </div>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" placeholder="Correo Electrónico" />
          </div>
          <div className="form-group">
            <label>Ciudad</label>
            <input type="text" placeholder="Ciudad" />
          </div>
          <div className="form-group">
            <label>Distrito</label>
            <input type="text" placeholder="Distrito" />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea placeholder="Describa su problema"></textarea>
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
