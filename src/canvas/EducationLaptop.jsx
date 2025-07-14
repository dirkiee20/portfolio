import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function NeonMaterial({ color, glow = false, opacity = 1 }) {
  return (
    <meshStandardMaterial
      color={color}
      emissive={color}
      emissiveIntensity={glow ? 1.5 : 0.3}
      metalness={0.7}
      roughness={0.25}
      transparent={opacity < 1}
      opacity={opacity}
    />
  );
}

function Laptop() {
  const laptopRef = useRef();
  const screenRef = useRef();

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.PI / 5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.04;
      laptopRef.current.rotation.x = -Math.PI / 8 + Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
    if (screenRef.current) {
      screenRef.current.rotation.x = Math.PI / 2.2 + Math.sin(state.clock.elapsedTime * 0.2) * 0.01;
    }
  });

  // Keyboard grid
  const keys = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 12; col++) {
      keys.push(
        <mesh key={`k${row}-${col}`} position={[-1.1 + col * 0.2, -0.04, -0.7 + row * 0.15]}>
          <boxGeometry args={[0.16, 0.02, 0.12]} />
          <meshStandardMaterial color={col % 2 === 0 ? '#a78bfa' : '#38bdf8'} emissive={col % 2 === 0 ? '#a78bfa' : '#38bdf8'} emissiveIntensity={0.7} metalness={0.3} roughness={0.7} />
        </mesh>
      );
    }
  }

  // Code lines for the screen
  const codeLines = [
    '#f472b6', '#38bdf8', '#a78bfa', '#f472b6', '#38bdf8', '#a78bfa', '#f472b6', '#38bdf8'
  ];

  return (
    <group ref={laptopRef} position={[0, 0, 0]}>
      {/* Shadow/Glow */}
      <mesh position={[0, -0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.1, 32]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.18} />
      </mesh>
      {/* Laptop Base with rounded corners */}
      <mesh position={[0, -0.1, 0]} rotation={[-0.04, 0, 0]} castShadow>
        <boxGeometry args={[2.7, 0.13, 1.9]} />
        <NeonMaterial color="#18181b" />
      </mesh>
      {/* Touchpad */}
      <mesh position={[0, -0.035, 0.5]}>
        <boxGeometry args={[0.5, 0.01, 0.32]} />
        <NeonMaterial color="#38bdf8" glow opacity={0.8} />
      </mesh>
      {/* Keyboard */}
      <group position={[0, -0.05, 0]}>{keys}</group>
      {/* Laptop Screen */}
      <group ref={screenRef} position={[0, 0.85, -0.85]} rotation={[1.25, 0, 0]}>
        {/* Screen Frame with rounded corners */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 0.07, 1.7]} />
          <NeonMaterial color="#18181b" />
        </mesh>
        {/* Screen Display with gradient and glow */}
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[2.3, 1.5]} />
          <meshStandardMaterial color="#18181b" emissive="#38bdf8" emissiveIntensity={0.35} />
        </mesh>
        {/* Window bar */}
        <mesh position={[0, 0.7, 0.06]}>
          <planeGeometry args={[2.1, 0.13]} />
          <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.7} />
        </mesh>
        {/* Code lines */}
        <group position={[-0.8, 0.5, 0.05]}>
          {codeLines.map((color, i) => (
            <mesh key={i} position={[0, -i * 0.18, 0]}>
              <planeGeometry args={[1.6 - i * 0.1, 0.07]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} />
            </mesh>
          ))}
        </group>
      </group>
      {/* Neon Coffee Cup */}
      <group position={[-1.7, 0.05, 0.7]} rotation={[0, 0.2, 0]}>
        {/* Cup body */}
        <mesh>
          <cylinderGeometry args={[0.18, 0.18, 0.5, 32]} />
          <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.9} metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Cup top */}
        <mesh position={[0, 0.25, 0]}>
          <circleGeometry args={[0.18, 32]} />
          <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.7} />
        </mesh>
      </group>
      {/* Neon Mouse */}
      <group position={[1.5, -0.08, 0.7]} rotation={[0, -0.2, 0]}>
        <mesh>
          <sphereGeometry args={[0.13, 24, 24]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.7} />
        </mesh>
        <mesh position={[0, 0.07, 0]}>
          <boxGeometry args={[0.08, 0.01, 0.08]} />
          <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.7} />
        </mesh>
      </group>
    </group>
  );
}

export default function EducationLaptop() {
  // Floating glowing particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    x: Math.random() * 3.5 - 1.7,
    y: Math.random() * 1.2 - 0.2,
    z: Math.random() * 2 - 1,
    size: Math.random() * 0.06 + 0.03,
    color: ['#38bdf8', '#a78bfa', '#f472b6'][i % 3]
  }));

  return (
    <div className="w-full h-96 md:h-[500px] relative">
      <Canvas
        camera={{ position: [0.5, 1.1, 4.2], fov: 40 }}
        style={{ background: 'transparent' }}
        shadows
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#a78bfa" />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#38bdf8" />
        <Laptop />
        {/* Glowing floating particles */}
        {particles.map((p, i) => (
          <mesh key={i} position={[p.x, p.y, p.z]}>
            <sphereGeometry args={[p.size, 16, 16]} />
            <meshStandardMaterial color={p.color} emissive={p.color} emissiveIntensity={1.5} transparent opacity={0.8} />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
} 