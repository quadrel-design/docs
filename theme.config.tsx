import type { DocsThemeConfig } from "nextra-theme-docs";
import Head from "next/head";
import { Logo } from "./components/logo";
import { useNextSeoProps } from "./components/seo";

const config: DocsThemeConfig = {
  logo: <Logo />,

  project: {
    link: "https://github.com/quadrel-design/docs",
  },

  docsRepositoryBase: "https://github.com/quadrel-design/docs/blob/main",

  footer: {
    text: "Made by Quadrel Design",
  },

  head: () => (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Quadrel Documentation" />
        <meta property="og:title" content="Quadrel Docs" />
        <meta property="og:url" content="https://quadrel-design.github.io/docs" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
  html {
    font-family: 'Inter', sans-serif;
  }
`}</style>
      </Head>
    </>
  ),

  feedback: {
    content: () => <>Question? Give us feedback →</>,
    labels: "feedback",
  },

  useNextSeoProps,

  i18n: [],

  search: {
    placeholder: "Search...",
  },
};

export default config;
