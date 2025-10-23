import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { Link } from "react-router-dom";

const text = "MERN Stack Developer";

const Navbar = () => (
  <nav className="w-full py-4 mb-8">
    <div className="flex justify-between items-center">
      <h2 className="text-xl sm:text-2xl font-bold text-white">Portfolio</h2>
      <div className="hidden md:flex gap-6 text-gray-300">
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </div>
  </nav>
);

const Slide1 = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }));
  }, [controls]);

  let handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_AK.pdf"; // path inside public folder
    link.download = "Abhishek_Resume.pdf"; // name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 sm:px-8 md:px-16 lg:px-20 pt-4">
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] py-8 sm:py-12">
        <motion.div
          className="w-full max-w-4xl flex flex-col justify-center space-y-6 sm:space-y-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Introduction */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg md:text-xl text-gray-300">
              Hi, I am
            </h3>
            <h3
              className="text-xl sm:text-2xl md:text-3xl text-white font-semibold"
              style={{ textShadow: "0 2px 12px rgba(120,180,250,0.45)" }}
            >
              Abhishek Kumar Kaushal
            </h3>

            {/* Animated Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-3 sm:py-5 leading-tight flex flex-wrap justify-center">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={controls}
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Social Links */}
          <ul className="flex justify-center gap-3 sm:gap-4 pb-4 sm:pb-6">
            <Link to={"https://www.instagram.com/abhishekkaushal2879/"} className="p-2 sm:p-2.5 rounded-full border border-gray-400 text-lg sm:text-xl cursor-pointer hover:text-white hover:border-white hover:scale-110 transition-all duration-300">
              <FaInstagram />
            </Link>
            <Link to={"https://www.linkedin.com/in/abhishek-kumar-kaushal-785611318"} className="p-2 sm:p-2.5 rounded-full border border-gray-400 text-lg sm:text-xl cursor-pointer hover:text-white hover:border-white hover:scale-110 transition-all duration-300">
              <TbBrandLinkedin />
            </Link>
            <Link to={"https://github.com/kaushalji451"} className="p-2 sm:p-2.5 rounded-full border border-gray-400 text-lg sm:text-xl cursor-pointer hover:text-white hover:border-white hover:scale-110 transition-all duration-300">
              <FaGithub />
            </Link>
          </ul>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button
              type="button"
              className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-bold rounded-lg py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base text-center 
                transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              Hire Me
            </button>
            <button
              onClick={handleDownload}
              type="button"
              className="w-full sm:w-auto text-white border-2 border-white font-bold rounded-lg cursor-pointer
                py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base text-center 
                hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              Download CV
            </button>
          </div>

          {/* Stats Section */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg w-full max-w-md mx-auto flex justify-between py-5 sm:py-6 mt-6 sm:mt-8 px-4 sm:px-6 rounded-lg shadow-xl shadow-purple-500/20 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="border-r border-gray-400/50 flex-1">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">6+</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">Month Experience</p>
            </div>
            <div className="border-r border-gray-400/50 flex-1">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">50+</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">Projects</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide1;