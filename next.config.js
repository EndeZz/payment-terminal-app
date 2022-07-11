/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    path: `./_next/image`,
  },
};

module.exports = nextConfig;
