const path = require("path")

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: "/v-network-graph/",
  title: "v-network-graph",
  description: "An interactive network graph visualization library for Vue 3",
  head: [
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
          { text: "Operations on Graphs", link: "/examples/operation" }
        ],
      },
      { text: "Reference", link: "/reference" },
    ],
  },
  markdown: {
    lineNumbers: true
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 700, // for element-plus
      rollupOptions: {
        output: {
          manualChunks: {
            "element-plus": ['element-plus']
          }
        }
      }
    }
  }
}
