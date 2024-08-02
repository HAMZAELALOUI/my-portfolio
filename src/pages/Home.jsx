import React from 'react';
import styled, { useTheme } from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const HomeContainer = styled.div`
  padding-top: 80px; // To account for the fixed header
`;

const Home = () => {
  const theme = useTheme();

  return (
    <HomeContainer>
      <HeroSection theme={theme} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </HomeContainer>
  );
};

export default Home;