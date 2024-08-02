import React, { Suspense, useRef, useState } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Html } from '@react-three/drei';
import ProgrammingGalaxy from './ProgrammingGalaxy';
import SpaceVehicle from './SpaceVehicle';
import * as THREE from 'three';

const HeroSectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
  display: flex;
  flex-direction: column;
`;

const HeroCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MouseIconContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ViewWorkButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.darkBackground};
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.lightText};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${props => props.theme.colors.primary};
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
`;

const IntroductionText = styled.div`
  color: ${props => props.theme.colors.lightText};
  font-family: 'Fira Code', monospace;
  font-size: 1.2rem;
  width: 300px;
  text-align: left;
  white-space: normal;
  line-height: 1.4;
  position: absolute;
  left: 0;
  top: 0;
`;

const CameraController = () => {
  const { camera, mouse } = useThree();
  const initialCameraPosition = useRef(new THREE.Vector3(0, 0, 35));

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, initialCameraPosition.current.x + mouse.x * 5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, initialCameraPosition.current.y + mouse.y * 5, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const EnhancedProgrammingGalaxy = ({ color, theme }) => {
  const astronautPosition = [-20, 8, -10]; // Match the default in SpaceVehicle

  return (
    <>
      <ProgrammingGalaxy color={color} />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
      <SpaceVehicle scale={3} position={astronautPosition} />
      <Html position={[astronautPosition[0] + 10, astronautPosition[1] + 12, astronautPosition[2]]}>
        <IntroductionText theme={theme}>
          Welcome to my cosmic coding journey! I'm a passionate developer exploring the vast universe of technology.
        </IntroductionText>
      </Html>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />
    </>
  );
};;

const HeroSection = ({ theme }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleViewWork = () => {
    // Add your logic to navigate to the work section or portfolio page
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
        <ViewWorkButton onClick={handleViewWork} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'View My Work'}
        </ViewWorkButton>
      </MouseIconContainer>
    </HeroSectionWrapper>
  );
};

export default HeroSection;