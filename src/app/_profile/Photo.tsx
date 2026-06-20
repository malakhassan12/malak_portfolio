"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-[320px] h-[320px] xl:w-[498px] xl:h-[498px] relative">
      {" "}
      {/* Circle behind */}
      <motion.svg
        className=" absolute inset-0 w-full h-full z-0"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#8B5CF6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            strokeDasharray: "24 10 0 0",
          }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.4,
          },
        }}
        className="relative w-full h-full aspect-square z-10"
      >
        <Image
          src="/Malak portfolio.webp"
          fill
          loading="eager"
          priority
          alt="Malak"
          className="object-contain object-top"
          sizes="(max-width: 640px) 320px, 498px"
        />
        
      </motion.div>
    </div>
  );
};

export default Photo;
