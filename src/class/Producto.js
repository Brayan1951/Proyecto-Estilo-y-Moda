export class Producto {
  nombre;
  descripcion;
  precio;
  stock;
  imagen;
  altImagen;
  categoria;
  // variantes;

  constructor( nombre, descripcion, precio,stock,categoria=[],imagen='',altImagen='') {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
    this.imagen = imagen;
    this.altImagen = altImagen;
    // this.variantes = [];
  }

  getProducto(){
    return this.nombre
  }
  getPrecio(){
    return this.precio
  }
  getImagen(){
    return this.imagen
  }

  getDescripcion(){
    return this.descripcion
  }


//   agregarVariante(color, talla, stock) {
//     const variante = new Variante(color, talla, stock);
//     this.variantes.push(variante);
//   }

//   obtenerStock(color, talla) {
//     const variante = this.variantes.find(
//       (v) => v.color === color && v.talla === talla
//     );
//     return variante ? variante.stock : 0;
//   }

//   actualizarStock(color, talla, nuevaCantidad) {
//     const variante = this.variantes.find(
//       (v) => v.color === color && v.talla === talla
//     );
//     if (variante) {
//       variante.stock = nuevaCantidad;
//     }
//   }
}
