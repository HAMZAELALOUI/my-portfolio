import React from 'react';
import { Text } from '@react-three/drei';

const Presentation = ({ visible }) => {
  if (!visible) return null;

  return (
    <group position={[0, 5, 0]}>
      <Text position={[0, 2, 0]} fontSize={1} color="white" anchorX="center" anchorY="middle">
        About Me
      </Text>
      <Text position={[0, 0, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
        Hello! I'm a passionate developer
      </Text>
      <Text position={[0, -1, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
        with expertise in React, Three.js, and more.
      </Text>
      <Text position={[0, -2, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
        Welcome to my programming galaxy!
      </Text>
    </group>
  );
};

export default Presentation;