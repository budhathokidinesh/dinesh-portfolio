import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      id="about"
      className="about"
    >
      <h2>About Me</h2>
      <p>
        I'm a **Full Stack Developer** with a passion for building scalable and
        high-performance web applications. With expertise in **React, Node.js,
        Express, MongoDB, and modern web technologies**, I have successfully
        delivered multiple projects ranging from **interactive dashboards** to
        **custom solutions**.
      </p>
      <br />
      <p>
        I love solving complex problems, optimizing performance, and designing
        seamless user experiences. Whether it's crafting **responsive UI/UX**,
        building **RESTful APIs**, or managing **cloud deployments**, I thrive
        on turning ideas into reality.
      </p>
      <p>
        🚀 Let's create something amazing! Feel free to explore my{" "}
        <a href="#projects">projects</a> or
        <a href="#contact"> get in touch</a>.
      </p>
    </motion.section>
  );
};

export default About;
