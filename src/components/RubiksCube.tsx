import React, { useRef, useEffect, useState } from 'react';
import { RoundedBox } from '@react-three/drei';
import { MeshStandardMaterial, Group } from 'three';
import { useFrame } from '@react-three/fiber';

// Define the colors for each face of the Rubik's Cube
const CUBE_COLORS = {
  front: '#ff0000',   // Red
  back: '#ff8800',    // Orange
  left: '#00ff00',    // Green
  right: '#0000ff',   // Blue
  top: '#ffff00',    // Yellow
  bottom: '#ffffff'  // White
};

interface CubieProps {
  position: [number, number, number];
  colors: {
    front?: string;
    back?: string;
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
}

const Cubie: React.FC<CubieProps> = ({ position, colors }) => {
  return (
    <group position={position}>
      {/* Solid cubie base */}
      <RoundedBox
        args={[0.9, 0.9, 0.9]}
        radius={0.05}
        smoothness={4}
        material={new MeshStandardMaterial({
          color: '#1a1a1a',
          metalness: 0.2,
          roughness: 0.1
        })}
      />
      
      {/* Front face */}
      {colors.front && (
        <mesh position={[0, 0, 0.46]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial 
            color={colors.front}
            metalness={0.1}
            roughness={0.2}
            emissive={colors.front}
            emissiveIntensity={0.05}
          />
        </mesh>
      )}
      
      {/* Back face */}
      {colors.back && (
        <mesh position={[0, 0, -0.46]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial 
            color={colors.back}
            metalness={0.1}
            roughness={0.2}
            emissive={colors.back}
            emissiveIntensity={0.05}
          />
        </mesh>
      )}
      
      {/* Left face */}
      {colors.left && (
        <mesh position={[-0.46, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial 
            color={colors.left}
            metalness={0.1}
            roughness={0.2}
            emissive={colors.left}
            emissiveIntensity={0.05}
          />
        </mesh>
      )}
      
      {/* Right face */}
      {colors.right && (
        <mesh position={[0.46, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial 
            color={colors.right}
            metalness={0.1}
            roughness={0.2}
            emissive={colors.right}
            emissiveIntensity={0.05}
          />
        </mesh>
      )}
      
      {/* Top face */}
      {colors.top && (
        <mesh position={[0, 0.46, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial 
            color={colors.top}
            metalness={0.1}
            roughness={0.2}
            emissive={colors.top}
            emissiveIntensity={0.05}
          />
        </mesh>
      )}
      
      {/* Bottom face */}
      {colors.bottom && (
        <mesh position={[0, -0.46, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.85, 0.85]} />
          <meshStandardMaterial 
            color={colors.bottom}
            metalness={0.1}
            roughness={0.2}
            emissive={colors.bottom}
            emissiveIntensity={0.05}
          />
        </mesh>
      )}
    </group>
  );
};

const RubiksCube: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const [animationPhase, setAnimationPhase] = useState<'scrambled' | 'solving' | 'solved'>('scrambled');
  const [currentMove, setCurrentMove] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Generate scrambled cube
  const generateScrambledCube = () => {
    const positions: [number, number, number][] = [];
    const colors: Array<{
      front?: string;
      back?: string;
      left?: string;
      right?: string;
      top?: string;
      bottom?: string;
    }> = [];

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          positions.push([x * 1.05, y * 1.05, z * 1.05]);
          
          // Create scrambled colors
          const colorSet = Object.values(CUBE_COLORS);
          const randomColors: any = {};
          
          // Randomly assign colors to create scrambled effect
          if (Math.random() > 0.3) {
            if (z === 1) randomColors.front = colorSet[Math.floor(Math.random() * colorSet.length)];
            if (z === -1) randomColors.back = colorSet[Math.floor(Math.random() * colorSet.length)];
            if (x === -1) randomColors.left = colorSet[Math.floor(Math.random() * colorSet.length)];
            if (x === 1) randomColors.right = colorSet[Math.floor(Math.random() * colorSet.length)];
            if (y === 1) randomColors.top = colorSet[Math.floor(Math.random() * colorSet.length)];
            if (y === -1) randomColors.bottom = colorSet[Math.floor(Math.random() * colorSet.length)];
          }
          
          colors.push(randomColors);
        }
      }
    }

    return { positions, colors };
  };

  const { positions, colors } = generateScrambledCube();

  // Start solving animation after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPhase('solving');
      setIsAnimating(true);
    }, 1000); // Start solving after 1 second

    return () => clearTimeout(timer);
  }, []);

  // Handle solving animation with proper timing
  useEffect(() => {
    if (animationPhase === 'solving' && isAnimating) {
      const moves = [
        { duration: 500, rotation: { x: 0, y: Math.PI / 2, z: 0 } },
        { duration: 500, rotation: { x: Math.PI / 2, y: 0, z: 0 } },
        { duration: 500, rotation: { x: 0, y: 0, z: Math.PI / 2 } },
        { duration: 500, rotation: { x: 0, y: -Math.PI / 2, z: 0 } },
        { duration: 500, rotation: { x: -Math.PI / 2, y: 0, z: 0 } },
        { duration: 500, rotation: { x: 0, y: 0, z: -Math.PI / 2 } },
        { duration: 400, rotation: { x: 0, y: Math.PI / 4, z: 0 } },
        { duration: 400, rotation: { x: Math.PI / 4, y: 0, z: 0 } },
        { duration: 400, rotation: { x: 0, y: 0, z: Math.PI / 4 } },
        { duration: 400, rotation: { x: 0, y: -Math.PI / 4, z: 0 } },
        { duration: 400, rotation: { x: -Math.PI / 4, y: 0, z: 0 } },
        { duration: 400, rotation: { x: 0, y: 0, z: -Math.PI / 4 } },
      ];

      if (currentMove < moves.length) {
        const move = moves[currentMove];
        const timer = setTimeout(() => {
          setCurrentMove(prev => prev + 1);
        }, move.duration);

        return () => clearTimeout(timer);
      } else {
        // Animation complete
        setAnimationPhase('solved');
        setIsAnimating(false);
      }
    }
  }, [animationPhase, isAnimating, currentMove]);

  // Frame animation for smooth solving
  useFrame((_, delta) => {
    if (groupRef.current) {
      if (animationPhase === 'solved') {
        // Gentle rotation when solved
        groupRef.current.rotation.y += delta * 0.3;
        groupRef.current.rotation.x += delta * 0.1;
      } else if (animationPhase === 'scrambled') {
        // Scrambled state - chaotic rotation
        groupRef.current.rotation.x += delta * 0.8;
        groupRef.current.rotation.y += delta * 0.6;
        groupRef.current.rotation.z += delta * 0.4;
      } else if (animationPhase === 'solving') {
        // Solving state - systematic rotation
        const moves = [
          { rotation: { x: 0, y: Math.PI / 2, z: 0 } },
          { rotation: { x: Math.PI / 2, y: 0, z: 0 } },
          { rotation: { x: 0, y: 0, z: Math.PI / 2 } },
          { rotation: { x: 0, y: -Math.PI / 2, z: 0 } },
          { rotation: { x: -Math.PI / 2, y: 0, z: 0 } },
          { rotation: { x: 0, y: 0, z: -Math.PI / 2 } },
          { rotation: { x: 0, y: Math.PI / 4, z: 0 } },
          { rotation: { x: Math.PI / 4, y: 0, z: 0 } },
          { rotation: { x: 0, y: 0, z: Math.PI / 4 } },
          { rotation: { x: 0, y: -Math.PI / 4, z: 0 } },
          { rotation: { x: -Math.PI / 4, y: 0, z: 0 } },
          { rotation: { x: 0, y: 0, z: -Math.PI / 4 } },
        ];

        if (currentMove < moves.length) {
          const move = moves[currentMove];
          // Smooth interpolation to the target rotation
          const targetRotation = move.rotation;
          const currentRotation = groupRef.current.rotation;
          
          // Interpolate to target rotation
          currentRotation.x = targetRotation.x;
          currentRotation.y = targetRotation.y;
          currentRotation.z = targetRotation.z;
        }
      }
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((position, index) => (
        <Cubie
          key={index}
          position={position}
          colors={colors[index]}
        />
      ))}
    </group>
  );
};

export default RubiksCube;