import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  color: string;
  websiteUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  name, 
  description, 
  technologies, 
  color,
  websiteUrl 
}) => {
  return (
    <div 
      className="project-card"
      data-color={color}
    >
      <div className="project-card-header">
        <h3 className="project-name">{name}</h3>
        <div className="project-color-indicator"></div>
      </div>
      
      <p className="project-description">{description}</p>
      
      <div className="project-technologies">
        <span className="technologies-label">Kullanılan Diller:</span>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {websiteUrl && (
        <div className="project-card-footer">
          <a 
            href={websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="website-link"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            <span>Web Sitesini Ziyaret Et</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
