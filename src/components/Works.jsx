import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className={`
        flex flex-col gap-6 w-full mb-20
        md:flex-row ${isEven ? "" : "md:flex-row-reverse"}
        items-center
      `}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={name}
          className="rounded-2xl w-full h-auto object-cover max-h-[360px]"
        />
      </div>

      {/* Description Section */}
      <div className="w-full md:w-1/2 text-left space-y-4 px-2">
        <h3 className="text-white text-[24px] md:text-[28px] font-bold">{name}</h3>
        <p className="text-secondary text-[15px] md:text-[16px] leading-6">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[13px] md:text-[14px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>

        {source_code_link && (
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Source
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="works" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] md:text-[17px] max-w-5xl leading-[30px]"
      >
        These are some of the projects I've worked on — showcasing backend development,
        secure systems, cloud integration, and interactive design.
      </motion.p>

      <div className="mt-16 flex flex-col gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "works");
