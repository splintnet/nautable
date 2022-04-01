/** @type {import('next').NextConfig} */

const withPwa = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withPwa],
  [withMDX, {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  }],
  {
    reactStrictMode: true,
    i18n: {
      locales: ['de', 'en', 'fr', 'es'],
      defaultLocale: 'de',
    },
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
    images: {
      formats: ['image/avif', 'image/webp'],
      domains: ['cdn.zizoo.com'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    experimental: {
      outputStandalone: true,
    },

    redirects: async () => [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'nautable.com' }],
        destination: 'https://www.nautable.com/:path*',
        permanent: true,
      },
    ],

    swcMinify: true,
    compiler: process.env.NODE_ENV !== 'development' ? {
      removeConsole: {
        exclude: ['error'],
      },
    } : {},
  },
]);
