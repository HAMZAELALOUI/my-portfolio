import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Sun = () => {
  return (
    <group>
      <Sphere args={[1.5, 64, 64]}>
        <meshBasicMaterial color="#FDB813" />
      </Sphere>
      <pointLight intensity={1} distance={50} />
      <Text
        position={[0, 2, 0]}
        fontSize={0.6}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Me
      </Text>
    </group>
  );
};

const TechPlanet = ({ orbitRadius, orbitSpeed, name, color, size }) => {
  const planetRef = useRef();
  const textRef = useRef();
  const { camera } = useThree();

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(color) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(color, 1.0) * intensity;
        }
      `,
    });
  }, [color]);

  useFrame((state) => {
    const angle = state.clock.elapsedTime * orbitSpeed;
    planetRef.current.position.x = Math.cos(angle) * orbitRadius;
    planetRef.current.position.z = Math.sin(angle) * orbitRadius;
    textRef.current.lookAt(camera.position);
  });

  return (
    <group>
      <group ref={planetRef}>
        <Sphere args={[size, 64, 64]}>
          <primitive object={shaderMaterial} attach="material" />
        </Sphere>
        <Text
          ref={textRef}
          position={[0, size + 0.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </group>
  );
};

function ProgrammingGalaxy() {
  const galaxyRef = useRef();

  const technologies = useMemo(() => [
    { name: 'JavaScript', color: '#f0db4f', size: 0.8, orbitRadius: 6, orbitSpeed: 0.3 },
    { name: 'React', color: '#61dafb', size: 0.7, orbitRadius: 9, orbitSpeed: 0.25 },
    { name: 'Node.js', color: '#68a063', size: 0.6, orbitRadius: 12, orbitSpeed: 0.2 },
    { name: 'Python', color: '#3572A5', size: 0.9, orbitRadius: 15, orbitSpeed: 0.15 },
    { name: 'TypeScript', color: '#007acc', size: 0.5, orbitRadius: 18, orbitSpeed: 0.12 },
    { name: 'HTML5', color: '#e34c26', size: 0.6, orbitRadius: 21, orbitSpeed: 0.1 },
    { name: 'CSS3', color: '#264de4', size: 0.6, orbitRadius: 24, orbitSpeed: 0.08 },
    { name: 'Vue.js', color: '#41b883', size: 0.5, orbitRadius: 27, orbitSpeed: 0.06 },
    { name: 'Angular', color: '#dd1b16', size: 0.6, orbitRadius: 30, orbitSpeed: 0.05 },
    { name: 'GraphQL', color: '#e535ab', size: 0.4, orbitRadius: 33, orbitSpeed: 0.04 },
  ], []);

  useFrame((state) => {
    galaxyRef.current.rotation.y += 0.0005;
  });

  return (
    <group ref={galaxyRef}>
      <ambientLight intensity={0.2} />
      <Sun />
      {technologies.map((tech) => (
        <TechPlanet
          key={tech.name}
          orbitRadius={tech.orbitRadius}
          orbitSpeed={tech.orbitSpeed}
          name={tech.name}
          color={tech.color}
          size={tech.size}
        />
      ))}
    </group>
  );
}

export default ProgrammingGalaxy;