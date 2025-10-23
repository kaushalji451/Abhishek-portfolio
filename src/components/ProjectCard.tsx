import { motion } from 'framer-motion';

const ProjectCard = ({ 
  img, 
  title, 
  description, 
  link 
}: { 
  img: string; 
  title: string; 
  description: string; 
  link: string 
}) => (
  <motion.div
    className="group rounded-2xl overflow-hidden hover:shadow-2xl shadow-xl transition-all duration-300 
      border border-white/10 hover:border-cyan-400/50 bg-white/5 backdrop-blur-lg h-full flex flex-col"
    whileHover={{ scale: 1.02, y: -8 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <a 
      href={link} 
      target='_blank' 
      rel='noopener noreferrer'
      className="flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-slate-800/50">
        <img
          src={img}
          alt={title}
          className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-500 
            group-hover:scale-110"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        
        {/* Link Icon Overlay */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full 
          flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300
          transform translate-x-2 group-hover:translate-x-0 border border-white/20">
          <svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 
          group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Bottom Accent Line */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:gap-2 
            transition-all duration-300">
            <span>View Project</span>
            <svg 
              className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Accent */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
      ></div>
    </a>
  </motion.div>
);

export default ProjectCard;