/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/**'
      }
    ],
  },
  redirects: () => {
    return [
      {
        source: '/extern',
        destination: 'https://extern.vercel.app/',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
