import React from 'react';
import './Footer.css';

interface FooterProps {
  isDarkTheme?: boolean;
}

const Footer = ({ isDarkTheme = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=egeavc26@gmail.com', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/egelavcCE', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ege-avci-ceng/', '_blank');
  };

  const navigateToPage = (page: string) => {
    window.location.href = `/${page}`;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Ege Avcı</h3>
            <p className="footer-subtitle">Web Developer</p>
            <p className="footer-description">
              Web ve mobil geliştirme teknolojilerine tutkuyla bağlı bir yazılım geliştiriciyim. 
              Modern teknolojilerle kullanıcı odaklı çözümler üretiyorum.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Hızlı Linkler</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigateToPage('hakkimda')} className="footer-link">Hakkımda</button></li>
              <li><button onClick={() => navigateToPage('projeler')} className="footer-link">Projeler</button></li>
              <li><button onClick={() => navigateToPage('hizmetler')} className="footer-link">Hizmetler</button></li>
              <li><button onClick={() => navigateToPage('iletisim')} className="footer-link">İletişim</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Teknolojiler</h4>
            <div className="footer-tech">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Flutter</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">TypeScript</span>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">İletişim</h4>
            <div className="footer-contact">
              <div className="contact-item" onClick={handleEmailClick}>
                <span className="contact-icon">📧</span>
                <span className="contact-text">egeavc26@gmail.com</span>
              </div>
              <div className="contact-item" onClick={handleGitHubClick}>
                <span className="contact-icon">🐱</span>
                <span className="contact-text">GitHub</span>
              </div>
              <div className="contact-item" onClick={handleLinkedInClick}>
                <span className="contact-icon">💼</span>
                <span className="contact-text">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Ege Avcı. Tüm hakları saklıdır.
            </p>
            <div className="footer-social">
              <button 
                className="social-btn github-btn" 
                onClick={handleGitHubClick}
                title="GitHub Profilim"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
              <button 
                className="social-btn linkedin-btn" 
                onClick={handleLinkedInClick}
                title="LinkedIn Profilim"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button 
                className="social-btn email-btn" 
                onClick={handleEmailClick}
                title="E-posta Gönder"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
