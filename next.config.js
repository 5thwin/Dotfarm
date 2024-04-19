/** @type {import('next').NextConfig} */
const path = require("path");

const isStaticBuild = process.env.OUTPUT_BUILD_OPTION === 'export'
const nextConfig = {
  ...(isStaticBuild ? { output: 'export' } : {}), // 수정된 부분
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
