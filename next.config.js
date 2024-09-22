/**
 * Ref:
 * 1. https://nextjs.org/docs/advanced-features/static-html-export
 *   - Pay attention to the "Unsupported Features" section
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
