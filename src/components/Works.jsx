import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`
        flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"}
        items-center gap-6 mb-20 w-full
      `}
    >
      <div className="w-full md:w-1/2 px-2">
        <img
          src={image}
          alt={name}
          className="rounded-2xl w-full h-auto object-cover min-h-[180px]"
        />
      </div>

      <div className="w-full md:w-1/2 text-left space-y-4 px-4">
        <h3 className="text-white text-[22px] sm:text-[20px] md:text-[28px] font-bold">
          {name}
        </h3>
        <p className="text-secondary text-[14px] sm:text-[13px] md:text-[16px] leading-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[12px] sm:text-[11px] md:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {source_code_link && (
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
          >
            View Source
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures client-side rendering
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section id="works" className="py-16 px-4 sm:px-2 max-w-7xl mx-auto">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText} text-sm sm:text-xs`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-3xl sm:text-2xl`}>Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="mt-4 text-secondary text-[15px] sm:text-[14px] leading-[28px] sm:leading-[24px] max-w-4xl"
      >
        These are some of the projects I've worked on — showcasing backend development,
        secure systems, cloud integration, and interactive design.
      </motion.p>

      <div className="mt-12 flex flex-col gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "works");
