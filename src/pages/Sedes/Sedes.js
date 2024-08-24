//Importo React
import React from 'react';


const Sedes = () => {
  const sedes = [
    {
      image: '/img/sedes/Sedes_1.jpg',
      direccion: 'Av.Paseo de la Republica S/N Urb Matellini\nChorrillos, Lima\nPerú',
    },
    {
      image: '/img/sedes/Sedes_2.jpg',
      direccion: 'Av.Siempre Viva Las Viñas\nPuente Piedra, Lima\nPerú',
    },
    {
      image: '/img/sedes/Sedes_3.jpg',
      direccion: 'Panamericana Norte Av. Tomas Valle\nLos Olivos, Lima\nPerú',
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Sedes</h1>
        <p>Ubícanos en las siguientes sedes, además de contar con una alta gama de productos, también son puntos de recojo para los productos adquiridos de manera online.</p>
      </header>
      <div className="sedes-container">
        {sedes.map((sede, index) => (
          <div key={index} className="sede">
            <img src={sede.image} alt={`Sede ${index + 1}`} className="sede-image" />
            <p className="sede-direccion">{sede.direccion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sedes;

