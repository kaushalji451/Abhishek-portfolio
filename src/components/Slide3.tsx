import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import linux from "../assets/linux.png";
import nodejs from "../assets/nodejs.png";
import physics from "../assets/physics.png";  // This is used for React.js!
import MySQL from "../assets/MySQL.png";
import typescript from "../assets/typescript.png";
import docker from "../assets/docker.png";
import Express from "../assets/Express.png";
import MongoDB from "../assets/MongoDB.png";
import angular from "../assets/angular.png";
import { motion, type MotionProps, type Transition } from "framer-motion";

const skills = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: nodejs, alt: "Node.js" },
  { src: physics, alt: "React.js" },
  { src: typescript, alt: "TypeScript" },
  { src: MySQL, alt: "MySQL" },
  { src: linux, alt: "Linux" },
  { src: docker, alt: "Docker" },
  { src: MongoDB, alt: "MongoDB" },
  { src: angular, alt: "Angular" },
  { src: Express, alt: "Express" },
];

// Animation configurations for each skill
const getImageAnimation = (
  alt: string
): { animate?: MotionProps["animate"]; transition?: Transition } => {
  switch (alt) {
    case "React.js":
      return {
        animate: { rotate: 360 },
        transition: { repeat: Infinity, duration: 8, ease: "linear" },
      };
    case "Docker":
      return {
        animate: { y: [0, -10, 0] },
        transition: { repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" },
      };
    case "HTML":
      return {
        animate: { y: [0, 6, 0, -6, 0] },
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
      };
    case "CSS":
      return {
        animate: { scale: [1, 1.08, 1, 0.95, 1] },
        transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
      };
    case "JavaScript":
      return {
        animate: { rotate: [0, 6, 0, -6, 0] },
        transition: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
      };
    case "Node.js":
      return {
        animate: { scale: [1, 1.12, 1] },
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
      };
    case "TypeScript":
      return {
        animate: { y: [0, -6, 0] },
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
      };
    case "MySQL":
      return {
        animate: { x: [0, -7, 0, 7, 0] },
        transition: { repeat: Infinity, duration: 3.2, ease: "easeInOut" },
      };
    case "Linux":
      return {
        animate: { rotate: [0, 4, 0, -4, 0] },
        transition: { repeat: Infinity, duration: 3.8, ease: "easeInOut" },
      };
    case "MongoDB":
      return {
        animate: { scale: [1, 0.93, 1, 1.06, 1] },
        transition: { repeat: Infinity, duration: 2.8, ease: "easeInOut" },
      };
    case "Angular":
      return {
        animate: { y: [0, 8, 0, -8, 0] },
        transition: { repeat: Infinity, duration: 3.2, ease: "easeInOut" },
      };
    case "Express":
      return {
        animate: { x: [0, 10, 0, -10, 0] },
        transition: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
      };
    default:
      return {};
  }
};

const Slide3 = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14 md:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
          Technical Skills
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto px-4">
          Technologies and tools I work with to build amazing applications
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => {
          const { animate, transition } = getImageAnimation(skill.alt);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 
                shadow-xl border border-white/20 hover:border-white/40 transition-all duration-300
                hover:shadow-2xl hover:shadow-purple-500/30 flex flex-col items-center justify-center
                min-h-[140px] sm:min-h-[160px] md:min-h-[180px]"
              >
                {/* Icon with Animation */}
                <motion.div
                  className="relative mb-3 sm:mb-4"
                  animate={animate}
                  transition={transition}
                >
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain 
                      drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                  />
                </motion.div>

                {/* Skill Name */}
                <p className="text-center text-white font-semibold text-sm sm:text-base md:text-lg 
                  tracking-wide"
                >
                  {skill.alt}
                </p>

                {/* Hover Effect - Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 
                  via-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left rounded-b-2xl"
                ></div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12 sm:mt-16 md:mt-20"
      >
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
          Interested in working together?
        </p>
        <button
          className="text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
            hover:from-cyan-400 hover:to-purple-500 focus:ring-4 focus:outline-none 
            focus:ring-purple-300 font-bold rounded-lg py-3 px-8 sm:px-10 text-sm sm:text-base 
            transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105"
        >
          Get In Touch
        </button>
      </motion.div>
    </div>
  );
};

export default Slide3;