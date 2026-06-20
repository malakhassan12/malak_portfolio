import { SERVICE } from "@/types/ProfileTypes";
import Link from "next/link";
import { FC } from "react";
import { BsArrowDownRight } from "react-icons/bs";

const Service: FC<{
  service: SERVICE;
}> = ({ service }) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#8B5CF6]/10">
      {/* Number - positioned top right */}
      <div className="absolute top-4 right-4 text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#8B5CF6] to-purple-400 opacity-50 group-hover:opacity-100 transition-all duration-500">
        {service.num}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-purple-400 group-hover:text-[#8B5CF6] transition-all duration-500 pr-16">
          {service.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {service.description}
        </p>

        {/* Arrow Button */}
        <Link
          href={service.href}
          className="mt-4 w-12.5 h-12.5 rounded-full bg-white/10 group-hover:bg-[#8B5CF6] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
          aria-label={`Learn more about ${service.title}`}
        >
          <BsArrowDownRight className="text-[#8B5CF6] group-hover:text-white text-2xl transition-all duration-500  " />
        </Link>
      </div>
    </div>
  );
};

export default Service;
