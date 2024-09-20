/** @type {import('next').NextConfig} */

import { Postpone } from 'next/dist/server/app-render/dynamic-rendering';

const nextConfig = {
  experimental: {
    ppr: 'incremental'
  }
};

export default nextConfig;
