import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

interface InteractiveShapeProps {
  pointerPosition: { x: number; y: number };
}

export const InteractiveShape: React.FC<InteractiveShapeProps> = ({ pointerPosition }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Mesh>(null!);
  const innerRingRef = useRef<THREE.Mesh>(null!);
  const satellitesGroupRef = useRef<THREE.Group>(null!);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Smooth rotation & target tilt towards cursor
  useFrame((state, delta) => {
    const targetX = pointerPosition.y * 0.6;
    const targetY = pointerPosition.x * 0.8;

    // Smooth lerp rotation towards cursor
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX + state.clock.getElapsedTime() * 0.2, delta * 3);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY + state.clock.getElapsedTime() * 0.35, delta * 3);

    // Orbit rings counter-rotation
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.4;
      outerRingRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.6;
      innerRingRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.5) * 0.4;
    }

    // Satellites rotation
    if (satellitesGroupRef.current) {
      satellitesGroupRef.current.rotation.y += delta * 0.5;
    }

    // Click scale impulse lerp
    const targetScale = clicked ? 1.25 : hovered ? 1.12 : 1.0;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 6);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Main 3D Torus Knot Centerpiece */}
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 200);
          }}
          castShadow
          receiveShadow
        >
          <torusKnotGeometry args={[1.2, 0.38, 128, 32, 2, 3]} />
          <meshPhysicalMaterial
            roughness={0.15}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.3}
            ior={1.5}
            thickness={1.2}
            color={hovered ? "#818cf8" : "#4f46e5"}
            emissive={hovered ? "#6366f1" : "#1e1b4b"}
            emissiveIntensity={hovered ? 0.6 : 0.25}
            wireframe={false}
          />
        </mesh>

        {/* Wireframe Outer Ring */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[2.2, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>

        {/* Inner Glowing Ring */}
        <mesh ref={innerRingRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.8, 0.02, 16, 80]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={0.9}
          />
        </mesh>

        {/* Orbiting Satellites */}
        <group ref={satellitesGroupRef}>
          {[0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].map((angle, idx) => {
            const radius = 2.6;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            return (
              <mesh key={idx} position={[x, (idx % 2 === 0 ? 0.5 : -0.5), z]}>
                <octahedronGeometry args={[0.18, 0]} />
                <meshStandardMaterial
                  color={idx === 0 ? "#38bdf8" : idx === 1 ? "#c084fc" : "#34d399"}
                  emissive={idx === 0 ? "#0284c7" : idx === 1 ? "#9333ea" : "#059669"}
                  emissiveIntensity={0.8}
                  roughness={0.2}
                />
              </mesh>
            );
          })}
        </group>
      </group>
    </Float>
  );
};
