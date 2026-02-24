import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Enable AVIF format for better compression (requires 'sharp')
    formats: ['image/avif', 'image/webp'],
    // Configure device sizes to generate more optimal image variations
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ['*.orchids.page', 'http://192.168.1.57:3000'],
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
} as NextConfig;

export default nextConfig;
