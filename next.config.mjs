/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.bixindex.hu',
        port: '',
        pathname: '/public/event/photo/**',
      },
    ],
  },
};

export default nextConfig;
