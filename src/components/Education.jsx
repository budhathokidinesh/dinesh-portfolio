import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Full Stack Development Bootcamp",
      institution: "Dented Code Academy",
      address: "Level 2 suite 29/104 Bathurst St, Sydney NSW 2000, Australia",
      website: "https://dentedcode.com",
      year: "2024 - Present",
      description:
        "Focused on Full Stack Web Development using React, Node, Express and MongoDB and other technologies.",
    },
    {
      degree: "Masters in Information Technology Systems",
      institution: "Victorian Institute of Technology",
      address:
        "Level 14, 123 Queen Street, Melbourne, Victoria 3000, Australia",
      website: "https://vit.edu.au",
      year: "2019 - 2021",
      description:
        "Studied different programming languages like Java, Python, MySql. Specialised in Software Engineering. In final year internship, developed iOS mobile app.",
    },
    {
      degree: "Masters in Physics",
      institution: "Tribhuban University",
      address: "Kirtipur, Kathmandu, Nepal",
      website: "https://tu.edu.np",
      year: "2014 - 2017",
      description: "Studied Physics and Mathematics.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="education"
      className="education-section"
    >
      <h2>Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-details">
              <h3>{edu.degree}</h3>
              <h4>
                <a href={edu.website} target="_blank" rel="noopener noreferrer">
                  {edu.institution}
                </a>
              </h4>
              <p className="address">{edu.address}</p>
              <h4>{edu.institution}</h4>
              <span className="year">{edu.year}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
