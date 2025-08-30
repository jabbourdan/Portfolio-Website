/**
 * Navigation Component - Professional header navigation with responsive design
 * 
 * This component provides the main navigation interface for the portfolio website.
 * Features include responsive mobile menu, smooth scrolling navigation, resume access,
 * and professional branding with active state management.
 * 
 * @fileoverview Professional navigation header component
 * @author Jabbour Dandan
 * @version 1.0.0
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import navigation assets and configuration
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

/**
 * Navbar component renders the main navigation header
 * 
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Active section highlighting
 * - Professional branding with name display
 * - Resume download functionality
 * - Smooth scroll navigation
 * - Fixed positioning for persistent access
 * 
 * @returns {JSX.Element} Professional navigation header
 */

const Navbar = () => {
  // State for tracking active navigation section
  const [active, setActive] = useState('');
  
  // State for controlling mobile menu visibility
  const [toggle, setToggle] = useState(false);

  /**
   * Handles resume PDF download in a new browser tab
   * Provides professional document access for potential employers
   */
  const handleResumeDownload = () => {
    const resumeUrl = '/Resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  // Effect to reset active state when mobile menu is toggled
  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  /**
   * Renders navigation links with responsive styling
   * @param {boolean} isMobile - Determines if rendering for mobile menu
   * @returns {JSX.Element} Navigation links list
   */

  const renderNavLinks = (isMobile) => (
    <ul className={`list-none ${isMobile ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isMobile ? 'text-secondary' : 'text-white'
          } hover:text-white text-[20px] font-medium cursor-pointer transition-colors duration-200`}
          onClick={() => {
            setActive(link.title);
            if (isMobile) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`} aria-label={`Navigate to ${link.title} section`}>
            {link.title}
          </a>
        </li>
      ))}
      {/* Professional resume access button */}
      <li
        className={`text-${
          isMobile ? 'secondary' : 'white'
        } hover:text-white text-[20px] font-medium cursor-pointer transition-colors duration-200`}
      >
        <button 
          onClick={handleResumeDownload}
          aria-label="Download professional resume"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
        >
          Resume
        </button>
      </li>
    </ul>
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Professional brand logo/name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
          aria-label="Return to homepage"
        >
          <h1 className="text-white text-[20px] font-bold cursor-pointer flex">
            Jabbour&nbsp;
            <span className="sm:block hidden">Dandan</span>
          </h1>
        </Link>

        {/* Desktop navigation menu */}
        {renderNavLinks(false)}

        {/* Mobile menu toggle and dropdown */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Mobile menu toggle button */}
          <button
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={toggle}
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded p-1"
          >
            <img
              src={toggle ? close : menu}
              alt={toggle ? 'Close menu' : 'Open menu'}
              className="w-[28px] h-[18px] object-contain cursor-pointer"
            />
          </button>

          {/* Mobile navigation dropdown */}
          <div
            className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass transition-all duration-300 ${
              toggle ? 'flex opacity-100' : 'hidden opacity-0'
            }`}
            role="menu"
            aria-hidden={!toggle}
          >
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Export Navbar component as default export for clean imports
export default Navbar;
