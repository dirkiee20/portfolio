import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import profileImg from '../assets/portfolio_profile.png';

// Glowing, animated gradient sphere with orbiting satellites
function AnimatedSphere() {
  const mesh = useRef();
  const group = useRef();
  const satellites = 6;
  const satelliteColors = ['#ff4b4b', '#4287f5', '#42f554', '#f5e142', '#f57c42', '#a142f5'];
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.5;
      mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
    if (group.current) {
      group.current.children.forEach((sat, i) => {
        const angle = clock.getElapsedTime() * 0.7 + (i * (Math.PI * 2)) / satellites;
        sat.position.x = Math.cos(angle) * 2.1;
        sat.position.z = Math.sin(angle) * 2.1;
        sat.position.y = Math.sin(angle * 2) * 0.5;
      });
    }
  });

  // Custom gradient material
  const gradientMaterial = new THREE.MeshPhysicalMaterial({
    color: '#06b6d4',
    roughness: 0.25,
    metalness: 0.7,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    sheen: 1,
    sheenColor: new THREE.Color('#a78bfa'),
    iridescence: 0.2,
    transmission: 0.2,
    thickness: 0.5,
    emissive: new THREE.Color('#06b6d4'),
    emissiveIntensity: 0.25,
  });

  return (
    <>
      {/* Glow effect */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.18} />
      </mesh>
      {/* Main sphere */}
      <mesh ref={mesh} castShadow receiveShadow material={gradientMaterial}>
        <sphereGeometry args={[1.2, 64, 64]} />
      </mesh>
      {/* Orbiting satellites */}
      <group ref={group}>
        {[...Array(satellites)].map((_, i) => (
          <mesh key={i}>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial color={satelliteColors[i % satelliteColors.length]} emissive="#fff" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
      {/* Futuristic ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.035, 16, 100]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.3} />
      </mesh>
    </>
  );
}

export default function Hero() {
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh]">
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 md:px-8">
        {/* Left: Text */}
        <div ref={textRef} className="flex-1 flex flex-col items-start justify-center text-left z-10 py-8 md:py-24 w-full max-w-2xl">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 tracking-wide animate-fade-in flex flex-col items-start"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="text-cyan-400">Code chaos? I’m </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Dirk Labiaga</span>
            <span className="text-cyan-400"> — let’s bring order to it</span>
          </h1>
          <div className="max-w-2xl">
            <p className="text-lg sm:text-2xl md:text-3xl font-semibold mb-6 transition-all duration-700">
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Clean code.</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Creative design.</span>{' '}
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Real impact.</span>
            </p>
          </div>
        </div>
        {/* Right: Profile Picture */}
        <div className="flex-1 min-w-0 flex items-center justify-center w-full md:w-[700px] h-auto relative mb-2 md:mb-0 -mt-16 md:-mt-20">
          <img
            src={profileImg}
            alt="Dirk Labiaga profile"
            className="object-cover w-[90vw] max-w-[340px] h-[340px] md:w-[700px] md:h-[700px]"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
            }}
          />
        </div>
      </div>
    </section>
  );
}
