/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    runtime: 'nodejs',
  },
};

module.exports = nextConfig;
