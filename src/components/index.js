/**
 * Components Index - Central export hub for all application components
 * 
 * This file serves as the main entry point for importing components throughout the application.
 * It provides a clean, centralized way to manage component exports and maintains
 * a clear separation between different component categories.
 * 
 * @fileoverview Central component export management
 * @author Jabbour Dandan
 * @version 1.0.0
 */

// Canvas Components - 3D animated background elements
import {
  EarthCanvas,      // 3D Earth model for Contact section
  BallCanvas,       // 3D floating ball animations
  ComputersCanvas,  // 3D computer model for Hero section
  StarsCanvas,      // Animated starfield background
} from "./canvas";

// Main UI Components - Core application sections
import Hero from "./Hero";         // Landing section with animated introduction
import Navbar from "./Navbar";     // Navigation header component
import About from "./About";       // Professional background and skills showcase
import Works from "./Works";       // Project portfolio display
import Contact from "./Contact";   // Contact form with email integration

/**
 * Centralized component exports for clean import management
 * 
 * Components are grouped logically for better organization:
 * - Main UI Components: Core application sections
 * - Canvas Components: 3D animated elements
 * 
 * Usage example:
 * import { Hero, About, Contact } from './components';
 * import { EarthCanvas, StarsCanvas } from './components';
 */
export {
  // Main UI Components
  Hero,
  Navbar,
  About,
  Works,
  Contact,
  
  // Canvas Components
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
};
