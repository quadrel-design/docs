// next.config.js
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  output: "export",
  basePath: "/docs",
  assetPrefix: "/docs",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
});
