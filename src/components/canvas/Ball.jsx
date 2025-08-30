/**
 * 3D Ball Canvas Component - Interactive floating technology icon spheres
 * 
 * This component creates animated 3D spherical objects with technology icons
 * using React Three Fiber. Features floating animations, interactive controls,
 * and professional lighting for an engaging visual experience.
 * 
 * @fileoverview 3D animated ball component with technology icon textures
 * @author Jabbour Dandan
 * @version 1.0.0
 */

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

// Import loading component for 3D assets
import CanvasLoader from "../Loader";

/**
 * Ball component renders a 3D floating sphere with technology icon texture
 * 
 * Features:
 * - Smooth floating animation with configurable intensity
 * - Professional lighting setup with ambient and directional lights
 * - High-quality icosahedron geometry for smooth sphere appearance
 * - Decal mapping for technology icons on sphere surface
 * - Shadow casting and receiving for realistic depth
 * 
 * @param {string} iconUrl - URL path to the technology icon texture
 * @returns {JSX.Element} Animated 3D sphere with icon texture
 */

const Ball = React.memo(({ iconUrl }) => {
  // Load texture from provided icon URL for decal mapping
  const [decal] = useTexture([iconUrl]);

  return (
    <Float 
      speed={1.75}           // Animation speed for floating motion
      rotationIntensity={1}  // Subtle rotation during float animation
      floatIntensity={2}     // Vertical floating movement intensity
    >
      {/* Professional lighting setup for realistic appearance */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      
      {/* Main sphere mesh with professional material and scaling */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* High-quality icosahedron geometry for smooth sphere surface */}
        <icosahedronGeometry args={[1, 1]} />
        
        {/* Professional cream-colored material with optimized rendering */}
        <meshStandardMaterial 
          color="#fff8eb" 
          polygonOffset 
          polygonOffsetFactor={-5} 
          flatShading 
        />
        
        {/* Technology icon decal mapped to sphere surface */}
        <Decal 
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]} 
          scale={1} 
          map={decal} 
          flatShading 
        />
      </mesh>
    </Float>
  );
});

/**
 * BallCanvas component - Main canvas wrapper for 3D ball rendering
 * 
 * Provides the Three.js canvas context with optimized settings for performance
 * and quality. Includes interactive orbit controls and loading state management.
 * 
 * Features:
 * - Performance-optimized canvas with demand-based frameloop
 * - High-DPI support for crisp rendering on all devices
 * - Interactive orbit controls with zoom disabled for focused interaction
 * - Suspense-based loading with professional loader component
 * - Asset preloading for smooth user experience
 * 
 * @param {string} icon - Technology icon URL to display on the 3D sphere
 * @returns {JSX.Element} Complete 3D canvas with interactive ball
 */
const BallCanvas = ({ icon }) => {
  return (
    <Canvas 
      frameloop="demand"                           // Optimize performance by rendering on demand
      dpr={[1, 2]}                                // Device pixel ratio for crisp rendering
      gl={{ preserveDrawingBuffer: true }}        // Enable canvas export capabilities
    >
      {/* Suspense wrapper for graceful loading state management */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Interactive orbit controls with professional constraints */}
        <OrbitControls enableZoom={false} />
        
        {/* Main ball component with icon texture */}
        <Ball iconUrl={icon} />
      </Suspense>
      
      {/* Preload all assets for optimal performance */}
      <Preload all />
    </Canvas>
  );
};

// Export BallCanvas as default for clean component imports
export default BallCanvas;
