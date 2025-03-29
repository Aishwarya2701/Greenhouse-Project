import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function SensorModel() {
  const ref = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(time / 2) * 0.2;
      ref.current.position.y = Math.sin(time) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {/* Sensor Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.2, 1.5]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
      
      {/* Sensor Body */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[1.5, 1, 1]} />
        <meshStandardMaterial 
          color="#60a5fa"
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
      
      {/* Sensor Display */}
      <mesh position={[0, 0.6, 0.51]}>
        <planeGeometry args={[1, 0.5]} />
        <meshStandardMaterial 
          color="#000000"
          emissive="#00ff00"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Antenna */}
      <mesh position={[0.5, 1.2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
    </group>
  );
}

export function AQISensor3D() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <SensorModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}