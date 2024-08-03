// CameraController.js
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

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

export default CameraController;