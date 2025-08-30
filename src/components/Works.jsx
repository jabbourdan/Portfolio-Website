/**
 * Works Component - Professional project portfolio showcase
 * 
 * This component displays a curated collection of professional projects
 * with alternating layouts, animated reveals, and detailed project information.
 * Features responsive design and interactive elements for enhanced user engagement.
 * 
 * @fileoverview Professional project portfolio display component
 * @author Jabbour Dandan
 * @version 1.0.0
 */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import styling utilities and project data
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/**
 * ProjectCard component renders individual project cards with alternating layouts
 * 
 * @param {number} index - Project index for animation timing and layout direction
 * @param {string} name - Project title/name
 * @param {string} description - Detailed project description
 * @param {Array} tags - Technology stack tags with styling
 * @param {string} image - Project screenshot/preview image
 * @param {string} source_code_link - Link to project repository or live demo
 * @returns {JSX.Element} Animated project card with responsive layout
 */

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  // Determine layout direction based on project index for visual variety
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)} // Staggered animation for smooth reveal
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`
        flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"}
        items-center gap-6 mb-20 w-full
      `}
    >
      {/* Project image container with responsive sizing */}
      <div className="w-full md:w-1/2 px-2">
        <img
          src={image}
          alt={`${name} project screenshot`} // Improved accessibility
          className="rounded-2xl w-full h-auto object-cover min-h-[180px] shadow-lg"
        />
      </div>

      {/* Project information and details */}
      <div className="w-full md:w-1/2 text-left space-y-4 px-4">
        {/* Project title with responsive typography */}
        <h3 className="text-white text-[22px] sm:text-[20px] md:text-[28px] font-bold">
          {name}
        </h3>
        
        {/* Project description with professional formatting */}
        <p className="text-secondary text-[14px] sm:text-[13px] md:text-[16px] leading-6">
          {description}
        </p>

        {/* Technology stack tags display */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[12px] sm:text-[11px] md:text-[14px] ${tag.color} font-medium`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Project link button with professional styling */}
        {source_code_link && (
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            aria-label={`View ${name} project details`}
          >
            View Project
          </button>
        )}
      </div>
    </motion.div>
  );
};

/**
 * Works component - Main portfolio section displaying professional projects
 * 
 * Features:
 * - Client-side rendering optimization
 * - Animated section headers and content
 * - Responsive project grid layout
 * - Professional project showcase with detailed information
 * 
 * @returns {JSX.Element} Complete works section with project portfolio
 */
const Works = () => {
  // Client-side rendering state for hydration optimization
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure component renders only on client-side for consistent behavior
    setIsClient(true);
  }, []);

  // Prevent server-side rendering issues
  if (!isClient) return null;

  return (
    <section id="works" className="py-16 px-4 sm:px-2 max-w-7xl mx-auto">
      {/* Section header with professional animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Projects</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      {/* Professional portfolio description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="mt-4 text-secondary text-[15px] sm:text-[14px] leading-[28px] sm:leading-[24px] max-w-4xl"
      >
        A curated selection of professional projects demonstrating expertise in full-stack development, 
        cloud architecture, secure system implementation, and modern web technologies. Each project 
        showcases different aspects of software engineering excellence and innovative problem-solving.
      </motion.p>

      {/* Project portfolio grid */}
      <div className="mt-12 flex flex-col gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

// Export Works component wrapped with SectionWrapper for consistent styling and animations
export default SectionWrapper(Works, "works");
