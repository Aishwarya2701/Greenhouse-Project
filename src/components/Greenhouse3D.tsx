import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useStore } from '../store/store';

function GreenHouseModel() {
  const ref = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(time / 4) * 0.1;
    }
  });

  // Simple greenhouse model using basic shapes
  return (
    <group ref={ref}>
      {/* Base */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4, 0.1, 3]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
      
      {/* Walls */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[4, 2, 3]} />
        <meshStandardMaterial color="#a0aec0" transparent opacity={0.4} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 2.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[3, 0.1, 3]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
      
      {/* Plants (simplified) */}
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[(i % 3) - 1, 0, Math.floor(i / 3) - 0.5]}>
          <cylinderGeometry args={[0.2, 0.2, 0.4]} />
          <meshStandardMaterial color="#48bb78" />
        </mesh>
      ))}
    </group>
  );
}

export function Greenhouse3D() {
  const { sensorData } = useStore();

  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GreenHouseModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}