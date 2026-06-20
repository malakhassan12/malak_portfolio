"use client";
import { Button } from "@/components/ui/button";
import { FormState, sendData } from "@/utils/formFunctions";
import { useActionState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaComment,
} from "react-icons/fa";

const initialState: FormState = {
  errors: {},
};

const ContactForm = () => {
  const [state, formAction, pending] = useActionState(sendData, initialState);

  return (
    <form action={formAction} className="space-y-6 w-full max-w-2xl mx-auto ">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-[#8B5CF6] dark:text-white/80"
          >
            First Name <span className="text-[#8B5CF6]">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5CF6]/40" />
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              className="w-full pl-10 pr-4 py-3 dark:bg-white/5 border border-white/10 rounded-xl dark:text-white dark:placeholder:text-white/30 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all duration-300 outline-none"
            />
          </div>
          {state.errors?.firstName && (
            <p className="text-red-400 text-sm flex items-center gap-1">
              <span className="text-red-400">•</span> {state.errors.firstName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="secondName"
            className="text-sm font-medium text-[#8B5CF6] dark:text-white/80"
          >
            Last Name
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5CF6]/40" />
            <input
              id="secondName"
              name="secondName"
              type="text"
              placeholder="Doe"
              className="w-full pl-10 pr-4 py-3 dark:bg-white/5 border border-white/10 rounded-xl dark:text-white dark:placeholder:text-white/30 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all duration-300 outline-none"
            />
          </div>
          {state.errors?.secondName && (
            <p
              className="text-red-400 text-sm flex items-center gap-1"
            >
              <span className="text-red-400">•</span> {state.errors.secondName}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-[#8B5CF6] dark:text-white/80"
        >
          Email Address <span className="text-[#8B5CF6]">*</span>
        </label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5CF6]/40" />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full pl-10 pr-4 py-3 dark:bg-white/5 border border-white/10 rounded-xl dark:text-white dark:placeholder:text-white/30 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all duration-300 outline-none"
          />
        </div>
        {state.errors?.email && (
          <p className="text-red-400 text-sm flex items-center gap-1">
            <span className="text-red-400">•</span> {state.errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-[#8B5CF6] dark:text-white/80"
        >
          Phone Number
        </label>
        <div className="relative">
          <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5CF6]/40" />
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+20 100 000 0000"
            className="w-full pl-10 pr-4 py-3 dark:bg-white/5 border border-white/10 rounded-xl dark:text-white dark:placeholder:text-white/30 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all duration-300 outline-none"
          />
        </div>
        {state.errors?.phone && (
          <p className="text-red-400 text-sm flex items-center gap-1">
            <span className="text-red-400">•</span> {state.errors.phone}
          </p>
        )}
      </div>

      {/* Service */}
      <div className="space-y-2">
        <label
          htmlFor="service"
          className="text-sm font-medium text-[#8B5CF6] dark:text-white/80"
        >
          Service Interested In
        </label>
        <div className="relative">
          <FaBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B5CF6]" />
          <select
            id="service"
            name="service"
            className="w-full pl-10 pr-4 py-3 dark:bg-white/5 border border-white/10 rounded-xl dark:text-white dark:placeholder:text-white/30 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all duration-300 outline-none"
          >
            <option value="" className="bg-[#8B5CF6] text-white">
              Select a service...
            </option>
            <option value="web-development" className="bg-[#8B5CF6] text-white">
              Web Development
            </option>
            <option value="ui-ux-design" className="bg-[#8B5CF6] text-white">
              UI/UX Design
            </option>
            <option value="mobile-app" className="bg-[#8B5CF6] text-white">
              Mobile App
            </option>
            <option value="consulting" className="bg-[#8B5CF6] text-white">
              Consulting
            </option>
          </select>
        </div>
        {state.errors?.service && (
          <p className="text-red-400 text-sm flex items-center gap-1">
            <span className="text-red-400">•</span> {state.errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-[#8B5CF6] dark:text-white/80"
        >
          Message <span className="text-[#8B5CF6]">*</span>
        </label>
        <div className="relative">
          <FaComment className="absolute left-3 top-4 text-[#8B5CF6]/40" />
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full pl-10 pr-4 py-3 dark:bg-white/5 border border-white/10 rounded-xl dark:text-white dark:placeholder:text-white/30 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all duration-300 outline-none"
          />
        </div>
        {state.errors?.message && (
          <p className="text-red-400 text-sm flex items-center gap-1">
            <span className="text-red-400">•</span> {state.errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={pending}
        className="w-full py-4 px-6 bg-gradient-to-r from-[#8B5CF6] to-purple-500 hover:from-[#7C3AED] hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#8B5CF6]/20 hover:shadow-[#8B5CF6]/40"
      >
        {pending ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>

      {/* Success Message */}
      {state.success && (
        <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center">
          ✅ Message sent successfully!
        </div>
      )}
    </form>
  );
};

export default ContactForm;
