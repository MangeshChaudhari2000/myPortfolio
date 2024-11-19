import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
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
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl h-[400px] sm:h-auto"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt="projectImage"
              className="w-full h-full object-cover bg-inherit duration-500 group-hover:scale-110"
            />
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg hover:backdrop-brightness-75 transition-opacity duration-500 hover:opacity-100 p-4">
              <h3 className="mb-2 text-xl">{project.name}</h3>
              <p className="mb-4 text-center">{project.description}</p>
              <div className="mt-auto flex w-full justify-around">
                {" "}
                {/* Added mt-auto to push the button down */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300 flex items-center justify-center"
                >
                  <span>Demo</span>
                  <MdArrowOutward className="ml-2" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300 flex items-center justify-center"
                >
                  <span>View on GitHub</span>
                  <MdArrowOutward className="ml-2" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
