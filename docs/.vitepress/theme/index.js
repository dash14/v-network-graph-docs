import { watch } from "vue"

import Theme from "vitepress/theme"
import "./custom.scss"

import ElementPlus from "element-plus"
import "element-plus/lib/theme-chalk/index.css"

import VNetworkGraph from "v-network-graph"
import "v-network-graph/style.css"

import DemoTabs from "../components/DemoTabs.vue"
import SliderZoom from "../components/controls/SliderZoom.vue"
import NodeConfigPanel from "../components/controls/NodeConfigPanel.vue"
import LabelConfigPanel from "../components/controls/LabelConfigPanel.vue"
import FocusConfigPanel from "../components/controls/FocusConfigPanel.vue"

export default {
  ...Theme,

  enhanceApp({ app, router }) {
    // Google Analytics
    if (globalThis && globalThis.gtag)
      watch(router.route, () => {
        gtag("config", window.GA_MEASUREMENT_ID, { page_path: router.route.path })
      })

    app.use(ElementPlus, { size: "small" })
    app.use(VNetworkGraph)
    app.component("demo-tabs", DemoTabs)
    app.component("el-slider-custom-zoom", SliderZoom)
    app.component("demo-node-config-panel", NodeConfigPanel)
    app.component("demo-label-config-panel", LabelConfigPanel)
    app.component("demo-focus-config-panel", FocusConfigPanel)
  },
}
