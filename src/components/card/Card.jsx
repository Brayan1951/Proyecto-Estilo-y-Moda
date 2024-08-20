import React, { useState } from 'react'
import './card.css'
import Modal from './Modal'

export function Card({ producto,agregarCarrito }) {
    // console.log(producto);
    // console.log(producto);
    
    
    
    
    const { nombre, descripcion, precio, stock, imagen, altImagen } = producto

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }




    return (
        <>
            <article>
                <h3>{nombre}</h3>
                <div className="imagen-container">
                    <img src={imagen} alt="" />
                </div>
                <h4>S/ {precio}</h4>
                <button onClick={() => openModal()}>Agregar</button>
                <Modal producto={producto} show={showModal} closeModal={closeModal} agregarCarrito={agregarCarrito} />
            </article>
        </>
    )
}
