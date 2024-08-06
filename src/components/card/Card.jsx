import React from 'react'
import './card.css'

export default function Card({ producto }) {
    // console.log(producto);
    // console.log(producto);
    const { nombre, descripcion, precio, stock, imagen, altImagen } = producto

    return (
        <article>
            <h3>{nombre}</h3>
            <div className="imagen-container">
                <img src={imagen} alt="" />
            </div>
            <h4>S/ {precio}</h4>
            <button>Agregar</button>
        </article>

    )
}
