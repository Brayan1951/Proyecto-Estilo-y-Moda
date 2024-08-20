import React from 'react'

export default function Modal({ show, closeModal, producto , agregarCarrito}) {
    const { nombre, descripcion, precio, stock, imagen, altImagen } = producto

    
    const confirmacionProducto=(producto)=>{
        agregarCarrito(producto)   
        closeModal()
    }
    
    
    if (!show) {
        return null;
    }



    return (
        <section className='modal'>
            <div className="modal-content">

                <div className="modal-content_informacion">
                    <h1>{nombre}</h1>
                    <div className="imagen-container">
                        <img src={imagen} alt="" />
                    </div>

                </div>
                <div className="modal-content_opciones">
                    <p>{descripcion}</p>
                    <p>Tallas disponibles:</p>
                    <p>

                    S M L
                    </p>
                    <p>Cantidad 1</p>
                    <span>Precio Unitario: S/{precio}</span>

                </div>
                <div className="modal-content-buttons">
                    <button onClick={() => closeModal()}>cerrar</button>
                    <button onClick={() => confirmacionProducto(producto)}>Agregar</button>

                </div>
            </div>
        </section>
    )
}
