import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
const base = "/MirageBrowser/";
export default defineConfig({
  base,
  title: "MirageBrowser",
  description: "MirageBrowser",
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs" },
    ],

    sidebar: [
      {
        text: "API",
        items: [{ text: "API", link: "/docs" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/MirageBrowser" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 MirageBrowser",
    },
  },
});
