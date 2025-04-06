const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  output: "export",
  assetPrefix: "./",         // Relativ statt fest
  trailingSlash: false,      // Bessere Kompatibilität
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
});
