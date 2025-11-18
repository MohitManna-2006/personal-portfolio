import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import RubiksCube from '../components/RubiksCube';

const IndexPage: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)' }}>
      <Canvas
        camera={{ 
          position: [5, 5, 5], 
          fov: 50 
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Environment */}
        <Environment preset="studio" />
        
        {/* Rubik's Cube */}
        <RubiksCube />
        
        {/* Controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          autoRotateSpeed={0.5}
          minDistance={3}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
};

export default IndexPage;
