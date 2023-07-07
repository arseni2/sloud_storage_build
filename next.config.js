/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build'
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard/auth',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
