import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiYarn,
  SiHtml5,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="icon" /> },
    { name: "JavaScript", icon: <SiJavascript className="icon" /> },
    { name: "TypeScript", icon: <SiTypescript className="icon" /> },
    { name: "HTML", icon: <SiHtml5 className="icon" /> },
    { name: "CSS", icon: <FaCss3Alt className="icon" /> },
    { name: "Node.js", icon: <FaNodeJs className="icon" /> },
    { name: "Express.js", icon: <SiExpress className="icon" /> },
    { name: "Yarn", icon: <SiYarn className="icon" /> },
    { name: "Git", icon: <FaGitAlt className="icon" /> },
    { name: "MongoDB", icon: <DiMongodb className="icon" /> },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      id="skills"
      className="skills"
    >
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="skill-item"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
