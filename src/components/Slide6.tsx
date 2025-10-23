import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.17
    }
  }
};

const thankYouVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { stiffness: 120, delay: 0.2 } }
};

const Slide6 = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get In Touch
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto px-4">
            Feel free to reach out for opportunities, collaboration, or just a friendly hello!
          </p>
        </motion.div>

        {/* Contact Form Container */}
        <motion.div
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {submitted ? (
            <motion.div
              className="text-center py-12 sm:py-16"
              variants={thankYouVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-6">
                <svg 
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-green-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Thank You!</h3>
              <p className="text-gray-300 text-base sm:text-lg mb-6">
                Your message has been sent successfully. I'll get back to you soon!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
                  hover:from-cyan-400 hover:to-purple-500 focus:ring-4 focus:outline-none 
                  focus:ring-purple-300 font-bold rounded-lg py-3 px-8 text-sm sm:text-base 
                  transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Name Field */}
              <motion.div variants={fadeInUp}>
                <label className="block mb-2 font-semibold text-white text-sm sm:text-base" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                    text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={fadeInUp}>
                <label className="block mb-2 font-semibold text-white text-sm sm:text-base" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                    text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={fadeInUp}>
                <label className="block mb-2 font-semibold text-white text-sm sm:text-base" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                    text-white placeholder-gray-400 transition-all duration-300 resize-none text-sm sm:text-base"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 sm:py-4 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 
                  hover:from-cyan-400 hover:to-purple-500 text-white font-bold shadow-lg 
                  hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 text-sm sm:text-base"
                variants={fadeInUp}
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 sm:p-6 text-center border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
            <svg className="w-8 h-8 mx-auto mb-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Email</h3>
            <p className="text-gray-400 text-xs sm:text-sm">abhishekkaushal2526@gmail.com</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 sm:p-6 text-center border border-white/10 hover:border-blue-400/50 transition-all duration-300">
            <svg className="w-8 h-8 mx-auto mb-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Location</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Lucknow, India</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 sm:p-6 text-center border border-white/10 hover:border-purple-400/50 transition-all duration-300">
            <svg className="w-8 h-8 mx-auto mb-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Availability</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Open to work</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide6;