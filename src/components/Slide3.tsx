import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import linux from "../assets/linux.png"
import nodejs from "../assets/nodejs.png"
import physics from "../assets/physics.png"  // This is used for React.js!
import MySQL from "../assets/MySQL.png"
import typescript from "../assets/typescript.png"
import docker from "../assets/docker.png"
import Express from "../assets/Express.png"
import MongoDB from "../assets/MongoDB.png"
import bootstrap from "../assets/bootstrap.png"

import { motion, type MotionProps, type Transition } from "framer-motion"

const skills = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: nodejs, alt: "Node.js" },
  { src: physics, alt: "React.js" },
  { src: typescript, alt: "TypeScript" },
  { src: MySQL, alt: "SQL Server" },
  { src: linux, alt: "Linux" },
  { src: docker, alt: "Docker" },
  { src: MongoDB, alt: "MongoDB" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: Express, alt: "Express" },
]

// ✅ Typed return object for animation config
const getImageAnimation = (
  alt: string
): { animate?: MotionProps["animate"]; transition?: Transition } => {
  switch (alt) {
    case "React.js":
      return {
        animate: { rotate: 360 },
        transition: { repeat: Infinity, duration: 3, ease: "linear" },
      }
    case "Docker":
      return {
        animate: { y: [0, -10, 0] },
        transition: { repeat: Infinity, repeatType: "loop", duration: 1.5, ease: "easeInOut" },
      }
    case "HTML":
      return {
        animate: { y: [0, 6, 0, -6, 0] },
        transition: { repeat: Infinity, duration: 2.6, ease: "easeInOut" },
      }
    case "CSS":
      return {
        animate: { scale: [1, 1.08, 1, 0.95, 1] },
        transition: { repeat: Infinity, duration: 2.1, ease: "easeInOut" },
      }
    case "JavaScript":
      return {
        animate: { rotate: [0, 6, 0, -6, 0] },
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
      }
    case "Node.js":
      return {
        animate: { scale: [1, 1.12, 1] },
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
      }
    case "TypeScript":
      return {
        animate: { y: [0, -6, 0] },
        transition: { repeat: Infinity, duration: 2.7, ease: "easeInOut" },
      }
    case "SQL Server":
      return {
        animate: { x: [0, -7, 0, 7, 0] },
        transition: { repeat: Infinity, duration: 2.8, ease: "easeInOut" },
      }
    case "Linux":
      return {
        animate: { rotate: [0, 4, 0, -4, 0] },
        transition: { repeat: Infinity, duration: 3.2, ease: "easeInOut" },
      }
    case "MongoDB":
      return {
        animate: { scale: [1, 0.93, 1, 1.06, 1] },
        transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
      }
    case "Bootstrap":
      return {
        animate: { y: [0, 8, 0, -8, 0] },
        transition: { repeat: Infinity, duration: 2.8, ease: "easeInOut" },
      }
    case "Express":
      return {
        animate: { x: [0, 10, 0, -10, 0] },
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
      }
    default:
      return {}
  }
}

const Slide3 = () => {
  return (
    <div className="mx-4 sm:mx-14 md:mx-28 py-10 border-b">
      <h1 className="text-center text-3xl md:text-4xl py-6 font-bold text-white drop-shadow-lg tracking-wide">
        Skills
        <span className="block mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-2 rounded-full"></span>
      </h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-6"
        initial={{ opacity: 0, y: 110 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => {
          const { animate, transition } = getImageAnimation(skill.alt);
          return (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center p-6 rounded-2xl shadow-xl bg-white/40 hover:bg-white/60 
                ring-1 ring-white/50 backdrop-blur-sm cursor-pointer hover:scale-105 transition-all duration-300
                hover:shadow-2xl group"
              whileHover={{ scale: 1.09, boxShadow: "0px 16px 40px 0px rgba(86,167,255,0.20)" }}
            >
              <motion.img
                src={skill.src}
                alt={skill.alt}
                className="w-16 h-16 mx-auto group-hover:scale-110 group-hover:drop-shadow-lg transition-transform duration-200"
                animate={animate}
                transition={transition}
              />
              <p className="text-center pt-4 text-md font-semibold text-gray-700 tracking-wide drop-shadow-sm">
                {skill.alt}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Slide3
