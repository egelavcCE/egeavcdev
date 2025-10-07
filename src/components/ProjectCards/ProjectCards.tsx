import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCards.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  color: string;
}

const ProjectCards = () => {
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 'rota-optimizasyonu',
      title: 'Rota Optimizasyonu',
      description: 'Akıllı rota planlama ve optimizasyon sistemi ile lojistik süreçlerin verimliliğini artıran web uygulaması.',
      image: '🗺️',
      technologies: ['React', 'TypeScript', 'Node.js', 'Maps API'],
      color: '#4F46E5'
    },
    {
      id: 'cyposs',
      title: 'CyPoss',
      description: 'Kıbrıs odaklı emlak, vasıta ve tatil ilan platformu. Kullanıcıların ilan arayıp yayınlayabildiği modern web platformu.',
      image: '🏠',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      color: '#34495e'
    },
    {
      id: 'caglar-teknik-temizleme',
      title: 'Çağlar Teknik Temizleme',
      description: 'Modern React/TypeScript tabanlı temizlik hizmetleri web sitesi. Responsive tasarım ve kullanıcı dostu arayüz.',
      image: '🧹',
      technologies: ['React', 'TypeScript', 'CSS', 'HTML'],
      color: '#3498db'
    }
  ];

  const handleMoreProjects = () => {
    navigate('/projeler');
  };

  return (
    <div className="project-cards-section">
      <div className="project-cards-header">
        <h2 className="project-cards-title">Projelerim</h2>
        <p className="project-cards-subtitle">
          Geliştirdiğim öne çıkan projeler ve çalışmalarım
        </p>
      </div>
      
      <div className="project-cards-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
          >
            <div className="project-card-header">
              <div className="project-image">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-card-footer">
              <div className="project-color-indicator"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="project-cards-actions">
        <button className="more-projects-btn" onClick={handleMoreProjects}>
          <span>Daha Fazla Proje</span>
          <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
