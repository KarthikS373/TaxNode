/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'taxnodes.cdn.prismic.io',
      'images.prismic.io',
      'mock-taxnodes.cdn.prismic.io',
      'images.unsplash.com',
    ],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  swcMinify: true,
  reactStrictMode: true
}

module.exports = nextConfig
