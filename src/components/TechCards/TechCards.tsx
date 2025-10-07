import React from 'react';
import './TechCards.css';

interface TechCard {
  id: string;
  name: string;
  logo: string;
  description: string;
  color: string;
}

const TechCards = () => {
  const technologies: TechCard[] = [
    {
      id: 'react',
      name: 'React',
      logo: '⚛️',
      description: 'Modern web uygulamaları için güçlü kullanıcı arayüzü kütüphanesi',
      color: '#61DAFB'
    },
    {
      id: 'react-native',
      name: 'React Native',
      logo: '📱',
      description: 'Cross-platform mobil uygulama geliştirme framework\'ü',
      color: '#61DAFB'
    },
    {
      id: 'cursor',
      name: 'Cursor',
      logo: '🎯',
      description: 'AI destekli modern kod editörü ve geliştirme ortamı',
      color: '#FF6B6B'
    },
    {
      id: 'figma',
      name: 'Figma',
      logo: '🎨',
      description: 'Profesyonel UI/UX tasarım ve prototipleme aracı',
      color: '#F24E1E'
    },
    {
      id: 'ai-tools',
      name: 'AI Araçları',
      logo: '🤖',
      description: 'Yapay zeka destekli geliştirme ve tasarım araçları',
      color: '#8B5CF6'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      logo: '🔷',
      description: 'JavaScript\'in tip güvenli süper seti',
      color: '#3178C6'
    }
  ];

  return (
    <div className="tech-cards-section">
      <div className="tech-cards-header">
        <h2 className="tech-cards-title">Kullandığım Teknolojiler</h2>
        <p className="tech-cards-subtitle">
          Modern web ve mobil geliştirme için kullandığım araçlar ve teknolojiler
        </p>
      </div>
      
      <div className="tech-cards-grid">
        {technologies.map((tech) => (
          <div 
            key={tech.id} 
            className="tech-card"
            style={{ '--tech-color': tech.color }}
          >
            <div className="tech-card-header">
              <div className="tech-logo">{tech.logo}</div>
              <h3 className="tech-name">{tech.name}</h3>
            </div>
            <p className="tech-description">{tech.description}</p>
            <div className="tech-card-footer">
              <div className="tech-color-indicator" style={{ backgroundColor: tech.color }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCards;
