import React from 'react';
import './ServicesCard.css';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesCardProps {
  onViewDetails?: () => void;
}

const ServicesCard = ({ onViewDetails }: ServicesCardProps) => {
  const services: Service[] = [
    {
      icon: '🎨',
      title: 'Logo Tasarımı',
      description: 'Markanızın kimliğini yansıtan, özgün ve akılda kalıcı logolar tasarlıyorum.'
    },
    {
      icon: '💻',
      title: 'Web ve Mobil Uygulama Tasarımı',
      description: 'Kullanıcı deneyimini ön planda tutarak modern, estetik ve işlevsel arayüzler oluşturuyorum.'
    },
    {
      icon: '🧩',
      title: 'Web Geliştirme',
      description: 'Kişisel ya da kurumsal ihtiyaçlarınıza uygun, hızlı ve profesyonel web siteleri geliştiriyorum.'
    },
    {
      icon: '📱',
      title: 'Mobil Frontend Geliştirme',
      description: 'Tüm cihazlarda sorunsuz çalışan, performans odaklı mobil arayüzler geliştiriyorum.'
    },
    {
      icon: '🚀',
      title: 'Proje Geliştirme ve Danışmanlık',
      description: 'Fikirlerinizi ekibimle birlikte analiz ediyor, teknik yapısını planlıyor ve projelerinizi hayata geçiriyoruz.'
    }
  ];

  return (
    <div className="services-card">
      <div className="services-header">
        <div className="services-title-section">
          <span className="services-emoji">💼</span>
          <h2 className="services-title">Hizmetlerim</h2>
        </div>
        <p className="services-subtitle">
          Size sunduğum profesyonel hizmetler ve çözümler
        </p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">
              <span>{service.icon}</span>
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="services-actions">
        <button className="view-details-btn" onClick={onViewDetails}>
          Daha Detaylı Bilgi
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
