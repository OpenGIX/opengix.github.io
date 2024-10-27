import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenGIX",
  description:
    "OpenGIX is a protocol for working with layered geometry and data. ",

  cleanUrls: true,

  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/public/images/logo-bg.png",
    nav: [
      { text: "Schema API", link: "https://opengix.org/schema" },
      { text: "Docs", link: "/getting-started" },
      { text: "About", link: "/about" },
    ],

    sidebar: [
      {
        text: "Usage",
        items: [
          { text: "Schema API", link: "/schema" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        items: [
          { text: "Roadmap", link: "/roadmap" },
          { text: "Contributing", link: "/" },
          { text: "Community", link: "/about#community" },
        ],
      },
    ],

    externalLinkIcon: true,

    socialLinks: [{ icon: "github", link: "https://github.com/OpenGIX" }],

    footer: {
      copyright:
        "Copyright © " +
        new Date().getFullYear() +
        ' An <a href="https://openworkgroup.org" title="Visit the Open Working Group website.">Open Working Group</a> project.',
    },
  },
});
