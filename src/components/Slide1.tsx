import Navbar from "./Navbar";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { Variants } from "framer-motion";
const text = "MERN Stack Developer";

const avatarBgVariants: Variants = {
  animate: {
    background: [
      "linear-gradient(135deg, #38bdf8 0%, #b983ff 100%)",
      "linear-gradient(135deg, #ffabf7 0%, #38bdf8 100%)",
      "linear-gradient(135deg, #b983ff 0%, #ffda77 100%)",
      "linear-gradient(135deg, #38bdf8 0%, #b983ff 100%)"
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: 'loop',
      ease: [0, 0, 1, 1] // linear easing
    }
  }
};

const Slide1 = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }));
  }, [controls]);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 pt-4 overflow-hidden min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col-reverse md:flex-row items-center max-md:justify-center justify-between flex-grow min-h-[calc(100vh-64px)]">

        {/* Left Content */}
        <motion.div
          className="w-full md:w-2/3 flex flex-col justify-center space-y-6 text-center md:text-left min-h-full py-10 md:py-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <h3 className="text-lg sm:text-xl text-gray-100">Hi, I am</h3>
            <h3
              className="text-lg sm:text-xl text-white font-semibold"
              style={{ textShadow: "0 2px 12px rgba(120,180,250,0.45)" }}
            >
              Abhishek Kumar Kaushal
            </h3>
            <h1 className="text-3xl sm:text-4xl max-md:px-9 text-center md:text-5xl font-bold py-3 sm:py-5 leading-tight flex flex-wrap">
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

          <ul className="flex justify-center md:justify-start gap-4 pb-6">
            <li className="p-2 rounded-full border border-gray-400 text-xl cursor-pointer hover:text-white hover:border-white transition"><FaInstagram /></li>
            <li className="p-2 rounded-full border border-gray-400 text-xl cursor-pointer hover:text-white hover:border-white transition"><TbBrandLinkedin /></li>
            <li className="p-2 rounded-full border border-gray-400 text-xl cursor-pointer hover:text-white hover:border-white transition"><FaXTwitter /></li>
            <li className="p-2 rounded-full border border-gray-400 text-xl cursor-pointer hover:text-white hover:border-white transition"><FaGithub /></li>
          </ul>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
                  font-bold rounded-lg py-2 px-6 text-center transition hover:shadow-lg hover:scale-105"
            >
              Hire Me
            </button>
            <button
              type="button"
              className="text-white border border-white font-bold rounded-lg py-2 px-6 text-center hover:bg-white hover:text-black transition"
            >
              Download CV
            </button>
          </div>

          <div className="bg-white/20 backdrop-blur-lg w-full sm:w-2/3 flex justify-between py-6 mt-6 px-4 rounded-lg text-center mx-auto md:mx-0 shadow-lg shadow-purple-200/10">
            <div className="border-r border-gray-400 w-1/3">
              <p className="text-xl font-bold text-white">5+</p>
              <p className="text-sm text-gray-100">Experience</p>
            </div>
            <div className="border-r border-gray-400 w-1/3">
              <p className="text-xl font-bold text-white">20+</p>
              <p className="text-sm text-gray-100">Projects</p>
            </div>
            <div className="w-1/3">
              <p className="text-xl font-bold text-white">80+</p>
              <p className="text-sm text-gray-100">Happy Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image Section with animated background */}
        <motion.div
          className="w-full md:w-1/3 flex items-center justify-center min-h-full md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden flex items-center justify-center shadow-2xl"
            variants={avatarBgVariants}
            animate="animate"
            style={{
              boxShadow: "0 8px 36px 0 rgba(68, 0, 255, 0.18)",
              border: "4px solid rgba(234,234,255,0.08)"
            }}
          >
            <img
              src="https://res.cloudinary.com/dpbpu5b0v/image/upload/v1754126001/Untitled_design-removebg-preview_ze3lmy.png"
              alt="Profile"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide1;
