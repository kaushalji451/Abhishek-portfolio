import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-200 px-4 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-16 border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 sm:mb-12">
        {/* LEFT SIDE - Brand */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
              Abhishek Kumar Kaushal
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              MERN Stack & Next.js Developer
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Building modern web applications with cutting-edge technologies.
            </p>
          </motion.div>
        </div>

       

        {/* RIGHT SIDE - Social & Contact */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex gap-3 mb-6">
              {[
                { Icon: FaInstagram, label: "Instagram", link: "https://www.instagram.com/abhishekkaushal2879/" },
                { Icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/abhishek-kumar-kaushal-785611318" },
                { Icon: FaGithub, label: "GitHub", link: "https://github.com/kaushalji451" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 
                    hover:border-cyan-400/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 
                    transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <social.Icon size={18} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm sm:text-base">
              <p className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                abhishekkaushal2526@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lucknow, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 sm:mb-8"></div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500"
      >
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Abhishek Kumar Kaushal. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
            Terms of Service
          </a>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default Footer;