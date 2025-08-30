/**
 * 3D Stars Canvas Component - Animated starfield background
 * 
 * This component creates an immersive animated starfield using React Three Fiber
 * with thousands of individual star points distributed in a 3D sphere.
 * Features smooth rotation animations and professional particle effects
 * for an engaging cosmic background experience.
 * 
 * @fileoverview 3D animated starfield background component
 * @author Jabbour Dandan
 * @version 1.0.0
 */

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Import global styles for canvas container
import "../../index.css";

// Configuration constant for star density - optimized for performance and visual appeal
const STAR_COUNT = 1500;

/**
 * Stars component renders animated 3D starfield with smooth rotation
 * 
 * Features:
 * - 1500+ individual star points for dense, realistic starfield
 * - Spherical distribution for 3D depth and immersion
 * - Smooth continuous rotation on multiple axes
 * - Professional particle material with transparency and attenuation
 * - Optimized rendering with frustum culling for performance
 * - Subtle pink coloring for modern aesthetic appeal
 * 
 * @returns {JSX.Element} Animated 3D starfield with continuous rotation
 */

const Stars = () => {
  // Reference for accessing and animating the star group rotation
  const starGroupRef = useRef({
    rotation: { x: 0, y: 0, z: Math.PI / 4 },
  });

  // Generate random star positions in a 3D sphere distribution
  // Using Float32Array for optimal memory usage and performance
  const starPositions = random.inSphere(new Float32Array(STAR_COUNT * 3), { 
    radius: 1.2  // Sphere radius for star distribution depth
  });

  /**
   * Animation frame handler for smooth star rotation
   * Creates subtle cosmic movement with different rotation speeds on X and Y axes
   * @param {Object} state - Three.js frame state
   * @param {number} delta - Time since last frame for smooth animation
   */
  useFrame((state, delta) => {
    // Smooth rotation on X-axis (slower vertical rotation)
    starGroupRef.current.rotation.x -= delta / 10;
    
    // Smooth rotation on Y-axis (even slower horizontal rotation)
    starGroupRef.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* 3D points system for efficient star rendering */}
      <Points 
        ref={starGroupRef} 
        positions={starPositions} 
        stride={3}              // 3 values per position (x, y, z)
        frustumCulled          // Performance optimization - cull off-screen stars
      >
        {/* Professional particle material for realistic star appearance */}
        <PointMaterial
          transparent                    // Enable transparency for realistic star glow
          color="#f272c8"               // Subtle pink color for modern aesthetic
          size={0.002}                  // Small size for realistic star points
          sizeAttenuation={true}        // Stars get smaller with distance for depth perception
          depthWrite={false}            // Prevent depth buffer conflicts for smooth blending
        />
      </Points>
    </group>
  );
};

/**
 * StarsCanvas component - Main canvas wrapper for 3D starfield rendering
 * 
 * Provides the Three.js canvas context for the animated starfield background.
 * Optimized for use as a full-screen background element with minimal camera setup
 * and efficient rendering pipeline.
 * 
 * Features:
 * - Lightweight canvas setup optimized for background use
 * - Professional camera positioning for optimal starfield viewing
 * - Suspense-based loading for graceful component mounting
 * - Asset preloading for smooth performance
 * - Responsive container styling for full-screen coverage
 * 
 * @returns {JSX.Element} Complete starfield canvas with container styling
 */
const StarsCanvas = () => (
  <div className="stars-canvas-container">
    <Canvas 
      camera={{ position: [0, 0, 1] }}  // Simple camera setup for background starfield
    >
      {/* Suspense wrapper for graceful component loading */}
      <Suspense fallback={null}>
        <Stars />
      </Suspense>

      {/* Preload all assets for optimal performance */}
      <Preload all />
    </Canvas>
  </div>
);

// Export StarsCanvas as default for clean component imports
export default StarsCanvas;
