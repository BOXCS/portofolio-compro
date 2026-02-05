/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // GANTI dengan nama repo GitHub kamu
  basePath: "/portofolio-compro",
  assetPrefix: "/portofolio-compro/",
};

export default nextConfig;
