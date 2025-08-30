import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Import custom styles and components
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

/**
 * Reusable input field component for form elements
 * @param {string} label - The label text for the input field
 * @param {string} value - The current value of the input
 * @param {function} onChange - Handler function for input changes
 * @param {string} placeholder - Placeholder text for the input
 * @param {string} name - The name attribute for the input
 * @param {string} type - The type of input (text, email, etc.)
 */

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

/**
 * Main Contact component that handles user inquiries and messages
 * Features form validation, email sending via EmailJS, and animated UI elements
 */
const Contact = () => {
  // Reference to the form element for direct DOM manipulation if needed
  const formRef = useRef();
  
  // Form state management for all input fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  // Loading state for submit button and form submission feedback
  const [loading, setLoading] = useState(false);
  
  // Error state management for form validation
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  
  // Success/error message state for user feedback
  const [confirmation, setConfirmation] = useState("");

  /**
   * Handles input field changes and updates the form state
   * @param {Event} e - The change event from input fields
   */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  /**
   * Validates email format using regex pattern
   * @param {string} email - The email address to validate
   * @returns {boolean} - True if email is valid, false otherwise
   */
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  /**
   * Handles form submission, validates inputs, and sends email via EmailJS
   * @param {Event} e - The form submission event
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear any previous error messages and confirmation
    setEmailError("");
    setNameError("");
    setConfirmation("");

    // Validate email format
    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Validate name field is not empty
    if (!form.name.trim()) {
      setNameError("Please enter your full name.");
      return;
    }

    // Set loading state to show feedback to user
    setLoading(true);

    // Send email using EmailJS service
    emailjs
      .send(
        "service_d4rz5nh", // EmailJS service ID
        "template_glfsivj", // EmailJS template ID
        {
          from_name: form.name,
          to_name: "Jabbour Dandan",
          from_email: form.email,
          to_email: "jaboordandan14@gmail.com",
          message: form.message,
        },
        "hdgYKEw_O4R90tsRl" // EmailJS public key
      )
      .then(
        () => {
          // Handle successful email send
          setLoading(false);
          setConfirmation("Thank you for reaching out! I will respond to your message within 24 hours.");

          // Reset form fields after successful submission
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        // Handle email send failure
        setLoading(false);
        console.error(error);
        setConfirmation("We encountered an issue sending your message. Please try again or contact me directly at jaboordandan14@gmail.com");
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {/* Left side - Contact form with animation */}
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        {/* Section header */}
        <p className={styles.sectionSubText}>Let's Connect</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        {/* Contact form */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {/* Name input field */}
          <InputField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            type="text"
          />
          {/* Display name validation error if exists */}
          {nameError && <span className="text-red-500">{nameError}</span>}

          {/* Email input field */}
          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            type="email"
          />
          {/* Display email validation error if exists */}
          {emailError && <span className="text-red-500">{emailError}</span>}

          {/* Message textarea field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Share your thoughts, project ideas, or collaboration opportunities..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          {/* Submit button with loading state */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-tertiary/90 transition-colors duration-200"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {/* Display confirmation message if exists */}
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
      </motion.div>

      {/* Right side - 3D Earth canvas with animation */}
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// Export the Contact component wrapped with SectionWrapper HOC for consistent styling and animations
export default SectionWrapper(Contact, "contact");
