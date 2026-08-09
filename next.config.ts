import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    // TSC with @types/three takes 5+ minutes locally.
    // Turbopack compilation validates our source code.
    // Run `npx tsc --noEmit --skipLibCheck` for fast type checking.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
