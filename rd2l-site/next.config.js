/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
      customKey: 'myvalue'
  },
  images: {
    domains: ["avatars.steamstatic.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.steamstatic.com",
        pathname: "/**", // Allows all image paths
      },
    ],
  },
}

module.exports = nextConfig
