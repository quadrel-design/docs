/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  output: "export",           // Wichtig für statisches HTML (next export)
  basePath: "/docs",          // Damit alle Seiten unter /docs/ laufen
  assetPrefix: "/docs/",      // Damit CSS/JS richtig geladen wird
  images: {
    unoptimized: true,        // Besser für static export auf GitHub Pages
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,        // Generiert z. B. docs/page.html statt docs/page/index.html
});
