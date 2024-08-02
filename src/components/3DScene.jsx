import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';

function RotatingObjects() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.x += delta * 0.2;
    groupRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={groupRef}>
      <Box args={[1, 1, 1]} position={[-1.5, 0, 0]}>
        <meshStandardMaterial color="#3498db" />
      </Box>
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2ecc71" />
      </Sphere>
      <Torus args={[0.5, 0.2, 16, 100]} position={[1.5, 0, 0]}>
        <meshStandardMaterial color="#e74c3c" />
      </Torus>
    </group>
  );
}

function Scene3D() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingObjects />
    </Canvas>
  );
}

export default Scene3D;