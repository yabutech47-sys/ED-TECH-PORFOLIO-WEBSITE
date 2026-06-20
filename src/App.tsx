import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import TestimonialSection from './components/Testimonials.tsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project/:projectId" element={<ProjectDetailPage />} />
            <Route path="/testimonials" element={<TestimonialSection />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;