import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/liberry-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
