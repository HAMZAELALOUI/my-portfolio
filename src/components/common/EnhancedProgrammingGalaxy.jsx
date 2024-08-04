// EnhancedProgrammingGalaxy.js
import React from 'react';
import { Stars, Html } from '@react-three/drei';
import ProgrammingGalaxy from './ProgrammingGalaxy';
import SpaceVehicle from '../Sections/hero-section/SpaceVehicle';
import IntroductionText from '../Sections/hero-section/IntroductionText';

const EnhancedProgrammingGalaxy = ({ color, theme }) => {
  const astronautPosition = [-20, 8, -10];

  return (
    <>
      <ProgrammingGalaxy color={color} />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
      <SpaceVehicle scale={3} position={astronautPosition} />
      <Html position={[astronautPosition[0] + 10, astronautPosition[1] + 12, astronautPosition[2]]}>
        <IntroductionText theme={theme} />
      </Html>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />
    </>
  );
};

export default EnhancedProgrammingGalaxy;