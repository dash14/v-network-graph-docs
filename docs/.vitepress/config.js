import { defineConfig } from "vitepress"
import ElementPlus from "unplugin-element-plus/vite"
import { visualizer } from "rollup-plugin-visualizer"

const ANALYZE_BUNDLE = false

/**
 * @type {import('vitepress').UserConfig}
 */
 export default defineConfig({
  base: "/v-network-graph/",
  lang: "en-US",
  title: "v-network-graph",
  description: "An interactive network graph visualization library for Vue 3",
  head: [
      // Google Search Console
      [ "meta", { name: "google-site-verification", content: "0nPNAdUYrhvg27b84hgrPPPsjIDmMIBIKz3hNd23mXA" } ],
      // Google Analytics
      [ 'script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-TVV8JY0JNE', async: true } ],
      [ 'script', {}, `window.GA_MEASUREMENT_ID = 'G-TVV8JY0JNE';window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());`],
      // Image for SNS
      [ "meta", { property: "og:type", content: "website" } ],
      [ "meta", { property: "og:url", content: "https://dash14.github.io/v-network-graph/" } ],
      [ "meta", { property: "og:title", content: "v-network-graph" } ],
      [ "meta", { property: "og:description", content: "An interactive network graph visualization component for Vue 3" } ],
      [ "meta", { property: "og:image", content: "/v-network-graph/site-image.png" } ],
      [ "meta", { property: "og:image:alt", content: "v-network-graph" } ],
      [ "meta", { property: "og:image:width", content: "1200" } ],
      [ "meta", { property: "og:image:height", content: "630" } ],
  ],
  themeConfig: {
    nav: [
      { text: "Getting Started", link: "/getting-started" },
      {
        text: "Examples",
        link: "/examples/",
        activeMatch: "^/examples",
      },
      {
        text: "Reference",
        link: "/reference/",
        activeMatch: "^/reference",
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
      {
        text: "Reference",
        link: "/reference/",
        children: [
          { text: "Props", link: "/reference/props" },
          { text: "Configurations", link: "/reference/configurations" },
          { text: "Methods", link: "/reference/methods" },
          { text: "Events", link: "/reference/events" }
        ]
      },
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
    plugins: [
      ElementPlus(),
      // analyze bundle sizes
      ANALYZE_BUNDLE && visualizer({
        open: true,
        filename: "docs/.vitepress/dist/stats.html",
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    ssr: {
      noExternal: ["element-plus", "lodash-es"]
    }
  },
  server: {
    fs: {
      allow: [".."],
    },
  }
})
