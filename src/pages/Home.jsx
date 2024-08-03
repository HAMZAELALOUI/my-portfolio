// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';

const HomeContainer = styled.div`
  /* Add any necessary styles */
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection />
      {/* Other sections of your home page */}
    </HomeContainer>
  );
};

export default Home;