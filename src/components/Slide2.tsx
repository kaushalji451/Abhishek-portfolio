import { motion } from "framer-motion";

const Slide2 = () => {

    let handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_AK.pdf"; // path inside public folder
    link.download = "Abhishek_Resume.pdf"; // name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
          About Me
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl text-gray-300">
          MERN Stack & Next.js Developer | Cybersecurity Enthusiast
        </p>
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        {/* Content Card */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-purple-500/10 border border-white/10">
          <div className="space-y-5 sm:space-y-6 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              I'm a passionate Full-Stack Developer with a strong focus on the MERN stack (MongoDB, Express.js, React.js,
              and Node.js). I specialize in building modern, responsive, and scalable web applications that are not only
              high-performing but also maintainable and user-centric.
            </p>

            <p>
              My expertise spans across the full development lifecycle—from designing intuitive and dynamic front-end
              interfaces using React, to crafting efficient, secure, and robust RESTful APIs with Node.js and Express. I
              have hands-on experience in working with MongoDB for handling complex, real-time data, ensuring seamless
              integration between the frontend and backend systems.
            </p>

            <p>
              What sets me apart is my attention to detail and commitment to writing clean, modular code that scales with
              evolving project needs. I enjoy solving real-world problems through code and translating ideas into functional
              digital experiences.
            </p>

            <p>
              Currently, I'm pursuing a Bachelor of Computer Applications (BCA) at Shoolini University, where I continue to
              strengthen my foundation in computer science and software engineering principles. Beyond academics, I'm
              actively engaged in building real-world projects that blend creativity with code—ranging from user-focused
              applications to backend services—all aimed at improving usability and performance.
            </p>

            <p>
              Whether it's developing interactive UIs, implementing multilingual features, handling user authentication,
              or deploying full-stack applications, I aim to deliver solutions that are not just functional but impressive in
              terms of design and performance.
            </p>
          </div>

          {/* Download CV Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              type="button"
              onClick={handleDownload}
              className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                hover:from-cyan-500 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-cyan-400 
                font-bold rounded-lg py-3 sm:py-3.5 px-8 sm:px-10 text-sm sm:text-base text-center 
                transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Additional Stats or Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">BCA</h3>
            <p className="text-gray-300 text-sm sm:text-base">Pursuing at Shoolini University</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Full-Stack</h3>
            <p className="text-gray-300 text-sm sm:text-base">MERN & Next.js Specialist</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Security</h3>
            <p className="text-gray-300 text-sm sm:text-base">Cybersecurity Enthusiast</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide2;