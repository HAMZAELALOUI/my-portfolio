// HeroSection.js
import React, { Suspense, useRef } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import ProgrammingGalaxy from './ProgrammingGalaxy';
import SpaceVehicle from './SpaceVehicle';
import * as THREE from 'three';

const HeroSectionWrapper = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.heading};
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: ${props => props.theme.fonts.main};
`;

const CTA = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightText};
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const HeroCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

const EnhancedProgrammingGalaxy = ({ color }) => {
  return (
    <>
      <ProgrammingGalaxy color={color} />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
      <SpaceVehicle />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />
    </>
  );
};

const HeroSection = ({ theme }) => {
  return (
    <HeroSectionWrapper>
      <HeroContent>
        <Title>Hi, I'm [Your Name]</Title>
        <Subtitle>Software Engineer & Problem Solver</Subtitle>
        <CTA href="#projects">View My Work</CTA>
      </HeroContent>
      <HeroCanvas>
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas camera={{ position: [0, 0, 35], fov: 60 }}>
            <CameraController />
            <EnhancedProgrammingGalaxy color={theme.colors.primary} />
          </Canvas>
        </Suspense>
      </HeroCanvas>
    </HeroSectionWrapper>
  );
};

export default HeroSection;