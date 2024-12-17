/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel-facts.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
}