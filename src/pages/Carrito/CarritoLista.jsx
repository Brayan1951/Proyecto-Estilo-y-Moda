import React from 'react'


function CarritoItem({producto,deleteCarrito,index}) {
    const { nombre, cantidad, precio,imagen }=producto

    return(
        <div className="detalle-lista-item" >
        <img
          src={imagen}
          alt="Camisa Gris"
          className="product-image"
        />
        <div className="product-info">
          <h3>Camisa Gris</h3>
          <p>Camisa gris de algodón</p>
          <p><strong>Talla:</strong> M</p>
        </div>
        <div className="product-price">
          <p><strong>Precio:</strong> S/ {precio}</p>
          <p><strong>Cantidad:</strong> {cantidad}</p>
          <p><strong>Total:</strong> S/ {precio*cantidad}</p>
        </div>
        {/* <div className="product-quantity">
          <button>-</button>
          <span>{cantidad}</span>
          <button>+</button>
        </div> */}
        <div className="product-remove">
          <button className="remove-button"  onClick={() => deleteCarrito(index)}>delete</button>
        </div>
      </div>
    )
    
}



export default function CarritoLista({carrito=[],deleteCarrito}) {
  return (
    <div className="carrito-lista">
    <h3>Carrito de Compras (cantidad de pedidos: {carrito.length}) </h3>
    <div className="detalle-lista">
      {
        carrito.map((producto, index) => (
            <CarritoItem producto={producto} deleteCarrito={deleteCarrito} key={index} index={index}/>
          
        ))
      }


    </div>
 
  </div>

  )
}
