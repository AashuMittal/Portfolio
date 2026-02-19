import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  tech,
  img,
  githubLink,
  liveLink,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="bg-[#111111] border border-white/5 rounded-3xl overflow-hidden group 
                 shadow-[0_20px_50px_rgba(0,0,0,0.6)] 
                 hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)] 
                 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="h-52 relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-semibold text-white mb-2 tracking-tight">
          {title}
        </h4>

        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {tech}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">

          {/* GitHub Button */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-xs bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl 
                         flex items-center gap-2 border border-white/10 
                         transition-all duration-300 hover:bg-white/10 
                         hover:scale-105 
                         hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <Github
                size={14}
                className="group-hover:rotate-12 transition"
              />
              Code
            </a>
          )}

          {/* Live Demo Button */}
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`group text-xs py-2 px-5 rounded-xl 
              flex items-center gap-2 font-semibold
              transition-all duration-300 cursor-pointer
              ${
                liveLink
                  ? "bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 text-white hover:scale-105 shadow-[0_0_25px_rgba(244,63,94,0.5)] hover:shadow-[0_0_35px_rgba(251,146,60,0.7)]"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
          >
            Live Demo
            <ExternalLink
              size={14}
              className="group-hover:translate-x-1 transition"
            />
          </a>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
