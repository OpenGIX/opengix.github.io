import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenGIX",
  description:
    "OpenGIX is a protocol for working with layered geometry and data. ",

  cleanUrls: true,

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-DSE0KPV508",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DSE0KPV508');`,
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "images/logo-bg.png",
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
      copyright: `Copyright © All rights reserved. An <a href="https://openworkgroup.org" title="Visit the Open Working Group website." target="_blank">Open Working Group</a> project.`,
    },
  },
});
