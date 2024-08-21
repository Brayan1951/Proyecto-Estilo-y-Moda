import React from 'react'
import { useForm } from '../../hooks'

export default function Modal({ show, closeModal, producto, agregarCarrito }) {
    const { nombre, descripcion, precio, imagen  } = producto

    const {cantidad,changeForm}=useForm({cantidad:1})



    const confirmacionProducto = (producto) => {
        // const canti=parseInt(cantidad)
        agregarCarrito({...producto, cantidad:parseInt(cantidad) })
        closeModal()
        // console.log({...producto,cantidad});
        
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

                    <div className="opciones_cantidad">
                    <label>Cantidad </label><input name='cantidad' value={cantidad} onChange={changeForm} min={1} type='number' />

                    </div>
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
