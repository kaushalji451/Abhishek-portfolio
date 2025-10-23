import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "./ProejctData";

const Slide4 = () => {
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
          Featured Projects
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto px-4">
          Showcasing my top 6 projects built with modern technologies
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Slide4;