/**
 * Ref:
 * 1. https://nextjs.org/docs/advanced-features/static-html-export
 *   - Pay attention to the "Unsupported Features" section
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/**/*.{png,jpg,jpeg,webp,svg,gif,ico}'
      }
    ]
  },
  reactStrictMode: true,
  output: 'export',
  distDir: 'build'
};

module.exports = nextConfig;
