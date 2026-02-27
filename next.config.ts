import type { NextConfig } from "next";

// Bundle analyzer configuration
const withBundleAnalyzer = (process.env.ANALYZE === 'true' || process.env.ANALYZE === 'server' || process.env.ANALYZE === 'browser') ? 
  require('@next/bundle-analyzer')({ enabled: true }) : (x: NextConfig) => x;

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Enable AVIF format for better compression (requires 'sharp')
    // AVIF provides ~50% better compression than WebP
    formats: ['image/avif', 'image/webp'],
    // Configure device sizes to generate more optimal image variations
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL in seconds for optimized images
    minimumCacheTTL: 60 * 60 * 24, // 1 day
    // Remote patterns for external images
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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin'
          }
        ]
      },
      // Cache static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/favicon-:size.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/apple-touch-icon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/android-chrome-:size.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Content Security Policy - Enforcement mode (after report-only verification)
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://formsubmit.co https://va.vercel-scripts.com https://vitals.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: http: blob:; font-src 'self' data: https:; connect-src 'self' https://challenges.cloudflare.com https://formsubmit.co https://va.vercel-scripts.com https://vitals.vercel-insights.com ws://localhost:3000; frame-src 'self' https://challenges.cloudflare.com; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self' https://formsubmit.co; frame-ancestors 'self'; upgrade-insecure-requests;"
          }
        ]
      }
    ]
  }
} as NextConfig;

// Apply bundle analyzer wrapper conditionally
export default withBundleAnalyzer(nextConfig);
