// src/components/HeroSection.js
import React, { useState } from 'react';
import { HeroSectionWrapper, MouseIconContainer } from './StyledComponents';
import ViewWorkButton from './ViewWorkButton';

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleViewWork = () => {
    console.log("View My Work clicked");
  };

  return (
    <HeroSectionWrapper>
      <MouseIconContainer>
        <ViewWorkButton
          onClick={handleViewWork}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </MouseIconContainer>
    </HeroSectionWrapper>
  );
};

export default HeroSection;