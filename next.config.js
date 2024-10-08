/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [""],
  },
  experimental: {
    optimizePackageImports: [],
  },
};

module.exports = nextConfig;
