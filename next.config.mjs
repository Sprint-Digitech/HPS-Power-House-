/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // For the home page
        source: '/',
        destination: '/index.htm',
      },
      {
        // For subpages with trailing slash (e.g. /about-us/)
        source: '/:path*/',
        destination: '/:path*/index.htm',
      },
      {
        // For subpages without trailing slash (e.g. /about-us)
        source: '/:path*',
        destination: '/:path*/index.htm',
      },
    ];
  },
};

export default nextConfig;
