import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Dot({ position, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function SkillsSphere() {
  const group = useRef();
  // Example: 8 dots in a sphere
  const dots = [
    [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0],
    [0, 0, 1], [0, 0, -1], [0.7, 0.7, 0.7], [-0.7, -0.7, -0.7]
  ];
  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.01;
  });
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.7} />
      <group ref={group}>
        {dots.map((pos, i) => (
          <Dot key={i} position={pos} color="#06b6d4" />
        ))}
      </group>
    </Canvas>
  );
}
