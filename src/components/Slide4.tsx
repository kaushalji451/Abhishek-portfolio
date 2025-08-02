import ProjectCard from "./ProjectCard";
import projects from "./ProejctData";

const Slide4 = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 pt-8 pb-16 border-b">
      <h1 className="text-center text-3xl md:text-4xl py-4 font-bold text-white drop-shadow-lg tracking-wide">
        TOP 6 Projects
        <span className="block mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 rounded-full"></span>
      </h1>
      <div className="py-8 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide4;
