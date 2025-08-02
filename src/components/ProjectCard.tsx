import { motion } from 'framer-motion';

const ProjectCard = ({ img, title, description, link }: { img: string; title: string; description: string; link: string }) => (
  <motion.div
    className="rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-700 hover:border-cyan-400 bg-white/5 backdrop-blur-md"
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </a>
  </motion.div>
);

export default ProjectCard;
