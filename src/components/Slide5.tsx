import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Slide5 = () => {
  return (
    <div className="mx-4 md:mx-20 pt-10 border-b bg-transparent">
      <motion.h1
        className="text-center text-3xl md:text-4xl py-3 font-bold text-white drop-shadow-lg tracking-wide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Experience
        <span className="block mx-auto w-40 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-2 rounded-full"></span>
      </motion.h1>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="shadow-lg rounded-2xl p-6 mb-6 border border-blue-200 bg-white/80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeIn}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="text-xl font-semibold text-blue-800">Technical Development Intern</h3>
              <span className="text-sm text-blue-500 mt-1 sm:mt-0">Apr 2025 – Sep 2025</span>
            </div>
            <p className="mb-4 text-gray-800">
              Worked as a Technical Development Intern at <span className="font-semibold text-blue-600">Niveshjano</span>,
              contributing to the design and development of multiple web-based applications and internal tools.
              Focused on full-stack development, UI/UX design, and API integrations.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Developed a <span className="font-medium text-blue-700">Document Uploader Service</span> with secure file handling.
              </li>
              <li>
                Built an <span className="font-medium text-blue-700">Income Tax Calculator</span> web app for easy tax computation.
              </li>
              <li>
                Cloned UI for platforms like <span className="font-medium text-blue-700">YUI Tech</span> and{" "}
                <span className="font-medium text-blue-700">Bill Client</span>.
              </li>
              <li>
                Developed <span className="font-medium text-blue-700">DevPrashna</span>, a Q&A platform for developers.
              </li>
              <li>
                Created an <span className="font-medium text-blue-700">Interview Scheduler</span> with calendar and notifications.
              </li>
              <li>
                Contributed to <span className="font-medium text-blue-700">Talent Unlocked</span>, a skill assessment platform.
              </li>
              <li>
                Completed 10+ projects including admin panels, financial tools, and automation scripts.
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-1 text-blue-700">Tech Stack:</h4>
              <p className="text-gray-800">
                React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, REST APIs, Git/GitHub.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="shadow-lg rounded-2xl p-6 border border-cyan-200 bg-white/80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            <h4 className="text-lg font-semibold mb-3 text-cyan-800">Highlights</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Delivered <span className="font-medium text-cyan-700">10+ projects</span> within deadlines maintaining high-quality standards.
              </li>
              <li>Optimized frontend components and backend APIs for better performance.</li>
              <li>Collaborated in Agile teams and participated in code reviews and debugging.</li>
              <li>Documented project workflows and provided technical support for deployments.</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Slide5;
