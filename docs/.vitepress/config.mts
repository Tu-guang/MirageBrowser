import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
const base = "/MirageBrowser/";
export default defineConfig({
  base,
  title: "MirageBrowser",
  description: "MirageBrowser",
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `"/MirageBrowser/logo.svg"` }],
  ],
  themeConfig: {
    logo: "/MirageBrowser/logo.svg",
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
