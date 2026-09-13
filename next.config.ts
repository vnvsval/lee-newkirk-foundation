import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // No external image hosts are in use yet. Add a remote pattern here
    // (e.g. for a CMS or asset host) once real photography is hosted
    // somewhere other than /public.
    remotePatterns: [],
  },
};

export default nextConfig;
