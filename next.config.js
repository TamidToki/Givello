/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  // Static export is only used for the GitHub Pages build (GITHUB_PAGES=true).
  ...(isPages && {
    output: 'export',
    basePath: '/Givello',
    assetPrefix: '/Givello/',
    trailingSlash: true,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: isPages ? '/Givello' : '',
  },
  images: {
    unoptimized: isPages,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
