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

const headingVariant = {
  hidden: { opacity: 0, y: -32, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 110, delay: 0.1 } }
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
    <div className="min-h-screen  flex items-center justify-center px-6 py-10 md:px-4">
      <motion.div
        className="
          w-full 
          max-w-full 
          md:max-w-xl 
          bg-blue-500/20 
          rounded-2xl 
          shadow-xl 
          p-4 
          md:p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-center mb-8 text-sm md:text-base"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.25 }}
        >
          Feel free to reach out for opportunities, collaboration, or just a friendly hello!
        </motion.p>
        {submitted ? (
          <motion.div
            className="text-center text-lg font-semibold py-8"
            variants={thankYouVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Thank you! Your message has been sent.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp}>
              <label className="block mb-1 font-medium " htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                required
                className="w-full px-4 py-2 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label className="block mb-1 font-medium " htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                required
                className="w-full px-4 py-2 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label className="block mb-1 font-medium " htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-md transition"
              variants={fadeInUp}
            >
              Send Message
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default Slide6;
