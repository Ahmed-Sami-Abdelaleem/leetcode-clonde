/** @type {import('next').NextConfig} */
/*I wanna add domains */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tecdn.b-cdn.net"],
  },
};

export default nextConfig;
