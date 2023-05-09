/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["api.cm.test.luisruiz.dev", "localhost"]
  },
}

module.exports = nextConfig
