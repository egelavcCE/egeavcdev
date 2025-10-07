import React from 'react';
import Header from '../../components/Header/Header';
import './ServicesPage.css';

interface ServicesPageProps {
  onThemeToggle?: () => void;
  isDarkTheme?: boolean;
}

const ServicesPage = ({ onThemeToggle, isDarkTheme = false }: ServicesPageProps) => {


  const services = [
    {
      icon: '🎨',
      title: 'Logo Tasarımı',
      description: 'Markanızın kimliğini yansıtan, özgün ve akılda kalıcı logolar tasarlıyorum.',
      features: [
        'Marka kimliği analizi',
        'Özgün tasarım konsepti',
        'Vektör formatında teslim',
        'Farklı varyasyonlar',
        'Kullanım kılavuzu'
      ]
    },
    {
      icon: '💻',
      title: 'Web ve Mobil Uygulama Tasarımı',
      description: 'Kullanıcı deneyimini ön planda tutarak modern, estetik ve işlevsel arayüzler oluşturuyorum.',
      features: [
        'UX/UI tasarım',
        'Responsive tasarım',
        'Prototip oluşturma',
        'Kullanıcı testleri',
        'Tasarım sistemleri'
      ]
    },
    {
      icon: '🧩',
      title: 'Web Geliştirme',
      description: 'Kişisel ya da kurumsal ihtiyaçlarınıza uygun, hızlı ve profesyonel web siteleri geliştiriyorum.',
      features: [
        'Modern web teknolojileri',
        'SEO optimizasyonu',
        'Hızlı yükleme süreleri',
        'Mobil uyumluluk',
        'Güvenlik standartları'
      ]
    },
    {
      icon: '📱',
      title: 'Mobil Frontend Geliştirme',
      description: 'Tüm cihazlarda sorunsuz çalışan, performans odaklı mobil arayüzler geliştiriyorum.',
      features: [
        'React Native',
        'Flutter',
        'Cross-platform uyumluluk',
        'Native performans',
        'App Store optimizasyonu'
      ]
    },
    {
      icon: '🚀',
      title: 'Proje Geliştirme ve Danışmanlık',
      description: 'Fikirlerinizi ekibimle birlikte analiz ediyor, teknik yapısını planlıyor ve projelerinizi hayata geçiriyoruz.',
      features: [
        'Proje analizi ve planlama',
        'Teknik mimari tasarımı',
        'Ekip koordinasyonu',
        'Süreç yönetimi',
        'Kalite kontrol'
      ]
    }
  ];

  return (
    <div className="services-page">
      <Header onThemeToggle={onThemeToggle} isDarkTheme={isDarkTheme} />
      <main className="services-main">
        <div className="services-container">
          <div className="services-header">
            <div className="services-title-section">
              <span className="services-emoji">💼</span>
              <h1 className="services-title">Hizmetlerim</h1>
            </div>
            <p className="services-subtitle">
              Size sunduğum profesyonel hizmetler ve çözümler
            </p>
          </div>

          <div className="services-content">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-header">
                    <div className="service-icon">
                      <span>{service.icon}</span>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  
                  <p className="service-description">
                    {service.description}
                  </p>
                  
                  <div className="service-features">
                    <h4 className="features-title">Hizmet Detayları:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          <span className="feature-icon">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
