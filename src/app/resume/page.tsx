import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { collectInfo } from "@/constants/ProfileConstants";
import TabContent from "./_components/TabContent";
import { FaBriefcase, FaGraduationCap, FaCode, FaUser } from "react-icons/fa";
import { IconType } from "react-icons";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  const tabIcons: Record<string, IconType> = {
    "My Experience": FaBriefcase,
    "My Education": FaGraduationCap,
    "My Skills": FaCode,
    "About Me": FaUser,
  };

  return (
    <>
      <div className="container mx-auto w-full">
        <Tabs defaultValue="My Experience" className="w-full">
          <div className="flex flex-col md:flex-row gap-6">
            {/* LEFT - Tabs List with ScrollArea */}
            <div className="w-full md:w-[240px] lg:w-[280px] flex-shrink-0">
              <div className="p-2">
                <h4 className="px-3 py-2 text-xs font-medium text-white/40 uppercase tracking-wider">
                  Navigation
                </h4>
                <Separator className="mb-2 bg-white/10" />

                <TabsList
                  className="flex flex-col w-full bg-transparent gap-1"
                  style={{ height: "100%" }}
                >
                  {Object.values(collectInfo).map((info) => {
                    const Icon = tabIcons[info.title] || FaUser;
                    return (
                      <TabsTrigger
                        key={info.title}
                        value={info.title}
                        className="w-full justify-start gap-3 px-4 py-3 text-sm font-medium text-[#001F3F] hover:text-[#8B5CF6] dark:text-white/60 dark:hover:text-white data-[state=active]:text-[#8B5CF6] data-[state=active]:bg-[#8B5CF6]/20 data-[state=active]:border-l-2 data-[state=active]:border-[#8B5CF6] rounded-lg transition-all duration-300 whitespace-nowrap"
                      >
                        <Icon className="text-[#8B5CF6] text-base flex-shrink-0" />
                        <span>{info.title}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>
            </div>

            {/* RIGHT - Tab Content */}
            <div className="flex-1 min-w-0">
              {Object.values(collectInfo).map((info, index) => (
                <TabContent key={index} info={info} />
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Resume;
