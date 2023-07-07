/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build'
}

module.exports = nextConfig
module.exports = {
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/',
        permanent: true,
      },
    ]
  },
}