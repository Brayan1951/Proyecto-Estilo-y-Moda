import React from 'react'

export default function DetalleTotal({ carrito = [] }) {

  const Totales = () => {
    let total = 0
    carrito.forEach((val) => {
      total += val.cantidad * val.precio
    })


    return total
  }




  return (
    <div className="carrito-total">
      <div className="total-info">
        <h4>Sub Total</h4>
        <h5>S/ { (Totales()/1.18).toFixed(2)}</h5>
      </div>
      <div className="total-info">
        <h4>IGV</h4>
        <h5>S/ {(Totales()- (Totales()/1.18)).toFixed(2)}</h5>
      </div>
      <div className="total-info">
        <h4>Sub Total</h4>
        <h5>S/ {Totales().toFixed(2)}</h5>
      </div>
    <div className="total-info">

      <button disabled={Totales()<=0} className='total-pagar'>Pagar</button>
    </div>

    </div>
  )
}
