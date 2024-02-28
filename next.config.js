/** @type {import('next').NextConfig} */
const path = require("path");

const isStaticBuild = process.env.OUTPUT_BUILD_OPTION === 'export'
const nextConfig = {
  ...(isStaticBuild ? { output: 'export' } : {}), // 수정된 부분
  images: { unoptimized: true },

  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
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
