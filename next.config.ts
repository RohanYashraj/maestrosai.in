import type { NextConfig } from "next";

import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withContentlayer(nextConfig);
