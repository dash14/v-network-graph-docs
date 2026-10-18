import Theme from "vitepress/theme"
// Each style overrides those above it, so keep them after the theme in this order
import "./custom.scss"
import "element-plus/theme-chalk/src/index.scss"
import "v-network-graph/lib/style.css"
// Components
import VNetworkGraphPlugin from "v-network-graph"
import { watch } from "vue"
import EdgeConfigPanel from "../components/controls/appearance/EdgeConfigPanel.vue"
import EdgeMarginGapConfigPanel from "../components/controls/appearance/EdgeMarginGapConfigPanel.vue"
import EdgeMarkerConfigPanel from "../components/controls/appearance/EdgeMarkerConfigPanel.vue"
import EdgeSelfLoopPanel from "../components/controls/appearance/EdgeSelfLoopPanel.vue"
import FocusConfigPanel from "../components/controls/appearance/FocusConfigPanel.vue"
import LabelBackgroundConfigPanel from "../components/controls/appearance/LabelBackgroundConfigPanel.vue"
import LabelConfigPanel from "../components/controls/appearance/LabelConfigPanel.vue"
import MultipleEdgeConfigPanel from "../components/controls/appearance/MultipleEdgeConfigPanel.vue"
import NodeConfigPanel from "../components/controls/appearance/NodeConfigPanel.vue"
import SummarizedEdgeLabelConfigPanel from "../components/controls/appearance/SummarizedEdgeLabelConfigPanel.vue"
import ColorPicker from "../components/controls/ColorPicker.vue"
import GridPanel from "../components/controls/misc/GridPanel.vue"
import BoxSelectionPanel from "../components/controls/operation/BoxSelectionPanel.vue"
import PathConfigPanel from "../components/controls/paths/PathConfigPanel.vue"
import PathStrokeConfigPanel from "../components/controls/paths/PathStrokeConfigPanel.vue"
import SliderZoom from "../components/controls/SliderZoom.vue"
import DemoTabs from "../components/DemoTabs.vue"
// unplugin-element-plus adds each component's styles here, after the controls' styles
import {
  ElButton,
  ElCard,
  ElCheckbox,
  ElColorPicker,
  ElInput,
  ElInputNumber,
  ElOption,
  ElSelect,
  ElSlider,
  ElTabs,
  ElTabPane,
  ElIcon,
} from "element-plus"

export default {
  ...Theme,

  enhanceApp({ app, router }) {
    // Google Analytics
    if (globalThis && globalThis.gtag)
      watch(router.route, () => {
        gtag("config", window.GA_MEASUREMENT_ID, { page_path: router.route.path })
      })

    // app.use(ElementPlus, { size: "default" })
    app.use(VNetworkGraphPlugin)
    // element-plus
    app.component("ElButton", ElButton)
    app.component("ElCard", ElCard)
    app.component("ElCheckbox", ElCheckbox)
    app.component("ElColorPicker", ElColorPicker)
    app.component("ElInput", ElInput)
    app.component("ElInputNumber", ElInputNumber)
    app.component("ElOption", ElOption)
    app.component("ElSelect", ElSelect)
    app.component("ElSlider", ElSlider)
    app.component("ElTabs", ElTabs)
    app.component("ElTabPane", ElTabPane)
    app.component("ElIcon", ElIcon)

    // custom components
    app.component("DemoTabs", DemoTabs)
    app.component("ElSliderCustomZoom", SliderZoom)
    app.component("ElColorPickerCustom", ColorPicker)
    app.component("DemoBoxSelectionPanel", BoxSelectionPanel)
    app.component("DemoNodeConfigPanel", NodeConfigPanel)
    app.component("DemoLabelConfigPanel", LabelConfigPanel)
    app.component("DemoLabelBackgroundConfigPanel", LabelBackgroundConfigPanel)
    app.component("DemoFocusConfigPanel", FocusConfigPanel)
    app.component("DemoEdgeConfigPanel", EdgeConfigPanel)
    app.component("DemoMultipleEdgeConfigPanel", MultipleEdgeConfigPanel)
    app.component("DemoEdgeMarkerConfigPanel", EdgeMarkerConfigPanel)
    app.component("DemoEdgeMarginGapConfigPanel", EdgeMarginGapConfigPanel)
    app.component("DemoSummarizedEdgeLabelConfigPanel", SummarizedEdgeLabelConfigPanel)
    app.component("DemoEdgeSelfLoopConfigPanel", EdgeSelfLoopPanel)
    app.component("DemoPathConfigPanel", PathConfigPanel)
    app.component("DemoPathStrokeConfigPanel", PathStrokeConfigPanel)
    app.component("DemoGridPanel", GridPanel)
  },
}
