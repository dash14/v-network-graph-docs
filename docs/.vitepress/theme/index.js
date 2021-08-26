import { watch } from "vue"

import Theme from "vitepress/theme"
import "./custom.scss"

import ElementPlus from "element-plus"
import "element-plus/theme-chalk/src/index.scss"

import VNetworkGraph from "v-network-graph"
import "v-network-graph/style.css"

import DemoTabs from "../components/DemoTabs.vue"
import SliderZoom from "../components/controls/SliderZoom.vue"
import NodeConfigPanel from "../components/controls/appearance/NodeConfigPanel.vue"
import LabelConfigPanel from "../components/controls/appearance/LabelConfigPanel.vue"
import LabelBackgroundConfigPanel from "../components/controls/appearance/LabelBackgroundConfigPanel.vue"
import FocusConfigPanel from "../components/controls/appearance/FocusConfigPanel.vue"
import EdgeConfigPanel from "../components/controls/appearance/EdgeConfigPanel.vue"
import MultipleEdgeConfigPanel from "../components/controls/appearance/MultipleEdgeConfigPanel.vue"
import SummarizedEdgeLabelConfigPanel from "../components/controls/appearance/SummarizedEdgeLabelConfigPanel.vue"
import GridPanel from "../components/controls/misc/GridPanel.vue"

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
    app.component("demo-label-background-config-panel", LabelBackgroundConfigPanel)
    app.component("demo-focus-config-panel", FocusConfigPanel)
    app.component("demo-edge-config-panel", EdgeConfigPanel)
    app.component("demo-multiple-edge-config-panel", MultipleEdgeConfigPanel)
    app.component("demo-summarized-edge-label-config-panel", SummarizedEdgeLabelConfigPanel)
    app.component("demo-grid-panel", GridPanel)
  },
}
