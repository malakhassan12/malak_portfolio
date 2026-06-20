import Link from "next/link";
import { FaHome,  FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <div className="relative inline-block">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8B5CF6] to-purple-400 leading-none">
            404
          </h1>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#8B5CF6]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl" />
        </div>

        {/* Message */}
        <div className="mt-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#001F3F] dark:text-white mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-[#001F3F] dark:text-white/40 text-sm md:text-base max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#8B5CF6] to-purple-500 hover:from-[#7C3AED] hover:to-purple-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-[#8B5CF6]/20 hover:shadow-[#8B5CF6]/40"
          >
            <FaHome />
            Back to Home
          </Link>
        
        </div>

        {/* Helpful tip */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#001F3F] dark:text-white/20">
          <FaSearch className="text-[#8B5CF6]/40" />
          <span>Check the URL for typos or use the navigation above</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;