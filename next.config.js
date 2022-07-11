/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  loader: 'imgix',
  images: {
    disableStaticImages: false,
  },
};

module.exports = nextConfig;
