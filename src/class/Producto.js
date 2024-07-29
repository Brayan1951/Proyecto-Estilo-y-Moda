export class Producto {
  #nombre;
  #descripcion;
  #precio;
  #stock;
  // #variantes;

  constructor( nombre, descripcion, precio,stock) {
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#precio = precio;
    this.#stock = stock;
    // this.variantes = [];
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
