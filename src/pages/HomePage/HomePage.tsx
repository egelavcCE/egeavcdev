import React from 'react';
import Header from '../../components/Header/Header';
import AboutCard from '../../components/AboutCard/AboutCard';
import ImageCard from '../../components/ImageCard/ImageCard';
import ProjectCards from '../../components/ProjectCards/ProjectCards';
import TechCards from '../../components/TechCards/TechCards';
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

interface HomePageProps {
  onThemeToggle?: () => void;
  isDarkTheme?: boolean;
}

const HomePage = ({ onThemeToggle, isDarkTheme = false }: HomePageProps) => {
  return (
    <div className="homepage">
      <Header onThemeToggle={onThemeToggle} isDarkTheme={isDarkTheme} />
      <main className="homepage-main">
        <section id="about" className="cards-section">
          <div className="cards-container">
            <ImageCard />
            <AboutCard />
          </div>
        </section>
        <section id="projects">
          <ProjectCards />
        </section>
        <section id="services" className="services-section">
          <div className="services-container">
            <ServicesCard />
          </div>
        </section>
        <section id="contact">
          <TechCards />
        </section>
      </main>
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
};

export default HomePage;
