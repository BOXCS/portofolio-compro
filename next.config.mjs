/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  // GANTI dengan nama repo GitHub kamu
  basePath: "/portofolio-compro",
  assetPrefix: "/portofolio-compro/",
};

export default nextConfig;
