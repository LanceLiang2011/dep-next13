/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['trp.utoronto.ca'],
  },
};

module.exports = nextConfig;
