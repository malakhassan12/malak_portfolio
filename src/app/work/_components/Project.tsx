import Social from "@/app/_profile/Social";
import { PROJECT } from "@/types/ProfileTypes";
import Link from "next/link";
import { FC } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project: FC<{ project: PROJECT }> = ({ project }) => {
  return (
    <>
      {/* Number */}
      <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#001F3F] dark:text-transparent text-outline leading-none">
        {project.num}
      </div>

      {/* Category */}
      <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold capitalize text-[#8B5CF6] dark:text-white mt-2 leading-tight">
        {project.category}
        <span className="block text-[#8B5CF6] text-lg sm:text-xl md:text-2xl font-normal mt-1">
          {project.title}
        </span>
      </h2>

      {/* Description */}
      <p className="text-[#001F3F] dark:text-white/60 text-sm sm:text-base mt-4 leading-relaxed max-w-lg">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-[#8B5CF6] mb-2">
          Tech Stack
        </h4>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((item, index) => (
            <li
              key={index}
              className="text-sm dark:bg-white/5 bg-purple-300 px-3 py-1 rounded-full border border-white/10  text-[#001F3F] dark:text-gray-300"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-[#8B5CF6] transition-all duration-300 text-sm hover:scale-105"
          >
            <FaGithub size={16} />
            <span>GitHub</span>
          </Link>
        )}
        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all duration-300 text-sm text-white hover:scale-105"
          >
            <FaExternalLinkAlt size={14} />
            <span>Live Demo</span>
          </Link>
        )}
        {!project.github && !project.live && (
          <span className="text-sm text-gray-500 italic">
            Links coming soon
          </span>
        )}
      </div>

      {/* Social Links */}
      <div className="mt-6">
        <Social
          containerStyles="flex gap-4 flex-wrap"
          iconStyles="w-8 h-8 border border-[#8B5CF6] rounded-full flex justify-center items-center text-[#8B5CF6] text-sm hover:bg-[#8B5CF6] hover:text-white transition-all duration-300"
        />
      </div>
    </>
  );
};

export default Project;
