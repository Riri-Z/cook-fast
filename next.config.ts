import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://img.spoonacular.com/recipes/**')],
  },
};

export default nextConfig;
