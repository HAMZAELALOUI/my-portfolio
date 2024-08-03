import React from 'react';
import styled, { useTheme } from 'styled-components';
import HeroSection from '../components/HeroSection';


const HomeContainer = styled.div`
  /* padding-top: 80px; // To account for the fixed header */
`;

const Home = () => {
  const theme = useTheme();

  return (
    <HomeContainer>
      <HeroSection theme={theme} />
    </HomeContainer>
  );
};

export default Home;