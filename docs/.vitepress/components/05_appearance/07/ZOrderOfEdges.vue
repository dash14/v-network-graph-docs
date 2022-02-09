<script setup lang="ts">
import { reactive, ref } from "vue"
import ColorConvert from "color-convert"
import * as vNG from "v-network-graph"
import data from "./data"

const configs = reactive(
  vNG.defineConfigs({
    edge: {
      selectable: true,
      normal: {
        color: e => e.color,
        width: 6,
      },
      hover: {
        color: e => darker(e.color, 10),
        width: 8,
      },
      selected: {
        dasharray: "4 2",
        width: 6,
      },
      zOrder: {
        enabled: true,
        zIndex: n => n.zIndex,
        bringToFrontOnHover: true,
        bringToFrontOnSelected: true,
      },
    },
  })
)

function darker(hex: string, level: number) {
  const hsv = ColorConvert.hex.hsv(hex)
  hsv[2] -= level
  return "#" + ColorConvert.hsv.hex(hsv)
}
</script>

<template>
  <div class="demo-control-panel">
    <el-checkbox v-model="configs.edge.zOrder.bringToFrontOnHover"
      >Bring to front on hover</el-checkbox
    >
    <el-checkbox v-model="configs.edge.zOrder.bringToFrontOnSelected"
      >Bring to front on selected</el-checkbox
    >
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
