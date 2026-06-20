"use client";
import { TabsContent } from "@/components/ui/tabs";
import { About, SkillsSection, TimelineSection } from "@/types/ProfileTypes";
import { FC } from "react";
import { motion } from "framer-motion";
import { iconMap } from "@/constants/ProfileConstants";
import { isSkillsSection, isTimelineSection } from "@/utils/resumeFunctions";

const TabContent: FC<{
  info: TimelineSection | SkillsSection | About;
}> = ({ info }) => {

  const isTimeline = isTimelineSection(info);
  const isSkills = isSkillsSection(info);
  const isAbout = "name" in info && "phone" in info;

  return (
    <TabsContent value={info.title} className="mt-0 focus-visible:outline-none">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-purple-100 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 sm:p-8"
      >
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold  text-[#8B5CF6] dark:text-white mb-2">
          {info.title}
        </h2>

        {/* Description */}
        {"desc" in info && info.desc && (
          <p className="text-[#001F3F] dark:text-white/60 text-sm sm:text-base mb-6">
            {info.desc}
          </p>
        )}

        {/* Render based on type */}
        {isTimeline && (
          // Timeline (Experience & Education)
          <div className="space-y-6">
            {info.details.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-6 border-l-2 border-[#8B5CF6]/30 hover:border-[#8B5CF6] transition-colors duration-300"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                  <span className="text-sm font-mono text-[#8B5CF6]">
                    {item.from} — {item.to}
                  </span>
                </div>
                <h3 className=" text-[#8B5CF6] text-lg font-semibold dark:text-white">
                  {item.title}
                </h3>
                <p className="text-[#001F3F] dark:text-white/60 text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {isSkills && (
          // Skills
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {info.details.map((skill, idx) => {
              const Icon = iconMap[skill.icon];

              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/5 hover:bg-[#8B5CF6]/10 rounded-lg p-3 border border-white/5 hover:border-[#8B5CF6]/30 transition-all duration-300 group cursor-default"
                >
                  {skill.icon && (
                    <Icon className="text-[#8B5CF6] text-xl group-hover:scale-110 transition-transform duration-300" />
                  )}
                  <span className="text-sm text-[#001F3F] dark:text-white/80 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {isAbout && (
          // About
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 dark:text-white/40 text-[#001F3F]">
            <div className="space-y-3 ">
              <div>
                <p className="text-xs uppercase tracking-wider">Name</p>
                <p className="text-[#8B5CF6] dark:text-white font-medium">
                  {info.name}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider">Phone</p>
                <p className="text-[#8B5CF6] font-medium">{info.phone}</p>
              </div>
              <div>
                <p className="text-xs  uppercase tracking-wider">Email</p>
                <p className="text-[#8B5CF6] font-medium break-all">
                  {info.email}
                </p>
              </div>
              <div>
                <p className="text-xs  uppercase tracking-wider">Languages</p>
                <p className="text-[#8B5CF6] font-medium">{info.languages}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs  uppercase tracking-wider">Freelance</p>
                <p className="text-[#8B5CF6] font-medium">{info.freelance}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider">Nationality</p>
                <p className="text-[#8B5CF6] font-medium">{info.nationality}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider">City</p>
                <p className="text-[#8B5CF6] font-medium">{info.city}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider">Experience</p>
                <p className="text-[#8B5CF6] font-medium">{info.experience}</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </TabsContent>
  );
};

export default TabContent;
