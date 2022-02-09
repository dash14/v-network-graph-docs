<script setup lang="ts">
import { reactive, ref } from "vue"
import ColorConvert from "color-convert"
import * as vNG from "v-network-graph"
import data from "./data"

const configs = reactive(
  vNG.defineConfigs({
    node: {
      selectable: true,
      normal: {
        radius: n => n.radius,
        color: n => n.color,
        strokeWidth: 3,
        strokeColor: n => darker(n.color, 20),
      },
      hover: {
        color: n => darker(n.color, 20),
        strokeColor: n => darker(n.color, 40),
      },
      label: {
        text: n => `z-index: ${n.zIndex}`,
        fontSize: 12,
      },
      zOrder: {
        zIndex: n => n.zIndex,
        toTopOnHovered: true,
        toTopOnSelected: true,
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
    <el-checkbox v-model="configs.node.zOrder.toTopOnHovered"
      >To top on hovered</el-checkbox
    >
    <el-checkbox v-model="configs.node.zOrder.toTopOnSelected"
      >To top on selected</el-checkbox
    >
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
