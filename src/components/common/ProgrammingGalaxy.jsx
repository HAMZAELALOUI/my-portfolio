import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { Text, Html, Line } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FaJs, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiVuedotjs, SiAngular, SiGraphql, SiMongodb, SiPostgresql, SiKubernetes, SiTensorflow } from 'react-icons/si';

const RetroComputer = ({ scale }) => {
  const computerRef = useRef();
  const gltf = useLoader(GLTFLoader, '/assets/triangular_animated_portal.glb');
  const { viewport } = useThree();

  const computerScale = scale * Math.min(1, viewport.width / 20);

  useFrame(() => {
    computerRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={computerRef}>
      <primitive object={gltf.scene} scale={[1.5 * computerScale, 1.5 * computerScale, 1.5 * computerScale]} />
      <pointLight intensity={1.2} distance={50 * computerScale} color="#ffffff" />
      <ambientLight intensity={0.3} />
    </group>
  );
};

const TechIcon = ({ orbitRadius, orbitSpeed, name, size, Icon }) => {
  const groupRef = useRef();
  const textRef = useRef();
  const iconRef = useRef();
  const { camera, viewport } = useThree();

  const textSize = Math.max(0.15, 0.25 * (viewport.width / 30));
  const iconSize = size * Math.min(1, viewport.width / 20);

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
            width: `${iconSize * 80}px`,
            height: `${iconSize * 80}px`,
            fontSize: `${iconSize * 60}px`,
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
        position={[0, iconSize + 0.3, 0]}
        fontSize={textSize}
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
      opacity={0.05}
      transparent
      lineWidth={1}
    />
  );
};

const ProgrammingGalaxy = () => {
  const galaxyRef = useRef();
  const { viewport } = useThree();

  const scaleFactor = Math.min(1, viewport.width / 30);
  const orbitScaleFactor = Math.min(1, viewport.width / 20);

  const technologies = useMemo(() => [
    { name: 'JavaScript', size: 0.7 * scaleFactor, orbitRadius: 6 * orbitScaleFactor, orbitSpeed: 0.3, Icon: FaJs },
    { name: 'React', size: 0.6 * scaleFactor, orbitRadius: 8 * orbitScaleFactor, orbitSpeed: 0.25, Icon: FaReact },
    { name: 'Node.js', size: 0.5 * scaleFactor, orbitRadius: 10 * orbitScaleFactor, orbitSpeed: 0.2, Icon: FaNodeJs },
    { name: 'Python', size: 0.8 * scaleFactor, orbitRadius: 12 * orbitScaleFactor, orbitSpeed: 0.15, Icon: FaPython },
    { name: 'TypeScript', size: 0.5 * scaleFactor, orbitRadius: 14 * orbitScaleFactor, orbitSpeed: 0.12, Icon: SiTypescript },
    { name: 'HTML5', size: 0.5 * scaleFactor, orbitRadius: 16 * orbitScaleFactor, orbitSpeed: 0.1, Icon: FaHtml5 },
    { name: 'CSS3', size: 0.5 * scaleFactor, orbitRadius: 18 * orbitScaleFactor, orbitSpeed: 0.08, Icon: FaCss3 },
    { name: 'Vue.js', size: 0.4 * scaleFactor, orbitRadius: 20 * orbitScaleFactor, orbitSpeed: 0.06, Icon: SiVuedotjs },
    { name: 'Angular', size: 0.5 * scaleFactor, orbitRadius: 22 * orbitScaleFactor, orbitSpeed: 0.05, Icon: SiAngular },
    { name: 'GraphQL', size: 0.4 * scaleFactor, orbitRadius: 24 * orbitScaleFactor, orbitSpeed: 0.04, Icon: SiGraphql },
    { name: 'MongoDB', size: 0.5 * scaleFactor, orbitRadius: 26 * orbitScaleFactor, orbitSpeed: 0.035, Icon: SiMongodb },
    { name: 'PostgreSQL', size: 0.5 * scaleFactor, orbitRadius: 28 * orbitScaleFactor, orbitSpeed: 0.03, Icon: SiPostgresql },
    { name: 'Docker', size: 0.6 * scaleFactor, orbitRadius: 30 * orbitScaleFactor, orbitSpeed: 0.025, Icon: FaDocker },
    { name: 'Kubernetes', size: 0.5 * scaleFactor, orbitRadius: 32 * orbitScaleFactor, orbitSpeed: 0.02, Icon: SiKubernetes },
    { name: 'AWS', size: 0.6 * scaleFactor, orbitRadius: 34 * orbitScaleFactor, orbitSpeed: 0.015, Icon: FaAws },
    { name: 'TensorFlow', size: 0.5 * scaleFactor, orbitRadius: 36 * orbitScaleFactor, orbitSpeed: 0.01, Icon: SiTensorflow },
  ], [scaleFactor, orbitScaleFactor]);

  useFrame(() => {
    galaxyRef.current.rotation.y += 0.0003;
  });

  return (
    <group ref={galaxyRef}>
      <ambientLight intensity={0.2} />
      <RetroComputer scale={scaleFactor} />
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
};

export default ProgrammingGalaxy;