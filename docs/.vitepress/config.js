const path = require("path")

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: "/v-network-graph/",
  lang: "en-US",
  title: "v-network-graph",
  description: "An interactive network graph visualization library for Vue 3",
  head: [
      // Google Search Console
      [ "meta", { name: "google-site-verification", content: "0nPNAdUYrhvg27b84hgrPPPsjIDmMIBIKz3hNd23mXA" } ],
      // Google Analytics
      [ 'script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-TVV8JY0JNE', async: true } ],
      [ 'script', {}, `window.GA_MEASUREMENT_ID = 'G-TVV8JY0JNE';window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());`]
  ],
  themeConfig: {
    nav: [
      { text: "Getting Started", link: "/getting-started" },
      {
        text: "Examples ",
        link: "/examples/",
        activeMatch: "^/examples",
      },
      {
        text: "Reference",
        link: "/reference.html",
      },
      {
        text: "GitHub",
        link: "https://github.com/dash14/v-network-graph",
      },
    ],
    sidebar: [
      { text: "Getting Started", link: "/getting-started" },
      {
        text: "Examples",
        link: "/examples/",
        children: [
          { text: "Basic Usage", link: "/examples/basic" },
          { text: "Layout / Positioning", link: "/examples/layout" },
          { text: "Operations on Graphs", link: "/examples/operation" },
          { text: "Labels", link: "/examples/labels" },
          { text: "Appearance Customization", link: "/examples/appearance" },
          { text: "Paths", link: "/examples/paths" },
          { text: "Custom Layer", link: "/examples/layer" },
          { text: "Event Handling", link: "/examples/event" },
          { text: "Miscellaneous", link: "/examples/misc" },
        ],
      },
      { text: "Reference", link: "/reference" },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 700, // for element-plus
      rollupOptions: {
        output: {
          manualChunks: {
            "element-plus": ["element-plus"],
          },
        },
      },
    },
    css: { preprocessorOptions: { scss: { charset: false } } },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
}
