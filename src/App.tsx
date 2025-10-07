import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import './styles/App.css';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDarkTheme(shouldUseDark);
    document.documentElement.setAttribute('data-theme', shouldUseDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage onThemeToggle={toggleTheme} isDarkTheme={isDarkTheme} />} />
          <Route path="/hakkimda" element={<AboutPage onThemeToggle={toggleTheme} isDarkTheme={isDarkTheme} />} />
          <Route path="/projeler" element={<ProjectsPage onThemeToggle={toggleTheme} isDarkTheme={isDarkTheme} />} />
          <Route path="/hizmetler" element={<ServicesPage onThemeToggle={toggleTheme} isDarkTheme={isDarkTheme} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
