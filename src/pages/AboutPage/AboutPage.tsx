import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './AboutPage.css';

interface AboutPageProps {
  onThemeToggle?: () => void;
  isDarkTheme?: boolean;
}

const AboutPage = ({ onThemeToggle, isDarkTheme = false }: AboutPageProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="about-page">
      <Header onThemeToggle={onThemeToggle} isDarkTheme={isDarkTheme} />
      <main className="about-main">
        <div className="about-container">
          <div className="about-header">
            <button className="back-btn" onClick={handleGoBack}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span>Geri Dön</span>
            </button>
            <div className="about-title-section">
              <span className="about-emoji">👋</span>
              <h1 className="about-title">Hakkımda</h1>
            </div>
            <p className="about-subtitle">
              Kim olduğum ve profesyonel deneyimlerim
            </p>
          </div>

          <div className="about-content">
            <div className="content-section-header">
              <h2 className="content-title">
                <span className="content-icon">👨‍💻</span>
                Hakkımda
              </h2>
            </div>
            
            <div className="about-intro">
              <p>
                Merhaba, ben Ege Avcı. Modern, estetik ve kullanıcı dostu arayüzler geliştirmeye tutkuyla bağlı bir Frontend Developer'ım. 
                Her projede sade, akıcı ve kullanıcıların aradıklarına kolayca ulaşabildiği deneyimler oluşturmayı hedefliyorum. 
                Tasarımda sadeliği, işlevsellik ve estetikle birleştirerek etkileyici dijital projeler ortaya çıkarmaya odaklanıyorum.
              </p>
            </div>

            <div className="about-details">
              <p>
                Bugüne kadar; React.js, TypeScript, React Native, Flutter, ASP.NET Core ve Python gibi teknolojilerle çalıştım. 
                Web ve mobil projelerin yanı sıra, veriye dayalı uygulamalar ve backend çözümleri de geliştirdim. 
                Her yeni projede farklı teknolojilerle üretmeyi, öğrenmeyi ve çok yönlü düşünebilmeyi önemsiyorum.
              </p>
              
              <p>
                Kendi geliştirdiğim projelerde tasarım detaylarına ve performans dengesine özen göstererek kullanıcı deneyimini ön planda tuttum.
              </p>
              
              <p>
                Yazılımı yalnızca kod yazmak olarak değil; problemleri doğru analiz edip verimli çözümler üreten bir düşünme biçimi olarak görüyorum. 
                Sizler için de aynı yaklaşımı benimsiyor, doğru çözümleri sunarak güvenilir bir iş ortağı olmayı hedefliyorum.
              </p>
              
              <div className="about-cta">
                <p>
                  <span className="cta-icon">👉</span>
                  Hizmetlerim kısmından ilginizi çeken bir konuda birlikte modern, yenilikçi ve kalıcı projeler üretebiliriz.
                </p>
              </div>
            </div>

            <div className="experience-section">
              <div className="experience-header">
                <h2 className="experience-title">
                  <span className="experience-icon">💼</span>
                  Tecrübelerim
                </h2>
                <p className="experience-subtitle">Profesyonel Deneyim</p>
              </div>

              <div className="experience-timeline">
                <div className="experience-item">
                  <div className="experience-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="experience-content">
                    <div className="experience-header-item">
                      <h3 className="experience-company">Balıkesir Üniversitesi Bilgi İşlem Daire Başkanlığı</h3>
                      <div className="experience-role">
                        <span className="role-icon">📌</span>
                        <span>React JS Developer</span>
                      </div>
                      <div className="experience-period">
                        <span className="period-icon">🗓️</span>
                        <span>12/2023 - 06/2025 — Balıkesir, Türkiye</span>
                      </div>
                    </div>
                    <ul className="experience-description">
                      <li>React JS kullanarak çeşitli web projelerinde görev aldı.</li>
                      <li>Node.js, API, Git ve React framework'ü kullanımı konularında deneyim kazandı.</li>
                      <li>Ekip çalışmaları içinde aktif rol aldı.</li>
                    </ul>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="experience-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="experience-content">
                    <div className="experience-header-item">
                      <h3 className="experience-company">PITON TECHNOLOGY</h3>
                      <div className="experience-role">
                        <span className="role-icon">📌</span>
                        <span>Flutter Developer</span>
                      </div>
                      <div className="experience-period">
                        <span className="period-icon">🗓️</span>
                        <span>07/2023 - 08/2023 — Eskişehir, Türkiye</span>
                      </div>
                    </div>
                    <ul className="experience-description">
                      <li>BookStore: Kitap alış/satış ve kitap özetleriyle ilgili bir mobil uygulamayı tamamen kendisi geliştirdi.</li>
                      <li>MovieTime: Sinema rezervasyonu uygulamasının front-end kısmında rol aldı.</li>
                    </ul>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="experience-marker">
                    <div className="marker-dot"></div>
                  </div>
                  <div className="experience-content">
                    <div className="experience-header-item">
                      <h3 className="experience-company">ALP HAVACILIK</h3>
                      <div className="experience-role">
                        <span className="role-icon">📌</span>
                        <span>React JS Developer</span>
                      </div>
                      <div className="experience-period">
                        <span className="period-icon">🗓️</span>
                        <span>07/2024 - 08/2024 — Eskişehir, Türkiye</span>
                      </div>
                    </div>
                    <ul className="experience-description">
                      <li>TravelMaters: Tatil, otel ve uçak rezervasyonu yapılabilen web sitesinin tasarım ve kodlama sürecinde yer aldı.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
