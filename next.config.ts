import type { NextConfig } from "next";

function resolveBasePath(): string {
  if (process.env.NEXT_PUBLIC_BASE_PATH) return process.env.NEXT_PUBLIC_BASE_PATH;
  if (process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split("/")[1] ?? "";
    return repo ? `/${repo}` : "";
  }
  return "";
}

const basePath = resolveBasePath();

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
