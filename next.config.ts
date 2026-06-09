import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed "output: export" to support dynamic admin routes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
