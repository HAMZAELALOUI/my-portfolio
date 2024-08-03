// src/pages/Home.js
import React from 'react';
import styled, { useTheme } from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import GlobalBackground from '../components/GlobalBackground';
import ProjectSection from '../components/ProjectSection'

const HomeContainer = styled.div`
  position: relative;
`;

const Home = () => {
  const theme = useTheme();

  return (
    <HomeContainer>
      <GlobalBackground />
      <HeroSection theme={theme} />
      <AboutMeSection />
      <ProjectSection/>
    </HomeContainer>
  );
};

export default Home;