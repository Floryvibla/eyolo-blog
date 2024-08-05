/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/rss.xml",
        destination: "/api/rss",
      },
    ];
  },
  images: {
    domains: ['eyolo-nextjs.vercel.app']
  }
};

module.exports = nextConfig;
