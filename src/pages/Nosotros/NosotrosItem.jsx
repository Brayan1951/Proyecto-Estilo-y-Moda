import React from "react";
import "./Nosotros.css";

const NosotrosItem = ({ title, image, description }) => {
  return (
    <div className="nosotros-item">
        <h2 className="nosotros-title">{title}</h2>
      <img src={image} alt="Nosotros" className="nosotros-image" />
      <p className="nosotros-description">{description}</p>
    </div>
  );
};

export default NosotrosItem;
