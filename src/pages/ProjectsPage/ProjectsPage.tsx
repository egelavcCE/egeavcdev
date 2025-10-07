import React from 'react';
import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './ProjectsPage.css';

interface ProjectsPageProps {
  onThemeToggle: () => void;
  isDarkTheme: boolean;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  color: string;
  websiteUrl?: string;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onThemeToggle, isDarkTheme }) => {

  const projects: Project[] = [
    {
      id: 'caglar-teknik-temizleme',
      name: 'Çağlar Teknik Temizleme',
      description: 'Temizlik / teknik hizmetler odaklı bir web sitesi ya da tanıtım sayfası olabilir — büyük ihtimalle firma için "Çağlar Teknik Temizleme" firmasının tanıtımı.',
      technologies: ['HTML', 'CSS', 'JS'],
      color: '#3498db',
      websiteUrl: 'https://www.caglartekniktemizleme.com.tr/'
    },
    {
      id: 'form-create',
      name: 'FormCreate',
      description: 'Form oluşturma (dinamik formlar) ile ilgili bir proje olabilir — kullanıcı girdisi toplama form yapısı.',
      technologies: ['JS', 'TS', 'React'],
      color: '#e74c3c'
    },
    {
      id: 'hesapyonetim',
      name: 'Hesapyonetim',
      description: 'Hesap yönetimi ile ilgili bir sistem — kullanıcı hesaplarının, rollerin, izinlerin yönetimi olabilir.',
      technologies: ['Node.js', 'HTML', 'JS'],
      color: '#2ecc71'
    },
    {
      id: 'data-project',
      name: 'DataProject',
      description: 'Veri projeleri, analiz, veri işleme ile ilgili — veri toplama, dönüştürme ya da görselleştirme modülleri olabilir.',
      technologies: ['Python', 'R', 'SQL', 'JS'],
      color: '#f39c12'
    },
    {
      id: 'resim-isleme',
      name: 'ResimIsleme',
      description: 'Görüntü işleme (image processing) ile ilgili bir proje — filtreler, kenar tespiti, görüntü analizi gibi işlevler olabilir.',
      technologies: ['Python', 'OpenCV', 'C++'],
      color: '#9b59b6'
    },
    {
      id: 'cyposs',
      name: 'CyPoss',
      description: '"CyPoss" ismiyle siber güvenlik, erişim kontrol sistemi veya pozisyon (pos) sistemi olabilir — açık değil, ama "Cy" kısmı "cyber / cryptography / system" gibi anlam çağrıştırıyor.',
      technologies: ['Python', 'Go', 'Rust', 'C#'],
      color: '#34495e'
    },
    {
      id: 'space-stars',
      name: 'SpaceStars',
      description: 'Uzay temalı bir oyun, simülasyon ya da görsel proje olabilir — yıldızlar, uzay objeleri ile ilgili.',
      technologies: ['Unity', 'C#', 'JS', 'WebGL'],
      color: '#1abc9c'
    },
    {
      id: 'efekt-web',
      name: 'EfektWeb',
      description: 'Web üzerinde efektler — animasyonlar, geçiş efektleri, interaktif görsel efektler sunan bir proje.',
      technologies: ['HTML', 'CSS', 'JS', 'WebGL'],
      color: '#e67e22'
    },
    {
      id: 'flutter-bookstore',
      name: 'Flutter_BookStore',
      description: 'Flutter ile geliştirilmiş bir kitap mağaza uygulaması — kitap listeleme, detay görüntüleme, alışveriş sepeti vs.',
      technologies: ['Dart', 'Flutter'],
      color: '#16a085'
    },
    {
      id: 'pazaryeri-app',
      name: 'pazaryeri_app',
      description: 'Pazar yeri uygulaması — alıcı / satıcı paneli, ürün listeleri, sipariş yönetimi gibi modüller.',
      technologies: ['Flutter', 'Node.js', 'Django'],
      color: '#8e44ad'
    },
    {
      id: 'bioinformatic',
      name: 'bioinformatic',
      description: 'Biyoinformatik ile ilgili — gen dizilimi, biyolojik veri analizi, genom karşılaştırma gibi işlevler olabilir.',
      technologies: ['Python', 'R', 'C++'],
      color: '#27ae60'
    },
    {
      id: 'duygu-degerlendirme',
      name: 'duygu_degerlendirme',
      description: 'Duygu analiz (sentiment analysis) — metinlerden duygunun çıkarılması, pozitif/negatif sınıflandırma.',
      technologies: ['Python', 'NLTK', 'TensorFlow'],
      color: '#c0392b'
    },
    {
      id: 'shopping-list',
      name: 'shopping_list',
      description: 'Alışveriş listesi uygulaması — kullanıcıların alışveriş kalemlerini ekleme, çıkarma, kategorize etme etc.',
      technologies: ['JS', 'TS', 'Flutter'],
      color: '#2980b9'
    },
    {
      id: 'rota-optimizasyonu',
      name: 'Rota_Opizimasyonu',
      description: 'Rota optimizasyonu — en uygun güzergâh bulma, araç rotaları optimize etme (örn. TSP, VRP).',
      technologies: ['Python', 'C++', 'Java'],
      color: '#d35400'
    },
    {
      id: 'form-manager',
      name: 'form-manager',
      description: 'Form yönetim sistemi — formları dinamik şekilde yönetme, doğrulama, veri işlemleri.',
      technologies: ['JS', 'TS', 'React'],
      color: '#7f8c8d'
    }
  ];

  return (
    <div className="projects-page">
      <Header onThemeToggle={onThemeToggle} isDarkTheme={isDarkTheme} />
      <main className="projects-main">
        <div className="projects-container">
          <div className="projects-header">
            <div className="projects-title-section">
              <span className="projects-emoji">💼</span>
              <h1 className="projects-title">Projelerim</h1>
            </div>
            <p className="projects-subtitle">
              Geliştirdiğim projeler ve kullandığım teknolojiler
            </p>
          </div>
      
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                color={project.color}
                websiteUrl={project.websiteUrl}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
