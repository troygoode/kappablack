import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // enables Turbopack for the `/src` directory
  },
};

export default nextConfig;
