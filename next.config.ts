import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    customKey : process.env.NEXT_PUBLIC_CUSTOM_KEY
  }
};

export default nextConfig;
