import React from 'react'
import './boleta.css'

export function Boleta({ viewBoleta, setViewBoleta, carrito = [],Comprar }) {

    const Totales = () => {
        let total = 0
        carrito.forEach((val) => {
          total += val.cantidad * val.precio
        })
    
    
        return total
      }

    if (!viewBoleta) {
        return null;
    }

    return (
        <div className='modal'>
            <div className="modal-content-boleta">
                <div className="cabecera-boleta">
                    <h3>Boleta</h3>
                </div>

                <div className="detalle-boleta">
                    <table>
                        <thead>

                            <tr>
                                <td>N°</td>
                                <td>Producto</td>
                                <td>Talla</td>
                                <td>cantidad</td>
                                <td>Precio</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carrito.map(({nombre,cantidad,talla,precio},key) => (
                                    <tr key={key}>

                                        <td>{key+1}</td>
                                        <td>{nombre}</td>
                                        <td>{talla}</td>
                                        <td>{cantidad}</td>
                                        <td>S/ {precio}</td>
                                    </tr>

                                ))
                            }
                            <tr>
                                <td colSpan={4}>SubTotal</td>
                                <td>S/ { (Totales()/1.18).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>I.G.V.</td>
                                <td>

                                S/ { (Totales()-Totales()/1.18).toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4}>Total</td>
                                <td>S/ {(Totales().toFixed(2))}</td>
                            </tr>
                        </tbody>



                    </table>




                </div>

                <div className="modal-content-buttons-boleta">
                    <button onClick={() => Comprar()}>Terminar!!</button>

                </div>
            </div>
        </div>
    )
}
