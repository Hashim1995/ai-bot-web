/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  ignoreDuringBuilds: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
