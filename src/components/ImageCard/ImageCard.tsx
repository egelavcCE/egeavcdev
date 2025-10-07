import React from 'react';
import './ImageCard.css';

const ImageCard = () => {
  const imagePath = require('../../assets/resim.jpeg');

  return (
    <div className="image-card">
      <div className="image-card-content">
        <div className="image-container">
          <img 
            src={imagePath} 
            alt="Modern Design" 
            className="card-image"
          />
        </div>
      </div>
      
      <div className="slogan-container">
        <div className="slogan-icon">✨</div>
        <p className="slogan-text">
          Proje fikirlerinizi ve tasarımlarınızı gerçeğe dönüştürüyoruz
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
