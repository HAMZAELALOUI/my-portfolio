// components/BackgroundAnimation.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import CameraController from './CameraController';
import EnhancedProgrammingGalaxy from './EnhancedProgrammingGalaxy';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BackgroundAnimation = ({ theme }) => {
  return (
    <CanvasContainer>
      <Canvas camera={{ position: [0, 0, 35], fov: 60 }}>
        <CameraController />
        <EnhancedProgrammingGalaxy color={theme.colors.primary} theme={theme} />
      </Canvas>
    </CanvasContainer>
  );
};

export default BackgroundAnimation;