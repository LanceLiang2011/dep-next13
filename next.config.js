/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['trp.utoronto.ca', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
