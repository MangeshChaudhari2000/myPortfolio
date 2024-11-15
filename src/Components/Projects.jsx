import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleClick = (index) => {
    // Toggle the active project on click
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl cursor-pointer"
            onClick={() => handleClick(index)} // Handle click on mobile
            onMouseEnter={() => setActiveProject(index)} // Show on hover for desktop
            onMouseLeave={() => setActiveProject(null)} // Hide on mouse leave for desktop
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt="projectImage"
              className="w-full h-full object-cover duration-500 group-hover:scale-110"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeProject === index ? 1 : 0 }} // Show overlay based on active project
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white backdrop-blur-lg transition-opacity duration-500"
            >
              <h3 className="mb-2 text-xl">{project.name}</h3>
              <p className="mb-12 p-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex items-center">
                  <span>View on GitHub</span>
                  <MdArrowOutward />
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
