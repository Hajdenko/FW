/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "/static",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
