import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kttikfxahnolnwkyywof.supabase.co',
      },
    ],
  },
}

export default nextConfig
