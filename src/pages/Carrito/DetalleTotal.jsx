import React from 'react'
import { useState } from 'react'
import { Boleta } from '../../components'

export default function DetalleTotal({ setCarrito,carrito = [],validar,setPagina }) {

  const [viewBoleta, setViewBoleta] = useState(false)

  const Totales = () => {
    let total = 0
    carrito.forEach((val) => {
      total += val.cantidad * val.precio
    })


    return total
  }

const Comprar=()=>{
  setCarrito([])
  setPagina('tienda')
  
  setViewBoleta(false)

}


  return (
    <div className="carrito-total">
{/* 
      {
        viewBoleta?
      } */}
      <Boleta viewBoleta={viewBoleta} setViewBoleta={setViewBoleta} carrito={carrito} Comprar={Comprar}/>
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

      <button disabled={(Totales()<=0||!validar)?true:false} className='total-pagar'  onClick={()=>  setViewBoleta(true)}>Pagar</button>
      {/* <button disabled={(Totales()<=0)?true:false} className='total-pagar' onClick={()=>  setViewBoleta(true)}>Pagar</button> */}
    </div>

    </div>
  )
}
