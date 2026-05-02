/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;

//https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png
