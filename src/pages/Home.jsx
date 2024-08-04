import React, { useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import HeroSection from '../components/Sections/hero-section/HeroSection';
import AboutMeSection from '../components/Sections/about-section/AboutMeSection';
import GlobalBackground from '../components/common/GlobalBackground';
import ProjectSection from '../components/Sections/projects-section/ProjectSection';
import ContactMeSection from '../components/Sections/contact-section/ContactMeSection';

const HomeContainer = styled.div`
  position: relative;
`;

const Home = () => {
  const theme = useTheme();
  const homeRef = useRef(null);

  useEffect(() => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  return (
    <HomeContainer ref={homeRef}>
      <GlobalBackground />
      <div id="home">
        <HeroSection theme={theme} />
      </div>
      <div id="about">
        <AboutMeSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="contact">
        <ContactMeSection />
      </div>
    </HomeContainer>
  );
};

export default Home;
