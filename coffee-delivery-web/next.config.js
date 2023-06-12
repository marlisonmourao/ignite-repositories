/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
    },
  ],
}

module.exports = nextConfig
