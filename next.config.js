/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: [
      "static01.nyt.com"
    ],
  },
}

module.exports = nextConfig
