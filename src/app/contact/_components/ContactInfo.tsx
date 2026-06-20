"use client";

import { contactDetails } from "@/constants/ProfileConstants";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-4 border-2 border-purple-400/30 rounded-2xl p-4 md:p-6  backdrop-blur-sm"
    >
      {contactDetails.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-[#8B5CF6]/5 rounded-xl border border-white/5 hover:border-[#8B5CF6]/20 transition-all duration-300"
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B5CF6]/20 transition-all duration-300">
            <item.icon className="text-[#8B5CF6] text-lg group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[#8B5CF6] dark:text-white/40 uppercase tracking-wider">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="text-[#001F3F] dark:text-white hover:text-[#8B5CF6] transition-colors duration-300 text-sm md:text-base font-medium block truncate"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-[#001F3F] dark:text-white text-sm md:text-base font-medium truncate">
                {item.value}
              </p>
            )}
          </div>

          {/* Arrow indicator */}
          {item.href && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-4 h-4 text-[#8B5CF6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          )}
        </motion.div>
      ))}

      {/* Social/Additional Info */}
      <div className="mt-6 pt-6 border-t border-white/5">
        <p className="text-xs text-[#001F3F] dark:text-white/30 text-center">
          Available for freelance work
        </p>
        <div className="flex justify-center gap-3 mt-3">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400">Online</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
