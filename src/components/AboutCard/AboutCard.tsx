import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutCard.css';

const AboutCard = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/hakkimda');
  };

  return (
    <div className="about-card">
      <div className="about-card-content">
        <div className="about-header">
          <span className="about-emoji">👋</span>
          <h2 className="about-title">Hakkımda</h2>
        </div>
        
        <div className="about-text">
          <p>
            Merhaba, ben Ege Avcı. Modern, estetik ve kullanıcı dostu arayüzler geliştirmeye tutkuyla bağlı bir Frontend Developer'ım. 
            Her projede sade, akıcı ve kullanıcıların aradıklarına kolayca ulaşabildiği deneyimler oluşturmayı hedefliyorum. 
            Tasarımda sadeliği, işlevsellik ve estetikle birleştirerek etkileyici dijital projeler ortaya çıkarmaya odaklanıyorum.
          </p>
        </div>
        
        <button className="about-details-btn" onClick={handleViewDetails}>
          <span>Detaylı Görüntüle</span>
          <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
