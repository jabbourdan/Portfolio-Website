import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, iconClass }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 0.4)}
    className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 duration-200"
  >
    <i className={`${iconClass} text-3xl text-white mb-2`}></i>
    <p className="text-sm text-center text-white">{title}</p>
  </motion.div>
);




const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a software engineer with a passion for building real-world solutions and Computer Science graduate with a strong foundation. From launching DoJourney, a live SaaS scheduler used by salons, to contributing to IoT systems at MindoLife, I thrive on turning ideas into working products.

With strong skills in C#, ASP.NET MVC, Angular, and cloud tools like AWS and Docker, I enjoy crafting both the backend logic and the user experience. My background also includes network operations at Au10tix, giving me a solid grasp of systems, uptime, and troubleshooting under pressure.
      
      </motion.p>

      <motion.div variants={textVariant()}>
        <br />
        <br />
        <br />
        <p className={styles.sectionSubText}>What I can do</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
