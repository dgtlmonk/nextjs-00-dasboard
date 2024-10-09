/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
    productionBrowserSourceMaps: true,
  }
};

export default nextConfig;
