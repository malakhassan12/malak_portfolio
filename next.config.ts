import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

// إعداد المحلل (Bundle Analyzer)
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [75, 100],
  },
};

// هنا بنغلف الـ config بتاعك جوه الـ Analyzer
export default withBundleAnalyzer(nextConfig);