import React from 'react';
import './ImgComponent.css'

const ImgComponent: React.FC<{ src: string; alt: string; description: string }> = ({ src, alt, description }) => {
  return (
    <div className="imgContainer">
      <h3>Empieza tus viajes ya</h3>
      <img src={src} alt={alt} />
      <p className="imgDescription">{description}</p>
    </div>
  );
};

export default ImgComponent;