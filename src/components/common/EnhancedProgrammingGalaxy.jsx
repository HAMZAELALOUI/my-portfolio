// EnhancedProgrammingGalaxy.js
import React from 'react';
import { Stars, Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import ProgrammingGalaxy from './ProgrammingGalaxy';
import SpaceVehicle from '../Sections/hero-section/SpaceVehicle';
import IntroductionText from '../Sections/hero-section/IntroductionText';

const EnhancedProgrammingGalaxy = ({ color, theme }) => {
  const { viewport } = useThree();
  const scaleFactor = Math.min(1, viewport.width / 30);

  const astronautPosition = [
    -20 * scaleFactor,
    8 * scaleFactor,
    -10 * scaleFactor
  ];

  return (
    <>
      <ProgrammingGalaxy color={color} />
      <Stars
        radius={300 * scaleFactor}
        depth={60 * scaleFactor}
        count={20000}
        factor={7}
        saturation={0}
        fade
      />
      <SpaceVehicle
        scale={3 * scaleFactor}
        position={astronautPosition}
      />
      <Html
        position={[
          astronautPosition[0] + 10 * scaleFactor,
          astronautPosition[1] + 12 * scaleFactor,
          astronautPosition[2]
        ]}
        scale={scaleFactor}
      >
        <IntroductionText theme={theme} />
      </Html>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5 * scaleFactor, 5 * scaleFactor, 5 * scaleFactor]}
        intensity={1}
      />
      <pointLight
        position={[-5 * scaleFactor, 5 * scaleFactor, 5 * scaleFactor]}
        intensity={0.5}
      />
    </>
  );
};

export default EnhancedProgrammingGalaxy;