/**
 * Canvas Loader Component - Loading indicator for 3D canvas elements
 * 
 * This component provides a visual loading indicator for Three.js canvas elements
 * using React Three Fiber. It displays a spinner animation with real-time
 * progress percentage for enhanced user experience during 3D model loading.
 * 
 * @fileoverview 3D Canvas loading component with progress indicator
 * @author Jabbour Dandan
 * @version 1.0.0
 */

import { Html, useProgress } from "@react-three/drei";

/**
 * CanvasLoader component renders a loading spinner with progress percentage
 * for 3D canvas elements during asset loading phase
 * 
 * Features:
 * - Real-time loading progress display
 * - Centered spinner animation
 * - Professional styling with consistent typography
 * - Responsive design for all screen sizes
 * 
 * @returns {JSX.Element} Rendered loading component with progress indicator
 */

const CanvasLoader = () => {
  // Extract loading progress from React Three Fiber's useProgress hook
  const { progress } = useProgress();

  // Container styling for centered loading display
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  // Professional typography styling for progress text
  const progressTextStyle = {
    fontSize: 14,
    color: "#F1F1F1",        // Light gray for good contrast
    fontWeight: 800,         // Bold weight for visibility
    marginTop: 40,           // Spacing from spinner element
    letterSpacing: "0.5px",  // Improved readability
  };

  return (
    <Html as="div" center style={containerStyle}>
      {/* Loading spinner animation element */}
      <span className="canvas-loader" />
      
      {/* Real-time progress percentage display */}
      <p style={progressTextStyle}>
        Loading {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

// Export CanvasLoader as the default export for clean imports
export default CanvasLoader;
