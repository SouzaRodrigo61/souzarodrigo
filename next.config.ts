import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Otimizações de performance
  poweredByHeader: false,
  compress: true,
  
  // Configurações de produção
  productionBrowserSourceMaps: false,
  
  // Otimizações de compilação
  swcMinify: true,
  
  async headers() {
    return [
      {
        source: '/data/markdown/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/data/projects.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/data/markdown/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
