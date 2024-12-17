/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel-facts.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;