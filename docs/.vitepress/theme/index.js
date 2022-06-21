import { watch } from "vue"

import Theme from "vitepress/theme"
import "./custom.scss"

import ElementPlus from "element-plus"
import "element-plus/theme-chalk/src/index.scss"

import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"

import DemoTabs from "../components/DemoTabs.vue"
import SliderZoom from "../components/controls/SliderZoom.vue"
import ColorPicker from "../components/controls/ColorPicker.vue"
import BoxSelectionPanel from "../components/controls/operation/BoxSelectionPanel.vue"
import NodeConfigPanel from "../components/controls/appearance/NodeConfigPanel.vue"
import LabelConfigPanel from "../components/controls/appearance/LabelConfigPanel.vue"
import LabelBackgroundConfigPanel from "../components/controls/appearance/LabelBackgroundConfigPanel.vue"
import FocusConfigPanel from "../components/controls/appearance/FocusConfigPanel.vue"
import EdgeConfigPanel from "../components/controls/appearance/EdgeConfigPanel.vue"
import MultipleEdgeConfigPanel from "../components/controls/appearance/MultipleEdgeConfigPanel.vue"
import EdgeMarkerConfigPanel from "../components/controls/appearance/EdgeMarkerConfigPanel.vue"
import EdgeMarginGapConfigPanel from "../components/controls/appearance/EdgeMarginGapConfigPanel.vue"
import SummarizedEdgeLabelConfigPanel from "../components/controls/appearance/SummarizedEdgeLabelConfigPanel.vue"
import PathConfigPanel from "../components/controls/paths/PathConfigPanel.vue"
import PathStrokeConfigPanel from "../components/controls/paths/PathStrokeConfigPanel.vue"
import GridPanel from "../components/controls/misc/GridPanel.vue"

export default {
  ...Theme,

  enhanceApp({ app, router }) {
    // Google Analytics
    if (globalThis && globalThis.gtag)
      watch(router.route, () => {
        gtag("config", window.GA_MEASUREMENT_ID, { page_path: router.route.path })
      })

    app.use(ElementPlus, { size: "default" })
    app.use(VNetworkGraph)
    app.component("demo-tabs", DemoTabs)
    app.component("el-slider-custom-zoom", SliderZoom)
    app.component("el-color-picker-custom", ColorPicker)
    app.component("demo-box-selection-panel", BoxSelectionPanel)
    app.component("demo-node-config-panel", NodeConfigPanel)
    app.component("demo-label-config-panel", LabelConfigPanel)
    app.component("demo-label-background-config-panel", LabelBackgroundConfigPanel)
    app.component("demo-focus-config-panel", FocusConfigPanel)
    app.component("demo-edge-config-panel", EdgeConfigPanel)
    app.component("demo-multiple-edge-config-panel", MultipleEdgeConfigPanel)
    app.component("demo-edge-marker-config-panel", EdgeMarkerConfigPanel)
    app.component("demo-edge-margin-gap-config-panel", EdgeMarginGapConfigPanel)
    app.component("demo-summarized-edge-label-config-panel", SummarizedEdgeLabelConfigPanel)
    app.component("demo-path-config-panel", PathConfigPanel)
    app.component("demo-path-stroke-config-panel", PathStrokeConfigPanel)
    app.component("demo-grid-panel", GridPanel)
  },
}
