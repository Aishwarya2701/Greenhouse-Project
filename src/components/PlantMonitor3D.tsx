import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function MonitorModel() {
  const ref = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(time / 3) * 0.15;
      ref.current.position.y = Math.sin(time) * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {/* Device Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.2, 1]} />
        <meshStandardMaterial color="#059669" />
      </mesh>
      
      {/* Main Sensor Unit */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 0.8, 0.8]} />
        <meshStandardMaterial 
          color="#34d399"
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
      
      {/* Moisture Sensor Probe */}
      <mesh position={[-0.3, -0.4, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.05, 0.02, 1]} />
        <meshStandardMaterial color="#6ee7b7" />
      </mesh>
      
      {/* Temperature Sensor */}
      <mesh position={[0.3, 0.9, 0]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial 
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

export function PlantMonitor3D() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <MonitorModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}