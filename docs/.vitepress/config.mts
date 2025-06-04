import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
const base = "/TgeBrowser/";
export default defineConfig({
  base,
  title: "TgeBrowser",
  description: "TgeBrowser",
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `${base}logo.svg` }],
  ],
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

    socialLinks: [{ icon: "github", link: "https://github.com/TgeBrowser" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 TgeBrowser",
    },
  },
});
