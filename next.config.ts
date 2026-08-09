import type { NextConfig } from "next";

/**
 * Next.js configuration for the SmoothCuts site.
 * - Local SVG artwork is served via next/image, so safe SVG handling is enabled.
 * - All pages are statically generated (SSG) by default.
 */
const nextConfig: NextConfig = {
  images: {
    // Project artwork ships as local, self-authored SVG files (no remote sources).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
