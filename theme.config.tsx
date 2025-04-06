import type { DocsThemeConfig } from "nextra-theme-docs";
import Head from "next/head";
import { Logo } from "./components/logo";
import { useNextSeoProps } from "./components/seo";

const config: DocsThemeConfig = {
  logo: <Logo />,

  project: {
    link: "https://github.com/mkrtchian/reading-notes",
  },

  docsRepositoryBase: "https://github.com/mkrtchian/reading-notes/blob/main",

  footer: {
    text: "Made by Roman Mkrtchian",
  },

  head: Head,

  feedback: {
    content: () => <>Question? Give me feedback →</>,
    labels: "feedback",
  },

  useNextSeoProps,

  i18n: [],

  // ✅ Suchfunktion aktivieren:
  search: {
    placeholder: "Search...",
  },
};

export default config;
