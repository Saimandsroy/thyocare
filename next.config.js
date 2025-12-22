/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web-assets.thyrocare.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
