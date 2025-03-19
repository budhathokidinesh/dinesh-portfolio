import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "A web application built with React and Node.js.",
      link: "https://github.com/yourusername/project1",
    },
    {
      name: "Project 2",
      description: "A responsive portfolio website.",
      link: "https://github.com/yourusername/project2",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="projects"
      className="projects"
    >
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </motion.section>
  );
};

export default Projects;
