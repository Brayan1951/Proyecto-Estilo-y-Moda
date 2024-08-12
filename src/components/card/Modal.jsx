import React from 'react'

export default function Modal({ show, closeModal, producto }) {
    const { nombre, descripcion, precio, stock, imagen, altImagen } = producto
    console.log(show);

    if (!show) {
        return null;
    }

    return (
        <div className='modal'>
            <div className="modal-contet">

                <h1>{nombre}</h1>
                <div className="imagen-container">
                    <img src={imagen} alt="" />
                </div>
                <p>{descripcion}</p>
                <span>S/{precio}</span>
                <button onClick={() => closeModal()}>cerrar</button>
            </div>
        </div>
    )
}
