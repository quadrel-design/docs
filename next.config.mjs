/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
