
class Tarjeta {
    constructor(numero, fechaExpiracion, cvv, titular) {
      this.numero = numero;
      this.fechaExpiracion = fechaExpiracion;
      this.cvv = cvv;
      this.titular = titular;
    }
  }
  

class Usuario {
    constructor( nombre, email, direccion, tarjeta) {
      this.nombre = nombre;
      this.email = email;
      this.direccion = direccion;
      this.tarjeta = tarjeta;
    }
  }