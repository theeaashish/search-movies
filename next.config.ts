import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.myanimelist.net"], // Allow images from MyAnimeList
  },
};

export default nextConfig;
