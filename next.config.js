/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
   images: {
    domains: ['picsum.photos'],
  },
};

module.exports = nextConfig
