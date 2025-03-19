import React from "react";
import { motion } from "framer-motion";
import r from "../assets/r.png";
import p from "../assets/p.png";
import d from "../assets/d.png";
const Projects = () => {
  const projects = [
    {
      name: "Real Estate",
      tech: "**Html, Css, Javascript, React, Node, Express, MongoDB, Prisma, React Query, Auth0**",
      description:
        "This is responsive Full Stack web app. In this website you will find properties, you can book for visit, you can add favourites properties and you can upload property for sell. Authentication is secured by Auth0",
      link: "https://real-estate-fullstack-two.vercel.app",
      image: r,
    },
    {
      name: "My Portfolio",
      tech: "**Html, Css, Javascript, React, Yarn**",
      description:
        "This is my showcase portfolio. In this website you will know about me, you will find my projects, you will find my projects and git hub contributions. I have provided my contacts, if you are interested about my work, you can contact me directly.",
      link: "https://github.com/yourusername/project2",
      image: p,
    },
    {
      name: "Admin Dashboard",
      tech: "Tech Stack: Html, Css, React, React Bootstrap, React Icons",
      description:
        "A responsive admin dashboard. This is basically frontend based website. Here you can moitor daily sales, stocks, reviews. You can see  who is ordering at the moment.",
      link: "https://shop-admin-dashboard-gamma.vercel.app",
      image: d,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="projects"
      className="projects-section"
    >
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="project-screenshot"
            />
            <h3>{project.name}</h3>
            <p>{project.tech}</p>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
