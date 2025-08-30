/**
 * 3D Computer Canvas Component - Interactive desktop computer model display
 * 
 * This component renders a high-quality 3D computer model using React Three Fiber
 * with professional lighting, responsive design, and performance optimizations.
 * Features DRACO compression for efficient model loading and adaptive scaling
 * for mobile devices.
 * 
 * @fileoverview 3D computer model component with responsive design and professional lighting
 * @author Jabbour Dandan
 * @version 1.0.0
 */

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";

// Import loading component for 3D model assets
import CanvasLoader from "../Loader";

/**
 * ComputerModel component renders the 3D desktop computer with professional lighting
 * 
 * Features:
 * - High-quality GLTF model with DRACO compression for optimal loading
 * - Professional three-point lighting setup for realistic appearance
 * - Responsive scaling and positioning for mobile and desktop devices
 * - Shadow casting for enhanced visual depth
 * - Optimized model positioning and rotation for best presentation
 * 
 * @param {boolean} isMobile - Determines if rendering for mobile device
 * @returns {JSX.Element} 3D computer model with professional lighting setup
 */

const ComputerModel = ({ isMobile }) => {
  // Load 3D computer model with DRACO compression for optimized file size
  const { scene } = useGLTF(
    "./desktop_pc/scene.gltf",
    undefined,
    (loader) => {
      // Configure DRACO loader for compressed geometry loading
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return (
    <mesh>
      {/* Professional three-point lighting setup for realistic model appearance */}
      
      {/* Ambient hemisphere light for soft overall illumination */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      
      {/* Main spotlight for dramatic lighting and shadow casting */}
      <spotLight
        position={[-20, 50, 10]}     // Positioned above and to the side for natural lighting
        angle={0.12}                 // Focused beam angle for directional lighting
        penumbra={1}                 // Soft shadow edges for professional appearance
        intensity={1}                // Balanced intensity for clear model visibility
        castShadow                   // Enable shadow casting for depth perception
        shadow-mapSize={1024}        // High-quality shadow resolution
      />
      
      {/* Fill light to reduce harsh shadows and improve model visibility */}
      <pointLight intensity={1} />
      
      {/* 3D computer model with responsive positioning and scaling */}
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}                                    // Responsive scaling for device type
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}          // Adaptive positioning for optimal viewing
        rotation={[-0.01, -0.2, -0.1]}                                   // Subtle rotation for dynamic presentation
      />
    </mesh>
  );
};

// Memoize ComputerModel component for performance optimization
const MemoizedComputerModel = React.memo(ComputerModel);

/**
 * ComputersCanvas component - Main canvas wrapper for 3D computer model rendering
 * 
 * Provides responsive 3D computer model display with professional camera settings,
 * interactive controls, and performance optimizations. Includes responsive design
 * that adapts to mobile devices for optimal user experience.
 * 
 * Features:
 * - Responsive design with mobile device detection
 * - Professional camera positioning and field of view
 * - Interactive orbit controls with constrained movement
 * - Performance-optimized rendering with demand-based frameloop
 * - High-DPI support for crisp rendering on all devices
 * - Shadow rendering for enhanced visual realism
 * - Asset preloading for smooth user experience
 * 
 * @returns {JSX.Element} Complete 3D canvas with interactive computer model
 */

const ComputersCanvas = () => {
  // State for responsive mobile device detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Create media query for mobile device detection (screen width <= 500px)
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    /**
     * Handles media query changes for responsive design
     * Updates mobile state when screen size changes
     * @param {MediaQueryListEvent} event - Media query change event
     */
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Set initial mobile state based on current screen size
    setIsMobile(mediaQuery.matches);

    // Add event listener for responsive design updates
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup function to remove event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"                               // Optimize performance with demand-based rendering
      shadows                                          // Enable shadow rendering for realistic depth
      dpr={[1, 2]}                                    // Device pixel ratio for high-DPI display support
      camera={{ position: [20, 3, 5], fov: 25 }}     // Professional camera positioning and field of view
      gl={{ preserveDrawingBuffer: true }}            // Enable canvas export capabilities
    >
      {/* Suspense wrapper for graceful loading state management */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Interactive orbit controls with professional constraints */}
        <OrbitControls
          enableZoom={false}                          // Disable zoom for focused interaction
          maxPolarAngle={Math.PI / 2}                 // Constrain vertical rotation to prevent flipping
          minPolarAngle={Math.PI / 2}                 // Lock vertical angle for consistent viewing
        />
        
        {/* Memoized computer model with responsive design */}
        <MemoizedComputerModel isMobile={isMobile} />
      </Suspense>
      
      {/* Preload all assets for optimal performance and smooth experience */}
      <Preload all />
    </Canvas>
  );
};

// Export ComputersCanvas as default for clean component imports
export default ComputersCanvas;
