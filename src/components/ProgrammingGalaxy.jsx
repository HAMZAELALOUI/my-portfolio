import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { Text, Html, Line } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FaJs, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiTypescript, SiVuedotjs, SiAngular, SiGraphql } from 'react-icons/si';

const RetroComputer = () => {
  const computerRef = useRef();
  const gltf = useLoader(GLTFLoader, '/src/assets/triangular_animated_portal.glb');

  useFrame(() => {
    computerRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={computerRef}>
      <primitive object={gltf.scene} scale={[2, 2, 2]} /> {/* Increased scale from 1.5 to 2 */}
      <pointLight intensity={1.5} distance={60} color="#ffffff" /> {/* Increased intensity and changed color to white */}
      <ambientLight intensity={0.4} /> {/* Added ambient light to make the model lighter overall */}
      {/* <Text
        position={[0, 2.5, 0]} 
        fontSize={0.7} 
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Retro Computer
      </Text> */}
    </group>
  );
};

const TechIcon = ({ orbitRadius, orbitSpeed, name, size, Icon }) => {
  const groupRef = useRef();
  const textRef = useRef();
  const iconRef = useRef();
  const { camera } = useThree();

  useFrame((state) => {
    const angle = state.clock.elapsedTime * orbitSpeed;
    groupRef.current.position.x = Math.cos(angle) * orbitRadius;
    groupRef.current.position.z = Math.sin(angle) * orbitRadius;

    textRef.current.lookAt(camera.position);
    iconRef.current.lookAt(camera.position);
  });

  return (
    <group ref={groupRef}>
      <group ref={iconRef}>
        <Html
          transform
          occlude="blending"
          style={{
            width: `${size * 100}px`,
            height: `${size * 100}px`,
            fontSize: `${size * 75}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backfaceVisibility: 'hidden',
          }}
        >
          <Icon />
        </Html>
      </group>
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
  );
};

const Orbit = ({ radius }) => {
  const points = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * 2 * Math.PI;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return points;
  }, [radius]);

  return (
    <Line
      points={points}
      color="#ffffff"
      opacity={0.1}
      transparent
      lineWidth={1}
    />
  );
};

const ProgrammingGalaxy = () => {
  const galaxyRef = useRef();

  const technologies = useMemo(() => [
    { name: 'JavaScript', size: 0.8, orbitRadius: 8, orbitSpeed: 0.3, Icon: FaJs },
    { name: 'React', size: 0.7, orbitRadius: 11, orbitSpeed: 0.25, Icon: FaReact },
    { name: 'Node.js', size: 0.6, orbitRadius: 14, orbitSpeed: 0.2, Icon: FaNodeJs },
    { name: 'Python', size: 0.9, orbitRadius: 17, orbitSpeed: 0.15, Icon: FaPython },
    { name: 'TypeScript', size: 0.5, orbitRadius: 20, orbitSpeed: 0.12, Icon: SiTypescript },
    { name: 'HTML5', size: 0.6, orbitRadius: 23, orbitSpeed: 0.1, Icon: FaHtml5 },
    { name: 'CSS3', size: 0.6, orbitRadius: 26, orbitSpeed: 0.08, Icon: FaCss3 },
    { name: 'Vue.js', size: 0.5, orbitRadius: 29, orbitSpeed: 0.06, Icon: SiVuedotjs },
    { name: 'Angular', size: 0.6, orbitRadius: 32, orbitSpeed: 0.05, Icon: SiAngular },
    { name: 'GraphQL', size: 0.4, orbitRadius: 35, orbitSpeed: 0.04, Icon: SiGraphql },
  ], []);

  useFrame(() => {
    galaxyRef.current.rotation.y += 0.0005;
  });

  return (
    <group ref={galaxyRef}>
      <ambientLight intensity={0.3} /> {/* Increased overall ambient light */}
      <RetroComputer />
      {technologies.map((tech) => (
        <React.Fragment key={tech.name}>
          <Orbit radius={tech.orbitRadius} />
          <TechIcon
            orbitRadius={tech.orbitRadius}
            orbitSpeed={tech.orbitSpeed}
            name={tech.name}
            size={tech.size}
            Icon={tech.Icon}
          />
        </React.Fragment>
      ))}
    </group>
  );
}

export default ProgrammingGalaxy;