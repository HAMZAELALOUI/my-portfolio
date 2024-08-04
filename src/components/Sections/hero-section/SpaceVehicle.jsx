// SpaceVehicle.js
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const SpaceVehicle = ({ scale = 3, position = [-20, 8, -10] }) => {
  const mesh = useRef();
  const [model, setModel] = useState(null);
  const verticalAmplitude = 2; // Adjust this for larger/smaller up and down movement

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/src/assets/space_vehicle.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.material.metalness = 0.5;
            child.material.roughness = 0.5;
          }
        });
        setModel(gltf.scene);
      },
      undefined,
      (error) => console.error('An error happened:', error)
    );
  }, []);

  useFrame((state, delta) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();

      // Calculate new position (only vertical movement)
      const newPosition = new THREE.Vector3(...position);
      newPosition.y += Math.sin(time * 0.5) * verticalAmplitude;

      mesh.current.position.copy(newPosition);

      // Rotate to face forward
      mesh.current.rotation.y = Math.PI / 2;

      // Add a slight tilt
      mesh.current.rotation.z = Math.sin(time * 0.5) * 0.05;

      // Add a slight forward/backward wobble
      mesh.current.position.z += Math.sin(time * 0.7) * 0.3;
    }
  });

  if (!model) return null;

  return (
    <primitive
      object={model}
      ref={mesh}
      scale={[scale, scale, scale]}
    />
  );
};

export default SpaceVehicle;