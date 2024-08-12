//Importo React
import React from 'react';
import SedeItem from './SedeItem';

const Sedes = () => {
  const sedes = [
    {
      image: '/img/sedes/Sedes_1.jpg',
      address: 'Av.Paseo de la Republica S/N Urb Matellini\nChorrillos, Lima\nPerú',
    },
    {
      image: '/img/sedes/Sedes_2.jpg',
      address: 'Av.Paseo de la Republica S/N Urb Matellini\nChorrillos, Lima\nPerú',
    },
    {
      image: '/img/sedes/Sedes_3.jpg',
      // image: 'https://via.placeholder.com/300x200',
      address: 'Panamericana Norte Av. Tomas Valle\nLos Olivos, Lima\nPerú',
    },
  ];

  return (
    <div className="sedes-container">
      <h2 className="sedes-title">Sedes</h2>
      <p className="sedes-description">Ubícanos en las siguientes sedes...</p>
      <div className="sedes-list">
        {sedes.map((sede, index) => (
          <SedeItem key={index} image={sede.image} address={sede.address} />
        ))}
      </div>
    </div>
  );
};

export default Sedes;

