"use client";
import { services } from "@/constants/ProfileConstants";
import { motion } from "framer-motion";
import Service from "./Service";

const AllServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="grid grid-cols-1 lg:grid-cols-2  gap-15"
    >
      {services.map((service, index) => {
        return <Service key={index} service={service} />;
      })}
    </motion.div>
  );
};

export default AllServices;
