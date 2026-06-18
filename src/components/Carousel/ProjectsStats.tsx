import { projects } from "@/constants/ProfileConstants";
import { FC } from "react";

type Props = {
  currentIndex: number;
  onclick: (index: number) => void;
};
const ProjectsStats: FC<Props> = ({ currentIndex, onclick }) => {
  return (
    <>
      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[#8B5CF6]"
                : "w-3 bg-white/20 hover:bg-white/40 cursor-pointer"
            }`}
            onClick={() => onclick(index)}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-2 text-white/30 text-xs sm:text-sm font-mono">
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(projects.length).padStart(2, "0")}
      </div>
    </>
  );
};

export default ProjectsStats;
