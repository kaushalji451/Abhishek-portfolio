import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Slide5 = () => {
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
          Experience
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto px-4">
          My professional journey and accomplishments
        </p>
      </motion.div>

      {/* Experience Content */}
      <div className="max-w-5xl mx-auto">
        {/* Main Experience Card */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-white/10 
            hover:border-cyan-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Technical Development Intern
            </h3>
            <span className="text-sm sm:text-base text-cyan-400 font-semibold bg-cyan-400/10 px-3 py-1 rounded-full">
              Apr 2025 – Sep 2025
            </span>
          </div>

          {/* Company & Description */}
          <div className="mb-6">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Worked as a Technical Development Intern at{" "}
              <span className="font-semibold text-cyan-400">Niveshjano</span>,
              contributing to the design and development of multiple web-based applications and internal tools.
              Focused on full-stack development, UI/UX design, and API integrations.
            </p>
          </div>

          {/* Key Projects */}
          <div className="mb-6">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Key Projects
            </h4>
            <ul className="space-y-3">
              {[
                {
                  title: "Document Uploader Service",
                  desc: "with secure file handling"
                },
                {
                  title: "Income Tax Calculator",
                  desc: "web app for easy tax computation"
                },
                {
                  title: "YUI Tech & Bill Client",
                  desc: "UI clones"
                },
                {
                  title: "DevPrashna",
                  desc: "a Q&A platform for developers"
                },
                {
                  title: "Interview Scheduler",
                  desc: "with calendar and notifications"
                },
                {
                  title: "Talent Unlocked",
                  desc: "a skill assessment platform"
                },
                {
                  title: "10+ projects",
                  desc: "including admin panels, financial tools, and automation scripts"
                }
              ].map((project, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                >
                  <span className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <span>
                    Developed <span className="font-semibold text-cyan-400">{project.title}</span> {project.desc}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "Tailwind CSS",
                "REST APIs",
                "Git/GitHub"
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white 
                    text-xs sm:text-sm rounded-full border border-cyan-400/30 hover:border-cyan-400/60 
                    transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Highlights Card */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 
            hover:border-purple-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></span>
            Highlights & Achievements
          </h4>
          <ul className="space-y-4">
            {[
              {
                text: "Delivered 10+ projects within deadlines maintaining high-quality standards",
                highlight: "10+ projects"
              },
              {
                text: "Optimized frontend components and backend APIs for better performance",
                highlight: "performance"
              },
              {
                text: "Collaborated in Agile teams and participated in code reviews and debugging",
                highlight: "Agile teams"
              },
              {
                text: "Documented project workflows and provided technical support for deployments",
                highlight: "technical support"
              }
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
              >
                <svg 
                  className="flex-shrink-0 w-5 h-5 text-purple-400 mt-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  {item.text.split(item.highlight)[0]}
                  <span className="font-semibold text-purple-400">{item.highlight}</span>
                  {item.text.split(item.highlight)[1]}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5;