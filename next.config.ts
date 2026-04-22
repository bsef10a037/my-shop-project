import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // <--- This is the key!
  images: {
    unoptimized: true, // Needed for static exports if using the <Image /> component
  },
};

export default nextConfig;
