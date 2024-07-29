class CarritoItem {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}

class Carrito {
  constructor(usuarioId) {
    this.usuarioId = usuarioId;
    this.items = [];
  }

  agregarItem(producto, cantidad) {
    const item = new CarritoItem(producto, cantidad);
    this.items.push(item);
  }

  eliminarItem(productoId) {
    this.items = this.items.filter((item) => item.producto.id !== productoId);
  }

  calcularTotal() {
    return this.items.reduce(
      (total, item) => total + item.producto.precio * item.cantidad,
      0
    );
  }
}
