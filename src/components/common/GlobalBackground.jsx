// src/components/GlobalBackground.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import styled from 'styled-components';
import * as THREE from 'three';
import StarField from './StarField';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function CameraController() {
  const { camera } = useThree();
  const mouse = useRef([0, 0]);
  const spherical = useRef(new THREE.Spherical(35, Math.PI / 2, 0));

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current = [
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      ];
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    // Update spherical coordinates based on mouse position
    spherical.current.theta += (mouse.current[0] * 0.5 - spherical.current.theta) * 0.05;
    spherical.current.phi += (mouse.current[1] * 0.5 + Math.PI / 2 - spherical.current.phi) * 0.05;

    // Clamp the vertical angle to avoid flipping
    spherical.current.phi = THREE.MathUtils.clamp(spherical.current.phi, 0.1, Math.PI - 0.1);

    // Convert spherical coordinates to Cartesian coordinates
    camera.position.setFromSpherical(spherical.current);

    // Make the camera look at the center
    camera.lookAt(0, 0, 0);
  });

  return null;
}

const GlobalBackground = () => {
  return (
    <CanvasContainer>
      <Canvas camera={{ position: [0, 0, 35], fov: 60 }}>
        <CameraController />
        <StarField />
      </Canvas>
    </CanvasContainer>
  );
};

export default GlobalBackground;