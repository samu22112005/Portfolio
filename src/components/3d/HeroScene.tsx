import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { InteractiveShape } from './InteractiveShape';
import { ParticleField } from './ParticleField';

export const HeroScene: React.FC = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    // Detect low-power or mobile devices
    const checkPerformance = () => {
      const isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 1;
      setIsLowPower(isMobile);
    };

    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setPointer({ x, y });
  };

  return (
    <div
      className="w-full h-full min-h-[420px] lg:min-h-[560px] relative rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, isLowPower ? 1.5 : 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={45} />
        
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#818cf8" />
        
        {/* Mouse-tracking dynamic point light */}
        <pointLight
          position={[pointer.x * 4, pointer.y * 4, 3]}
          intensity={2.5}
          color="#06b6d4"
          distance={8}
        />

        {/* 3D Scene Content */}
        <InteractiveShape pointerPosition={pointer} />
        <ParticleField count={isLowPower ? 150 : 350} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.5}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Floating 3D Interaction Helper Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-xs text-slate-400 pointer-events-none flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Drag to rotate • Click 3D shape</span>
      </div>
    </div>
  );
};
