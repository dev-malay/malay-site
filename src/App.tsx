import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MainLayout } from '@/components/layout';
import { AboutSection, ExperienceSection, ProjectsSection, SkillsSection } from '@/components/sections';
import { Divider } from '@/components/common';
import { ThemeProvider } from '@/context/ThemeContext';
import BlogsPage from '@/pages/BlogsPage';
import BlogPostDetail from '@/pages/BlogPostDetail';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

function HomePage() {
  return (
    <MainLayout>
      <ScrollToHash />
      <AboutSection />
      <Divider label="Experiences" />
      <ExperienceSection />
      <Divider label="Projects" />
      <ProjectsSection />
      <Divider label="Skills" />
      <SkillsSection />
    </MainLayout>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogPostDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
