import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

// Import custom styling utilities and components
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

/**
 * Hero component - Main landing section with animated introduction
 * Features professional title, typewriter effect for roles, 3D computer animation,
 * and scroll indicator with smooth animation
 */

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Main content container with responsive positioning */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        
        {/* Decorative line indicator */}
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Purple dot indicator */}
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          {/* Gradient vertical line */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Hero text content */}
        <div>
          {/* Main heading with name highlight */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#915EFF]">Jabbour</span>
          </h1>

          {/* Professional role introduction */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a
          </p>
          
          {/* Animated typewriter effect for professional roles */}
          <div className={`${styles.heroSubText} text-white-100`}>
            <Typewriter
              options={{
                strings: [
                  "Software Engineer", 
                  "Full Stack Developer", 
                  ".NET Specialist", 
                  "Angular Developer", 
                  "Cloud Solutions Architect"
                ],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1500, // Increased pause for better readability
              }}
            />
          </div>
        </div>
      </div>

      {/* 3D Computer animation canvas */}
      <ComputersCanvas />

      {/* Scroll indicator with smooth animation */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About section">
          {/* Animated scroll indicator container */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* Bouncing scroll dot animation */}
            <motion.div
              animate={{
                y: [0, 24, 0], // Smooth up and down movement
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// Export the Hero component as the default export
export default Hero;
