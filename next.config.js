/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'https://demo.phlox.pro',
      'https://demo.phlox.pro/agency-digital-2/wp-content/uploads/sites/260/2020/12/',
      'demo.phlox.pro',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo.phlox.pro',
      },
    ],
  },
};

module.exports = nextConfig;
