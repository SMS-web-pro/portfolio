/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/cv.pdf.pdf',
        destination: '/cv.pdf',
        permanent: true,
      },
      {
        source: '/:path((?!www\\.gosite\\.digital).*)',
        has: [{ type: 'host', value: 'gosite.digital' }],
        destination: 'https://www.gosite.digital/:path',
        permanent: true,
      },
    ]
  },
}

export default nextConfig