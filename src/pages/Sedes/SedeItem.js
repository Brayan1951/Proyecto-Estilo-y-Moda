import React from "react";
import "./Sedes.css";

const SedeItem = ({ image, address }) => {
  return (
    <div className="sede-item">
      <img src={image} alt="Tienda" className="sede-image" />
      <p className="sede-address">{address}</p>
    </div>
  );
};

export default SedeItem;
