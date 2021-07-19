import Theme from "vitepress/theme"
import "./custom.scss"

import ElementPlus from "element-plus"
import 'element-plus/lib/theme-chalk/index.css'

import VNetworkGraph from "v-network-graph"
import "v-network-graph/style.css"

import DemoTabs from '../components/DemoTabs.vue'
import SliderZoom from '../components/controls/SliderZoom.vue'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.use(VNetworkGraph)
    app.component("demo-tabs", DemoTabs)
    app.component("el-slider-custom-zoom", SliderZoom)
  },
}