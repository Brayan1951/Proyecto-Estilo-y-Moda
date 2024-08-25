import React, { useState } from 'react'
import './card.css'
import Modal from './Modal'

export function Card({ producto,agregarCarrito }) {
    // console.log(producto);
    // console.log(producto);
    
    
    
    
    const { nombre, precio, imagen, altImagen } = producto

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    const formatearTexto=(texto)=>{
        if (texto.length > 16) {
            return texto.substring(0, 16) + "...";
          } else {
            return texto;
          }
    }


    return (
        <>
            <article>
                <h4>{formatearTexto(nombre)}</h4>
                <div className="imagen-container">
                    <img src={imagen} alt={altImagen} />
                </div>
                <h4>S/ {precio}</h4>
                <button onClick={() => openModal()}>Agregar</button>
                <Modal producto={producto} show={showModal} closeModal={closeModal} agregarCarrito={agregarCarrito} />
            </article>
        </>
    )
}
