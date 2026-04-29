import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Disallow this site from being embedded in any iframe (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Enforce strict referrer — don't leak full URL to third parties
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable browser features the site doesn't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // Basic XSS filter for older browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // DNS prefetch control — minor privacy improvement
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  devIndicators: false,

  // createReader() reads content files at runtime — Vercel's output file tracing
  // won't detect these dynamic reads, so we must explicitly include them in every
  // serverless function bundle.
  outputFileTracingIncludes: {
    '/**': ['./content/**/*'],
  },

  images: {
    // Vercel Blob URLs for uploaded media (headshots, images via Keystatic)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },

  async headers() {
    return [
      {
        // Apply security headers to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      // Wix slug → new slug
      { source: "/i-m-new",                 destination: "/im-new",             permanent: true },
      { source: "/contactus",               destination: "/contact",            permanent: true },
      { source: "/support",                 destination: "/give",               permanent: true },
      { source: "/our-doctrine",            destination: "/about/doctrine",     permanent: true },
      { source: "/core-biliefs",            destination: "/about/core-beliefs", permanent: true }, // Wix typo
      { source: "/core-beliefs",            destination: "/about/core-beliefs", permanent: true },
      { source: "/core-values",             destination: "/about/core-values",  permanent: true },
      { source: "/the-gospel",              destination: "/about/the-gospel",   permanent: true },
      { source: "/mission",                 destination: "/about/mission",      permanent: true },
      // Sermons consolidation
      { source: "/messages",                destination: "/sermons",            permanent: true },
      { source: "/archives",                destination: "/sermons",            permanent: true },
      { source: "/1peter",                  destination: "/sermons",            permanent: true },
      { source: "/colossians-1",            destination: "/sermons",            permanent: true },
      // Blog posts
      { source: "/post/:slug",              destination: "/blog/:slug",         permanent: true },
      // Pages folded into other pages
      { source: "/what-to-expect-on-sunday", destination: "/im-new",           permanent: true },
      { source: "/testimonials",            destination: "/",                   permanent: true },
      { source: "/calendar",               destination: "/",                   permanent: true },
      // Resources (future scope)
      { source: "/resources",              destination: "/",                   permanent: true },
      { source: "/books",                  destination: "/",                   permanent: true },
      { source: "/songs",                  destination: "/",                   permanent: true },
      { source: "/album-1",               destination: "/",                   permanent: true },
    ];
  },
};

export default nextConfig;
