import React from 'react'
import { useForm } from '../../hooks'
import { useState } from 'react'

export default function Modal({ show, closeModal, producto, agregarCarrito }) {
    const { nombre, descripcion, precio, imagen } = producto
    const [talla, setTalla] = useState("")

    const { cantidad, changeForm, resetForm } = useForm({ cantidad: 1 })



    const confirmacionProducto = (producto) => {
        agregarCarrito({ ...producto, cantidad: parseInt(cantidad), talla })

        setTalla("")
        resetForm()
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
                    <div className="button-talla">
                        <button className={talla === 'S' ? "button-select" : ""} onClick={() => setTalla("S")} >S</button>
                        <button className={talla === 'M' ? "button-select" : ""} onClick={() => setTalla("M")}>M</button>
                        <button className={talla === 'L' ? "button-select" : ""} onClick={() => setTalla("L")} >L</button>
                    </div>

                    <div className="opciones">
                        <h5>Cantidad: </h5>
                        <input name='cantidad' value={cantidad} onChange={changeForm} min={1} type='number' />
                    </div>
                    <div className="opciones">
                        <h5>Precio Unitario:</h5>
                        <span>S/{precio}</span>

                    </div>
                    <div className="opciones">
                        <h5>Precio Total:</h5>
                        <span>S/{precio * cantidad}</span>
                    </div>

                </div>
                <div className="modal-content-buttons">
                    <button onClick={() => closeModal()}>cerrar</button>
                    <button disabled={(cantidad <= 0 || talla === '') ? true : false} onClick={() => confirmacionProducto(producto)}>Agregar</button>

                </div>
            </div>
        </section>
    )
}
