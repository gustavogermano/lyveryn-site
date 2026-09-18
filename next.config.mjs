/** @type {import('next').NextConfig} */

// Nome exato do repositório no GitHub. Se o repositório tiver outro nome,
// atualize a constante abaixo (ela alimenta basePath e assetPrefix).
const REPO_NAME = "lyveryn-site";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${REPO_NAME}` : "",
  assetPrefix: isProd ? `/${REPO_NAME}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
