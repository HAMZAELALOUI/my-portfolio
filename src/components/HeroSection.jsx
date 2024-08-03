// HeroSection.js
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { HeroSectionWrapper, HeroCanvas, MouseIconContainer, LoadingIndicator } from './StyledComponents';
import CameraController from './CameraController';
import EnhancedProgrammingGalaxy from './EnhancedProgrammingGalaxy';
import ViewWorkButton from './ViewWorkButton';

const HeroSection = ({ theme }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleViewWork = () => {
    console.log("View My Work clicked");
  };

  return (
    <HeroSectionWrapper>
      <HeroCanvas>
        <Suspense fallback={<LoadingIndicator>Loading...</LoadingIndicator>}>
          <Canvas camera={{ position: [0, 0, 35], fov: 60 }} onCreated={() => setIsLoading(false)}>
            <CameraController />
            <EnhancedProgrammingGalaxy color={theme.colors.primary} theme={theme} />
          </Canvas>
        </Suspense>
      </HeroCanvas>
      <MouseIconContainer>
        <ViewWorkButton onClick={handleViewWork} disabled={isLoading} isLoading={isLoading} />
      </MouseIconContainer>
    </HeroSectionWrapper>
  );
};

export default HeroSection;