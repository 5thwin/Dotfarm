/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  output: 'export',
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
