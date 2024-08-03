import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import GlobalBackground from '../components/GlobalBackground';
import ProjectSection from '../components/ProjectSection'
import ContactMeSection from '../components/ContactMeSection';

const HomeContainer = styled.div`
  position: relative;
`;

const Home = () => {
  const theme = useTheme();
  const location = useLocation();
  const homeRef = useRef(null);

  useEffect(() => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'auto' });
    }
    
    // Use the History API to replace the current state
    window.history.replaceState({}, document.title, location.pathname);
  }, [location]);

  return (
    <HomeContainer ref={homeRef}>
      <GlobalBackground />
      <HeroSection theme={theme} />
      <AboutMeSection />
      <ProjectSection/>
      <ContactMeSection />
    </HomeContainer>
  );
};

export default Home;